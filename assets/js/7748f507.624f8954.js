"use strict";(self.webpackChunktesting_workshop=self.webpackChunktesting_workshop||[]).push([[3720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={description:"Verifying calls on items that don't return a result"},i="Verifying expected calls",s={unversionedId:"unit-testing/deep-dive/verify-calls",id:"unit-testing/deep-dive/verify-calls",title:"Verifying expected calls",description:"Verifying calls on items that don't return a result",source:"@site/docs/unit-testing/deep-dive/verify-calls.md",sourceDirName:"unit-testing/deep-dive",slug:"/unit-testing/deep-dive/verify-calls",permalink:"/unit-testing/deep-dive/verify-calls",draft:!1,tags:[],version:"current",frontMatter:{description:"Verifying calls on items that don't return a result"},sidebar:"docs",previous:{title:"Asserting exceptions",permalink:"/unit-testing/deep-dive/asserting-exceptions"},next:{title:"Exercise: The quote service",permalink:"/unit-testing/deep-dive/exercise-quote"}},l={},c=[{value:"Checking for received calls",id:"checking-for-received-calls",level:2},{value:"The problem",id:"the-problem",level:2},{value:"The solution",id:"the-solution",level:2},{value:"Verifying specific arguments",id:"verifying-specific-arguments",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verifying-expected-calls"},"Verifying expected calls"),(0,a.kt)("h2",{id:"checking-for-received-calls"},"Checking for received calls"),(0,a.kt)("p",null,"Sometimes, you want to verify that something happened, but the method you are testing, won't return anything related to that thing."),(0,a.kt)("p",null,"In our case, we want to make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"LogInformation")," call of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ILogger")," was invoked with the correct message and parameters.\nThe reason for that is that we might have alerts that get triggered given a specific log message being logged, or a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"elapsedMilliseconds")," threshold being exceeded."),(0,a.kt)("p",null,"Since there is no return item we can verify against, we need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Received")," extension method."),(0,a.kt)("p",null,"The Arrange and Act part of our code can be the same as in the happy path test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[Fact]\npublic async Task GetQuoteAsync_ShouldLogAppropriateMessage_WhenInvoked()\n{\n    // Arrange\n    var fromCurrency = "GBP";\n    var toCurrency = "USD";\n    var amount = 100;\n    var expectedRate = new FxRate\n    {\n        FromCurrency = fromCurrency,\n        ToCurrency = toCurrency,\n        TimestampUtc = DateTime.UtcNow,\n        Rate = 1.6m\n    };\n    \n    _ratesRepository.GetRateAsync(fromCurrency, toCurrency)\n        .Returns(expectedRate);\n    \n    // Act\n    await _sut.GetQuoteAsync(fromCurrency, toCurrency, amount);\n')),(0,a.kt)("p",null,"Assert, however, will be different. Instead of calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"LogInformation")," method and then making sure it returned something, we will called the ",(0,a.kt)("inlineCode",{parentName:"p"},"Received")," method.\nThis will allow us to check how many times the method received an invocation and we'll be able to assert the parameters themselves."),(0,a.kt)("p",null,"If we just wanted to assert that it received a call with text ",(0,a.kt)("inlineCode",{parentName:"p"},"Retrieved quote for currencies {FromCurrency}->{ToCurrency} in {ElapsedMilliseconds}ms")," and any parameters then Assert would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Assert\n_logger.Received(1).LogInformation("Retrieved quote for currencies {FromCurrency}->{ToCurrency} in {ElapsedMilliseconds}ms", Arg.Any<object?[]>());\n')),(0,a.kt)("p",null,'The way this reads is "The logger class, should have received 1 call on the ',(0,a.kt)("inlineCode",{parentName:"p"},"LogInformation")," method, will text ",(0,a.kt)("inlineCode",{parentName:"p"},"Retrieved quote for currencies {FromCurrency}->{ToCurrency} in {ElapsedMilliseconds}ms"),' and any parameters".'),(0,a.kt)("p",null,"This ",(0,a.kt)("em",{parentName:"p"},"SHOULD")," work, however our test fails. This is due to a different problem."),(0,a.kt)("h2",{id:"the-problem"},"The problem"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LogInformation")," is a static extension method on the ILogger interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="LoggerExtensions.cs"',title:'"LoggerExtensions.cs"'},"public static void LogInformation(this ILogger logger, string? message, params object?[] args)\n{\n    logger.Log(LogLevel.Information, message, args);\n}\n")),(0,a.kt)("p",null,"Since we can only mock instance methods of interfaces, the capturing of the call fails."),(0,a.kt)("p",null,"In order to make this work, we need to follow the invocations of what the extension method is calling behind the scenes. The deepest level of invocation is this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="LoggerExtensions.cs"',title:'"LoggerExtensions.cs"'},"public static void Log(this ILogger logger, LogLevel logLevel, EventId eventId, Exception? exception, string? message, params object?[] args)\n{\n    if (logger == null)\n    {\n        throw new ArgumentNullException(nameof(logger));\n    }\n\n    logger.Log(logLevel, eventId, new FormattedLogValues(message, args), exception, _messageFormatter);\n}\n")),(0,a.kt)("p",null,"Even though I could attempt to mock this call and verify it, we have a very serious problem. ",(0,a.kt)("inlineCode",{parentName:"p"},"FormattedLogValues")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"internal")," ",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),"."),(0,a.kt)("p",null,"Since we don't have access to that struct we cannot ",(0,a.kt)("em",{parentName:"p"},"easily")," assert its values. There is, however, a solution."),(0,a.kt)("h2",{id:"the-solution"},"The solution"),(0,a.kt)("p",null,"We will use the Adapter pattern. We will create our own ",(0,a.kt)("inlineCode",{parentName:"p"},"ILoggerAdapter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerAdapter")," implementation that injects the ",(0,a.kt)("inlineCode",{parentName:"p"},"ILogger<T>")," into it and effectively proxies the calls."),(0,a.kt)("p",null,"Here are the class and interface that we need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="ILoggerAdapter.cs"',title:'"ILoggerAdapter.cs"'},"public interface ILoggerAdapter<T>\n{\n    void LogInformation(string messageTemplate, params object?[] args);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="LoggerAdapter.cs"',title:'"LoggerAdapter.cs"'},"public class LoggerAdapter<T> : ILoggerAdapter<T>\n{\n    private readonly ILogger<T> _logger;\n\n    public LoggerAdapter(ILogger<T> logger)\n    {\n        _logger = logger;\n    }\n\n    public void LogInformation(string messageTemplate, params object?[] args)\n    {\n        _logger.LogInformation(messageTemplate, args);\n    }\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Don't worry that we don't implement all the methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ILogger"),". We can implement them as we go forward and as we require them. ")),(0,a.kt)("p",null,"With that, we can change the injected services of our ",(0,a.kt)("inlineCode",{parentName:"p"},"QuoteService")," to use the logger adapter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="QuoteService"',title:'"QuoteService"'},"private readonly IRatesRepository _ratesRepository;\nprivate readonly ILoggerAdapter<QuoteService> _logger;\n\npublic QuoteService(IRatesRepository ratesRepository, ILoggerAdapter<QuoteService> logger)\n{\n    _ratesRepository = ratesRepository;\n    _logger = logger;\n}\n")),(0,a.kt)("p",null,"And last but not least, register our open types to dependency injection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"builder.Services.AddSingleton(typeof(ILoggerAdapter<>), typeof(LoggerAdapter<>));\n")),(0,a.kt)("p",null,"Now we can run our test again and it passes \u2705!"),(0,a.kt)("h2",{id:"verifying-specific-arguments"},"Verifying specific arguments"),(0,a.kt)("p",null,"As you might have noticed, we used ",(0,a.kt)("inlineCode",{parentName:"p"},"Arg.Any<object?[]>()"),' above to say "I don\'t case what parameters this method was invoked with".'),(0,a.kt)("p",null,"This ",(0,a.kt)("em",{parentName:"p"},"might")," be fine in some scenarios but what if we want to check the specific parameters? This is where the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arg.Is")," method comes in."),(0,a.kt)("p",null,"Since we are verifying an array, we can use a delegate and check each item individually. This is how it would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Assert\n_logger.Received(1)\n    .LogInformation("Retrieved quote for currencies {FromCurrency}->{ToCurrency} in {ElapsedMilliseconds}ms",\n        Arg.Is<object[]>(x => \n            x[0].ToString() == fromCurrency && \n            x[1].ToString() == toCurrency));\n')))}g.isMDXComponent=!0}}]);