- string
    
    ```tsx
    // ✅ 성공
    function getString(): string {
    return "Hello";
    }
    
    // ❌ 실패 (숫자 반환)
    function getStringFail(): string {
    return 123; // Error: Type 'number' is not assignable to type 'string'.
    }
    ```
    
- number
    
    ```tsx
    // ✅ 성공
    function getNumber(): number {
      return 42;
    }
    
    // ❌ 실패 (문자열 반환)
    function getNumberFail(): number {
      return "42"; // Error: Type 'string' is not assignable to type 'number'.
    }
    
    ```
    
- boolean
    
    ```tsx
    // ✅ 성공
    function isTrue(): boolean {
      return true;
    }
    
    // ❌ 실패 (숫자 반환)
    function isTrueFail(): boolean {
      return 1; // Error: Type 'number' is not assignable to type 'boolean'.
    }
    
    ```
    
- null
    
    ```tsx
    // ✅ 성공
    function getNull(): null {
    return null;
    }
    
    // ❌ 실패 (undefined 반환)
    function getNullFail(): null {
    return undefined; // Error: Type 'undefined' is not assignable to type 'null'.
    }
    ```
    
- undefined
    
    ```tsx
    // ✅ 성공
    function getUndefined(): undefined {
      return undefined;
    }
    
    // ❌ 실패 (null 반환)
    function getUndefinedFail(): undefined {
      return null; // Error: Type 'null' is not assignable to type 'undefined'.
    }
    ```
    
- symbol
    
    ```tsx
    
    // ✅ 성공
    function getSymbol(): symbol {
      return Symbol("id");
    }
    
    // ❌ 실패 (문자열 반환)
    function getSymbolFail(): symbol {
      return "id"; // Error: Type 'string' is not assignable to type 'symbol'.
    }
    ```
    
- bigint
    
    ```tsx
    // ✅ 성공
    function getBigInt(): bigint {
      return 100n;
    }
    
    // ❌ 실패 (숫자 반환)
    function getBigIntFail(): bigint {
      return 100; // Error: Type 'number' is not assignable to type 'bigint'.
    }
    ```
    
- object
    
    ```tsx
    // ✅ 성공
    function getObject(): object {
      return { name: "홍길동", age: 20 };
    }
    
    // ❌ 실패 (원시 타입 반환)
    function getObjectFail(): object {
      return "hello"; // Error: Type 'string' is not assignable to type 'object'.
    }
    ```
