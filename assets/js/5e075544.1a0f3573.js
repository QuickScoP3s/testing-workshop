"use strict";(self.webpackChunktesting_workshop=self.webpackChunktesting_workshop||[]).push([[1170],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,s=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,a(a({ref:e},c),{},{components:n})):r.createElement(f,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3465:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={description:"It's now your turn to kill all the mutants"},a="Exercise: Kill all the mutants!",o={unversionedId:"mutation-testing/exercise",id:"mutation-testing/exercise",title:"Exercise: Kill all the mutants!",description:"It's now your turn to kill all the mutants",source:"@site/docs/mutation-testing/exercise.md",sourceDirName:"mutation-testing",slug:"/mutation-testing/exercise",permalink:"/mutation-testing/exercise",draft:!1,tags:[],version:"current",frontMatter:{description:"It's now your turn to kill all the mutants"},sidebar:"docs",previous:{title:"Let's run some Mutation Tests",permalink:"/mutation-testing/hands-on"},next:{title:"Integration testing",permalink:"/category/integration-testing"}},l={},u=[],c={toc:u};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exercise-kill-all-the-mutants"},"Exercise: Kill all the mutants!"),(0,i.kt)("p",null,"It's time for you to add the missing test cases and even modify your existing code to kill all the remaining surviving mutants."),(0,i.kt)("p",null,"You will find the solution for this exercise below but I ",(0,i.kt)("strong",{parentName:"p"},"highly encourage")," you to take your time and try to solve the problem on your own."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand me if you want to see the solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="CalculatorTests.cs"',title:'"CalculatorTests.cs"'},"public class CalculatorTests\n{\n    [Theory]\n    [InlineData(5, 5, 10)]\n    public void Test_Add(int first, int second, int expected)\n    {\n        // Arrange\n        var sut = new Calculator();\n\n        // Act\n        var result = sut.Add(first, second);\n\n        // Assert\n        result.Should().Be(expected);\n    }\n\n    [Theory]\n    [InlineData(5, 5, 0)]\n    [InlineData(10, 9, 1)]\n    public void Test_Subtract(int first, int second, int expected)\n    {\n        // Arrange\n        var sut = new Calculator();\n        \n        // Act\n        var result = sut.Subtract(first, second);\n\n        // Assert\n        result.Should().Be(expected);\n    }\n\n    [Theory]\n    [InlineData(1, 1, 1)]\n    [InlineData(2, 3, 6)]\n    public void Test_Multiply(int first, int second, int expected)\n    {\n        // Arrange\n        var sut = new Calculator();\n        \n        // Act\n        var result = sut.Multiply(first, second);\n\n        // Assert\n        result.Should().Be(expected);\n    }\n\n    [Theory]\n    [InlineData(1, 1, 1, 0)]\n    [InlineData(4, 2, 2, 0)]\n    [InlineData(5, 2, 2, 1)]\n    public void Test_Divide(int first, int second, int expected, int remainder)\n    {\n        // Arrange\n        var sut = new Calculator();\n        \n        // Act\n        var result = sut.Divide(first, second);\n\n        // Assert\n        result.Result.Should().Be(expected);\n        result.Remainder.Should().Be(remainder);\n    }\n\n    [Fact]\n    public void Test_Divide_ByZero()\n    {\n        // Arrange\n        var sut = new Calculator();\n\n        // Act\n        var result = () => sut.Divide(1, 0);\n        \n        // Assert\n        result.Should().Throw<DivideByZeroException>();\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Calculator.cs"',title:'"Calculator.cs"'},"public class Calculator\n{\n    public int Add(int first, int second)\n    {\n        return first + second;\n    }\n\n    public int Subtract(int first, int second)\n    {\n        return first - second;\n    }\n\n    public int Multiply(int first, int second)\n    {\n        return first * second;\n    }\n\n    public (int Result, int Remainder) Divide(int first, int second)\n    {\n        var result = first / second;\n        var remainder = first % second;\n        return (result, remainder);\n    }\n}\n"))))}p.isMDXComponent=!0}}]);