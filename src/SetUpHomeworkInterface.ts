import {ProcessState} from "../Interfaces/ProcessState";
import {HomeworkProcess} from "../Interfaces/HomeworkProcess";
import {DigitalHwProcessState} from "./DigitalHwProcessState";
import {DigitalHomeworkProcess} from "./DigitalHomeworkProcess";
import {toggle, setupTestsDiv} from "./utils";
import 'mocha';

export function setUpHomeworkInterface(config?: ProcessState, homework?: HomeworkProcess): HomeworkProcess {
    if(!config) {
        config = new DigitalHwProcessState();
    }

    mocha.setup("bdd");

    if(!homework) {
        homework = new DigitalHomeworkProcess(config);
    }

    (window as any).homework = homework;
    (window as any).config = homework.config;

    homework.checkPath();
    setupTestsDiv();
    toggle("help");

    return homework;
}

