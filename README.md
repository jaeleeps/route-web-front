<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->

## 설치 파일
1. Node.js / NPM
- 서버 구동용 자바스크립트 런타임
- https://nodejs.org/ko/download/
- 현재 버전/최신 버전이 아닌 안정화 된 LTS 버전을 OS에 맞게 설치해주세요 :) 

2. Git
- Git 은 소프트웨어 버전 관리 시스템(version control system)
- 공식 다운로드 주소: https://git-scm.com/downloads
- 가이드: https://coding-factory.tistory.com/245

3. Visual Studio
- 통합 개발 환경(Integrated Development Environment, IDE)
- https://code.visualstudio.com/download

4. Github Desktop
- git 을 CLI(Command Line Interface, 명령어 입력형)이 아닌 GUI(graphic utility interface) 형식으로 쉽게 사용할 수 있도록 해주는 도구
- https://desktop.github.com/


<br/><br/><br/><br/>


## 로컬 구동 방법

#### 최근에 MacOS만 사용하다보니 윈도우 환경에서의 개발환경 세팅이 기억이 잘 나지 않네요 ㅜㅠ 궁금하거나 막히는 부분 있으면 바로 여쭤보세요! 그리고 간단한 node/react 환경 세팅은 구글에 검색하면 많이 나오니 구글링 하셔도 됩니다 :) 똑똑한 후배님이시니 잘 하실 거에요

<br/><br/>


### 작업 공간(폴더, 디렉토리) 들어가기
- https://www.thomas-krenn.com/en/wiki/Cmd_commands_under_Windows 참고
- 해당 사이트의 명령어 중에는 다음의 것들만 알면 됩니다.
- `dir` : 현재 디렉터리 위치에 있는 파일/폴더 리스트 나열 - mac 에서는 `ls`
- `mkdir` [디렉터리 명] : 디렉터리(폴더) 만들기
- `cd` : 디렉터리 위치 변경 - cd 를 사용하여 보통 다음의 두 액션을 합니다
- `cd [디렉터리 명]`: 해당 디렉터리로 들어가기
- `cd..` : 현재 디렉터리에서 벗어나 상위 디렉터리로 이동하기

##### 조금 더 알고싶으시다면 basic cmd command 검색하시면 자료 많을거에요~ 


<br/><br/>


### Visual Studio terminal 열기

- Window 의 cmd는 놀라울 정도로 불편하기도 하고, 거의 대부분의 개발이 VScode 내에서 이루어질 예정이기에 VScode 의 터미널을 사용하는 게 나을거에요
- Visual Studio(이하 VS)를 열고  `File > Open` 을 누르면 폴더를 지정 할 수 있어요
- `Terminal > New Terminal` 을 누르면 하단에 블럭이 하나 생깁니다.
- `C:\ ... \[현재 폴더명] > ` 가 입력되어있는 것을 확인해주세요. 꼭 C 드라이브일 필요는 없습니다~


<br/><br/>


### Node 버전 확인

- Node LTS 버전을 무사히 설치했다면 다음의 명령어를 입력하여 Node가 정상적으로 설치되어 있는지 확인해줍니다.
- `C:\Users\{폴더 위치} > node -v`
- 가령 현재 위치가 `C:\Users\ExampleDirectoryName >` 이라면 `C:\Users\ExampleDirectoryName > node -v` 를 입력하면 됩니다.
- `v12.18.3` 가 출력 되는 것을 확인해주세요 (숫자는 꼭 일치하지 않아도 됩니다.)


<br/><br/>


#### NPM 버전 확인
- NPM은 Node Package Manager의 약자로, 노드 생태계의 다양한 라이브러리, 패키지 등을 사용할 수 있도록 해줍니다.
- Python의 pip 와 비슷하다고 보시면 됩니다 :)
- NPM 또한 `npm -v` (`C:\Users\ExampleDirectoryName > npm -v`) 을 입력하여
- 버전명인 `6.14.6` 가 출력 되는 것을 확인해주세요


<br/><br/>


#### Git을 설치 확인
- 이 부분은 조금 어려울 수도 있어요
- 마찬가지로 설치가 잘 되었는지 확인해줍시다. (이제 터미널 명령어와 결과를 [input]=>[output] 형식으로 작성할게요)
- `git --version` => `git version 2.25.1.window.1`
- 사용자 정보를 등록해주세요 ""는 꼭 입력하셔야합니다!
- `git config --global user.name "[github 이름]"`
- `git config --global user.email "[github 가입 시 이메일]"`
- 입력정보 확인
- `git config --list`


<br/><br/>

