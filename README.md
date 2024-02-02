# resume_project


# 환경변수
- .env 파일에 어떤 환경변수가 추가되어야 하는지 작성합니다.
- key=value 형태에서 key만 나열합니다. value는 비밀!

- DB_URL=
- JWT_SECRET
- REF_KEY
- 그 밖의 사용한 환경변수를 나열해 주세요.

# API 명세서 URL
[- 구글 Docs 공유 URL 추가](https://www.notion.so/3a9e2c37e13746ea87708d7f89fceef4?v=acb3953d50f8441db893845c39c63369)

# ERD URL
[- ERD 작성한 위치 URL 추가](https://drawsql.app/teams/-885/diagrams/homework)

# 더 고민해 보기
1. **암호화 방식**
    - 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 단방향 암호화와 양방향 암호화 중 어떤 암호화 방식에 해당할까요?
    - 정답! 단방향
    - 
    - 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요?
    - 보안이 강화됩니다!

2. **인증 방식**
    - JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요?
    - 노출된 Access Token을 다른 클라이언트가 사용하여 사용자의 권한을 남용할 수 있습니다.
    - 
    - 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요?
    - Refresh Token을 사용하여 Access Token이 노출되었을 때에도 사용자가 새로운 Access Token을 발급받을 수 있도록 합니다.
    - Access Token의 유효기간을 설정한다.

3. **인증과 인가**
    - 인증과 인가가 무엇인지 각각 설명해 주세요.
    - 인증은 서비스를 이용하려는 사용자가 인증된 신분을 가진 사람이 맞는지 검증하는 작업을 뜻합니다!
    - 인가는 인증된 사용자가 특정 리소스에 접근하거나 특정 작업을 수행할 수 있는 권한이 있는지를 검증하는 작업입니다!
  
    - 
    - 과제에서 구현한 Middleware는 인증에 해당하나요? 인가에 해당하나요? 그 이유도 알려주세요.
    - Middleware에서 검증받은 데이터 정보를 라우터에 가져와서 사용합니다, 놀이공원에서 구매한 티켓을 소지하고 있는지 확인하는 단계이기 때문에 인가인 것 같습니다. 

4. **Http Status Code**
    - 과제를 진행하면서 사용한 Http Status Code를 모두 나열하고, 각각이 의미하는 것과 어떤 상황에 사용했는지 작성해 주세요.
    - 로그인, 삭제, 조회 : 200 
    - 회원가입, 수정 : 201 
    - 401
    - 403
    - 404
    - 409

5. **리팩토링**
    - MySQL, Prisma로 개발했는데 MySQL을 MongoDB로 혹은 Prisma 를 TypeORM 로 변경하게 된다면 많은 코드 변경이 필요할까요? 주로 어떤 코드에서 변경이 필요한가요?
		- 만약 이렇게 DB를 변경하는 경우가 또 발생했을 때, 코드 변경을 보다 쉽게 하려면 어떻게 코드를 작성하면 좋을 지 생각나는 방식이 있나요? 있다면 작성해 주세요.

6. **API 명세서**
    - notion 혹은 엑셀에 작성하여 전달하는 것 보다 swagger 를 통해 전달하면 장점은 무엇일까요?
