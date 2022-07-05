import {HomeworkProcess} from "../Interfaces/HomeworkProcess";
import {ProcessState} from "../Interfaces/ProcessState";
import 'mocha';
import {setupTestsDiv, toggle} from "./utils";
import {DigitalHwProcessState} from "./DigitalHwProcessState";

export class DigitalHomeworkProcess implements HomeworkProcess {
    config: ProcessState;

    constructor(config?: ProcessState) {

        if(!config) {
            config = new DigitalHwProcessState();
        }

        this.config = config;

        mocha.setup("bdd");

        (window as any).homework = this;
        (window as any).config = this.config;

        this.checkPath();
        setupTestsDiv();

        toggle("help");
    }

    checkPath(): void {
        const unzipPaths = [".zip", "Local/Temp/Rar"];
        const url = window.location.href;

        let result = unzipPaths.find(path => url.includes(path));

        if(result != undefined) {
            document.body.innerHTML = "Oops! როგორც ჩანს, ფაილის გახსნას .zip არქივიდან ცდილობ. ასე რაღაცეები არ იმუშავებს. ჯერ გააკეთე extract.\nთუ ეს მესიჯი შეცდომით მიიღე, მოგვწერე მეილზე ";
        }
    }

    nextStep(): void {
        if(this.config.currentStep == this.config.testCount) {return;}

        this.config.currentStep++;
        this.config.save();
        window.location.reload();
    }

    prevStep(): void {
        if (this.config.currentStep === 1) {return;}

        this.config.currentStep--;
        this.config.save();
        window.location.reload();
    }

    runTests(): void {
        if(this.config.currentStep > this.config.testCount) {
            this.config.currentStep = 1;
            this.config.save();
            window.location.reload();
        }

        mocha.run()
            .on('fail', ignored => this.config.failed = true)
            .on('end', () => {
                this.setupTestDiv()
            })
    }

    setHints(hints: string): void {
        const mochaPendings = Array.from([...document.querySelector('#mocha')!.getElementsByClassName('pending') as HTMLCollectionOf<HTMLElement>]);
        mochaPendings.forEach(pendingItems => {
            const mochaPending = pendingItems.style;
            if (hints) {
                mochaPending.display = hints === 'off' ? 'none' : ''
            } else {
                mochaPending.display = mochaPending.display === 'none' ? '' : 'none'
            }
        })
    }

    setupTestDiv(): void {
        const progressBarDiv = document.getElementById('progress-bar')!;

        const status = this.config.failed ? ' uncompleted ' : ' completed ';
        this.setHints(String(this.config.hints));

        progressBarDiv.innerHTML = "";

        const helpButton = document.createElement('button');
        helpButton.setAttribute('class', "align-right");
        helpButton.addEventListener('click', (e) => {
            toggle('help');
        });
        helpButton.innerText = 'დახმარება';
        progressBarDiv.appendChild(helpButton);

        const nextButton = document.createElement('button');
        nextButton.setAttribute('class', "align-right" + status);
        if(!this.config.failed) {
            nextButton.addEventListener('click', (e) => {
                this.nextStep();
            });
        }
        nextButton.innerText = 'შემდეგი ნაბიჯი';
        progressBarDiv.appendChild(nextButton);


        const prevButton = document.createElement('button');
        prevButton.setAttribute('class', "align-right ");
        prevButton.addEventListener('click', (e) => {
            this.prevStep();
        });
        prevButton.innerText = 'წინა ნაბიჯი';
        progressBarDiv.appendChild(prevButton);

        document.getElementById('tests')!.appendChild(progressBarDiv!)
    }

}