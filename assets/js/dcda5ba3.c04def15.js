"use strict";(self.webpackChunktesting_workshop=self.webpackChunktesting_workshop||[]).push([[3503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),u=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return n?s.createElement(m,r(r({ref:t},c),{},{components:n})):s.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=n(7462),a=(n(7294),n(3905));const i={description:"Building on what we already have"},r="Let's improve our test",l={unversionedId:"unit-testing/getting-started/lets-improve",id:"unit-testing/getting-started/lets-improve",title:"Let's improve our test",description:"Building on what we already have",source:"@site/docs/unit-testing/getting-started/lets-improve.md",sourceDirName:"unit-testing/getting-started",slug:"/unit-testing/getting-started/lets-improve",permalink:"/unit-testing/getting-started/lets-improve",draft:!1,tags:[],version:"current",frontMatter:{description:"Building on what we already have"},sidebar:"docs",previous:{title:"Structuring our solution",permalink:"/unit-testing/getting-started/solution-structure"},next:{title:"Arrange, Act, Assert",permalink:"/unit-testing/getting-started/arrange-act-assert"}},o={},u=[{value:"Improving naming",id:"improving-naming",level:2},{value:"Naming test classes",id:"naming-test-classes",level:3},{value:"Naming test methods",id:"naming-test-methods",level:3},{value:"Mixing things up",id:"mixing-things-up",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Fluent Assertions",id:"fluent-assertions",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lets-improve-our-test"},"Let's improve our test"),(0,a.kt)("h2",{id:"improving-naming"},"Improving naming"),(0,a.kt)("h3",{id:"naming-test-classes"},"Naming test classes"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Tests.cs")," is a really bad name for a class. The class name should immediately tell you (at a high level) which part of the application is being tested.\nInstead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"Tests.cs"),", we should use a pattern."),(0,a.kt)("p",null,"My preferred pattern for naming test classes is ",(0,a.kt)("inlineCode",{parentName:"p"},"<classname>Tests.cs"),". "),(0,a.kt)("p",null,"This means that in our scenario, the class name becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"IntCalculatorTests.cs"),". Now I immediately know that this test class contains tests for the class ",(0,a.kt)("inlineCode",{parentName:"p"},"IntCalculator.cs")," without having to open it.  "),(0,a.kt)("h3",{id:"naming-test-methods"},"Naming test methods"),(0,a.kt)("p",null,"Likewise ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," is a really bad name for a test.\nThe name of a test should tell you everything you need to know about what this test is doing.\nAt a glance you should know which method is tested and what it is being tested for."),(0,a.kt)("p",null,"My preferred pattern for naming tests is ",(0,a.kt)("inlineCode",{parentName:"p"},"<methodname>_Should<do-something>_When<condition-is-met>"),"."),(0,a.kt)("p",null,"With that in mind the new name should be ",(0,a.kt)("inlineCode",{parentName:"p"},"Add_ShouldAddTwoNumbers_WhenBothOfThemArePositiveIntegers"),"."),(0,a.kt)("p",null,"This makes our new class look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="IntCalculatorTests.cs"',title:'"IntCalculatorTests.cs"'},'[Fact]\npublic void Add_ShouldAddTwoNumbers_WhenBothOfThemArePositiveIntegers()\n{\n    var result = new IntCalculator().Add(1, 2);\n    if(result != 3)\n    {\n        throw new Exception("Result wasn\'t 3");\n    }\n}\n')),(0,a.kt)("h3",{id:"mixing-things-up"},"Mixing things up"),(0,a.kt)("p",null,"The line ",(0,a.kt)("inlineCode",{parentName:"p"},"var result = new IntCalculator().Add(1, 2);")," is problematic. It might not look like it now but consider the following."),(0,a.kt)("p",null,"The class we instantiate now needs dependencies and the method we are using has more parameters. You can see how this can get out of hand."),(0,a.kt)("p",null,"To make the code more readable and more manageable we can split the class we are testing by the method it is invoking. We will also call it ",(0,a.kt)("inlineCode",{parentName:"p"},"sut"),' which stands for "System under test".\nThis gives us a clear indication at which class is supposed to be tested in this test class.'),(0,a.kt)("p",null,"So now we are here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="IntCalculatorTests.cs"',title:'"IntCalculatorTests.cs"'},'[Fact]\npublic void Add_ShouldAddTwoNumbers_WhenBothOfThemArePositiveIntegers()\n{\n    var sut = new IntCalculator();\n\n    var result = sut.Add(1, 2);\n    if(result != 3)\n    {\n        throw new Exception("Result wasn\'t 3");\n    }\n}\n')),(0,a.kt)("h3",{id:"assertions"},"Assertions"),(0,a.kt)("p",null,"Checking the parameter and throwing an exception is perfectly valid but it doesn't look or read nicely. There is a better way to deal with asserting test results."),(0,a.kt)("p",null,"By default, the xUnit library has the ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert")," class which contains tons of static methods that we can use to assert test data."),(0,a.kt)("p",null,"In this case we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert.Equal")," method to check if the expected result matches the actual result."),(0,a.kt)("p",null,"So now our class looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="IntCalculatorTests.cs"',title:'"IntCalculatorTests.cs"'},"[Fact]\npublic void Add_ShouldAddTwoNumbers_WhenBothOfThemArePositiveIntegers()\n{\n    var sut = new IntCalculator();\n\n    var result = sut.Add(1, 2);\n    \n    Assert.Equal(3, result);\n}\n")),(0,a.kt)("p",null,"Now we are looking really good but we can be even better."),(0,a.kt)("h3",{id:"fluent-assertions"},"Fluent Assertions"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert")," class is technically fine but it has two drawbacks. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When tests fail, the failure message isn't that descriptive, making it harder for us to see what went wrong."),(0,a.kt)("li",{parentName:"ul"},"Having to invoke a static method doesn't read nicely.")),(0,a.kt)("p",null,"We can solve both of these problems by bringing in an excellent Nuget package called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fluentassertions/fluentassertions"},"FluentAssertions"),"."),(0,a.kt)("p",null,"You can install that either by the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet add package")," command or via your IDE's Nuget client."),(0,a.kt)("p",null,"Once installed we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".Should()")," extensions on any type which allows us to fluently describe what this method should do."),(0,a.kt)("p",null,"For our case the test becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="IntCalculatorTests.cs"',title:'"IntCalculatorTests.cs"'},"[Fact]\npublic void Add_ShouldAddTwoNumbers_WhenBothOfThemArePositiveIntegers()\n{\n    var sut = new IntCalculator();\n\n    var result = sut.Add(1, 2);\n    \n    result.Should().Be(3);\n}\n")),(0,a.kt)("p",null,"Comparing our final method with the first one shows how far we've come. Now at a glance we can see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Which class is being tested"),(0,a.kt)("li",{parentName:"ul"},"Which method is being tested"),(0,a.kt)("li",{parentName:"ul"},"Which result is being asserted against which expected value")))}d.isMDXComponent=!0}}]);