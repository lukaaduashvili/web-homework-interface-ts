# webHwInterface

## გარემოს გამართვა
### პრერეკვიზიტები
- node >= 12
- yarn
- windows-ის შემთხვევაში: git და git bash


### აუცილებელი ნაბიჯები
1. Github-დან კლონირება
2. კლონირების შემდეგ webHwInterface დირექტორიაში უნდა გაეშვას ბრძანება
    ```sh
    yarn
    ```

## Development WorkFlow
1. დეველოპენტისთვის საჭიროა, რომ index.html-ში არსებული სკრიპტ თეგი შეიცვალოს შემდეგნაირად:
   ```html
   <script type="module" src="./main.js"></script>
   ```
2. შემდეგ ტერმინალში უნდა გაიშვას ბრძანება:
   ```sh
    yarn start ./homeworks/hwN/index.html
   ```
   სადაც N აღნიშნავს შესაბამისი დავალების ნომერს. ამ ბრძანების შემდეგ შეიქმენა localhost მისამართი რომელზეც ლოკალურად გაკეთებული ცვლილებები ლაივ რეჟიმში აისახება.
#####
3. ლოკალურად არსებული ტესტების დაბილდვა, რომელიც თითოეული დავალებისთვის შექმნის ფაილს სადაც ყველა ტესტი და საჭირო კოდი ერთიანად იქნება თავმოყრილი:
   ```sh
   yarn build-student-tests
   ```
4. სერვერის ტესტების დაბილდვა (მე-3 ნომრის მსგავსად ერთ დიდ ფაილებად):
   ```sh
   yarn build-server-tests
   ```
5. დავალებების დაზიპვა (საბოლოო ფორმატი, როგორც სტუდტებს ეგზავნებათ)
   ```sh
   yarn createZips
   ```

## publish homework
```sh
# commit your changes
yarn publish
```

publish homework starter files
```
yarn publish -- zip
```

