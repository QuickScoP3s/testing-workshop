"use strict";(self.webpackChunktesting_workshop=self.webpackChunktesting_workshop||[]).push([[1933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={description:"Creating our own WebApplicationFactory"},o="Our own WebApplicationFactory",l={unversionedId:"integration-testing/api/our-own-waf",id:"integration-testing/api/our-own-waf",title:"Our own WebApplicationFactory",description:"Creating our own WebApplicationFactory",source:"@site/docs/integration-testing/api/our-own-waf.md",sourceDirName:"integration-testing/api",slug:"/integration-testing/api/our-own-waf",permalink:"/integration-testing/api/our-own-waf",draft:!1,tags:[],version:"current",frontMatter:{description:"Creating our own WebApplicationFactory"},sidebar:"docs",previous:{title:"Writing the rest of the tests",permalink:"/integration-testing/api/write-the-tests"},next:{title:"Perfecting database cleanup",permalink:"/integration-testing/api/perfecting-data-cleanup"}},s={},c=[{value:"Creating the custom WebApplicationFactory",id:"creating-the-custom-webapplicationfactory",level:2},{value:"Running one server for all tests",id:"running-one-server-for-all-tests",level:2},{value:"Sharing the HttpClient",id:"sharing-the-httpclient",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"our-own-webapplicationfactory"},"Our own WebApplicationFactory"),(0,r.kt)("p",null,"The WebApplicationFactory has some great functionality out of the box but when we are doing real life testing there are several things that need to be customized.\nThis can be done in each individual test class but a better approach is to create our own custom WebApplicationFactory and customize it in a single place."),(0,r.kt)("h2",{id:"creating-the-custom-webapplicationfactory"},"Creating the custom WebApplicationFactory"),(0,r.kt)("p",null,"All we need to do to create the custom WebApplicationFactory is to create a class for our new factory and inherit from our WebApplicationFactory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class CustomerApiFactory : WebApplicationFactory<IApiMarker>\n{    \n}\n")),(0,r.kt)("p",null,"Simple as that. Now we have a custom WAF that we can modify in any way we want.\nFor example, it is very common to remove all logging providers from the API we are running for the tests because they don't really need to log anything."),(0,r.kt)("p",null,"To do that we can override the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureWebHost")," method and clear the providers by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureLogging")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class CustomerApiFactory : WebApplicationFactory<IApiMarker>\n{\n    protected override void ConfigureWebHost(IWebHostBuilder builder)\n    {\n        builder.ConfigureLogging(logging =>\n        {\n            logging.ClearProviders();\n        });\n    }\n}\n")),(0,r.kt)("h2",{id:"running-one-server-for-all-tests"},"Running one server for all tests"),(0,r.kt)("p",null,"Now to use it in our test class we will change our approach a bit.\nUp until now we've been creating one server per test. However, we don't need to do so, especially since we are using the same database for all tests.\nIt would be faster to simply create a single server for all tests and run them all sequentially.\nThis might sound like something that will take longer, but with startup and teardown, it is actually significantly faster."),(0,r.kt)("p",null,"To achieve this, first we need to create a collection fixture class.\nThis is a simple class that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"ICollectionFixture")," interface and uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerApiFactory")," as the generic type parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class SharedTestCollection : ICollectionFixture<CustomerApiFactory>\n{    \n}\n")),(0,r.kt)("p",null,"Now the only thing we need to do is to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"[CollectionDefinition]")," attribute and name the collection fixture:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[CollectionDefinition("Shared collection")]\npublic class SharedTestCollection : ICollectionFixture<CustomerApiFactory>\n{    \n}\n')),(0,r.kt)("p",null,"To use this shared collection fixture in our test we simply decorate the test class with the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Collection]")," attribute,\nusing the name of the collection definition we want to share."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[Collection("Shared collection")]\npublic class CustomerControllerTests : IAsyncLifetime\n{\n...\n')),(0,r.kt)("p",null,"So now, instead of instantiating in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerApiFactory")," itself we will simply inject it through the constructor of the test class.\nThat way, the lifetime of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerApiFactory")," will be a single instance for all our tests, assuming they all have the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Collection]")," attribute on them."),(0,r.kt)("p",null,"This is what the class looks like now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[Collection("Shared collection")]\npublic class CustomerControllerTests : IAsyncLifetime\n{\n    private readonly HttpClient _client;\n    private readonly List<Guid> _idsToDelete = new();\n\n    public CustomerControllerTests(CustomerApiFactory customerApiFactory)\n    {\n        _client = customerApiFactory.CreateClient(new WebApplicationFactoryClientOptions\n        {\n            BaseAddress = new Uri("https://localhost:5001")\n        });\n    }\n\n...\n')),(0,r.kt)("p",null,"This allows us to have full control over the creation and cleanup of both the test collection and each individual test."),(0,r.kt)("h2",{id:"sharing-the-httpclient"},"Sharing the HttpClient"),(0,r.kt)("p",null,"Now we can make one last change. Instead of creating an HttpClient for all of our tests, we can simply reuse the same one."),(0,r.kt)("p",null,"To do that, we will create a property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerApiFactory")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClient"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public HttpClient HttpClient { get; private set; } = default!;\n")),(0,r.kt)("p",null,"And then extend ",(0,r.kt)("inlineCode",{parentName:"p"},"IAsyncLifetime")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerApiFactory"),". That way we can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"InitializeAsync")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DisposeAsync")," methods."),(0,r.kt)("p",null,"We will only use the ",(0,r.kt)("inlineCode",{parentName:"p"},"InitializeAsync")," method that will be called ones for all our tests to initialize the HttpClient."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public async Task InitializeAsync()\n{\n    HttpClient = CreateClient(new WebApplicationFactoryClientOptions\n    {\n        BaseAddress = new Uri("https://localhost:5001")\n    });\n}\n')),(0,r.kt)("p",null,"Now in our test class we will simply reference the shared HttpClient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[Collection("Shared collection")]\npublic class CustomerControllerTests : IAsyncLifetime\n{\n    private readonly HttpClient _client;\n    private readonly List<Guid> _idsToDelete = new();\n\n    public CustomerControllerTests(CustomerApiFactory customerApiFactory)\n    {\n        _client = customerApiFactory.HttpClient;\n    }\n\n...\n')))}u.isMDXComponent=!0}}]);