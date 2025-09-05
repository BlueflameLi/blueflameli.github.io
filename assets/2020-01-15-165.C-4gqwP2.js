import{_ as m}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.CefZrO8y.js";import"./chunks/pinia.DsHLo5tT.js";import{e as f,u as h,a as b}from"./chunks/vue-router.Ffbtoo0e.js";import{a7 as g,a8 as y,an as a,V as v,am as e,af as n,aj as s,Z as _}from"./framework.DZImrh0B.js";import"./app.CbS7z7wV.js";import"./chunks/dayjs.BdcnXKr1.js";import"./chunks/vue-i18n.DOs4xXBl.js";/* empty css                    */import"./chunks/nprogress.B6x19dEb.js";import"./content.iwmwugc9.js";import"./router.-rV2tM5K.js";const w=f("/posts/2020-01-15-165",async i=>JSON.parse('{"title":"区块链学习笔记（二）","description":"","frontmatter":{"title":"区块链学习笔记（二）","date":"2020-01-15","updated":"2021-03-07","categories":["学习笔记","区块链"],"tags":["Solidity","智能合约"]},"headers":[],"relativePath":"pages/posts/2020-01-15-165.md","lastUpdated":1757080456000}'),{lazy:(i,p)=>i.name===p.name}),H={__name:"2020-01-15-165",setup(i,{expose:p}){const{data:r}=w(),u=b(),o=h(),t=Object.assign(o.meta.frontmatter||{},r.value?.frontmatter||{});return u.currentRoute.value.data=r.value,_("valaxy:frontmatter",t),globalThis.$frontmatter=t,p({frontmatter:{title:"区块链学习笔记（二）",date:"2020-01-15",updated:"2021-03-07",categories:["学习笔记","区块链"],tags:["Solidity","智能合约"]}}),(l,c)=>{const d=m;return y(),g(d,{frontmatter:v(t)},{"main-content-md":a(()=>[...c[0]||(c[0]=[n("p",null,"[info]第一天主要是了解以太坊的基本操作，第二天是合约入门，第三天是Dapps入门，不过由于Dapps比较难，需要结合其他的编程语言，我们培训时是利用JavaScript以网页的形式展示，因此还需要配置一个服务器环境，比较繁琐，所以这部分的内容我就不写了，这是最后一篇[/info]",-1),n("h2",{id:"solidity",tabindex:"-1"},[s("Solidity "),n("a",{class:"header-anchor",href:"#solidity","aria-label":'Permalink to "Solidity"'},"​")],-1),n("p",null,[s("首先要编写合约那么自然是需要一种编程语言，Solidity是一种基于以太坊的区块链语言，语法类似JavaScript，常用于智能合约的编写。Solidity自然也需要一个编辑器，这里我们使用一个在线IDE——"),n("a",{href:"https://remix.ethereum.org/"},"Remix"),s("。首先选择Solidity环境，然后左边会多出许多按钮，我们待会儿，将会用到它们")],-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.1.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"先新建一个sol文件，名字叫什么都可以。",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.2.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"从头开始写一个合约对于我们来说还太过困难，所以我们找一个现成的模板，那么最常见的合约自然就是代币的合约了。",-1),n("h2",{id:"发行属于自己的代币",tabindex:"-1"},[s("发行属于自己的代币 "),n("a",{class:"header-anchor",href:"#发行属于自己的代币","aria-label":'Permalink to "发行属于自己的代币"'},"​")],-1),n("p",null,[s("我发行的代币LZH的合约地址是0xe34c6bf29e43edc9d4c7bc06cb3ba79638185149，因为我已经公开了代码所以大家可以直接在etherscan里找到我的代码，不过由于需要翻墙，所以我直接把代码放出来（我也放在了"),n("a",{href:"https://github.com/BlueflameLi/ETH"},"GitHub"),s("上，也可以从上面下）。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," *Submitted for verification at Etherscan.io on 2017-12-26")]),s(`
`),n("span",{class:"line"},[n("span",null,"*/")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"pragma solidity ^0.4.18;")]),s(`
`),n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * This smart contract code is Copyright 2017 Bitmart. For more information see https://www.bitmart.com")]),s(`
`),n("span",{class:"line"},[n("span",null," *")]),s(`
`),n("span",{class:"line"},[n("span",null," * Licensed under the Apache License, version 2.0")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * @title SafeMath")]),s(`
`),n("span",{class:"line"},[n("span",null," * @dev Math operations with safety checks that revert() on error")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"library SafeMath {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  function mul(uint256 a, uint256 b) internal pure returns (uint256) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (a == 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    uint256 c = a * b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    assert(c / a == b);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return c;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  function div(uint256 a, uint256 b) internal pure returns (uint256) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // assert(b > 0);"),n("span",null," // Solidity automatically revert()s when dividing by 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"    uint256 c = a / b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // assert(a == b * c + a % b);"),n("span",null," // There is no case in which this doesn't hold")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return c;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  function sub(uint256 a, uint256 b) internal pure returns (uint256) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    assert(b <= a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return a - b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  function add(uint256 a, uint256 b) internal pure returns (uint256) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    uint256 c = a + b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    assert(c >= a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return c;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"/*")]),s(`
`),n("span",{class:"line"},[n("span",null," * LZH"),n("span",null,"                            //从这里开始把所有的LZH换成你的代币")]),s(`
`),n("span",{class:"line"},[n("span",null," *")]),s(`
`),n("span",{class:"line"},[n("span",null," * Abstract contract that create Bitmart Token based on ERC20.")]),s(`
`),n("span",{class:"line"},[n("span",null," *")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"contract LZH {                   //这里是第一个")]),s(`
`),n("span",{class:"line"},[n("span",null,"    using SafeMath for uint256;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    string public name;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    string public symbol;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    uint8 public decimals;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    uint256 public totalSupply;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    address public owner;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* This creates an array with all balances */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    mapping (address => uint256) public balanceOf;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    mapping (address => uint256) public freezeOf;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    mapping (address => mapping (address => uint256)) public allowance;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* This generates a public event on the blockchain that will notify clients */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    event Transfer(address indexed from, address indexed to, uint256 value);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* This notifies clients about the amount burnt */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    event Burn(address indexed from, uint256 value);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* This notifies clients about the amount frozen */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    event Freeze(address indexed from, uint256 value);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* This notifies clients about the amount unfrozen */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    event Unfreeze(address indexed from, uint256 value);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* This notifies the owner transfer */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* Initializes contract with initial supply tokens to the creator of the contract */       //下面这个函数里总共有三个")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function LZH( uint256 initialSupply, uint8 decimalUnits) public {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[msg.sender] = initialSupply; // Give the creator all initial tokens")]),s(`
`),n("span",{class:"line"},[n("span",null,"        totalSupply = initialSupply; // Update total supply")]),s(`
`),n("span",{class:"line"},[n("span",null,'        name = "LZHToken";   // Set the name for display purposes')]),s(`
`),n("span",{class:"line"},[n("span",null,'        symbol = "LZH";    // Set the symbol for display purposes')]),s(`
`),n("span",{class:"line"},[n("span",null,"        decimals = decimalUnits;  // Amount of decimals for display purposes")]),s(`
`),n("span",{class:"line"},[n("span",null,"        owner = msg.sender;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @dev Throws if called by any account other than the owner.")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    modifier onlyOwner() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      require(msg.sender == owner);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      _;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @dev Allows the current owner to transfer control of the contract to a newOwner.")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param newOwner The address to transfer ownership to.")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function transferOwnership(address newOwner) public onlyOwner {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      require(newOwner != address(0));")]),s(`
`),n("span",{class:"line"},[n("span",null,"      OwnershipTransferred(owner, newOwner);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      owner = newOwner;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* Send Coins */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function transfer(address _to, uint256 _value) public {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_to != 0x0);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_value > 0);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(balanceOf[msg.sender] >= _value );// Check if the sender has enough")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value); // Subtract from the sender")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[_to] = balanceOf[_to].add(_value);  // Add the same to the recipient")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Transfer(msg.sender, _to, _value);   // Notify anyone listening that this transfer took place")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* Allow another contract to spend some tokens in your behalf */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function approve(address _spender, uint256 _value) public returns (bool) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_value > 0);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        allowance[msg.sender][_spender] = _value;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* A contract attempts to get the coins */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_to != 0x0);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_value > 0);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(balanceOf[_from] >= _value );// Check if the sender has enough")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_value <= allowance[_from][msg.sender]); // Check allowance")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[_from] = balanceOf[_from].sub(_value);   // Subtract from the sender")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[_to] = balanceOf[_to].add(_value);  // Add the same to the recipient")]),s(`
`),n("span",{class:"line"},[n("span",null,"        allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Transfer(_from, _to, _value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function burn(uint256 _value) public onlyOwner returns (bool) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(balanceOf[msg.sender] >= _value);// Check if the sender has enough")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_value > 0);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);  // Subtract from the sender")]),s(`
`),n("span",{class:"line"},[n("span",null,"        totalSupply = totalSupply.sub(_value); // Updates totalSupply")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Burn(msg.sender, _value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function freeze(uint256 _value) public returns (bool) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(balanceOf[msg.sender] >= _value);// Check if the sender has enough")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_value > 0);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value); // Subtract from the sender")]),s(`
`),n("span",{class:"line"},[n("span",null,"        freezeOf[msg.sender] = freezeOf[msg.sender].add(_value);  // Updates totalSupply")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Freeze(msg.sender, _value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function unfreeze(uint256 _value) public returns (bool) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(freezeOf[msg.sender] >= _value); // Check if the sender has enough")]),s(`
`),n("span",{class:"line"},[n("span",null,"        require(_value > 0);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        freezeOf[msg.sender] = freezeOf[msg.sender].sub(_value); // Subtract from the sender")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balanceOf[msg.sender] = balanceOf[msg.sender].add(_value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Unfreeze(msg.sender, _value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // transfer contract balance to owner")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function withdrawEther(uint256 amount) public onlyOwner {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        owner.transfer(amount);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // can accept ether")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function() payable public {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"首先我们先编译一下，看看有没有问题。",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.3.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后选择好你要发行的代币数量，你的代币就成功发行了。",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.4.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h2",{id:"代码公开",tabindex:"-1"},[s("代码公开 "),n("a",{class:"header-anchor",href:"#代码公开","aria-label":'Permalink to "代码公开"'},"​")],-1),n("p",null,"你可以选择公开你的合约代码，这样别人可以参考你的合约，也可以帮你寻找漏洞。在发行完后会返回一个地址，这是你创建合约这一交易的地址，你可以从中找到你的合约的地址（需要翻墙）。",-1),n("p",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.5.png",alt:""}),n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.6.png",alt:""})],-1),n("p",null,"你可以在这里看到合约的代码，如果已经公开了的话",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.7.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"公开代码需要证明你是合约创建人",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.8.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"最后把代码粘贴上去即可，不过有时候可能会莫名报错，可以多试几次。",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.9.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"再回到之前的页面，你可以看到Contract旁边多了个绿色的小圆点，说明你的代码已经公开了，所有人都可以在这看到。",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.10.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h2",{id:"函数的调用",tabindex:"-1"},[s("函数的调用 "),n("a",{class:"header-anchor",href:"#函数的调用","aria-label":'Permalink to "函数的调用"'},"​")],-1),n("p",null,"回到编辑器那，点击左下角，我们可以看到合约中包含的函数，我们可以直接在这里通过可视化的界面调用它们。",-1),n("figure",null,[n("img",{src:"https://img.blueflame.org.cn/images/2020/01/blockchain2.11.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[s("[success]到此为止，我们已经对智能合约有个大概的了解了，之前说了Dapps比较难通过这种方式将清楚，如果你想要更深入的了解智能合约，深入学习Solidity这门语言，或者你想要学一下Dapps，你可以玩一下这个"),n("span",{style:{color:"#00ccff"}},[n("a",{style:{color:"#00ccff"},href:"https://cryptozombies.io/zh/"},"CryptoZombies（点击访问）")]),s("，它会一步一步教你如何用Solidity编写合约，最后开发一个Dapps，总共有六关，一关需要一个多小时，全部玩完，你将会对智能合约和Dapps有个深入的认识[/success]")],-1)])]),"main-header":a(()=>[e(l.$slots,"main-header")]),"main-header-after":a(()=>[e(l.$slots,"main-header-after")]),"main-nav":a(()=>[e(l.$slots,"main-nav")]),"main-content-before":a(()=>[e(l.$slots,"main-content-before")]),"main-content":a(()=>[e(l.$slots,"main-content")]),"main-content-after":a(()=>[e(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(l.$slots,"main-nav-after")]),comment:a(()=>[e(l.$slots,"comment")]),footer:a(()=>[e(l.$slots,"footer")]),aside:a(()=>[e(l.$slots,"aside")]),"aside-custom":a(()=>[e(l.$slots,"aside-custom")]),default:a(()=>[e(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{H as default,w as usePageData};
