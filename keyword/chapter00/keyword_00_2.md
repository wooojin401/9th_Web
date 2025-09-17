- border vs outline의 차이점 🍠
    - **border**
        
        border 속성은 요소 주위에 테두리를 생성하는 데 사용됩니다. 하나의 속성이 아닌 여러 하위 속성을 결합한 단축 속성입니다.
        
        border 의 구성 속성
        
        - `border-width` : 테두리의 두께 (px, em, rem 단위로) 를 지정한다
            
            ⇒ 미리 정의된 `thin`, `medium`, `thick` 을 사용할 수 있습니다 (기본값 : medium)
            
        - `border-style` : 테두리의 스타일을 지정한다
            
            ⇒ `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset` (기본값 : none)
            
        - `border-color` : 테두리의 색상을 지정한다
            
            ⇒ 색상 이름을 통해 값 지정 RGB, RGBA, HEX, HSL, HSLA 등 다양한 형태의 색상 지정
            
        - `border-radius` : 둥근 모서리를 지정할 수 있습니다.
        - 개별 외곽선 : `border-top`, `border-right` 을 통해 한쪽 면에만 외곽선을 지정할 수 있습니다.
        
        border 의 하위 속성은 세 가지 하위 속성을 모두 적용하지 않고, 본인이 적용하고 싶은 속성을 적용하면 됩니다. 속성의 순서 또한 영향을 주지 않습니다. 속성의 생략 시 기본 초기값으로 지정됩니다.
        
    - **outline**
        
        outline 속성은 모든 외곽선 속성을 생성하는 데 사용됩니다. 하나의 속성이 아닌 여러 하위 속성을 결합한 단축 속성입니다.
        
        outline 의 속성 구성
        
        - `outline-width` : 테두리의 두께 (px, em, rem 단위로) 를 지정한다
            
            ⇒ 미리 정의된 `thin`, `medium`, `thick` 을 사용할 수 있습니다 (기본값 : medium)
            
        - `outline-style` : 테두리의 스타일을 지정한다
            
            ⇒ `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset` (기본값 : none)
            
        - `outline-color` : 테두리의 색상을 지정한다
            
            ⇒ 색상 이름을 통해 값 지정 RGB, RGBA, HEX, HSL, HSLA 등 다양한 형태의 색상 지정
            
        - `outline-offset` : 원하는 만큼 설정하여 요소에서 얼마나 떨어진 위치에 외곽선을 그릴지 지정한다
    
    - **border 와 outline 의 차이점**
        1. **박스 모델에 대한 영향** : 
            
            ⇒ border 은 CSS 박스 모델의 일부이며, 크기와 위치는 현재 요소의 레이아웃 크기 및 정렬에 영향을 준다. 
            
            ⇒ outline 은 CSS박스 모델의 일부가 아니므로 현재 요소의 레이아웃 크기에 영향을 주지 않는다. 단, hover 이벤트를 사용할 시 타요소와 겹쳐질 수 있음을 고려하여야 한다.
            
            [화면 기록 2025-09-15 오전 12.42.04.mov](attachment:c8325c41-c89d-440c-b12d-e204b24cf65f:화면_기록_2025-09-15_오전_12.42.04.mov)
            
        2. **모양과 위치** :
            
            ⇒  border 은 요소의 각 측면에 대해 개별적으로 스타일을 지정할 수 있다.                 (`border-top`, `border-bottom`, `border-left`, `border-right`)
            
            ⇒ outline 은 항상 요소를 둘러싸는 직사각형 형태를 유지하며 개별 측면에 대해 스타일을 바꿀 수 없다.
            
        3. **반응성** :
            
            ⇒ outline 은 주로 초점 상태와 같은 상태를 표시하는 데 사용됩니다. 사용자가 요소에 초점을 맞추면 (ex. 키보드 탭 이동, 마우스 올려두기) 브라우저는 일반적으로 이를 통해 시각적으로 표시합니다.
            
    - 실제 사용 사례
        1. border 는 카드 레이아웃이나 이미지 갤러리에서 각 요소를 구분하는 목적으로 사용합니다
        2. outline 은 요소가 현재 활성화되어 있는 상태를 시각적으로 표시하려는 경우에 주로 사용됩니다. 사용자가 버튼 또는 입력 필드에 초점을 맞추면 브라우저는 일반적으로 outline 을 사용하여 시각적으로 표시합니다.
    
    - 총정리

        | 속성 | border (테두리) | outline (윤곽선) |
        | --- | --- | --- |
        | 공간 차지 (레이아웃) | O (레이아웃에 영향을 줌) | X (레이아웃에 영향을 주지 않음) |
        | 위치 | 박스 모델 내부 | 박스 모델 외부 |
        | 모양 | `border-radius` 사용 가능 | 일반적으로 사각형 |
        | 개별 스타일링 | 상하좌우, 개별 스타일링 O | 4면 전체 동일한 스타일링만 O |
        | 주요 용도 | 디자인 및 레이아웃 | 접근성 (포커싱), 디버깅 |
        | 관련 속성 | `border-width`, `border-style`, `border-color`, `border-radius` 등 | `outline-width`, `outline-style`, `outline-color`, `outline-offset` 등 |

<aside>
💡

**실습 과제:
 -** 이제 여러분 차례예요! 위의 이미지 상태에서 고구마 상자를 아래 이미지처럼 이동시켜보세요.

**힌트:**

- `bottom`과 `right` 속성을 활용하세요
- 필요하다면 고구마 상자 h1 태그에 class명을 부여해도 좋아요
- ⭐️ **중요:** 음수 값도 사용할 수 있어요! (예: top: -20px)
</aside>

