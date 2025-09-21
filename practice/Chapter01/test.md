# TypeScript 기본 타입 테스트 결과

| 타입      | 케이스 | 설명                                                | 스크린샷                                                                              |
| --------- | ------ | --------------------------------------------------- | ------------------------------------------------------------------------------------- |
| string    | 실패   | string에 number 형식을 넣어 error 발생              | ![스크린샷(284)](<attachment:c4e95a2b-d961-47ba-bfa2-9190b33ea2f2:스크린샷(284).png>) |
| string    | 성공   | 문자열 "play"가 정상 출력                           | ![스크린샷(285)](<attachment:ff863fc8-193a-41be-9fb3-1f49badfd02f:스크린샷(285).png>) |
| number    | 실패   | number에 string 형식을 넣어 error 발생              | ![스크린샷(287)](<attachment:d3acb9c8-adf3-4e73-b1c8-cd668b3dbdd6:스크린샷(287).png>) |
| number    | 성공   | 숫자 123이 정상 출력                                | ![스크린샷(286)](<attachment:dc84dfbe-f4dc-46c7-89a5-fe22f0b2b471:스크린샷(286).png>) |
| boolean   | 실패   | boolean에 string을 넣어 error 발생                  | ![스크린샷(289)](<attachment:2ce1765b-1cd2-4b46-92cc-bd9269290e6b:스크린샷(289).png>) |
| boolean   | 성공   | true가 정상 출력                                    | ![스크린샷(288)](<attachment:35a0a506-e7e1-445c-b8c3-c2677aed510f:스크린샷(288).png>) |
| null      | 실패   | null에 숫자형 대입 시 error 발생                    | ![스크린샷(291)](<attachment:ffc738ea-3855-4b9d-9716-00065b3ae2ef:스크린샷(291).png>) |
| null      | 성공   | null 정상 출력                                      | ![스크린샷(290)](<attachment:d466f79d-2716-41c5-97e1-b4ab90f2341d:스크린샷(290).png>) |
| undefined | 실패   | undefined에 string 대입 시 error 발생               | ![스크린샷(293)](<attachment:bfb4fdef-c68f-4862-927b-880a8c84b0bc:스크린샷(293).png>) |
| undefined | 성공   | undefined 정상 출력                                 | ![스크린샷(292)](<attachment:e99855bb-9a80-411a-9bc5-4679547b955a:스크린샷(292).png>) |
| undefined | 예외   | undefined에 null 대입 시 코드 상 에러지만 실행 가능 | ![스크린샷(295)](<attachment:6bcd68fc-9897-411b-b4d0-a58567333854:스크린샷(295).png>) |
| symbol    | 실패   | symbol에 string 형식 대입 시 error 발생             | ![스크린샷(297)](<attachment:ae0a41aa-5e3f-4bdd-9590-67a8e3a6d661:스크린샷(297).png>) |
| symbol    | 성공   | Symbol(text) 정상 출력                              | ![스크린샷(296)](<attachment:ab756f79-ff00-4a77-a434-6f706134a49f:스크린샷(296).png>) |
| bigint    | 실패   | bigint에 number 형식 대입 시 error 발생             | ![스크린샷(299)](<attachment:33b3a5f2-21a5-4697-8557-94759bbf499f:스크린샷(299).png>) |
| bigint    | 성공   | BigInt에 숫자 정상 출력                             | ![스크린샷(298)](<attachment:2e4a65fd-674a-4f4b-83e3-82527bf74c29:스크린샷(298).png>) |
| object    | 실패   | object에 BigInt 대입 시 error 발생                  | ![스크린샷(301)](<attachment:d03c1921-0abe-44dc-bf8e-9a64c683a8c7:스크린샷(301).png>) |
| object    | 성공   | object {yes: no} 정상 출력                          | ![스크린샷(300)](<attachment:dd89f173-fe42-41c2-ad9e-3b7b83f08e8:스크린샷(300).png>)  |
