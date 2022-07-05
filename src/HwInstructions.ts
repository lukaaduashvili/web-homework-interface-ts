// ამ ფაილში იქნება სხვადასხვა ინსტრუქციების
// ჩვეულებრივ დამალული იქნება, პირველ გვერდზე მოეხსნება
// დამალვა და დანარჩენებზე ღილაკს თუ დააჭერენ გამოჩნდება

const MESSAGES = {}
MESSAGES['პირობები'] = `
    თქვენ შეგიძლიათ ცვლილებების შეტანა მხოლოდ მითითებული ფაილების
    მითითებულ ნაწილებში. 
    ამ დავალებაზე ეს ფაილია "index.html".
თუ რომელიმე სხვა ფაილს/ნაწილს შეცვლით, დიდი შანსია, რომ ტესტები არასწორად გაეშვას.
`

MESSAGES['სამუშაო-გარემო'] = `
    ვების დავალებების სამუშაო გარემოსთვის აუცილებელია 
    <h3>code editor</h3>
    visual studio code <a href="https://code.visualstudio.com/" target="_blank">გადმოწერა</a>
    <h3>web browser</h3>
    იმისთვის, რომ გაუგებრობები თავიდან ავიცილოთ, დავალების კეთების დროს
    html ფაილები გახსენი ხოლმე მხოლოდ <strong>chrome</strong> ან <strong>firefox</strong>
    ბრაუზერით. თუ ეს არ არის შენი default ბრაუზერი (ავტომატურად მისით არ იხსნება html ფაილი), 
    მაშინ index.html-ის გახსნისას დააკლიკე მარჯვენა ღილაკს და მონიშნე open with > chrome (ან firefox)
`

MESSAGES['ედიტორის-გამოყენება'] = `
    გახსენი visual studio code. დააჭირე cmd/ctrl+o ს ან Menu>File>Open, დააჭირე დავალების folder-ს 
    და შემდეგ ქვემოთ მარჯვნივ open ღილაკს.
    <br>დარწმუნდი, რომ ფოლდერს ხსნი და არა მხოლოდ index.html ფაილს, რადგან დავალებაში
    სხვა ფაილებიც დაგჭირდება
    იმისთვის, რომ შეცვლილი კოდის შედეგი ნახო, 
        <br>1. შეინახე ფაილი (ctrl+s/cmd+s)
        <br>2. გადატვირთე გვერდი ბრაუზერში (ctrl+r/cmd+r)
`

MESSAGES['inspect-element-გამოყენება'] = `
    inspect element არის ბრაუზერის ფუნქცია, ნახო საიტის html და css კოდი. ამისთვის, საიტის ცარიელ ადგილას
    (ისე რომ ლინკი ან სურათი არ იყოს კურსორის ქვეშ) გააკეთე right click და დააჭირე inspect-ს. აქ შეგიძლია
    სხვადასხვა ელემენტები და მათი სტილები ნახო. თუ კონკრეტული სიტყვის ძებნა გინდა (მაგალითად, real-password),
    დააკლიკე კოდის სივრცეში, შემდეგ დააჭირე ctrl+f/cmd+f-ს და ჩაწერე რასაც ეძებ.
    სხვათა შორის, ctrl+f/cmd+f ძებნის უნივერსალური shortcut-ია და თითქმის ყველა აპლიკაციაში შეგიძლია გამოყენება.
       
`

MESSAGES['კონსოლის-გამოყენება'] = `
    ბრაუზერის კონსოლი იმავე სივრცეშია, სადაც inspect element. უცებ გამოსატანად
    ეს shortcut გამოიყენე
        <br>MAC chrome > cmd + option + j
        <br>MAC firefox > cmd + option + k
        <br>windows chrome > ctrl + shift + j
        <br>windows firefox > ctrl + shift + k
`

MESSAGES['დავალების-ატვირთვა'] = `
    <br>- ჯერ შეამოწმე, რომ ყველა ტესტი გადის პაროლის გვერდიდან ბოლომდე
    <br>-index.html ფაილს <strong>სახელი არ შეუცვალო</strong> 
    <br>- გადადი დავალების ფოლდერში, მონიშნე ყველა ფაილი (tip: შეგიძლია ctrl+a/cmd+a გამოიყენო)
         დააჭირე მაუსის მარჯვენა ღილაკს და MACOS - compress, ხოლო WINDOWS - send to > Compressed (zipped) folder
      თუ ეს ინსტრუქცია საკმარისი არ არის, ნახე სურათი: 
                <a target="_blank" href="http://images.pcworld.com/images/article/2011/05/zipping-5174695.jpg">WINDOWS</a>
                <a target="_blank" href="https://icdn.digitaltrends.com/image/digitaltrends/macos-compress-multiple-files-416x416.jpg">MACOS</a>
    <br>- <strong>არ გამოიყენო winrar. rar ფაილებს არ ვიბარებთ.</strong>
    <br>- დაზიპე ფაილები და არა მთლიანი ფოლდერი. ანუ, როგორც ზემოთ წერია, დავალების ფოლდერი (სადაც index.html არის)
         გახსენი და იქ მონიშნე ფაილები. 
    <br>- გადაარქვი ფაილს სახელი იმავე პრინციპით, როგორც კარელზე. ოღონდ ამჯერად .txt-ის მაგივრად .zip-ით უნდა მთავრდებოდეს. მაგალითად "myawesomewebsite_imghv14.zip"
     <br> 
     <br>
`


// TODO linter and warnings

function hideMessage() {
    document.getElementById('instructions')!.innerHTML = ''
}

export function showMessage(args) {
    const c =  Array.from([...arguments]).map(msg =>`
   <div class="help-message">
        <h3>${msg.replaceAll('-', ' ')}</h3>
       ${MESSAGES[msg]}
   </div>
    `)
    document.getElementById('instructions')!.innerHTML = c.join('\n') + `<div><button onclick="hideMessage()">დახურვა</button></div>`
    // document.getElementById('instructions-text')!.innerText = msg
}

(<any>window).showMessage = showMessage;
(<any>window).hideMessage = hideMessage;