- 여러분의 코드를 아래에 첨부하세요 🍠
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: purple;
          color: white;
          box-sizing: border-box;
          position: relative;
          top: 150px; //50px -> 200px
          left: 0px; //50px -> 0px
        }
      </style>
    </head>
    
    <body>
      <div class="box">BOX</div>
      <h1>고구마 상자</h1>
    </body>
    
    </html>
    ```

<aside>
🚨

**실습 과제:
- `position: absolute`**를 활용해서 아래 이미지처럼 BOX2를 BOX1 안으로 이동시켜보세요!

**힌트:**

1. BOX2에 `position: absolute`를 설정하세요
2. BOX1이 이미 `position: relative`를 가지고 있으니, BOX2는 BOX1을 기준으로 움직일 거예요
3. `top`, `left` 속성을 적절히 조합해보세요
4. absolute로 설정하면 BOX2가 Document Flow에서 빠지면서 다른 요소들에 영향을 주지 않게 돼요!
</aside>

- **`position: absolute`**를 활용하여 본인의 힘으로, 아래와 같은 이미지로 BOX2를 이동시켜보세요! 🍠
    ### 코드는 아래에 첨부해주세요!
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        * {
          margin: 0;
          box-sizing: border-box;
        }
    
        .box1 {
          width: 500px;
          height: 500px;
          background-color: purple;
          color: white;
          position: relative;
        }
    
        .box2 {
          width: 200px;
          height: 200px;
          background-color: yellow;
          position: absolute;
          top: 0px;
          left: 0px;
        }
      </style>
    </head>
    
    <body>
      <div class="box1">BOX1</div>
      <h1 class="box2">BOX2</h1>
    </body>
    
    </html>
    ```

### 위의 키워드를 활용해서 가운데 정렬을 구현해보세요! 🍠

<aside>
💡

HTML 요소는 여러분이 직접 만들어서, 가운데 정렬을 구현한 영상과 코드를 남겨주세요.
향후 학습에 있어서 매우 중요한 부분이니, 꼭 직접 코드를 작성하면서 실습해보세요!

</aside>

