import{Bt as e,Ht as t,Q as n,U as r,W as i,er as a,qn as o,qt as s,yn as c}from"./framework.-xTZ69yZ.js";import{t as l}from"./theme.Dd_xa-I-.js";import"./chunks/vue-i18n.BZkg-cUA.js";import{a as u,o as d}from"./chunks/vue-router.vYjpA2U9.js";var f={__name:`2020-01-15-165`,setup(f,{expose:p}){let m=o(JSON.parse(`{"title":"区块链学习笔记（二）","description":"","frontmatter":{"title":"区块链学习笔记（二）","date":"2020-01-15","updated":"2021-03-07","categories":["学习笔记","区块链"],"tags":["Solidity","智能合约"],"firstImage":"https://img.blueflame.org.cn/images/2020/01/blockchain2.1.png"},"headers":[],"relativePath":"pages/posts/2020-01-15-165.md"}`)),h=d(),g=u(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,t(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`区块链学习笔记（二）`,date:`2020-01-15`,updated:`2021-03-07`,categories:[`学习笔记`,`区块链`],tags:[`Solidity`,`智能合约`]}}),(t,o)=>{let u=l;return e(),i(u,{frontmatter:a(_)},{"main-content-md":c(()=>[...o[0]||=[r(`p`,null,`[info]第一天主要是了解以太坊的基本操作，第二天是合约入门，第三天是Dapps入门，不过由于Dapps比较难，需要结合其他的编程语言，我们培训时是利用JavaScript以网页的形式展示，因此还需要配置一个服务器环境，比较繁琐，所以这部分的内容我就不写了，这是最后一篇[/info]`,-1),r(`h2`,{id:`solidity`,tabindex:`-1`},[n(`Solidity `),r(`a`,{class:`header-anchor`,href:`#solidity`,"aria-label":`Permalink to "Solidity"`},`​`)],-1),r(`p`,null,[n(`首先要编写合约那么自然是需要一种编程语言，Solidity是一种基于以太坊的区块链语言，语法类似JavaScript，常用于智能合约的编写。Solidity自然也需要一个编辑器，这里我们使用一个在线IDE——`),r(`a`,{href:`https://remix.ethereum.org/`},`Remix`),n(`。首先选择Solidity环境，然后左边会多出许多按钮，我们待会儿，将会用到它们`)],-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.1.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`p`,null,`先新建一个sol文件，名字叫什么都可以。`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.2.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`p`,null,`从头开始写一个合约对于我们来说还太过困难，所以我们找一个现成的模板，那么最常见的合约自然就是代币的合约了。`,-1),r(`h2`,{id:`发行属于自己的代币`,tabindex:`-1`},[n(`发行属于自己的代币 `),r(`a`,{class:`header-anchor`,href:`#发行属于自己的代币`,"aria-label":`Permalink to "发行属于自己的代币"`},`​`)],-1),r(`p`,null,[n(`我发行的代币LZH的合约地址是0xe34c6bf29e43edc9d4c7bc06cb3ba79638185149，因为我已经公开了代码所以大家可以直接在etherscan里找到我的代码，不过由于需要翻墙，所以我直接把代码放出来（我也放在了`),r(`a`,{href:`https://github.com/BlueflameLi/ETH`},`GitHub`),n(`上，也可以从上面下）。`)],-1),r(`div`,{class:`language-`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`/**`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` *Submitted for verification at Etherscan.io on 2017-12-26`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`*/`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`pragma solidity ^0.4.18;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`/**`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * This smart contract code is Copyright 2017 Bitmart. For more information see https://www.bitmart.com`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` *`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * Licensed under the Apache License, version 2.0`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`/**`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * @title SafeMath`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * @dev Math operations with safety checks that revert() on error`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`library SafeMath {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function mul(uint256 a, uint256 b) internal pure returns (uint256) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (a == 0) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      return 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    uint256 c = a * b;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    assert(c / a == b);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return c;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function div(uint256 a, uint256 b) internal pure returns (uint256) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // assert(b > 0);`),r(`span`,null,` // Solidity automatically revert()s when dividing by 0`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    uint256 c = a / b;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // assert(a == b * c + a % b);`),r(`span`,null,` // There is no case in which this doesn't hold`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return c;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function sub(uint256 a, uint256 b) internal pure returns (uint256) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    assert(b <= a);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return a - b;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function add(uint256 a, uint256 b) internal pure returns (uint256) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    uint256 c = a + b;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    assert(c >= a);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return c;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`/*`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * LZH`),r(`span`,null,`                            //从这里开始把所有的LZH换成你的代币`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` *`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * Abstract contract that create Bitmart Token based on ERC20.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` *`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`contract LZH {                   //这里是第一个`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    using SafeMath for uint256;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    string public name;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    string public symbol;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    uint8 public decimals;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    uint256 public totalSupply;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    address public owner;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* This creates an array with all balances */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    mapping (address => uint256) public balanceOf;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    mapping (address => uint256) public freezeOf;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    mapping (address => mapping (address => uint256)) public allowance;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* This generates a public event on the blockchain that will notify clients */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    event Transfer(address indexed from, address indexed to, uint256 value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* This notifies clients about the amount burnt */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    event Burn(address indexed from, uint256 value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* This notifies clients about the amount frozen */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    event Freeze(address indexed from, uint256 value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* This notifies clients about the amount unfrozen */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    event Unfreeze(address indexed from, uint256 value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* This notifies the owner transfer */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* Initializes contract with initial supply tokens to the creator of the contract */       //下面这个函数里总共有三个`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function LZH( uint256 initialSupply, uint8 decimalUnits) public {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[msg.sender] = initialSupply; // Give the creator all initial tokens`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        totalSupply = initialSupply; // Update total supply`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        name = "LZHToken";   // Set the name for display purposes`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        symbol = "LZH";    // Set the symbol for display purposes`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        decimals = decimalUnits;  // Amount of decimals for display purposes`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        owner = msg.sender;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /**`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`     * @dev Throws if called by any account other than the owner.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`     */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    modifier onlyOwner() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      require(msg.sender == owner);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      _;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /**`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`     * @dev Allows the current owner to transfer control of the contract to a newOwner.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`     * @param newOwner The address to transfer ownership to.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`     */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function transferOwnership(address newOwner) public onlyOwner {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      require(newOwner != address(0));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      OwnershipTransferred(owner, newOwner);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      owner = newOwner;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* Send Coins */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function transfer(address _to, uint256 _value) public {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_to != 0x0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_value > 0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(balanceOf[msg.sender] >= _value );// Check if the sender has enough`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value); // Subtract from the sender`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[_to] = balanceOf[_to].add(_value);  // Add the same to the recipient`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Transfer(msg.sender, _to, _value);   // Notify anyone listening that this transfer took place`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* Allow another contract to spend some tokens in your behalf */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function approve(address _spender, uint256 _value) public returns (bool) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_value > 0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        allowance[msg.sender][_spender] = _value;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        return true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* A contract attempts to get the coins */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_to != 0x0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_value > 0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(balanceOf[_from] >= _value );// Check if the sender has enough`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_value <= allowance[_from][msg.sender]); // Check allowance`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[_from] = balanceOf[_from].sub(_value);   // Subtract from the sender`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[_to] = balanceOf[_to].add(_value);  // Add the same to the recipient`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Transfer(_from, _to, _value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        return true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function burn(uint256 _value) public onlyOwner returns (bool) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(balanceOf[msg.sender] >= _value);// Check if the sender has enough`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_value > 0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);  // Subtract from the sender`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        totalSupply = totalSupply.sub(_value); // Updates totalSupply`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Burn(msg.sender, _value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        return true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function freeze(uint256 _value) public returns (bool) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(balanceOf[msg.sender] >= _value);// Check if the sender has enough`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_value > 0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value); // Subtract from the sender`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        freezeOf[msg.sender] = freezeOf[msg.sender].add(_value);  // Updates totalSupply`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Freeze(msg.sender, _value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        return true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function unfreeze(uint256 _value) public returns (bool) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(freezeOf[msg.sender] >= _value); // Check if the sender has enough`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        require(_value > 0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        freezeOf[msg.sender] = freezeOf[msg.sender].sub(_value); // Subtract from the sender`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        balanceOf[msg.sender] = balanceOf[msg.sender].add(_value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Unfreeze(msg.sender, _value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        return true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // transfer contract balance to owner`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function withdrawEther(uint256 amount) public onlyOwner {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        owner.transfer(amount);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // can accept ether`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function() payable public {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`p`,null,`首先我们先编译一下，看看有没有问题。`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.3.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`p`,null,`然后选择好你要发行的代币数量，你的代币就成功发行了。`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.4.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`h2`,{id:`代码公开`,tabindex:`-1`},[n(`代码公开 `),r(`a`,{class:`header-anchor`,href:`#代码公开`,"aria-label":`Permalink to "代码公开"`},`​`)],-1),r(`p`,null,`你可以选择公开你的合约代码，这样别人可以参考你的合约，也可以帮你寻找漏洞。在发行完后会返回一个地址，这是你创建合约这一交易的地址，你可以从中找到你的合约的地址（需要翻墙）。`,-1),r(`p`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.5.png`,alt:``}),r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.6.png`,alt:``})],-1),r(`p`,null,`你可以在这里看到合约的代码，如果已经公开了的话`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.7.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`p`,null,`公开代码需要证明你是合约创建人`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.8.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`p`,null,`最后把代码粘贴上去即可，不过有时候可能会莫名报错，可以多试几次。`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.9.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`p`,null,`再回到之前的页面，你可以看到Contract旁边多了个绿色的小圆点，说明你的代码已经公开了，所有人都可以在这看到。`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.10.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`h2`,{id:`函数的调用`,tabindex:`-1`},[n(`函数的调用 `),r(`a`,{class:`header-anchor`,href:`#函数的调用`,"aria-label":`Permalink to "函数的调用"`},`​`)],-1),r(`p`,null,`回到编辑器那，点击左下角，我们可以看到合约中包含的函数，我们可以直接在这里通过可视化的界面调用它们。`,-1),r(`figure`,null,[r(`img`,{src:`https://img.blueflame.org.cn/images/2020/01/blockchain2.11.png`,alt:``,loading:`lazy`,decoding:`async`,class:`lazy`})],-1),r(`p`,null,[n(`[success]到此为止，我们已经对智能合约有个大概的了解了，之前说了Dapps比较难通过这种方式将清楚，如果你想要更深入的了解智能合约，深入学习Solidity这门语言，或者你想要学一下Dapps，你可以玩一下这个`),r(`span`,{style:{color:`#00ccff`}},[r(`a`,{style:{color:`#00ccff`},href:`https://cryptozombies.io/zh/`},`CryptoZombies（点击访问）`)]),n(`，它会一步一步教你如何用Solidity编写合约，最后开发一个Dapps，总共有六关，一关需要一个多小时，全部玩完，你将会对智能合约和Dapps有个深入的认识[/success]`)],-1)]]),"main-header":c(()=>[s(t.$slots,`main-header`)]),"main-header-after":c(()=>[s(t.$slots,`main-header-after`)]),"main-nav":c(()=>[s(t.$slots,`main-nav`)]),"main-content-before":c(()=>[s(t.$slots,`main-content-before`)]),"main-content":c(()=>[s(t.$slots,`main-content`)]),"main-content-after":c(()=>[s(t.$slots,`main-content-after`)]),"main-nav-before":c(()=>[s(t.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[s(t.$slots,`main-nav-after`)]),comment:c(()=>[s(t.$slots,`comment`)]),footer:c(()=>[s(t.$slots,`footer`)]),aside:c(()=>[s(t.$slots,`aside`)]),"aside-custom":c(()=>[s(t.$slots,`aside-custom`)]),default:c(()=>[s(t.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};