### Github 에서 project scaffold clone 받기
##### 가이드: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
##### github desktop 을 이 단계부터 사용하셔도 됩니다. 하지만 clone의 경우 CLI(커맨드라인 사용하여)로 작업하는 게 빠르실거에요
- https://github.com/jaeleeps/route-web-front 들어가기 - 생각해보니 이 페이지네요
- 중앙 상단의 초록섹 "Code" 버튼 클릭
- 주소 복사 (https://github.com/jaeleeps/route-web-front.git)
- 작업 폴더 위치 에서 명령어 실행
- `git clone https://github.com/jaeleeps/route-web-front.git`
```
jaeyoung@MacBook-Pro-7.local [~]$ cd projects/route/
jaeyoung@MacBook-Pro-7.local [~/projects/route]$ mkdir test_directory
jaeyoung@MacBook-Pro-7.local [~/projects/route]$ cd test_directory/
jaeyoung@MacBook-Pro-7.local [~/projects/route/test_directory]$ git clone https://github.com/jaeleeps/route-web-front.git
'route-web-front'에 복제합니다...
remote: Enumerating objects: 83, done.
remote: Counting objects: 100% (83/83), done.
remote: Compressing objects: 100% (55/55), done.
remote: Total 83 (delta 24), reused 80 (delta 21), pack-reused 0
오브젝트를 받는 중: 100% (83/83), 189.78 KiB | 439.00 KiB/s, 완료.
델타를 알아내는 중: 100% (24/24), 완료.
jaeyoung@MacBook-Pro-7.local [~/projects/route/test_directory]$ 
``` 
- 디렉터리 위치 표기 방식은 MacOS 와 window 가 다르지만, 대략 위와 같은 문구가 표시됩니다.
- 이제 `cd route-web-front` 를 실행에 들어가주세요
- window 에서는 `ls` 대신 `dir` 을 사용하여 다음과 같은 파일(server.js src 등...)이 존재하는 것을 확인해주세요


<br/><br/>

#### 로컬에서 실행 준비

- route-web-front 폴더에 들어 간 후
```
jaeyoung@MacBook-Pro-7.local [~/projects/route/test_directory]$ cd route-web-front/
jaeyoung@MacBook-Pro-7.local [~/projects/route/test_directory/route-web-front]$ ls
README.md		package-lock.json	package.json		public			server.js		src
```

- 이후 `npm install` 을 통해 package.json 에 등록되어 있는, 웹사이트를 구동하는 데 필수적인 파일들을 설치해줍니다.
```
jaeyoung@MacBook-Pro-7.local [~/projects/route/test_directory/route-web-front]$ npm install

> fsevents@1.2.13 install /Users/jaeyoung/projects/route/test_directory/route-web-front/node_modules/jest-haste-map/node_modules/fsevents
> node install.js

gyp WARN download NVM_NODEJS_ORG_MIRROR is deprecated and will be removed in node-gyp v4, please use NODEJS_ORG_MIRROR
gyp WARN download NVM_NODEJS_ORG_MIRROR is deprecated and will be removed in node-gyp v4, please use NODEJS_ORG_MIRROR

...


> node-sass@4.14.1 postinstall /Users/jaeyoung/projects/route/test_directory/route-web-front/node_modules/node-sass
> node scripts/build.js

Binary found at /Users/jaeyoung/projects/route/test_directory/route-web-front/node_modules/node-sass/vendor/darwin-x64-64/binding.node
Testing binary
Binary is fine
added 1752 packages from 826 contributors and audited 1752 packages in 34.436s
found 0 vulnerabilities

jaeyoung@MacBook-Pro-7.local [~/projects/route/test_directory/route-web-front]$
```
- error 없이(warning은 괜찮습니다) 다음의 형식의 아웃풋이 입력되면 성공이에요


<br/><br/>

#### 로컬에서 실행
- route-web-front 폴더 내부에서 `npm run local` 을 실행해주세요
- (내부적으로는 package.json 에 local이라는 이름으로 등록된 명령어를 실행시킨다는 뜻입니다.)
```
Compiled successfully!

You can now view route-web-front in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.219.102:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

```
- 다음의 문구가 출력되면 성공!
- 이제 브라우저 주소창에 (http://localhost:3000/) 혹은 (http://127.0.0.1:3000/) 에 접속하면 간단한 페이지가 보입니다:)
- (localhost와 127.0.0.1은 현재 컴퓨터가 사용하고 있는 네트워크 주소를 뜻하고 3000은 포트 명입니다.)
- (네트워크에 관련된 간단한 지식은 다음의 유튜브 재생목록을 보시면 대략적으로 아실 수 있어요. 진짜 심심하면 보시고, 굳이 시간내서 보실 필요까지는 없어요 https://www.youtube.com/watch?v=sQBXgccvE98&list=PLuHgQVnccGMA52uRBmSwqcvtI5IMoFclJ)