- text-align
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>UMC Practice</title>
      <script src="practice.js"></script>
    
      <style>
        .box {
          width: 300px;
          height: 300px;
          background-color: aqua;
    
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <p> 이 텍스트는 div 태그의 가운데에 있습니다 </p>
        <img src="외부 이미지 가져옴">
        <br>
        <a href="#"> 해당 이미지 또한 가운데에 있습니다 </a>
      </div>
    </body>
    </html>
    ```
    
    ![스크린샷 2025-09-15 오전 1.38.21.png](attachment:cb2f74e4-862f-4e4c-bd57-0e6ada1bf9b8:스크린샷_2025-09-15_오전_1.38.21.png)
    
- margin
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>UMC Practice</title>
      <script src="practice.js"></script>
    
      <style>
        .box {
          width: 350px;
          height: 350px;
          background-color: aqua;
    
          margin: 0 auto;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <p> div 태그의 영역이 페이지의 가운데에 정렬됩니다 </p>
      </div>
    </body>
    </html>
    ```
    
    ![스크린샷 2025-09-15 오전 1.41.27.png](attachment:2a992d33-9a75-41b5-bfab-aec57ea9ff11:스크린샷_2025-09-15_오전_1.41.27.png)
    
- flex
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>UMC Practice</title>
      <script src="practice.js"></script>
    
      <style>
        .box {
          width: 350px;
          height: 350px;
          background-color: aqua;
    
          display: flex;
    
          justify-content: center;
          align-items: center;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <p> 이 태그의 문장이 수직, 수평 모두 가운데 정렬됩니다 </p>
      </div>
    </body>
    </html>
    ```
    
    ![스크린샷 2025-09-15 오전 1.44.48.png](attachment:fdd173ff-23a9-4ec1-9694-c66b4fc36395:스크린샷_2025-09-15_오전_1.44.48.png)
    
- translate
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>UMC Practice</title>
      <script src="practice.js"></script>
    
      <style>
        .box {
          width: 350px;
          height: 350px;
          background-color: aqua;
    
          position: relative;
        }
    
        .item {
          position: absolute;
    
          top: 50%;
          left: 50%;
    
          transform: translate(-50%, -50%);
    
          width: 150px;
          height: 150px;
          background-color: #e74c3c;
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <div class="item">
          이 div 태그에 표시되는 영역은 box 상위 태그 가운데에 정렬됩니다
        </div>
      </div>
    </body>
    </html>
    ```
    
    ![스크린샷 2025-09-15 오전 1.53.13.png](attachment:3b2f62c9-37db-470d-8c35-a91dba9e44fe:스크린샷_2025-09-15_오전_1.53.13.png)
    
- grid
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>UMC Practice</title>
      <script src="practice.js"></script>
    
      <style>
        .box {
          width: 350px;
          height: 350px;
          background-color: aqua;
    
          display: grid;
          
          place-items: center;
        }
    
        .item {
          width: 150px;
          height: 150px;
          background-color: violet;
          color: white;
    
          display: grid;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <div class="item">
          이 div 태그에 표시되는 영역은 box 상위 태그 가운데에 정렬됩니다
        </div>
      </div>
    </body>
    </html>
    ```
    
    ![스크린샷 2025-09-15 오전 1.56.41.png](attachment:bccfb6fb-36c3-4d4f-b50a-ee7f9e2bc578:스크린샷_2025-09-15_오전_1.56.41.png)

- 반응형 background 🍠
    
    ### 아래 반응형 background 관련 키워드를 정리해보세요 🍠
    
    <aside>
    💡
    
    아래 키워드에 대해 정리한 후,  코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - background-image
        - 키워드
            - 역할 : 요소의 배경 이미지를 설정합니다
            - 주요 키워드
                - `url()` : 이미지 경로를 지정하는 함수 ⇒ `url(’chichi.jpg’)`
                - `linear-gradient()`, `radial-gradient()` :  단순한 이미지가 아닌 그라데이션 배경
                - `none` : 배경 이미지를 삭제할 때 사용
        - 코드 및 실습 영상
            - `url()` 사용
                
                ```html
                <body>
                  <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
                  <div class="box"></div>
                </body>
                ```
                
                ```html
                 <style>
                    .box {
                      width: 200px;
                      height: 100px;
                      border: 2px solid black;
                      background-color: aqua;
                      margin: 20px auto;
                    }
                
                    .box {
                      background-image: url("https://picsum.photos/id/10/800/600");
                    }
                  </style>
                ```
                
                ![스크린샷 2025-09-15 오후 8.18.43.png](attachment:70b97395-5a6f-4bc6-9e9d-7a923d518d80:스크린샷_2025-09-15_오후_8.18.43.png)
                
            - `linear-gradient()` 사용
                
                ```html
                <body>
                  <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
                  <div class="box box1"></div>
                  <div class="box box2"></div>
                </body>
                ```
                
                ```html
                  <style>
                    .box {
                      width: 200px;
                      height: 100px;
                      border: 2px solid black;
                      background-color: aqua;
                      margin: 20px auto;
                    }
                
                    .box1 {
                      background-image: linear-gradient(red, yellow);
                    }
                
                    .box2 {
                      background-image: linear-gradient(45deg, red 25%, blue 25% 50%, yellow 50% 75%, green 75%);
                    }
                  </style>
                ```
                
                ![스크린샷 2025-09-15 오후 8.24.42.png](attachment:3e1e82bb-9b49-46db-919e-8c045a9201c4:스크린샷_2025-09-15_오후_8.24.42.png)
                
            - `radial-graient()` 사용
                
                ```html
                <body>
                  <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
                  <div class="box box1"></div>
                  <div class="box box2"></div>
                </body>
                ```
                
                ```html
                  <style>
                    .box {
                      width: 200px;
                      height: 100px;
                      border: 2px solid black;
                      background-color: aqua;
                      margin: 20px auto;
                    }
                
                    .box1 {
                      background-image: radial-gradient(red, blue, white);
                    }
                
                    .box2 {
                      background-image: radial-gradient(circle, red, violet,white);
                    }
                  </style>
                ```
                
                ![스크린샷 2025-09-15 오후 8.33.50.png](attachment:1f2f2a4f-0e96-4f9a-b260-5b3496ca73b0:스크린샷_2025-09-15_오후_8.33.50.png)
                
            
    - background-repeat
        - 키워드
            - 역할 : 배경 이미지의 반복 여부 및 방식을 지정합니다
            - 주요 키워드
                - `repeat` : 기본값, 가로와 세로 방향으로 모두 반복합니다
                - `no-repeat` : 이미지를 반복하지 않고 하나만 사용합니다 ⇒ 가장 많이 사용
                - `repeat-x` : 가로 방향으로만 반복합니다
                - `repeat-y` : 세로 방향으로만 반복합니다
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
              <div class="box box1"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 400px;
                  height: 400px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
                }
            
                .box1 {
                  background-image: url("https://picsum.photos/id/237/200/200");
            
            			//해당 코드 한 번씩 사용하여 영상 제작
                  //background-repeat: repeat;
                  //background-repeat: no-repeat;
                  //background-repeat: repeat-x;
                  //background-repeat: repeat-y;
                }
              </style>
            ```
            
            [화면 기록 2025-09-15 오후 8.43.39.mov](attachment:74bb3261-6c7a-48ae-bc58-0b9faee40882:화면_기록_2025-09-15_오후_8.43.39.mov)
            
    - background-position
        - 키워드
            - 역할 : 배경 이미지의 시작 위치를 설정합니다
            - 주요 키워드
                - 단일 값 : `top`, `bottom`, `left`, `right`, `center` (가로, 세로, 중앙 정렬)
                - 두 값 조합 : 첫 번째 값 - 수평 / 두 번째 값 - 수직을 의미합니다
                    
                    ⇒ `top right` : 오른쪽 상단, `center center` : 정중앙
                    
                - 단위 값 : `px`, `%`, `em` 등 단위를 사용하여 정밀한 위치를 지정합니다
                    
                    ⇒ `50% 50%` : 정중앙 ( =. center center), 
                    
                    ⇒ `20px 10px` : 왼쪽에서 20px 위에서 10px 떨어진 위치
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
              <div class="box box1"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 400px;
                  height: 400px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
                }
            
                .box1 {
                  background-image: url("https://picsum.photos/id/237/200/200");
            
                  background-repeat: repeat;
            
                  //background-position: center;
                  //background-position: top;
                  //background-position: bottom;
                  //background-position: left;
                  //background-position: right;
                  //background-position: center top;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 1.28.52.mov](attachment:eb36c931-5749-4d83-ac4e-caa9f6c16e00:화면_기록_2025-09-16_오전_1.28.52.mov)
            
    - background-size
        - 키워드
            - 역할 : 배경 이미지의 크기를 조절합니다 (**반응형 디자인의 핵심 속성**)
            - 주요 키워드
                - `auto` : 원본 이미지의 크기를 그대로 사용합니다
                - `cover` : 이미지가 잘리더라도, 요소의 전체 배경 영역을 완전히 덮도록 이미지 비율을 유지하며 확대 및 축소합니다
                - `contain` : 이미지가 잘리지 않도록, 요소의 배경 영역 안에 전체 이미지가 보이도록 이미지 비율을 유지하며 확대 및 축소합니다 (여백이 생길 수 있다)
                - 단위 값 :
                    
                    ⇒ `100% 100%` : 가로, 세로를 요소에 꽉 채웁니다 (이미지 비율 손상 O)
                    
                    ⇒ `100% auto` : 가로를 100% 로 맞추고, 세로는 원본 비율에 맞게 자동으로 조절합니다
                    
                    ⇒ `px` 값 : 특정 크기로 지정할 수 있습니다 (ex. `200px 150px` 와 같이)
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
              <div class="box box1"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 400px;
                  height: 500px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
                }
            
                .box1 {
                  background-image: url("https://picsum.photos/id/237/200/200");
            
                  background-repeat: repeat;
            
            			//background-size: auto;
            			//background-size: cover;
            			//background-size: contain;
                  //background-size: 100% 100%;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 1.41.33.mov](attachment:1ce47e4c-d579-4b03-911e-c35b736952cb:화면_기록_2025-09-16_오전_1.41.33.mov)
            
    - 축약형
        - 키워드
            
            **축약형(Shorthand)** : `background`
            
            위 속성들을 한 줄로 간결하게 표현할 수 있어 매우 편리합니다.
            
            - **작성 순서 : `background-color` `background-image` `background-repeat` `background-position` / `background-size`**
                - `background-position` / `background-size` 는 / (슬래시) 로 구분하여야 한다
                - 모든 값을 쓸 필요는 없으나, 필요한 값을 순서에 맞게 작성하여야 한다.
            
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
              <div class="box box1"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 400px;
                  height: 500px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
                }
            
                .box1 {
                  background: 
                  aqua 
                  url("https://picsum.photos/id/237/200/200") 
                  repeat-x 
                  top / auto;
                }
              </style>
            ```
            
            ![스크린샷 2025-09-16 오전 1.46.15.png](attachment:97b60dcd-42d2-4072-b008-eaf1b0062a6b:62237125-ae68-4524-8f33-75bc095e2d77.png)
            
        

- transform 🍠
    
    ### transform 🍠
    
    CSS **`transform`** 속성으로, 요소에 회전 크기 조절, 기울이기, 이동 효과를 부여할 수 있어요.
    
     `transform`은 CSS [시각적 서식 모델](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)의 좌표 공간을 변경해요.
    
    <aside>
    💡 아래 키워드에 대해 정리한 후, 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - translate
        - 키워드
            - 역할 : 요소를 현재 위치에서 **지정한 만큼 수평, 수직 이동**시킨다
            - 주요 키워드
                - `translate(x, y)` : x축과 y축으로 동시에 이동, y 생략 시 y 값은 0으로 간주
                - `translateX(x)` : x축 (가로) 으로만 이동
                - `translateY(y)` : y축 (세로) 으로만 이동
                - 단위 : `px`, `%`, `em` 등 단위 사용
                    
                    ⇒ `%` 의 경우 **요소 자신의 크기에 비례**하여 이동합니다
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 400px;
                  height: 400px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transform: translate(50px, 100px);
                }
            
                .box:hover {
                  transform: translateX(100px);
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.15.00.mov](attachment:8c811113-1ff8-4a36-835e-983e0cc199d3:화면_기록_2025-09-16_오전_2.15.00.mov)
            
    - scale
        - 키워드
            - 역할 : 요소의 크기를 **확대하거나 축소**합니다
            - 주요 키워드
                - `scale(x, y)` : 가로 크기를 x배, 세로 크기를 y배 조절, y 생략 시 y값은 x값과 동일하게 적용
                - `scaleX(x)` : 가로 크기만 조절
                - `scaleY(y)` : 세로 크기만 조절
                - 값 :
                    
                    ⇒ 1 : 기본값 (100%)
                    
                    ⇒ 1 보다 큰 값 : 확대 (ex. scale(2) : 2배 확대)
                    
                    ⇒ 1 보다 작은 값 : 축소 (ex. scale(0.5) : 50% 축소)
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS backgroud 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 400px;
                  height: 400px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transform: scale(0.5);
                }
            
                .box:hover {
                  transform: scaleX(2);
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.16.37.mov](attachment:0309bc44-f13a-46d3-ab59-3a81b1ec2d99:화면_기록_2025-09-16_오전_2.16.37.mov)
            
    - rotate
        - 키워드
            - 역할 : 요소를 **지정한 각도만큼 회전**시킵니다
            - 주요 키워드
                - `rotate(angle)` : 2D 공간에서 요소를 angle 만큼 회전
                - 단위 : `deg` (degrees, 각도) 주로 사용
                - 값 : 양수 - 시계 방향 / 음수 - 반시계 방향 회전
                - `transform-origin` 속성과 함께 사용 시 **회전의 기준점 변경 가능**
                    
                    ⇒ 기본값 : `50% 50%` 정중앙
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transform 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transform: rotate(45deg);
                }
            
                .box:hover {
                  transform: rotateY(-30deg);
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.18.17.mov](attachment:721bdf12-a849-4a19-a642-6999d1c0b3d8:화면_기록_2025-09-16_오전_2.18.17.mov)
            
    - skew
        - 키워드
            - 역할 : 요소를 **지정한 각도만큼 기울여서** 평행사변형 상태로 만듭니다
            - 주요 키워드
                - `skew(x-angle, y-angle)` : x축과 y축 방향으로 동시에 기울임, y 생략 시 y 값은 0으로 간주
                - `skew(x-angle)` : x축을 기준으로 기울임
                - `skew(y-angle)` : y축을 기준으로 기울임
                - 단위 : `deg` 사용
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transform 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transform: skew(35deg);
                }
            
                .box:hover {
                  transform: skewX(-20deg);
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.19.50.mov](attachment:ee1c93ba-d33b-4314-b50c-5e524e52928a:화면_기록_2025-09-16_오전_2.19.50.mov)
            
    - matrix
        - 키워드
            - 역할 : 위에서 설명한 모든 2D 변형을 한 번에 정의하는 함수
            - 주요 키워드
                - `matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)`
                - 6개의 인자를 사용하여 복잡한 변형을 수학적으로 제어
                - 일반적으로 직접적인 작성보다 브라우저가 내부적으로 `matrix()` 로 변환하여 처리
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transform 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transform: matrix(1.5, 0.7, -0.6, 1.2, 50, 100);
                }
              </style>
            ```
            
            ![스크린샷 2025-09-16 오전 2.21.01.png](attachment:9e4c1007-f9ce-4ab6-b2c1-caebed04fcc3:스크린샷_2025-09-16_오전_2.21.01.png)
            
        
    
- transition 🍠
    
    ### transition  🍠
    
    <aside>
    💡 아래 키워드에 대해 정리한 후, 실습을 진행해주시고, 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - transition-property
        - 키워드
            - 역할 : 트랜지션 효과를 적용할 **CSS 속성을 지정**합니다
            - 주요 키워드
                - `all` : 모든 속성의 변경에 대해 트랜지션 적용 (기본값, 가장 흔히 사용)
                - `none` : 트랜지션 적용 X
                - 특정 속성명 : `background-color`, `width`, `transform` 등 효과 줄 속성 이름을 **직접 명시**
                    
                    ⇒ 쉼표로 여러 속성 지정 가능
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transition 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transition-property: width, background-color;
                }
            
                .box:hover {
                  width: 400px;
                  background-color: violet;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.40.51.mov](attachment:cf6fd8a0-be63-40d1-b687-f5c068b06afb:화면_기록_2025-09-16_오전_2.40.51.mov)
            
    - transition-duration
        - 키워드
            - 역할 : 트랜지션이 **완료되기 전까지 걸리는 시간** 설정
            - 주요 키워드
                - 단위 : `s` 또는 `ms` 사용
                - `0s` : 기본값, 트랜지션 효과 즉시 발생
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transition 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transition-property: all;
                  transition-duration: 0.4s;
                }
            
                .box:hover {
                  width: 400px;
                  background-color: violet;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.41.55.mov](attachment:5e3f2871-152c-4f38-b85b-b836e31e6439:화면_기록_2025-09-16_오전_2.41.55.mov)
            
    - transition-timing-function
        - 키워드
            - 역할 : 트랜지션 진행 동안의 **속도 변화를 제어** (가속 및 감속)
            - 주요 키워드
                - `ease` : 시작은 빠르게, 중간은 느리게, 끝은 빠르게 (기본
                - `linear` : 일정한 속도로 처음부터 끝까지 변함
                - `ease-in` : 느리게 → 점점 빠르게
                - `ease-out` : 빠르게 → 점점 느리게
                - `ease-in-out` : `ease` 와 유사, 좀 더 부드러운 시작 / 끝
                - `cubic-bezier(n, n, n, n)` : 자신만의 속도 곡선을 직접 정의할 때 사용하는 함수 (고급 속성)
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transition 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transition-property: all;
                  transition-duration: 1s;
                  
                  //transition-timing-function: linear;
                  //transition-timing-function: ease;
                  //transition-timing-function: ease-in;
                  //transition-timing-function: ease-out;
                  //transition-timing-function: ease-in-out;
                }
            
                .box:hover {
                  width: 400px;
                  background-color: violet;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.43.13.mov](attachment:a23f4ace-09ca-41e9-aa65-4a94a3aac0f1:화면_기록_2025-09-16_오전_2.43.13.mov)
            
    - transition-delay
        - 키워드
            - 역할 : 트랜지션이 **시작되기까지 대기하는 시간** 설정
            - 주요 키워드
                - 단위 : `s` 또는 `ms`
                - `0s` : 기본값, **즉시 시작**
                - 값 : 양수 값을 주면, 해당 시간만큼 지연 후 트랜지션 시작
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transition 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  transition-property: opacity;
                  transition-duration: 1s;
                  transition-delay: 1s;
                }
            
                .box:hover {
                  opacity: 0;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오전 2.45.55.mov](attachment:0f83a10d-5fae-4917-ac0e-e2c7d9babb2f:화면_기록_2025-09-16_오전_2.45.55.mov)
            
    - transition-behavior
        - 키워드
            - 역할 : `display` 속성처럼 중간값이 없는 속성들의 트랜지션 동작 방식 제어 (최신 속성)
            - 주요 키워드
                - `normal` : 기본값, `display: none` 과 같은 속성은 트랜지션이 적용되지 않고, **즉시 변경**된다
                - `allow-discrete` : `display`, `content` 같은 속성에도 트랜지션 허용
                    
                    ⇒ `opacity` 트랜지션이 끝나는 시점에 `display: none` 이 적용되도록 할 수 있음
                    
        - 코드 및 실습 영상
            
            해당 기능의 경우 실험적인 기능이라 제 브라우저에서 정식 지원하지 않아 테스트 영상 대신 코드 첨부로 대신하였습니다.
            
            ```html
            <body>
              <h1 style="text-align: center;"> CSS transition 반응형 실습 </h1>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                .box {
                  width: 300px;
                  height: 300px;
                  border: 2px solid black;
                  background-color: aqua;
                  margin: 20px auto;
            
                  opacity: 0;
                  display: none;
            
                  transition: opacity 0.3s, display 0.3s;
                  transition-behavior: allow-discrete;
                }
            
                .box:hover {
                  opacity: 1;
                  display: block;
                }
              </style>
            ```
            
    
    ### 실습  🍠
    
    **`transition`** 키워드를 학습한 후, 해당 키워드와, **`transform에서 배운 특정 키워드를 활용`**하여, 아래와 같은 영상과 비슷하게 만들어주세요! (똑같을 필요는 없고, 기능만 같으면 됩니다.)
    
    단, **`transition 축약형`**을 사용해주세요!
    
    [화면 기록 2024-07-18 오후 7.51.38.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/e57bc1c9-a051-46a7-9c15-f5e2f1fea50c/e6dc806f-17a6-483d-b55e-e3ae81b0d27c/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.51.38.mov)
    
    - 코드 첨부 🍠
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title> transform 반응형 실습 </title>
          <script src="practice.js"></script>
        
          <style>
            .box {
              position: relative;
        
              width: 150px;
              height: 150px;
              background-color: pink;
              margin: 70px auto;
        
              transform: rotate(45deg);
        
              transition: background-color 0.2s ease-in;
            }
        
            .box:hover {
              background-color: purple;
            }
          </style>
        </head>
        <body>
          <h3 style="text-align: center;"> CSS transition 반응형 실습 </h3>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </body>
        </html>
        ```
        
    - 실행 영상 첨부 🍠
        
        [화면 기록 2025-09-16 오전 2.59.19.mov](attachment:9a20e7f8-2226-46d7-918c-5217e8af7acf:화면_기록_2025-09-16_오전_2.59.19.mov)

- animation 🍠
    
    ### animation 🍠
    
    <aside>
    💡 아래 키워드에 대해 학습한 후, 실습을 진행하시고 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - animation-name
        - 키워드
            - 역할 : 요소에 적용할 `@keyframes` **애니메이션의 이름** 지정
            - 주요 키워드
                - `@keyframes` 이름 : 위에서 정의한 이름을 그대로 가져옴
                - `none` : 애니메이션 적용 X (기본값)
    - animation-duration
        - 키워드
            - 역할 : 애니메이션이 **한 번 재생되는 데 걸리는 총 시간**을 설정
            - 주요 키워드
                - 단위 : `s` 또는 `ms` 사용
                - `0s` : 애니메이션이 재생되지 않습니다 (기본값)
                    
                    ⇒ 이 값을 반드시 설정하여야 애니메이션이 보입니다
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  animation-name: chichi;
                  animation-duration: 3s;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 4.48.27.mov](attachment:dd77acfa-aee1-4b71-bad5-1fc4f08609f0:화면_기록_2025-09-16_오후_4.48.27.mov)
            
    - animation-delay
        - 키워드
            - 역할 : 애니메이션이 **시작되기 전까지 대기**하는 시간 설정
            - 주요 키워드
                - 단위 : `s` 또는 `ms` 사용
                - `0s` : 즉시 시작 (기본값)
                - 음수 값 : 애니메이션이 **해당 값만큼 이미 진행된 상태에서 시작**
                    
                    ⇒ `-1s` 를 주면 2초짜리 애니메이션이 1초 지점부터 재생
                    
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  animation-name: chichi;
                  animation-duration: 3s;
                  animation-delay: 2s;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 4.49.52.mov](attachment:cb66504b-f730-4adc-a0a8-a3ef62770d06:화면_기록_2025-09-16_오후_4.49.52.mov)
            
    - animation-direction
        - 키워드
            - 역할 : 애니메이션의 반복 시 **재생 방향**을 설정
            - 주요 키워드
                - `normal` : `from` 에서 `to` 방향으로 항상 재생 (0% ~ 100%) (기본값)
                - `reverse` : `to` 에서 `from` 방향으로 재생 → **역재생**
                - `alternate` : 홀수 - `normal` / 짝수 - `reverse` 로 **왕복 재생**
                - `alternate-reverse` : 홀수 - `reverse` / 짝수 - `normal` 로 **왕복 재생**
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  animation-name: chichi;
                  animation-duration: 3s;
                  animation-iteration-count: 2;
                  animation-direction: alternate;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 4.53.07.mov](attachment:9391b6d6-778e-43d6-a499-cf8309fd4ace:화면_기록_2025-09-16_오후_4.53.07.mov)
            
    - animation-iteration-count
        - 키워드
            - 역할 : 애니메이션을 **몇 번 반복**할지 설정
            - 주요 키워드
                - `1` : 한 번만 재생 (기본값)
                - 숫자 : 지정된 횟수만큼 반복
                - `infinite` : **무한 반복**
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  animation-name: chichi;
                  animation-duration: 3s;
                  animation-iteration-count: infinite;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 4.51.28.mov](attachment:2e64ea95-cf74-4cff-9e4a-97fed57af651:화면_기록_2025-09-16_오후_4.51.28.mov)
            
    - animation-play-state
        - 키워드
            - 역할 : 애니메이션을 재생하거나 일시 정지
                
                ⇒ JavaScript 로 제어하는 경우가 많다
                
            - 주요 키워드
                - `running` : 애니메이션 **재생** (기본값)
                - `paused` : 애니메이션 **일시 정지**
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(30px);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  animation-name: chichi;
                  animation-duration: 3s;
                  animation-fill-mode: backwards;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
            
                .box:hover {
                  animation-play-state: paused;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 5.02.41.mov](attachment:f2df5f25-d3a3-471e-84c0-8f4ccfc35272:화면_기록_2025-09-16_오후_5.02.41.mov)
            
    - animation-timing-function
        - 키워드
            - 역할 : 애니메이션의 진행 **속도를 제어**하여 **가속 / 감속 등 느낌을 구현**
                
                ⇒ `transition-timing-function` 과 동일한 값 사용
                
            - 주요 키워드
                - `ease` : 자연스러운 가속 및 감속 (기본값)
                - `linear` : 일정한 속도로 진행
                - `ease-in` : 느리게 → 점점 빠르게
                - `ease-out` : 빠르게 → 점점 느리게
                - `ease-in-out` : 느리게 → 느리게
                - `steps(n, start/end)` : 애니메이션을 n 단계로 끊어서 보여줌
                    
                    ⇒ 스프라이트 이미지 애니메이션에 유용
                    
                - `cubic-bezier(n,n,n,n)` : 자신만의 속도 곡선 정의
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(30px);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  animation-name: chichi;
                  animation-duration: 3s;
                  
                  //animation-timing-function: ease;
                  //animation-timing-function: ease-in;
                  //animation-timing-function: ease-out;
                  //animation-timing-function: linear;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
            
                .box:hover {
                  animation-play-state: paused;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 5.04.03.mov](attachment:67f3ae23-8450-4185-a98a-5626627cff44:화면_기록_2025-09-16_오후_5.04.03.mov)
            
    - animation-fill-mode
        - 키워드
            - 역할 : 애니메이션이 **재생 전과 끝난 후에 어떤 스타일**을 유지할지 결정
            - 주요 키워드
                - `none` : 애니메이션이 끝날 시 모든 요소는 원래 스타일로 돌아감 (기본값)
                - `forwards` : **마지막 키프레임 (100%)** 의 스타일 유지
                - `backwards` : 애니메이션 delay 가 있을 경우, 대기 시간 동안 **첫 번째 키프레임 (0%)** 의 스타일 적용
                - `both` : `forwards` 와 `backwards` 모두 적용
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(30px);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  animation-name: chichi;
                  animation-duration: 3s;
                  animation-fill-mode: backwards;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 4.56.06.mov](attachment:e68e3083-d345-48ef-8675-fb085696da59:화면_기록_2025-09-16_오후_4.56.06.mov)
            
    - @keyframes
        - 키워드
            - 역할 : 애니메이션의 시작부터 끝까지 흐름을 정의하는 규칙
                
                ⇒ 시간의 흐름에 따라 CSS 스타일이 어떻게 변해야 하는지를 키프레임(Keyframe) 으로 지정
                
            - 구조 : `@keyframes` 키워드 뒤에 애니메이션의 이름을 지정하고 `{}` 블록 안에 시간대별 스타일을 정의
            - 주요 키워드
                - `from` / `to` :애니메이션의 시작과 끝의 상태를 정의
                - `%` : 0% ~ 100% 사이의 값을 사용하여 시간 흐름에 따른 중간 단계를 세세하게 제어 가능
        - 코드
            
            ```html
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
            ```
            
    - 축약형
        - 키워드
            - 역할 : 위의 모든 속성들을 한 줄로 간결하게 작성
            - 작성 순서 : `name` `duration` `timing-function` `delay` `iteration-count` `direction` `fill-mode` `play-state`
                
                ⇒ 순서가 헷갈려도 브라우저가 값의 종류를 보고 대부분 올바르게 해석
                
            - 필수 값 : `animation-name` 및 `animation-duration` 은 포함하는 것이 좋다
        - 코드 및 실습 영상
            
            ```html
            <body>
              <h3 style="text-align: center;"> CSS animation 반응형 실습 </h3>
              <div class="box"></div>
            </body>
            ```
            
            ```html
              <style>
                @keyframes chichi {
                  from {
                    transform: translate(100px);
                    opacity: 0;
                  }
            
                  50% {
                    transform: skew(45deg);
                  }
            
                  to {
                    transform: translateX(30px);
                    opacity: 1;
                  }
                }
            
                .box {
                  display: flex;
            
                  /*
                  //해당 파트를 축약형으로
                  animation-name: chichi;
                  animation-duration: 3s;
                  animation-timing-function: linear;
                  animation-delay: 1s;
                  animation-iteration-count: infinite;
                  animation-direction: alternate;
                  animation-fill-mode: both;
                  */
            
                  animation: chichi 3s linear 1s infinite alternate both;
            
                  width: 100px;
                  height: 100px;
            
                  margin: auto;
            
                  border: 1px solid black;
                  background-color: aqua;
                }
            
                .box:hover {
                  animation-play-state: paused;
                }
              </style>
            ```
            
            [화면 기록 2025-09-16 오후 5.08.02.mov](attachment:c7495d6b-663e-497c-aa62-648287be1e73:화면_기록_2025-09-16_오후_5.08.02.mov)
            
    
    [animation - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
    
    ### 실습  🍠
    
     **`animation 키워드`**를 학습한 후, 아래와 비슷한 영상을 만들어주세요!
    
    단, **`animation 축약형`**을 사용해주세요!
    
    - [ ]  원은 어떻게 만들까요?
    - Hint
        
        **`border-radius` 를 활용해봅시다~!**
        
    - [ ]  계속 튀기는 애니메이션은 어떻게 하면 쉽게 만들까요?
    - Hint
        
        `infinte`, `alternate` 속성을 활용해봅시다!
        
    
    [화면 기록 2024-07-18 오후 8.01.20.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/e57bc1c9-a051-46a7-9c15-f5e2f1fea50c/6c0aa987-9afa-4c7b-8096-51940175eeb4/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.01.20.mov)
    
    - 코드 첨부 🍠
    - 실행 영상 첨부 🍠

- CSS 방법론 BEM 🍠
    
    <aside>
    💡
    
    아래 블로그를 참고하여 **BEM 방법론**에 대해 직접 정리해 보세요.
    
    </aside>
    
    [개발자 매튜 | BEM CSS 방법론 실전 가이드 - 예제로 배우는 네이밍 규칙](https://www.yolog.co.kr/post/css-bem-methodology)
    
    - BEM 이란 무엇인가?
        
        `Block`, `Element`, `Modifier` 의 약자로, CSS 클래스의 이름을 제작하는 규칙입니다.
        
        ```css
        //BEM 의 구조
        
        .block {
        }
        
        .block__element {
        }
        
        .block__modifier {
        }
        
        .block__element__modifier {
        }
        ```
        
        위와 같은 CSS 구조로 클래스를 제작합니다.
        
        Q. 그런데, 왜 BEM 을 사용하여서 CSS 클래스를 제작하여야 하는 건가요?
        
        1. 클래스 이름의 충돌 : 네임스페이스로 완전한 개별 클래스로 구분 가능
        2. 스타일 덮어쓰기 : 독립적인 블록으로 격리 가능
        3. 코드의 이해 어려움 : 꼬리표를 통해 명확한 관계를 표현
        4. 재사용 불가능 : 컴포넌트 단위의 설계
        
        - `Block` : 독립적인 컴포넌트
            
            블록은 그 자체로 의미를 가지는 **독립적인 컴포넌트** 입니다. 
            
            페이지의 어디에서든 재사용할 수 있는 기능적 단위로 나눕니다.
            
            (ex. `Header`, `Sidebar`, `Footer`, `Card` 등 레고처럼 조립 가능한 영역).   
            
            Block 작명 규칙
            
            ```css
            //좋은 예시
            //직관적이고 명확한 의미를 가지도록 할 것
            
            .header {
            }
            
            .menu {
            }
            
            .search-form {
            }
            
            .user-profile {
            }
            
            //나쁜 예시
            //직관적이지 않고 모호한 의미의 블록
            
            .content {
            	너무 일반적임
            } 
            
            .big-block {
            	스타일링 기반 작명
            }
            
            .block1 {
            	의미 없는 이름
            }
            ```
            
            특징
            
            1. 독립성 : 다른 블록에 의지하지 않는다
            2. 재사용성 : 어디서든 사용 가능하다
            3. 이동 가능 : 위치가 달라져도 동작한다
            4. 중첩 가능 : 블록 안에 다른 블록을 포함할 수 있다
            
            ```html
            <div class="page">
            	<header class="header">
            		<form class="search-form">
            			//블록 안에 블록의 중첩이 가능하다
            		</form>
            	</header>
            </div>
            ```
            
            - BEM 방식으로 Block 단위 컴포넌트 구성해보기 (실습)
                
                ```html
                <!DOCTYPE html>
                <html lang="ko">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>UMC Practice</title>
                  <script src="practice.js"></script>
                
                  <style>
                    .card {
                      border: 1px solid black;
                      padding: 20px;
                      border-radius: 8px;
                      background-color: aqua;
                    }
                  </style>
                </head>
                <body>
                  <div class="card">
                    <img src="product.jpg" alt="상품" />
                    <h3> 상품 이름 </h3>
                    <p> 상품 설명 </p>
                    <button> 구매하기 </button>
                  </div>
                </body>
                </html>
                ```
                
                ![스크린샷 2025-09-15 오후 6.02.24.png](attachment:babdcd27-272a-4daf-86d1-768de5422b6f:스크린샷_2025-09-15_오후_6.02.24.png)
                
            
        - `Element` : `Block` 의 구성요소
            
            Element 는 블록의 일부분으로서, Block 안에서만 의미를 가지는 구성 요소입니다.
            
            Block 과 Element 는 **`__` (더블 언더스코어) 로 연결**합니다.
            
            (BEM 의 Element : 블록 안에 포함된 요소들은 블록과 밀접한 연관이 있고 독립적으로 사용할 수 없습니다.)
            
            Element 작명 규칙
            
            ```css
            //언더스코어를 활용하여 Block__Element 형식으로 사용
            
            .card__image {
            }
            
            .card__title {
            }
            
            .card__description {
            }
            
            .card__button {
            }
            
            .menu__item {
            }
            
            .menu__link {
            }
            ```
            
            Element 사용 시 주의사항
            
            - 잘못된 사용 : Element 의 Element
            
            ```css
            // ❌ 잘못된 사용 (header, title 모두 card 의 Element)
            .card__header__title {
            }
            
            // ✅ 두 Element 를 분리하기
            .card__header {
            
            }
            
            .card__title {
            }
            ```
            
            BEM 에서의 올바른 Element 사용
            
            ```html
            <div class="card">
            	<div class="card__header">
            		<h3 class="card__title"> title </h3>
            		<span class="card__bridge"> bridge </span>
            	</div>
            	
            	<div class="card__body">
            		<p class="card__text"> text </p>
            	</div>
            </div>
            ```
            
            - BEM 방식으로 Element 단위 컴포넌트 구성해보기 (실습)
                
                ```html
                <!DOCTYPE html>
                <html lang="ko">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>UMC Practice</title>
                  <script src="practice.js"></script>
                
                  <style>
                    .card {
                      border: 1px solid black;
                      padding: 20px;
                      border-radius: 8px;
                      background-color: aqua;
                    }
                
                    .card__image {
                      width: 600px;
                      height: 300px;
                      object-fit: cover;
                    }
                
                    .card__title {
                      font-size: 18px;
                      font-weight: bold;
                      margin: 10px 0;
                    }
                
                    .card__description {
                      color: blue;
                      line-height: 1.5;
                    }
                
                    .card__button {
                      background-color: white;
                      color: black;
                      padding: 10px 20px;
                      border: 3px solid violet;
                      border-radius: 4px;
                      cursor: pointer;
                    }
                  </style>
                </head>
                <body>
                  <div class="card">
                    <img class="card__image" src="kevin1.jpg" alt="상품" />
                    <h3 class="card__title"> 상품 이름 </h3>
                    <p class="card__description"> 상품 설명 </p>
                    <button class="card__button"> 구매하기 </button>
                  </div>
                </body>
                </html>
                ```
                
                ![스크린샷 2025-09-15 오후 6.27.16.png](attachment:ecda51a6-e0e5-4441-aaf3-5fc5c1fb3dd2:스크린샷_2025-09-15_오후_6.27.16.png)
                
            - BEM 방식으로 Element 단위 컴포넌트 구성해보기 (실습)
                
                ```html
                <!DOCTYPE html>
                <html lang="ko">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>UMC Practice</title>
                  <script src="practice.js"></script>
                
                  <style>
                    .card {
                      border: 1px solid black;
                      padding: 20px;
                      border-radius: 8px;
                      background-color: aqua;
                    }
                
                    .card__image {
                      width: 600px;
                      height: 300px;
                      object-fit: cover;
                    }
                
                    .card__title {
                      font-size: 18px;
                      font-weight: bold;
                      margin: 10px 0;
                    }
                
                    .card__description {
                      color: blue;
                      line-height: 1.5;
                    }
                
                    .card__button {
                      background-color: white;
                      color: black;
                      padding: 10px 20px;
                      border: 3px solid violet;
                      border-radius: 4px;
                      cursor: pointer;
                    }
                  </style>
                </head>
                <body>
                  <div class="card">
                    <img class="card__image" src="kevin1.jpg" alt="상품" />
                    <h3 class="card__title"> 상품 이름 </h3>
                    <p class="card__description"> 상품 설명 </p>
                    <button class="card__button"> 구매하기 </button>
                  </div>
                </body>
                </html>
                ```
                
                ![스크린샷 2025-09-15 오후 6.27.16.png](attachment:ecda51a6-e0e5-4441-aaf3-5fc5c1fb3dd2:스크린샷_2025-09-15_오후_6.27.16.png)
                
            
        - `Modifier` : 상태와 테마 변형
            
            Modifier 는 Block 또는 Element 의 모양, 상태, 동작을 변경합니다. 
            
            `—` **(더블 대시) 로 연결**합니다
            
            (BEM 의 Modifier : 같은 블록에 다양한 수식어를 붙여 다른 상태와 스타일을 만듭니다. 기본적인 스타일링은 유지하며, 특정 속성만을 변경하여 일관성 있는 디자인을 만들 수 있습니다. 블록이나 요소의 모양, 상태, 동작을 변경할 때 사용합니다.)
            
            Modifier 작명 규칙
            
            ```css
            //Block--Modifier
            .card--featured {
            }
            
            .button--large {
            }
            
            .menu--vertical {
            }
            
            //Element--Modifier
            .card__button--disabled {
            }
            
            .form__input--error {
            }
            
            .menu__item--active {
            }
            ```
            
            Modifier 의 활용 패턴
            
            - Boolean Modifier (상태)
            - Key-value Modifier (속성-값)
            
            ```css
            //Boolean Modifier
            .menu__item--active {
            }
            
            .form__input--disabled {
            }
            
            .card--hidden {
            }
            
            //Key-value Modifier
            .button--size-large {
            }
            
            .button--color-red {
            }
            
            .card--theme-dark {
            }
            ```
            
        
        - BEM 사용 시 주의사항
            1. Element 의 Element 제작
            2. Modifier 단독 사용
            3. 의미 없는 컴포넌트 이름 사용
            
        - BEM 도입 전/후 비교
            - BEM 도입 전
                
                프로젝트가 커질수록 CSS 관리 힘듬
                
                - 클래스의 방치 : 사용되는 위치를 몰라 클래스를 함부로 삭제 불가
                - 스타일링 적용 X : 더 구체적인 선택자에 의해 덮어씌워짐
                - 겹치는 이름 : `.title`, `.button` 과 같은 이름이 수십 개
                - CSS 파일의 크기 증가 : 누적되는 추가적인 CSS 스타일링
            
            - BEM 도입 후
                - 클래스명으로 구조 파악
                - 삭제 용이 : 영향 범위가 명확하여 리팩토링 안전
                - 새로운 개발자 코드 이해 용이 : 일관된 규칙으로 누구나 코드 파악 가능
                - CSS 충돌 X : 더이상 `!important` 를 남발하지 않을 수 있음

