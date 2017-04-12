/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	module.exports = __webpack_require__(367);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(71);
	
	__webpack_require__(362);
	
	__webpack_require__(364);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(143);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(154);
	__webpack_require__(156);
	__webpack_require__(158);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(210);
	__webpack_require__(211);
	__webpack_require__(212);
	__webpack_require__(213);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(256);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(280);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(320);
	__webpack_require__(321);
	__webpack_require__(322);
	__webpack_require__(323);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	__webpack_require__(329);
	__webpack_require__(330);
	__webpack_require__(332);
	__webpack_require__(333);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(338);
	__webpack_require__(339);
	__webpack_require__(340);
	__webpack_require__(341);
	__webpack_require__(342);
	__webpack_require__(343);
	__webpack_require__(344);
	__webpack_require__(345);
	__webpack_require__(347);
	__webpack_require__(348);
	__webpack_require__(349);
	__webpack_require__(350);
	__webpack_require__(351);
	__webpack_require__(352);
	__webpack_require__(353);
	__webpack_require__(354);
	__webpack_require__(355);
	__webpack_require__(356);
	__webpack_require__(357);
	__webpack_require__(360);
	__webpack_require__(361);
	module.exports = __webpack_require__(78);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(73)
	  , has            = __webpack_require__(74)
	  , DESCRIPTORS    = __webpack_require__(75)
	  , $export        = __webpack_require__(77)
	  , redefine       = __webpack_require__(87)
	  , META           = __webpack_require__(91).KEY
	  , $fails         = __webpack_require__(76)
	  , shared         = __webpack_require__(92)
	  , setToStringTag = __webpack_require__(93)
	  , uid            = __webpack_require__(88)
	  , wks            = __webpack_require__(94)
	  , wksExt         = __webpack_require__(95)
	  , wksDefine      = __webpack_require__(96)
	  , keyOf          = __webpack_require__(98)
	  , enumKeys       = __webpack_require__(111)
	  , isArray        = __webpack_require__(114)
	  , anObject       = __webpack_require__(81)
	  , toIObject      = __webpack_require__(101)
	  , toPrimitive    = __webpack_require__(85)
	  , createDesc     = __webpack_require__(86)
	  , _create        = __webpack_require__(115)
	  , gOPNExt        = __webpack_require__(118)
	  , $GOPD          = __webpack_require__(120)
	  , $DP            = __webpack_require__(80)
	  , $keys          = __webpack_require__(99)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(119).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(113).f  = $propertyIsEnumerable;
	  __webpack_require__(112).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(97)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(79)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 73 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 74 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(76)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(73)
	  , core      = __webpack_require__(78)
	  , hide      = __webpack_require__(79)
	  , redefine  = __webpack_require__(87)
	  , ctx       = __webpack_require__(89)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 78 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(80)
	  , createDesc = __webpack_require__(86);
	module.exports = __webpack_require__(75) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(81)
	  , IE8_DOM_DEFINE = __webpack_require__(83)
	  , toPrimitive    = __webpack_require__(85)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(75) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(82);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(75) && !__webpack_require__(76)(function(){
	  return Object.defineProperty(__webpack_require__(84)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(82)
	  , document = __webpack_require__(73).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(82);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(73)
	  , hide      = __webpack_require__(79)
	  , has       = __webpack_require__(74)
	  , SRC       = __webpack_require__(88)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(78).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 88 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(90);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(88)('meta')
	  , isObject = __webpack_require__(82)
	  , has      = __webpack_require__(74)
	  , setDesc  = __webpack_require__(80).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(76)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(73)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(80).f
	  , has = __webpack_require__(74)
	  , TAG = __webpack_require__(94)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(92)('wks')
	  , uid        = __webpack_require__(88)
	  , Symbol     = __webpack_require__(73).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(94);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(73)
	  , core           = __webpack_require__(78)
	  , LIBRARY        = __webpack_require__(97)
	  , wksExt         = __webpack_require__(95)
	  , defineProperty = __webpack_require__(80).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(99)
	  , toIObject = __webpack_require__(101);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(100)
	  , enumBugKeys = __webpack_require__(110);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(74)
	  , toIObject    = __webpack_require__(101)
	  , arrayIndexOf = __webpack_require__(105)(false)
	  , IE_PROTO     = __webpack_require__(109)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(102)
	  , defined = __webpack_require__(104);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(103);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(101)
	  , toLength  = __webpack_require__(106)
	  , toIndex   = __webpack_require__(108);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(107)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(107)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(92)('keys')
	  , uid    = __webpack_require__(88);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(99)
	  , gOPS    = __webpack_require__(112)
	  , pIE     = __webpack_require__(113);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 113 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(103);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(81)
	  , dPs         = __webpack_require__(116)
	  , enumBugKeys = __webpack_require__(110)
	  , IE_PROTO    = __webpack_require__(109)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(84)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(117).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(80)
	  , anObject = __webpack_require__(81)
	  , getKeys  = __webpack_require__(99);
	
	module.exports = __webpack_require__(75) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(73).document && document.documentElement;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(101)
	  , gOPN      = __webpack_require__(119).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(100)
	  , hiddenKeys = __webpack_require__(110).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(113)
	  , createDesc     = __webpack_require__(86)
	  , toIObject      = __webpack_require__(101)
	  , toPrimitive    = __webpack_require__(85)
	  , has            = __webpack_require__(74)
	  , IE8_DOM_DEFINE = __webpack_require__(83)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(75) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(115)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(75), 'Object', {defineProperty: __webpack_require__(80).f});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(75), 'Object', {defineProperties: __webpack_require__(116)});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(101)
	  , $getOwnPropertyDescriptor = __webpack_require__(120).f;
	
	__webpack_require__(125)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(77)
	  , core    = __webpack_require__(78)
	  , fails   = __webpack_require__(76);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(127)
	  , $getPrototypeOf = __webpack_require__(128);
	
	__webpack_require__(125)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(104);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(74)
	  , toObject    = __webpack_require__(127)
	  , IE_PROTO    = __webpack_require__(109)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(127)
	  , $keys    = __webpack_require__(99);
	
	__webpack_require__(125)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(125)('getOwnPropertyNames', function(){
	  return __webpack_require__(118).f;
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(82)
	  , meta     = __webpack_require__(91).onFreeze;
	
	__webpack_require__(125)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(82)
	  , meta     = __webpack_require__(91).onFreeze;
	
	__webpack_require__(125)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(82)
	  , meta     = __webpack_require__(91).onFreeze;
	
	__webpack_require__(125)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(82);
	
	__webpack_require__(125)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(82);
	
	__webpack_require__(125)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(82);
	
	__webpack_require__(125)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(77);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(138)});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(99)
	  , gOPS     = __webpack_require__(112)
	  , pIE      = __webpack_require__(113)
	  , toObject = __webpack_require__(127)
	  , IObject  = __webpack_require__(102)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(76)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(77);
	$export($export.S, 'Object', {is: __webpack_require__(140)});

/***/ },
/* 140 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(77);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(142).set});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(82)
	  , anObject = __webpack_require__(81);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(89)(Function.call, __webpack_require__(120).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(144)
	  , test    = {};
	test[__webpack_require__(94)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(87)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(103)
	  , TAG = __webpack_require__(94)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(77);
	
	$export($export.P, 'Function', {bind: __webpack_require__(146)});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(90)
	  , isObject   = __webpack_require__(82)
	  , invoke     = __webpack_require__(147)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(80).f
	  , createDesc = __webpack_require__(86)
	  , has        = __webpack_require__(74)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(75) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(82)
	  , getPrototypeOf = __webpack_require__(128)
	  , HAS_INSTANCE   = __webpack_require__(94)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(80).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(77)
	  , $parseInt = __webpack_require__(151);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(73).parseInt
	  , $trim     = __webpack_require__(152).trim
	  , ws        = __webpack_require__(153)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77)
	  , defined = __webpack_require__(104)
	  , fails   = __webpack_require__(76)
	  , spaces  = __webpack_require__(153)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(77)
	  , $parseFloat = __webpack_require__(155);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(73).parseFloat
	  , $trim       = __webpack_require__(152).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(153) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(73)
	  , has               = __webpack_require__(74)
	  , cof               = __webpack_require__(103)
	  , inheritIfRequired = __webpack_require__(157)
	  , toPrimitive       = __webpack_require__(85)
	  , fails             = __webpack_require__(76)
	  , gOPN              = __webpack_require__(119).f
	  , gOPD              = __webpack_require__(120).f
	  , dP                = __webpack_require__(80).f
	  , $trim             = __webpack_require__(152).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(115)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(75) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(87)(global, NUMBER, $Number);
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(82)
	  , setPrototypeOf = __webpack_require__(142).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(77)
	  , toInteger    = __webpack_require__(107)
	  , aNumberValue = __webpack_require__(159)
	  , repeat       = __webpack_require__(160)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(76)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(103);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(107)
	  , defined   = __webpack_require__(104);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(77)
	  , $fails       = __webpack_require__(76)
	  , aNumberValue = __webpack_require__(159)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(77)
	  , _isFinite = __webpack_require__(73).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(165)});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(82)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(77)
	  , isInteger = __webpack_require__(165)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(77)
	  , $parseFloat = __webpack_require__(155);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(77)
	  , $parseInt = __webpack_require__(151);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(77)
	  , log1p   = __webpack_require__(173)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(77)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(77)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(77)
	  , sign    = __webpack_require__(177);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(77)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(77)
	  , $expm1  = __webpack_require__(181);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 181 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(77)
	  , sign      = __webpack_require__(177)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(77)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(77)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(76)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(173)});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {sign: __webpack_require__(177)});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(77)
	  , expm1   = __webpack_require__(181)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(76)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(77)
	  , expm1   = __webpack_require__(181)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(77)
	  , toIndex        = __webpack_require__(108)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(77)
	  , toIObject = __webpack_require__(101)
	  , toLength  = __webpack_require__(106);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(152)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(196)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(197)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(107)
	  , defined   = __webpack_require__(104);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(97)
	  , $export        = __webpack_require__(77)
	  , redefine       = __webpack_require__(87)
	  , hide           = __webpack_require__(79)
	  , has            = __webpack_require__(74)
	  , Iterators      = __webpack_require__(198)
	  , $iterCreate    = __webpack_require__(199)
	  , setToStringTag = __webpack_require__(93)
	  , getPrototypeOf = __webpack_require__(128)
	  , ITERATOR       = __webpack_require__(94)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(115)
	  , descriptor     = __webpack_require__(86)
	  , setToStringTag = __webpack_require__(93)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(79)(IteratorPrototype, __webpack_require__(94)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(77)
	  , $at     = __webpack_require__(196)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(77)
	  , toLength  = __webpack_require__(106)
	  , context   = __webpack_require__(202)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(204)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(203)
	  , defined  = __webpack_require__(104);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(82)
	  , cof      = __webpack_require__(103)
	  , MATCH    = __webpack_require__(94)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(94)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(77)
	  , context  = __webpack_require__(202)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(204)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(160)
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(77)
	  , toLength    = __webpack_require__(106)
	  , context     = __webpack_require__(202)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(204)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(209)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77)
	  , fails   = __webpack_require__(76)
	  , defined = __webpack_require__(104)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(209)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(209)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(209)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(209)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(209)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(209)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(209)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(209)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(209)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(209)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(209)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(209)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(77)
	  , toObject    = __webpack_require__(127)
	  , toPrimitive = __webpack_require__(85);
	
	$export($export.P + $export.F * __webpack_require__(76)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(77)
	  , fails   = __webpack_require__(76)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(87)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(94)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(79)(proto, TO_PRIMITIVE, __webpack_require__(227));

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(81)
	  , toPrimitive = __webpack_require__(85)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(114)});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(89)
	  , $export        = __webpack_require__(77)
	  , toObject       = __webpack_require__(127)
	  , call           = __webpack_require__(230)
	  , isArrayIter    = __webpack_require__(231)
	  , toLength       = __webpack_require__(106)
	  , createProperty = __webpack_require__(232)
	  , getIterFn      = __webpack_require__(233);
	
	$export($export.S + $export.F * !__webpack_require__(234)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(81);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(198)
	  , ITERATOR   = __webpack_require__(94)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(80)
	  , createDesc      = __webpack_require__(86);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(144)
	  , ITERATOR  = __webpack_require__(94)('iterator')
	  , Iterators = __webpack_require__(198);
	module.exports = __webpack_require__(78).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(94)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(77)
	  , createProperty = __webpack_require__(232);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(76)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(77)
	  , toIObject = __webpack_require__(101)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(102) != Object || !__webpack_require__(237)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(76);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(77)
	  , html       = __webpack_require__(117)
	  , cof        = __webpack_require__(103)
	  , toIndex    = __webpack_require__(108)
	  , toLength   = __webpack_require__(106)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(76)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(77)
	  , aFunction = __webpack_require__(90)
	  , toObject  = __webpack_require__(127)
	  , fails     = __webpack_require__(76)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(237)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(77)
	  , $forEach = __webpack_require__(241)(0)
	  , STRICT   = __webpack_require__(237)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(89)
	  , IObject  = __webpack_require__(102)
	  , toObject = __webpack_require__(127)
	  , toLength = __webpack_require__(106)
	  , asc      = __webpack_require__(242);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(243);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(82)
	  , isArray  = __webpack_require__(114)
	  , SPECIES  = __webpack_require__(94)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(77)
	  , $map    = __webpack_require__(241)(1);
	
	$export($export.P + $export.F * !__webpack_require__(237)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(77)
	  , $filter = __webpack_require__(241)(2);
	
	$export($export.P + $export.F * !__webpack_require__(237)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(77)
	  , $some   = __webpack_require__(241)(3);
	
	$export($export.P + $export.F * !__webpack_require__(237)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(77)
	  , $every  = __webpack_require__(241)(4);
	
	$export($export.P + $export.F * !__webpack_require__(237)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(77)
	  , $reduce = __webpack_require__(249);
	
	$export($export.P + $export.F * !__webpack_require__(237)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(90)
	  , toObject  = __webpack_require__(127)
	  , IObject   = __webpack_require__(102)
	  , toLength  = __webpack_require__(106);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(77)
	  , $reduce = __webpack_require__(249);
	
	$export($export.P + $export.F * !__webpack_require__(237)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(77)
	  , $indexOf      = __webpack_require__(105)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(237)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(77)
	  , toIObject     = __webpack_require__(101)
	  , toInteger     = __webpack_require__(107)
	  , toLength      = __webpack_require__(106)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(237)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(77);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(254)});
	
	__webpack_require__(255)('copyWithin');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(127)
	  , toIndex  = __webpack_require__(108)
	  , toLength = __webpack_require__(106);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(94)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(79)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(77);
	
	$export($export.P, 'Array', {fill: __webpack_require__(257)});
	
	__webpack_require__(255)('fill');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(127)
	  , toIndex  = __webpack_require__(108)
	  , toLength = __webpack_require__(106);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(77)
	  , $find   = __webpack_require__(241)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(255)(KEY);

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(77)
	  , $find   = __webpack_require__(241)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(255)(KEY);

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(261)('Array');

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(73)
	  , dP          = __webpack_require__(80)
	  , DESCRIPTORS = __webpack_require__(75)
	  , SPECIES     = __webpack_require__(94)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(255)
	  , step             = __webpack_require__(263)
	  , Iterators        = __webpack_require__(198)
	  , toIObject        = __webpack_require__(101);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(197)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(73)
	  , inheritIfRequired = __webpack_require__(157)
	  , dP                = __webpack_require__(80).f
	  , gOPN              = __webpack_require__(119).f
	  , isRegExp          = __webpack_require__(203)
	  , $flags            = __webpack_require__(265)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(75) && (!CORRECT_NEW || __webpack_require__(76)(function(){
	  re2[__webpack_require__(94)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(87)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(261)('RegExp');

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(81);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(267);
	var anObject    = __webpack_require__(81)
	  , $flags      = __webpack_require__(265)
	  , DESCRIPTORS = __webpack_require__(75)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(87)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(76)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(75) && /./g.flags != 'g')__webpack_require__(80).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(265)
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(269)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(79)
	  , redefine = __webpack_require__(87)
	  , fails    = __webpack_require__(76)
	  , defined  = __webpack_require__(104)
	  , wks      = __webpack_require__(94);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(269)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(269)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(269)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(203)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(97)
	  , global             = __webpack_require__(73)
	  , ctx                = __webpack_require__(89)
	  , classof            = __webpack_require__(144)
	  , $export            = __webpack_require__(77)
	  , isObject           = __webpack_require__(82)
	  , aFunction          = __webpack_require__(90)
	  , anInstance         = __webpack_require__(274)
	  , forOf              = __webpack_require__(275)
	  , speciesConstructor = __webpack_require__(276)
	  , task               = __webpack_require__(277).set
	  , microtask          = __webpack_require__(278)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(94)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(279)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(93)($Promise, PROMISE);
	__webpack_require__(261)(PROMISE);
	Wrapper = __webpack_require__(78)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(234)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(89)
	  , call        = __webpack_require__(230)
	  , isArrayIter = __webpack_require__(231)
	  , anObject    = __webpack_require__(81)
	  , toLength    = __webpack_require__(106)
	  , getIterFn   = __webpack_require__(233)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(81)
	  , aFunction = __webpack_require__(90)
	  , SPECIES   = __webpack_require__(94)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(89)
	  , invoke             = __webpack_require__(147)
	  , html               = __webpack_require__(117)
	  , cel                = __webpack_require__(84)
	  , global             = __webpack_require__(73)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(103)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(73)
	  , macrotask = __webpack_require__(277).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(103)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(87);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(281);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(282)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(80).f
	  , create      = __webpack_require__(115)
	  , redefineAll = __webpack_require__(279)
	  , ctx         = __webpack_require__(89)
	  , anInstance  = __webpack_require__(274)
	  , defined     = __webpack_require__(104)
	  , forOf       = __webpack_require__(275)
	  , $iterDefine = __webpack_require__(197)
	  , step        = __webpack_require__(263)
	  , setSpecies  = __webpack_require__(261)
	  , DESCRIPTORS = __webpack_require__(75)
	  , fastKey     = __webpack_require__(91).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(73)
	  , $export           = __webpack_require__(77)
	  , redefine          = __webpack_require__(87)
	  , redefineAll       = __webpack_require__(279)
	  , meta              = __webpack_require__(91)
	  , forOf             = __webpack_require__(275)
	  , anInstance        = __webpack_require__(274)
	  , isObject          = __webpack_require__(82)
	  , fails             = __webpack_require__(76)
	  , $iterDetect       = __webpack_require__(234)
	  , setToStringTag    = __webpack_require__(93)
	  , inheritIfRequired = __webpack_require__(157);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(281);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(282)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(241)(0)
	  , redefine     = __webpack_require__(87)
	  , meta         = __webpack_require__(91)
	  , assign       = __webpack_require__(138)
	  , weak         = __webpack_require__(285)
	  , isObject     = __webpack_require__(82)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(282)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(279)
	  , getWeak           = __webpack_require__(91).getWeak
	  , anObject          = __webpack_require__(81)
	  , isObject          = __webpack_require__(82)
	  , anInstance        = __webpack_require__(274)
	  , forOf             = __webpack_require__(275)
	  , createArrayMethod = __webpack_require__(241)
	  , $has              = __webpack_require__(74)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(285);
	
	// 23.4 WeakSet Objects
	__webpack_require__(282)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(77)
	  , $typed       = __webpack_require__(288)
	  , buffer       = __webpack_require__(289)
	  , anObject     = __webpack_require__(81)
	  , toIndex      = __webpack_require__(108)
	  , toLength     = __webpack_require__(106)
	  , isObject     = __webpack_require__(82)
	  , ArrayBuffer  = __webpack_require__(73).ArrayBuffer
	  , speciesConstructor = __webpack_require__(276)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(76)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(261)(ARRAY_BUFFER);

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(73)
	  , hide   = __webpack_require__(79)
	  , uid    = __webpack_require__(88)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(73)
	  , DESCRIPTORS    = __webpack_require__(75)
	  , LIBRARY        = __webpack_require__(97)
	  , $typed         = __webpack_require__(288)
	  , hide           = __webpack_require__(79)
	  , redefineAll    = __webpack_require__(279)
	  , fails          = __webpack_require__(76)
	  , anInstance     = __webpack_require__(274)
	  , toInteger      = __webpack_require__(107)
	  , toLength       = __webpack_require__(106)
	  , gOPN           = __webpack_require__(119).f
	  , dP             = __webpack_require__(80).f
	  , arrayFill      = __webpack_require__(257)
	  , setToStringTag = __webpack_require__(93)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77);
	$export($export.G + $export.W + $export.F * !__webpack_require__(288).ABV, {
	  DataView: __webpack_require__(289).DataView
	});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(75)){
	  var LIBRARY             = __webpack_require__(97)
	    , global              = __webpack_require__(73)
	    , fails               = __webpack_require__(76)
	    , $export             = __webpack_require__(77)
	    , $typed              = __webpack_require__(288)
	    , $buffer             = __webpack_require__(289)
	    , ctx                 = __webpack_require__(89)
	    , anInstance          = __webpack_require__(274)
	    , propertyDesc        = __webpack_require__(86)
	    , hide                = __webpack_require__(79)
	    , redefineAll         = __webpack_require__(279)
	    , toInteger           = __webpack_require__(107)
	    , toLength            = __webpack_require__(106)
	    , toIndex             = __webpack_require__(108)
	    , toPrimitive         = __webpack_require__(85)
	    , has                 = __webpack_require__(74)
	    , same                = __webpack_require__(140)
	    , classof             = __webpack_require__(144)
	    , isObject            = __webpack_require__(82)
	    , toObject            = __webpack_require__(127)
	    , isArrayIter         = __webpack_require__(231)
	    , create              = __webpack_require__(115)
	    , getPrototypeOf      = __webpack_require__(128)
	    , gOPN                = __webpack_require__(119).f
	    , getIterFn           = __webpack_require__(233)
	    , uid                 = __webpack_require__(88)
	    , wks                 = __webpack_require__(94)
	    , createArrayMethod   = __webpack_require__(241)
	    , createArrayIncludes = __webpack_require__(105)
	    , speciesConstructor  = __webpack_require__(276)
	    , ArrayIterators      = __webpack_require__(262)
	    , Iterators           = __webpack_require__(198)
	    , $iterDetect         = __webpack_require__(234)
	    , setSpecies          = __webpack_require__(261)
	    , arrayFill           = __webpack_require__(257)
	    , arrayCopyWithin     = __webpack_require__(254)
	    , $DP                 = __webpack_require__(80)
	    , $GOPD               = __webpack_require__(120)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(292)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(77)
	  , aFunction = __webpack_require__(90)
	  , anObject  = __webpack_require__(81)
	  , rApply    = (__webpack_require__(73).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(76)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(77)
	  , create     = __webpack_require__(115)
	  , aFunction  = __webpack_require__(90)
	  , anObject   = __webpack_require__(81)
	  , isObject   = __webpack_require__(82)
	  , fails      = __webpack_require__(76)
	  , bind       = __webpack_require__(146)
	  , rConstruct = (__webpack_require__(73).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(80)
	  , $export     = __webpack_require__(77)
	  , anObject    = __webpack_require__(81)
	  , toPrimitive = __webpack_require__(85);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(76)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(77)
	  , gOPD     = __webpack_require__(120).f
	  , anObject = __webpack_require__(81);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(77)
	  , anObject = __webpack_require__(81);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(199)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(120)
	  , getPrototypeOf = __webpack_require__(128)
	  , has            = __webpack_require__(74)
	  , $export        = __webpack_require__(77)
	  , isObject       = __webpack_require__(82)
	  , anObject       = __webpack_require__(81);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(120)
	  , $export  = __webpack_require__(77)
	  , anObject = __webpack_require__(81);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(77)
	  , getProto = __webpack_require__(128)
	  , anObject = __webpack_require__(81);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(77)
	  , anObject      = __webpack_require__(81)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(312)});

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(119)
	  , gOPS     = __webpack_require__(112)
	  , anObject = __webpack_require__(81)
	  , Reflect  = __webpack_require__(73).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(77)
	  , anObject           = __webpack_require__(81)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(80)
	  , gOPD           = __webpack_require__(120)
	  , getPrototypeOf = __webpack_require__(128)
	  , has            = __webpack_require__(74)
	  , $export        = __webpack_require__(77)
	  , createDesc     = __webpack_require__(86)
	  , anObject       = __webpack_require__(81)
	  , isObject       = __webpack_require__(82);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(77)
	  , setProto = __webpack_require__(142);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(77)
	  , $includes = __webpack_require__(105)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(255)('includes');

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(77)
	  , $at     = __webpack_require__(196)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(77)
	  , $pad    = __webpack_require__(319);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(106)
	  , repeat   = __webpack_require__(160)
	  , defined  = __webpack_require__(104);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(77)
	  , $pad    = __webpack_require__(319);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(152)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(152)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(77)
	  , defined     = __webpack_require__(104)
	  , toLength    = __webpack_require__(106)
	  , isRegExp    = __webpack_require__(203)
	  , getFlags    = __webpack_require__(265)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(199)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(96)('asyncIterator');

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(96)('observable');

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(77)
	  , ownKeys        = __webpack_require__(312)
	  , toIObject      = __webpack_require__(101)
	  , gOPD           = __webpack_require__(120)
	  , createProperty = __webpack_require__(232);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(77)
	  , $values = __webpack_require__(328)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(99)
	  , toIObject = __webpack_require__(101)
	  , isEnum    = __webpack_require__(113).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(77)
	  , $entries = __webpack_require__(328)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(77)
	  , toObject        = __webpack_require__(127)
	  , aFunction       = __webpack_require__(90)
	  , $defineProperty = __webpack_require__(80);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(75) && $export($export.P + __webpack_require__(331), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(97)|| !__webpack_require__(76)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(73)[K];
	});

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(77)
	  , toObject        = __webpack_require__(127)
	  , aFunction       = __webpack_require__(90)
	  , $defineProperty = __webpack_require__(80);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(75) && $export($export.P + __webpack_require__(331), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(77)
	  , toObject                 = __webpack_require__(127)
	  , toPrimitive              = __webpack_require__(85)
	  , getPrototypeOf           = __webpack_require__(128)
	  , getOwnPropertyDescriptor = __webpack_require__(120).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(75) && $export($export.P + __webpack_require__(331), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(77)
	  , toObject                 = __webpack_require__(127)
	  , toPrimitive              = __webpack_require__(85)
	  , getPrototypeOf           = __webpack_require__(128)
	  , getOwnPropertyDescriptor = __webpack_require__(120).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(75) && $export($export.P + __webpack_require__(331), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(77);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(336)('Map')});

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(144)
	  , from    = __webpack_require__(337);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(275);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(77);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(336)('Set')});

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(77);
	
	$export($export.S, 'System', {global: __webpack_require__(73)});

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(77)
	  , cof     = __webpack_require__(103);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(77);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(346)
	  , anObject                  = __webpack_require__(81)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(280)
	  , $export = __webpack_require__(77)
	  , shared  = __webpack_require__(92)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(284)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(346)
	  , anObject               = __webpack_require__(81)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(346)
	  , anObject               = __webpack_require__(81)
	  , getPrototypeOf         = __webpack_require__(128)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(283)
	  , from                    = __webpack_require__(337)
	  , metadata                = __webpack_require__(346)
	  , anObject                = __webpack_require__(81)
	  , getPrototypeOf          = __webpack_require__(128)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(346)
	  , anObject               = __webpack_require__(81)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(346)
	  , anObject                = __webpack_require__(81)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(346)
	  , anObject               = __webpack_require__(81)
	  , getPrototypeOf         = __webpack_require__(128)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(346)
	  , anObject               = __webpack_require__(81)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(346)
	  , anObject                  = __webpack_require__(81)
	  , aFunction                 = __webpack_require__(90)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(77)
	  , microtask = __webpack_require__(278)()
	  , process   = __webpack_require__(73).process
	  , isNode    = __webpack_require__(103)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(77)
	  , global      = __webpack_require__(73)
	  , core        = __webpack_require__(78)
	  , microtask   = __webpack_require__(278)()
	  , OBSERVABLE  = __webpack_require__(94)('observable')
	  , aFunction   = __webpack_require__(90)
	  , anObject    = __webpack_require__(81)
	  , anInstance  = __webpack_require__(274)
	  , redefineAll = __webpack_require__(279)
	  , hide        = __webpack_require__(79)
	  , forOf       = __webpack_require__(275)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(261)('Observable');

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(73)
	  , $export    = __webpack_require__(77)
	  , invoke     = __webpack_require__(147)
	  , partial    = __webpack_require__(358)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(359)
	  , invoke    = __webpack_require__(147)
	  , aFunction = __webpack_require__(90);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(73);

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77)
	  , $task   = __webpack_require__(277);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(262)
	  , redefine      = __webpack_require__(87)
	  , global        = __webpack_require__(73)
	  , hide          = __webpack_require__(79)
	  , Iterators     = __webpack_require__(198)
	  , wks           = __webpack_require__(94)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(363)))

/***/ },
/* 363 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(365);
	module.exports = __webpack_require__(78).RegExp.escape;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(77)
	  , $re     = __webpack_require__(366)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 366 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsbuddhabrot = __webpack_require__(368);
	
	var _jsbuddhabrot2 = _interopRequireDefault(_jsbuddhabrot);
	
	var _ui = __webpack_require__(900);
	
	__webpack_require__(905);
	
	__webpack_require__(928);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var drawer = (0, _jsbuddhabrot2.default)(document.getElementById('canvas'), {
	  imageWidth: 1800,
	  imageHeight: 1800,
	  imageScale: 600,
	  plotScale: 600, // TODO should this be calculated by the program every time?  pScale = Math.floor(pDim / 3) - easy
	  plotDimensions: 1800,
	  sequenceEscapeThreshold: 15000,
	  sequenceBound: 2,
	  threads: 8,
	  color: {
	    r: 255,
	    g: 0,
	    b: 0,
	    a: 255
	  }
	}, _ui.callbacks);
	
	setTimeout(drawer.init, 0);
	
	(0, _ui.attachEventHandlers)(drawer);

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createBuddhabrotDrawer = __webpack_require__(369);
	
	var _createBuddhabrotDrawer2 = _interopRequireDefault(_createBuddhabrotDrawer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _createBuddhabrotDrawer2.default;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BuddhabrotDrawer = __webpack_require__(370);
	
	var _BuddhabrotDrawer2 = _interopRequireDefault(_BuddhabrotDrawer);
	
	var _CanvasDrawer = __webpack_require__(380);
	
	var _CanvasDrawer2 = _interopRequireDefault(_CanvasDrawer);
	
	var _BuddhabrotGenerator = __webpack_require__(381);
	
	var _BuddhabrotGenerator2 = _interopRequireDefault(_BuddhabrotGenerator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (canvas, config, callbacks) {
	  var canvasDrawer = (0, _CanvasDrawer2.default)({
	    canvas: canvas,
	    imageHeight: config.imageWidth,
	    imageWidth: config.imageHeight
	  });
	
	  return (0, _BuddhabrotDrawer2.default)(canvasDrawer, config, callbacks);
	};

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _drawRoutine = __webpack_require__(371);
	
	var _DensityPlot = __webpack_require__(377);
	
	var _DensityPlot2 = _interopRequireDefault(_DensityPlot);
	
	var _SimpleRgbValTransform = __webpack_require__(378);
	
	var _SimpleRgbValTransform2 = _interopRequireDefault(_SimpleRgbValTransform);
	
	var _rebaseColors = __webpack_require__(374);
	
	var _rebaseColors2 = _interopRequireDefault(_rebaseColors);
	
	var _mutableConfig = __webpack_require__(379);
	
	var _mutableConfig2 = _interopRequireDefault(_mutableConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (drawer, config, callbacks) {
	  var internalConfig = Object.assign({}, config),
	      getColorFunc = function getColorFunc() {
	    return (0, _SimpleRgbValTransform2.default)(internalConfig.color);
	  },
	      // TODO find a way to just inject the color transform without associated configuration; needs to work when color is reconfigured (just make the color transform a config property?)
	  createSourcePlot = function createSourcePlot() {
	    return (0, _DensityPlot2.default)({
	      width: internalConfig.plotDimensions,
	      height: internalConfig.plotDimensions
	    });
	  },
	      createImagePlot = function createImagePlot() {
	    return (0, _DensityPlot2.default)({
	      width: internalConfig.imageWidth,
	      height: internalConfig.imageHeight
	    });
	  },
	      initCanvasAndPlots = function initCanvasAndPlots() {
	    sourcePlot = createSourcePlot();
	    imagePlot = createImagePlot();
	
	    (0, _rebaseColors2.default)(colorFunc, imagePlot, drawer);
	
	    drawer.updateCanvas();
	  };
	
	  var drawFunc = null,
	      colorFunc = getColorFunc(),
	      sourcePlot = null,
	      imagePlot = null,
	      isInitialized = false;
	
	  (0, _drawRoutine.registerCallbacks)(callbacks);
	
	  return {
	    get isRunning() {
	      return (0, _drawRoutine.isRunning)();
	    },
	    start: function start() {
	      if (!isInitialized) throw Error('Drawer has not been initialized; call init() before calling start()');
	
	      if ((0, _drawRoutine.isRunning)()) throw Error('Draw routine has already started');
	
	      if (callbacks.onStart) callbacks.onStart();
	
	      if (!drawFunc) drawFunc = (0, _drawRoutine.getDrawFunc)(drawer, colorFunc, sourcePlot, imagePlot, internalConfig);
	
	      drawFunc();
	    },
	    stop: function stop() {
	      if (!(0, _drawRoutine.isRunning)()) throw Error('Drawer has not been started');
	
	      (0, _drawRoutine.stop)();
	
	      if (callbacks.onStop) callbacks.onStop();
	    },
	    clear: function clear() {
	      if ((0, _drawRoutine.isRunning)()) throw Error('Cannot clear canvas while draw routine is running');
	
	      drawFunc = null;
	
	      initCanvasAndPlots();
	    },
	    init: function init() {
	      if (isInitialized) throw Error('Drawer has already been initialized');
	
	      initCanvasAndPlots();
	
	      isInitialized = true;
	
	      if (callbacks.onInitCompleted) callbacks.onInitCompleted();
	    },
	    reconfigure: function reconfigure(config) {
	      if ((0, _drawRoutine.isRunning)()) throw Error('Draw routine must be stopped before it can be reconfigured');
	
	      for (var key in config) {
	        if (!config.hasOwnProperty(key)) continue;
	
	        if (!_mutableConfig2.default[key]) throw Error('Configuration setting ' + key + ' is not mutable');
	
	        internalConfig[key] = config[key];
	      }
	
	      drawFunc = null;
	      colorFunc = getColorFunc();
	    }
	  };
	};

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.registerCallbacks = exports.getDrawFunc = exports.isRunning = exports.stop = undefined;
	
	var _drawPoints = __webpack_require__(372);
	
	var _drawPoints2 = _interopRequireDefault(_drawPoints);
	
	var _rebaseColors = __webpack_require__(374);
	
	var _rebaseColors2 = _interopRequireDefault(_rebaseColors);
	
	var _generateBuddhabrotPointsWorker = __webpack_require__(375);
	
	var _generateBuddhabrotPointsWorker2 = _interopRequireDefault(_generateBuddhabrotPointsWorker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var controlVars = {
	  shouldStop: false,
	  isRunning: false
	};
	
	var workers = [];
	
	var callbacks = {};
	
	var registerCallbacks = function registerCallbacks(newCallbacks) {
	  callbacks = newCallbacks;
	};
	
	var stop = function stop() {
	  controlVars.shouldStop = true;
	
	  var worker = void 0;
	  while (worker = workers.pop()) {
	    worker.terminate();
	  }
	};
	
	var lastHighestDensity = 0;
	
	var isRunning = function isRunning() {
	  return controlVars.isRunning;
	};
	
	var initWorkers = function initWorkers(threads, pointsToPlot, sequenceEscapeThreshold, sequenceBound) {
	  for (var i = 0; i < threads; i++) {
	    var worker = (0, _generateBuddhabrotPointsWorker2.default)();
	
	    worker.onmessage = function (m) {
	      if (callbacks.onIterationCompleted) callbacks.onIterationCompleted();
	      for (var _i = 0; _i < m.data.length; _i++) {
	        pointsToPlot.push(m.data[_i]);
	      }
	    };
	
	    worker.postMessage({
	      sequenceEscapeThreshold: sequenceEscapeThreshold,
	      sequenceBound: sequenceBound
	    });
	
	    workers.push(worker);
	  }
	};
	
	var getDrawFunc = function getDrawFunc(drawer, colorFunc, sourcePlot, imagePlot, config) {
	  var imageWidth = config.imageWidth,
	      imageHeight = config.imageHeight,
	      imageScale = config.imageScale,
	      plotScale = config.plotScale,
	      plotDimensions = config.plotDimensions,
	      threads = config.threads,
	      sequenceEscapeThreshold = config.sequenceEscapeThreshold,
	      sequenceBound = config.sequenceBound,
	      pointsToPlot = [];
	
	  var iteration = 0,
	      iterationSetStartTime = null,
	      renderStartTime = null;
	
	  return function () {
	    controlVars.isRunning = true;
	
	    initWorkers(threads, pointsToPlot, sequenceEscapeThreshold, sequenceBound);
	
	    (function drawInternal() {
	      if (controlVars.shouldStop) {
	        controlVars.isRunning = controlVars.shouldStop = false;
	
	        return;
	      }
	
	      (0, _drawPoints2.default)(sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions, colorFunc);
	
	      pointsToPlot.length = 0; // clear the array
	
	      if (lastHighestDensity !== sourcePlot.highestDensity) {
	        lastHighestDensity = sourcePlot.highestDensity;
	        if (callbacks.onHighestDensityChanged) callbacks.onHighestDensityChanged(lastHighestDensity);
	      }
	
	      iteration++;
	
	      if (iteration % 10000 === 0) (0, _rebaseColors2.default)(colorFunc, imagePlot, drawer);
	
	      if (iteration !== 0 && iteration % 10 === 0) drawer.updateCanvas();
	
	      setTimeout(drawInternal, 0); // use setTimeout to avoid SO errors & allow worker callbacks to run
	    })();
	  };
	};
	
	exports.stop = stop;
	exports.isRunning = isRunning;
	exports.getDrawFunc = getDrawFunc;
	exports.registerCallbacks = registerCallbacks;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scaling = __webpack_require__(373);
	
	exports.default = function (sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions, getColor) {
	  for (var i = 0; i < pointsToPlot.length; i++) {
	
	    // First, add 2 & 1.5 to the real and imaginary components (respectively) to ensure that all points are translated to the positive quadrant of the complex plane.
	    var translatedReal = pointsToPlot[i].re + 2,
	        translatedImaginary = pointsToPlot[i].im + 1.5;
	
	    // Then, multiply the sum by a scale factor to fit the image to the density plot, and achieve the desired level of detail.
	    // For example, if you want to plot the image on a 600x600 density plot, the scale should be 200 because the figure is plotted on a
	    // 3x3 region of the complex plane.  s = d / 3, where s is the scale & d is the width/height of the square region being rendered into.
	    var scaledReal = (0, _scaling.scale)(translatedReal, plotScale),
	        scaledImaginary = (0, _scaling.scale)(translatedImaginary, plotScale);
	
	    // if points are outside of plot region, discard them
	    if (scaledReal >= plotDimensions || scaledImaginary >= plotDimensions || scaledReal < 0 || scaledImaginary < 0) {
	      // TODO I only have to do this because the escape threshold is set to 2, which results in escape sequences that go off the bounds of the image/plot after translation.  This wouldn't be an issue if the sequence bound were the same as the RNG bounds.  Changing this would also get rid of an expensive magnitude calculation.  Would the final rendering look different if I were to change this?  Try it!
	      continue;
	    }
	
	    var sourceDensity = sourcePlot.plotPoint(scaledReal, scaledImaginary);
	
	    // scale to canvas
	    var x = (0, _scaling.scale)(translatedReal, imageScale),
	        y = (0, _scaling.scale)(translatedImaginary, imageScale);
	
	    // if points are outside of image region, discard them
	    if (x >= imageWidth || y >= imageHeight || x < 0 || y < 0) {
	      // TODO do I need this even with the check against the plot dimensions above?
	      continue;
	    }
	
	    var imageDensity = imagePlot.plotPoint(x, y);
	
	    if (imageDensity - 1 > sourceDensity) continue;
	
	    var color = getColor(imageDensity, imagePlot.highestDensity);
	    drawer.setPixel(x, y, color.r, color.g, color.b, color.a);
	  }
	};

/***/ },
/* 373 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var scale = function scale(initial, factor) {
	  return Math.floor(initial * factor);
	};
	
	var rescale = function rescale(initial, initialScale, newScale) {
	  return scale(initial / initialScale, newScale);
	};
	
	exports.scale = scale;
	exports.rescale = rescale;

/***/ },
/* 374 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (colorFunc, imagePlot, drawer) {
	  for (var h = 0; h < imagePlot.width; h++) {
	    for (var k = 0; k < imagePlot.height; k++) {
	      var density = imagePlot.getDensity(h, k);
	      var color = colorFunc(density, imagePlot.highestDensity);
	      drawer.setPixel(h, k, color.r, color.g, color.b, color.a);
	    }
	  }
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	};

/***/ },
/* 376 */
/***/ function(module, exports) {

	// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string
	
	var URL = window.URL || window.webkitURL;
	module.exports = function(content, url) {
		try {
			try {
				var blob;
				try { // BlobBuilder = Deprecated, but widely implemented
					var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
					blob = new BlobBuilder();
					blob.append(content);
					blob = blob.getBlob();
				} catch(e) { // The proposed API
					blob = new Blob([content]);
				}
				return new Worker(URL.createObjectURL(blob));
			} catch(e) {
				return new Worker('data:application/javascript,' + encodeURIComponent(content));
			}
		} catch(e) {
			return new Worker(url);
		}
	}

/***/ },
/* 377 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createDensityPlotArray = function createDensityPlotArray(height, width) {
	  var plot = new Array(width);
	
	  for (var i = 0; i < width; i++) {
	    var col = new Array(height);
	    for (var j = 0; j < height; j++) {
	      col[j] = 0;
	    }
	    plot[i] = col;
	  }
	
	  return plot;
	};
	
	var DensityPlot = function DensityPlot(params) {
	  var width = params.width,
	      height = params.height;
	
	  var plot = createDensityPlotArray(height, width);
	
	  var highestDensity = 0;
	
	  var recomputeHighestDensity = function recomputeHighestDensity(density) {
	    if (highestDensity < density) highestDensity = density;
	  };
	
	  return {
	    get width() {
	      return width;
	    },
	    get height() {
	      return height;
	    },
	    get highestDensity() {
	      return highestDensity;
	    },
	    plotPoint: function plotPoint(x, y) {
	      var newVal = plot[x][y] + 1;
	      plot[x][y] = newVal;
	
	      recomputeHighestDensity(newVal);
	
	      return newVal;
	    },
	    getDensity: function getDensity(x, y) {
	      return plot[x][y];
	    }
	  };
	};
	
	exports.default = DensityPlot;

/***/ },
/* 378 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var rgbValTransform = function rgbValTransform(rgbVal, density, highestDensity) {
	  return Math.floor(density * rgbVal / highestDensity);
	};
	
	exports.default = function (color) {
	  return function (density, highestDensity) {
	    return {
	      r: rgbValTransform(color.r, density, highestDensity),
	      g: rgbValTransform(color.g, density, highestDensity),
	      b: rgbValTransform(color.b, density, highestDensity),
	      a: color.a
	    };
	  };
	};

/***/ },
/* 379 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  threads: true,
	  color: true,
	  sequenceEscapeThreshold: true
	};

/***/ },
/* 380 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (params) {
	  var canvas = params.canvas,
	      imageWidth = params.imageWidth,
	      imageHeight = params.imageHeight;
	
	  var canvasContext = canvas.getContext('2d');
	  var canvasData = canvasContext.getImageData(0, 0, imageWidth, imageHeight);
	
	  var computeImageDataOffset = function computeImageDataOffset(x, y) {
	    return (y + x * imageHeight) * 4;
	  };
	
	  var setPixel = function setPixel(x, y, r, g, b, a) {
	    var index = computeImageDataOffset(x, y);
	
	    canvasData.data[index] = r;
	    canvasData.data[index + 1] = g;
	    canvasData.data[index + 2] = b;
	    canvasData.data[index + 3] = a;
	  };
	
	  var updateCanvas = function updateCanvas() {
	    canvasContext.putImageData(canvasData, 0, 0);
	  };
	
	  var getPixel = function getPixel(x, y) {
	    var index = computeImageDataOffset(x, y);
	
	    return {
	      r: canvasData.data[index],
	      g: canvasData.data[index + 1],
	      b: canvasData.data[index + 2],
	      a: canvasData.data[index + 3]
	    };
	  };
	
	  return {
	    setPixel: setPixel,
	    getPixel: getPixel,
	    updateCanvas: updateCanvas
	  };
	};

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MandelbrotSequence = __webpack_require__(382);
	
	var _MandelbrotSequence2 = _interopRequireDefault(_MandelbrotSequence);
	
	var _mathjs = __webpack_require__(383);
	
	var _mathjs2 = _interopRequireDefault(_mathjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* This function uses a heuristic method to determine if complexToTest is in the Mandelbrot set.  If
	 it is, the function yields an array of all points the generated sequence passed through; if it isn't,
	 the function returns an empty array. */
	var executeIteration = function executeIteration(complexToTest, sequenceEscapeThreshold, sequenceBound) {
	  var result = [];
	
	  var sequenceGenerator = (0, _MandelbrotSequence2.default)(complexToTest);
	
	  var i = 0,
	      current = sequenceGenerator.next();
	
	  while (i < sequenceEscapeThreshold && Math.sqrt(Math.pow(current.re, 2) + Math.pow(current.im, 2)) < sequenceBound) {
	    i++;
	    result.push(current);
	    current = sequenceGenerator.next();
	  }
	
	  return i < sequenceEscapeThreshold ? result : [];
	};
	
	var getRandomNumberFromPlaneRegion = function getRandomNumberFromPlaneRegion() {
	  return _mathjs2.default.complex(Math.random() * 3 - 2, Math.random() * 3 - 1.5);
	};
	
	exports.default = function (config) {
	  return {
	    next: function next() {
	      return executeIteration(getRandomNumberFromPlaneRegion(), config.sequenceEscapeThreshold, config.sequenceBound);
	    }
	  };
	};

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mathjs = __webpack_require__(383);
	
	var _mathjs2 = _interopRequireDefault(_mathjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (c) {
	  var current = _mathjs2.default.complex(0, 0);
	
	  return {
	    next: function next() {
	      current = _mathjs2.default.add(_mathjs2.default.multiply(current, current), c); // z(n + 1) = z(n)^2 + c
	      return current;
	    }
	  };
	};

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(384);
	
	/**
	 * math.js factory function. Creates a new instance of math.js
	 *
	 * @param {Object} [config] Available configuration options:
	 *                            {number} epsilon
	 *                              Minimum relative difference between two
	 *                              compared values, used by all comparison functions.
	 *                            {string} matrix
	 *                              A string 'matrix' (default) or 'array'.
	 *                            {string} number
	 *                              A string 'number' (default), 'bignumber', or
	 *                              'fraction'
	 *                            {number} precision
	 *                              The number of significant digits for BigNumbers.
	 *                              Not applicable for Numbers.
	 *                            {boolean} predictable
	 *                              Predictable output type of functions. When true,
	 *                              output type depends only on the input types. When
	 *                              false (default), output type can vary depending
	 *                              on input values. For example `math.sqrt(-4)`
	 *                              returns `complex('2i')` when predictable is false, and
	 *                              returns `NaN` when true.
	 */
	function create (config) {
	  // create a new math.js instance
	  var math = core.create(config);
	  math.create = create;
	
	  // import data types, functions, constants, expression parser, etc.
	  math['import'](__webpack_require__(395));
	
	  return math;
	}
	
	// return a new instance of math.js
	module.exports = create();


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(385);

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var isFactory = __webpack_require__(386).isFactory;
	var typedFactory = __webpack_require__(387);
	var emitter = __webpack_require__(390);
	
	var importFactory = __webpack_require__(392);
	var configFactory = __webpack_require__(394);
	
	/**
	 * Math.js core. Creates a new, empty math.js instance
	 * @param {Object} [options] Available options:
	 *                            {number} epsilon
	 *                              Minimum relative difference between two
	 *                              compared values, used by all comparison functions.
	 *                            {string} matrix
	 *                              A string 'Matrix' (default) or 'Array'.
	 *                            {string} number
	 *                              A string 'number' (default), 'BigNumber', or 'Fraction'
	 *                            {number} precision
	 *                              The number of significant digits for BigNumbers.
	 *                              Not applicable for Numbers.
	 *                            {boolean} predictable
	 *                              Predictable output type of functions. When true,
	 *                              output type depends only on the input types. When
	 *                              false (default), output type can vary depending
	 *                              on input values. For example `math.sqrt(-4)`
	 *                              returns `complex('2i')` when predictable is false, and
	 *                              returns `NaN` when true.
	 *                            {string} randomSeed
	 *                              Random seed for seeded pseudo random number generator.
	 *                              Set to null to randomly seed.
	 * @returns {Object} Returns a bare-bone math.js instance containing
	 *                   functions:
	 *                   - `import` to add new functions
	 *                   - `config` to change configuration
	 *                   - `on`, `off`, `once`, `emit` for events
	 */
	exports.create = function create (options) {
	  // simple test for ES5 support
	  if (typeof Object.create !== 'function') {
	    throw new Error('ES5 not supported by this JavaScript engine. ' +
	    'Please load the es5-shim and es5-sham library for compatibility.');
	  }
	
	  // cached factories and instances
	  var factories = [];
	  var instances = [];
	
	  // create a namespace for the mathjs instance, and attach emitter functions
	  var math = emitter.mixin({});
	  math.type = {};
	  math.expression = {
	    transform: {},
	    mathWithTransform: {}
	  };
	
	  // create a new typed instance
	  math.typed = typedFactory.create(math.type);
	
	  // create configuration options. These are private
	  var _config = {
	    // minimum relative difference between two compared values,
	    // used by all comparison functions
	    epsilon: 1e-12,
	
	    // type of default matrix output. Choose 'matrix' (default) or 'array'
	    matrix: 'Matrix',
	
	    // type of default number output. Choose 'number' (default) 'BigNumber', or 'Fraction
	    number: 'number',
	
	    // number of significant digits in BigNumbers
	    precision: 64,
	
	    // predictable output type of functions. When true, output type depends only
	    // on the input types. When false (default), output type can vary depending
	    // on input values. For example `math.sqrt(-4)` returns `complex('2i')` when
	    // predictable is false, and returns `NaN` when true.
	    predictable: false,
	
	    // random seed for seeded pseudo random number generation
	    // null = randomly seed
	    randomSeed: null
	  };
	
	  /**
	   * Load a function or data type from a factory.
	   * If the function or data type already exists, the existing instance is
	   * returned.
	   * @param {{type: string, name: string, factory: Function}} factory
	   * @returns {*}
	   */
	  function load (factory) {
	    if (!isFactory(factory)) {
	      throw new Error('Factory object with properties `type`, `name`, and `factory` expected');
	    }
	
	    var index = factories.indexOf(factory);
	    var instance;
	    if (index === -1) {
	      // doesn't yet exist
	      if (factory.math === true) {
	        // pass with math namespace
	        instance = factory.factory(math.type, _config, load, math.typed, math);
	      }
	      else {
	        instance = factory.factory(math.type, _config, load, math.typed);
	      }
	
	      // append to the cache
	      factories.push(factory);
	      instances.push(instance);
	    }
	    else {
	      // already existing function, return the cached instance
	      instance = instances[index];
	    }
	
	    return instance;
	  }
	
	  // load the import and config functions
	  math['import'] = load(importFactory);
	  math['config'] = load(configFactory);
	  math.expression.mathWithTransform['config'] = math['config']
	
	  // apply options
	  if (options) {
	    math.config(options);
	  }
	
	  return math;
	};


/***/ },
/* 386 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Clone an object
	 *
	 *     clone(x)
	 *
	 * Can clone any primitive type, array, and object.
	 * If x has a function clone, this function will be invoked to clone the object.
	 *
	 * @param {*} x
	 * @return {*} clone
	 */
	exports.clone = function clone(x) {
	  var type = typeof x;
	
	  // immutable primitive types
	  if (type === 'number' || type === 'string' || type === 'boolean' ||
	      x === null || x === undefined) {
	    return x;
	  }
	
	  // use clone function of the object when available
	  if (typeof x.clone === 'function') {
	    return x.clone();
	  }
	
	  // array
	  if (Array.isArray(x)) {
	    return x.map(function (value) {
	      return clone(value);
	    });
	  }
	
	  if (x instanceof Number)    return new Number(x.valueOf());
	  if (x instanceof String)    return new String(x.valueOf());
	  if (x instanceof Boolean)   return new Boolean(x.valueOf());
	  if (x instanceof Date)      return new Date(x.valueOf());
	  if (x && x.isBigNumber === true) return x; // bignumbers are immutable
	  if (x instanceof RegExp)  throw new TypeError('Cannot clone ' + x);  // TODO: clone a RegExp
	
	  // object
	  var m = {};
	  for (var key in x) {
	    if (x.hasOwnProperty(key)) {
	      m[key] = clone(x[key]);
	    }
	  }
	  return m;
	};
	
	/**
	 * Extend object a with the properties of object b
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 */
	exports.extend = function(a, b) {
	  for (var prop in b) {
	    if (b.hasOwnProperty(prop)) {
	      a[prop] = b[prop];
	    }
	  }
	  return a;
	};
	
	/**
	 * Deep extend an object a with the properties of object b
	 * @param {Object} a
	 * @param {Object} b
	 * @returns {Object}
	 */
	exports.deepExtend = function deepExtend (a, b) {
	  // TODO: add support for Arrays to deepExtend
	  if (Array.isArray(b)) {
	    throw new TypeError('Arrays are not supported by deepExtend');
	  }
	
	  for (var prop in b) {
	    if (b.hasOwnProperty(prop)) {
	      if (b[prop] && b[prop].constructor === Object) {
	        if (a[prop] === undefined) {
	          a[prop] = {};
	        }
	        if (a[prop].constructor === Object) {
	          deepExtend(a[prop], b[prop]);
	        }
	        else {
	          a[prop] = b[prop];
	        }
	      } else if (Array.isArray(b[prop])) {
	        throw new TypeError('Arrays are not supported by deepExtend');
	      } else {
	        a[prop] = b[prop];
	      }
	    }
	  }
	  return a;
	};
	
	/**
	 * Deep test equality of all fields in two pairs of arrays or objects.
	 * @param {Array | Object} a
	 * @param {Array | Object} b
	 * @returns {boolean}
	 */
	exports.deepEqual = function deepEqual (a, b) {
	  var prop, i, len;
	  if (Array.isArray(a)) {
	    if (!Array.isArray(b)) {
	      return false;
	    }
	
	    if (a.length != b.length) {
	      return false;
	    }
	
	    for (i = 0, len = a.length; i < len; i++) {
	      if (!exports.deepEqual(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	  else if (a instanceof Object) {
	    if (Array.isArray(b) || !(b instanceof Object)) {
	      return false;
	    }
	
	    for (prop in a) {
	      //noinspection JSUnfilteredForInLoop
	      if (!exports.deepEqual(a[prop], b[prop])) {
	        return false;
	      }
	    }
	    for (prop in b) {
	      //noinspection JSUnfilteredForInLoop
	      if (!exports.deepEqual(a[prop], b[prop])) {
	        return false;
	      }
	    }
	    return true;
	  }
	  else {
	    return (typeof a === typeof b) && (a == b);
	  }
	};
	
	/**
	 * Test whether the current JavaScript engine supports Object.defineProperty
	 * @returns {boolean} returns true if supported
	 */
	exports.canDefineProperty = function () {
	  // test needed for broken IE8 implementation
	  try {
	    if (Object.defineProperty) {
	      Object.defineProperty({}, 'x', { get: function () {} });
	      return true;
	    }
	  } catch (e) {}
	
	  return false;
	};
	
	/**
	 * Attach a lazy loading property to a constant.
	 * The given function `fn` is called once when the property is first requested.
	 * On older browsers (<IE8), the function will fall back to direct evaluation
	 * of the properties value.
	 * @param {Object} object   Object where to add the property
	 * @param {string} prop     Property name
	 * @param {Function} fn     Function returning the property value. Called
	 *                          without arguments.
	 */
	exports.lazy = function (object, prop, fn) {
	  if (exports.canDefineProperty()) {
	    var _uninitialized = true;
	    var _value;
	    Object.defineProperty(object, prop, {
	      get: function () {
	        if (_uninitialized) {
	          _value = fn();
	          _uninitialized = false;
	        }
	        return _value;
	      },
	
	      set: function (value) {
	        _value = value;
	        _uninitialized = false;
	      },
	
	      configurable: true,
	      enumerable: true
	    });
	  }
	  else {
	    // fall back to immediate evaluation
	    object[prop] = fn();
	  }
	};
	
	/**
	 * Traverse a path into an object.
	 * When a namespace is missing, it will be created
	 * @param {Object} object
	 * @param {string} path   A dot separated string like 'name.space'
	 * @return {Object} Returns the object at the end of the path
	 */
	exports.traverse = function(object, path) {
	  var obj = object;
	
	  if (path) {
	    var names = path.split('.');
	    for (var i = 0; i < names.length; i++) {
	      var name = names[i];
	      if (!(name in obj)) {
	        obj[name] = {};
	      }
	      obj = obj[name];
	    }
	  }
	
	  return obj;
	};
	
	/**
	 * Test whether an object is a factory. a factory has fields:
	 *
	 * - factory: function (type: Object, config: Object, load: function, typed: function [, math: Object])   (required)
	 * - name: string (optional)
	 * - path: string    A dot separated path (optional)
	 * - math: boolean   If true (false by default), the math namespace is passed
	 *                   as fifth argument of the factory function
	 *
	 * @param {*} object
	 * @returns {boolean}
	 */
	exports.isFactory = function (object) {
	  return object && typeof object.factory === 'function';
	};


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var typedFunction = __webpack_require__(388);
	var digits = __webpack_require__(389).digits;
	
	// returns a new instance of typed-function
	var createTyped = function () {
	  // initially, return the original instance of typed-function
	  // consecutively, return a new instance from typed.create.
	  createTyped = typedFunction.create;
	  return typedFunction;
	};
	
	/**
	 * Factory function for creating a new typed instance
	 * @param {Object} type   Object with data types like Complex and BigNumber
	 * @returns {Function}
	 */
	exports.create = function create(type) {
	  // TODO: typed-function must be able to silently ignore signatures with unknown data types
	
	  // get a new instance of typed-function
	  var typed = createTyped();
	
	  // define all types. The order of the types determines in which order function
	  // arguments are type-checked (so for performance it's important to put the
	  // most used types first).
	  typed.types = [
	    { name: 'number',          test: function (x) { return typeof x === 'number' } },
	    { name: 'Complex',         test: function (x) { return x && x.isComplex } },
	    { name: 'BigNumber',       test: function (x) { return x && x.isBigNumber } },
	    { name: 'Fraction',        test: function (x) { return x && x.isFraction } },
	    { name: 'Unit',            test: function (x) { return x && x.isUnit } },
	    { name: 'string',          test: function (x) { return typeof x === 'string' } },
	    { name: 'Array',           test: Array.isArray },
	    { name: 'Matrix',          test: function (x) { return x && x.isMatrix } },
	    { name: 'DenseMatrix',     test: function (x) { return x && x.isDenseMatrix } },
	    { name: 'SparseMatrix',    test: function (x) { return x && x.isSparseMatrix } },
	    { name: 'Range',           test: function (x) { return x && x.isRange } },
	    { name: 'Index',           test: function (x) { return x && x.isIndex } },
	    { name: 'boolean',         test: function (x) { return typeof x === 'boolean' } },
	    { name: 'ResultSet',       test: function (x) { return x && x.isResultSet } },
	    { name: 'Help',            test: function (x) { return x && x.isHelp } },
	    { name: 'function',        test: function (x) { return typeof x === 'function'} },
	    { name: 'Date',            test: function (x) { return x instanceof Date } },
	    { name: 'RegExp',          test: function (x) { return x instanceof RegExp } },
	    { name: 'Object',          test: function (x) { return typeof x === 'object' } },
	    { name: 'null',            test: function (x) { return x === null } },
	    { name: 'undefined',       test: function (x) { return x === undefined } },
	    
	    { name: 'OperatorNode',    test: function (x) { return x && x.isOperatorNode } },
	    { name: 'ConstantNode',    test: function (x) { return x && x.isConstantNode } },
	    { name: 'SymbolNode',      test: function (x) { return x && x.isSymbolNode } },
	    { name: 'ParenthesisNode', test: function (x) { return x && x.isParenthesisNode } },
	    { name: 'FunctionNode',    test: function (x) { return x && x.isFunctionNode } },
	    { name: 'FunctionAssignmentNode',    test: function (x) { return x && x.isFunctionAssignmentNode } },
	    { name: 'ArrayNode',                 test: function (x) { return x && x.isArrayNode } },
	    { name: 'AssignmentNode',            test: function (x) { return x && x.isAssignmentNode } },
	    { name: 'BlockNode',                 test: function (x) { return x && x.isBlockNode } },
	    { name: 'ConditionalNode',           test: function (x) { return x && x.isConditionalNode } },
	    { name: 'IndexNode',                 test: function (x) { return x && x.isIndexNode } },
	    { name: 'RangeNode',                 test: function (x) { return x && x.isRangeNode } },
	    { name: 'UpdateNode',                test: function (x) { return x && x.isUpdateNode } },
	    { name: 'Node',                      test: function (x) { return x && x.isNode } }
	  ];
	
	  // TODO: add conversion from BigNumber to number?
	  typed.conversions = [
	    {
	      from: 'number',
	      to: 'BigNumber',
	      convert: function (x) {
	        // note: conversion from number to BigNumber can fail if x has >15 digits
	        if (digits(x) > 15) {
	          throw new TypeError('Cannot implicitly convert a number with >15 significant digits to BigNumber ' +
	          '(value: ' + x + '). ' +
	          'Use function bignumber(x) to convert to BigNumber.');
	        }
	        return new type.BigNumber(x);
	      }
	    }, {
	      from: 'number',
	      to: 'Complex',
	      convert: function (x) {
	        return new type.Complex(x, 0);
	      }
	    }, {
	      from: 'number',
	      to: 'string',
	      convert: function (x) {
	        return x + '';
	      }
	    }, {
	      from: 'BigNumber',
	      to: 'Complex',
	      convert: function (x) {
	        return new type.Complex(x.toNumber(), 0);
	      }
	    }, {
	      from: 'Fraction',
	      to: 'BigNumber',
	      convert: function (x) {
	        throw new TypeError('Cannot implicitly convert a Fraction to BigNumber or vice versa. ' +
	            'Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.');
	      }
	    }, {
	      from: 'Fraction',
	      to: 'Complex',
	      convert: function (x) {
	        return new type.Complex(x.valueOf(), 0);
	      }
	    }, {
	      from: 'number',
	      to: 'Fraction',
	      convert: function (x) {
	        if (digits(x) > 15) {
	          throw new TypeError('Cannot implicitly convert a number with >15 significant digits to Fraction ' +
	              '(value: ' + x + '). ' +
	              'Use function fraction(x) to convert to Fraction.');
	        }
	        return new type.Fraction(x);
	      }
	    }, {
	    // FIXME: add conversion from Fraction to number, for example for `sqrt(fraction(1,3))`
	    //  from: 'Fraction',
	    //  to: 'number',
	    //  convert: function (x) {
	    //    return x.valueOf();
	    //  }
	    //}, {
	      from: 'string',
	      to: 'number',
	      convert: function (x) {
	        var n = Number(x);
	        if (isNaN(n)) {
	          throw new Error('Cannot convert "' + x + '" to a number');
	        }
	        return n;
	      }
	    }, {
	      from: 'string',
	      to: 'BigNumber',
	      convert: function (x) {
	        try {
	          return new type.BigNumber(x);
	        }
	        catch (err) {
	          throw new Error('Cannot convert "' + x + '" to BigNumber');
	        }
	      }
	    }, {
	      from: 'string',
	      to: 'Fraction',
	      convert: function (x) {
	        try {
	          return new type.Fraction(x);
	        }
	        catch (err) {
	          throw new Error('Cannot convert "' + x + '" to Fraction');
	        }
	      }
	    }, {
	      from: 'string',
	      to: 'Complex',
	      convert: function (x) {
	        try {
	          return new type.Complex(x);
	        }
	        catch (err) {
	          throw new Error('Cannot convert "' + x + '" to Complex');
	        }
	      }
	    }, {
	      from: 'boolean',
	      to: 'number',
	      convert: function (x) {
	        return +x;
	      }
	    }, {
	      from: 'boolean',
	      to: 'BigNumber',
	      convert: function (x) {
	        return new type.BigNumber(+x);
	      }
	    }, {
	      from: 'boolean',
	      to: 'Fraction',
	      convert: function (x) {
	        return new type.Fraction(+x);
	      }
	    }, {
	      from: 'boolean',
	      to: 'string',
	      convert: function (x) {
	        return +x;
	      }
	    }, {
	      from: 'null',
	      to: 'number',
	      convert: function () {
	        return 0;
	      }
	    }, {
	      from: 'null',
	      to: 'string',
	      convert: function () {
	        return 'null';
	      }
	    }, {
	      from: 'null',
	      to: 'BigNumber',
	      convert: function () {
	        return new type.BigNumber(0);
	      }
	    }, {
	      from: 'null',
	      to: 'Fraction',
	      convert: function () {
	        return new type.Fraction(0);
	      }
	    }, {
	      from: 'Array',
	      to: 'Matrix',
	      convert: function (array) {
	        // TODO: how to decide on the right type of matrix to create?
	        return new type.DenseMatrix(array);
	      }
	    }, {
	      from: 'Matrix',
	      to: 'Array',
	      convert: function (matrix) {
	        return matrix.valueOf();
	      }
	    }
	  ];
	
	  return typed;
	};


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * typed-function
	 *
	 * Type checking for JavaScript functions
	 *
	 * https://github.com/josdejong/typed-function
	 */
	'use strict';
	
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // OldNode. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like OldNode.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.typed = factory();
	  }
	}(this, function () {
	  // factory function to create a new instance of typed-function
	  // TODO: allow passing configuration, types, tests via the factory function
	  function create() {
	    /**
	     * Get a type test function for a specific data type
	     * @param {string} name                   Name of a data type like 'number' or 'string'
	     * @returns {Function(obj: *) : boolean}  Returns a type testing function.
	     *                                        Throws an error for an unknown type.
	     */
	    function getTypeTest(name) {
	      var test;
	      for (var i = 0; i < typed.types.length; i++) {
	        var entry = typed.types[i];
	        if (entry.name === name) {
	          test = entry.test;
	          break;
	        }
	      }
	
	      if (!test) {
	        var hint;
	        for (i = 0; i < typed.types.length; i++) {
	          entry = typed.types[i];
	          if (entry.name.toLowerCase() == name.toLowerCase()) {
	            hint = entry.name;
	            break;
	          }
	        }
	
	        throw new Error('Unknown type "' + name + '"' +
	            (hint ? ('. Did you mean "' + hint + '"?') : ''));
	      }
	      return test;
	    }
	
	    /**
	     * Retrieve the function name from a set of functions, and check
	     * whether the name of all functions match (if given)
	     * @param {Array.<function>} fns
	     */
	    function getName (fns) {
	      var name = '';
	
	      for (var i = 0; i < fns.length; i++) {
	        var fn = fns[i];
	
	        // merge function name when this is a typed function
	        if (fn.signatures && fn.name != '') {
	          if (name == '') {
	            name = fn.name;
	          }
	          else if (name != fn.name) {
	            var err = new Error('Function names do not match (expected: ' + name + ', actual: ' + fn.name + ')');
	            err.data = {
	              actual: fn.name,
	              expected: name
	            };
	            throw err;
	          }
	        }
	      }
	
	      return name;
	    }
	
	    /**
	     * Create an ArgumentsError. Creates messages like:
	     *
	     *   Unexpected type of argument (expected: ..., actual: ..., index: ...)
	     *   Too few arguments (expected: ..., index: ...)
	     *   Too many arguments (expected: ..., actual: ...)
	     *
	     * @param {String} fn         Function name
	     * @param {number} argCount   Number of arguments
	     * @param {Number} index      Current argument index
	     * @param {*} actual          Current argument
	     * @param {string} [expected] An optional, comma separated string with
	     *                            expected types on given index
	     * @extends Error
	     */
	    function createError(fn, argCount, index, actual, expected) {
	      var actualType = getTypeOf(actual);
	      var _expected = expected ? expected.split(',') : null;
	      var _fn = (fn || 'unnamed');
	      var anyType = _expected && contains(_expected, 'any');
	      var message;
	      var data = {
	        fn: fn,
	        index: index,
	        actual: actual,
	        expected: _expected
	      };
	
	      if (_expected) {
	        if (argCount > index && !anyType) {
	          // unexpected type
	          message = 'Unexpected type of argument in function ' + _fn +
	              ' (expected: ' + _expected.join(' or ') + ', actual: ' + actualType + ', index: ' + index + ')';
	        }
	        else {
	          // too few arguments
	          message = 'Too few arguments in function ' + _fn +
	              ' (expected: ' + _expected.join(' or ') + ', index: ' + index + ')';
	        }
	      }
	      else {
	        // too many arguments
	        message = 'Too many arguments in function ' + _fn +
	            ' (expected: ' + index + ', actual: ' + argCount + ')'
	      }
	
	      var err = new TypeError(message);
	      err.data = data;
	      return err;
	    }
	
	    /**
	     * Collection with function references (local shortcuts to functions)
	     * @constructor
	     * @param {string} [name='refs']  Optional name for the refs, used to generate
	     *                                JavaScript code
	     */
	    function Refs(name) {
	      this.name = name || 'refs';
	      this.categories = {};
	    }
	
	    /**
	     * Add a function reference.
	     * @param {Function} fn
	     * @param {string} [category='fn']    A function category, like 'fn' or 'signature'
	     * @returns {string} Returns the function name, for example 'fn0' or 'signature2'
	     */
	    Refs.prototype.add = function (fn, category) {
	      var cat = category || 'fn';
	      if (!this.categories[cat]) this.categories[cat] = [];
	
	      var index = this.categories[cat].indexOf(fn);
	      if (index == -1) {
	        index = this.categories[cat].length;
	        this.categories[cat].push(fn);
	      }
	
	      return cat + index;
	    };
	
	    /**
	     * Create code lines for all function references
	     * @returns {string} Returns the code containing all function references
	     */
	    Refs.prototype.toCode = function () {
	      var code = [];
	      var path = this.name + '.categories';
	      var categories = this.categories;
	
	      for (var cat in categories) {
	        if (categories.hasOwnProperty(cat)) {
	          var category = categories[cat];
	
	          for (var i = 0; i < category.length; i++) {
	            code.push('var ' + cat + i + ' = ' + path + '[\'' + cat + '\'][' + i + '];');
	          }
	        }
	      }
	
	      return code.join('\n');
	    };
	
	    /**
	     * A function parameter
	     * @param {string | string[] | Param} types    A parameter type like 'string',
	     *                                             'number | boolean'
	     * @param {boolean} [varArgs=false]            Variable arguments if true
	     * @constructor
	     */
	    function Param(types, varArgs) {
	      // parse the types, can be a string with types separated by pipe characters |
	      if (typeof types === 'string') {
	        // parse variable arguments operator (ellipses '...number')
	        var _types = types.trim();
	        var _varArgs = _types.substr(0, 3) === '...';
	        if (_varArgs) {
	          _types = _types.substr(3);
	        }
	        if (_types === '') {
	          this.types = ['any'];
	        }
	        else {
	          this.types = _types.split('|');
	          for (var i = 0; i < this.types.length; i++) {
	            this.types[i] = this.types[i].trim();
	          }
	        }
	      }
	      else if (Array.isArray(types)) {
	        this.types = types;
	      }
	      else if (types instanceof Param) {
	        return types.clone();
	      }
	      else {
	        throw new Error('String or Array expected');
	      }
	
	      // can hold a type to which to convert when handling this parameter
	      this.conversions = [];
	      // TODO: implement better API for conversions, be able to add conversions via constructor (support a new type Object?)
	
	      // variable arguments
	      this.varArgs = _varArgs || varArgs || false;
	
	      // check for any type arguments
	      this.anyType = this.types.indexOf('any') !== -1;
	    }
	
	    /**
	     * Order Params
	     * any type ('any') will be ordered last, and object as second last (as other
	     * types may be an object as well, like Array).
	     *
	     * @param {Param} a
	     * @param {Param} b
	     * @returns {number} Returns 1 if a > b, -1 if a < b, and else 0.
	     */
	    Param.compare = function (a, b) {
	      // TODO: simplify parameter comparison, it's a mess
	      if (a.anyType) return 1;
	      if (b.anyType) return -1;
	
	      if (contains(a.types, 'Object')) return 1;
	      if (contains(b.types, 'Object')) return -1;
	
	      if (a.hasConversions()) {
	        if (b.hasConversions()) {
	          var i, ac, bc;
	
	          for (i = 0; i < a.conversions.length; i++) {
	            if (a.conversions[i] !== undefined) {
	              ac = a.conversions[i];
	              break;
	            }
	          }
	
	          for (i = 0; i < b.conversions.length; i++) {
	            if (b.conversions[i] !== undefined) {
	              bc = b.conversions[i];
	              break;
	            }
	          }
	
	          return typed.conversions.indexOf(ac) - typed.conversions.indexOf(bc);
	        }
	        else {
	          return 1;
	        }
	      }
	      else {
	        if (b.hasConversions()) {
	          return -1;
	        }
	        else {
	          // both params have no conversions
	          var ai, bi;
	
	          for (i = 0; i < typed.types.length; i++) {
	            if (typed.types[i].name === a.types[0]) {
	              ai = i;
	              break;
	            }
	          }
	
	          for (i = 0; i < typed.types.length; i++) {
	            if (typed.types[i].name === b.types[0]) {
	              bi = i;
	              break;
	            }
	          }
	
	          return ai - bi;
	        }
	      }
	    };
	
	    /**
	     * Test whether this parameters types overlap an other parameters types.
	     * Will not match ['any'] with ['number']
	     * @param {Param} other
	     * @return {boolean} Returns true when there are overlapping types
	     */
	    Param.prototype.overlapping = function (other) {
	      for (var i = 0; i < this.types.length; i++) {
	        if (contains(other.types, this.types[i])) {
	          return true;
	        }
	      }
	      return false;
	    };
	
	    /**
	     * Test whether this parameters types matches an other parameters types.
	     * When any of the two parameters contains `any`, true is returned
	     * @param {Param} other
	     * @return {boolean} Returns true when there are matching types
	     */
	    Param.prototype.matches = function (other) {
	      return this.anyType || other.anyType || this.overlapping(other);
	    };
	
	    /**
	     * Create a clone of this param
	     * @returns {Param} Returns a cloned version of this param
	     */
	    Param.prototype.clone = function () {
	      var param = new Param(this.types.slice(), this.varArgs);
	      param.conversions = this.conversions.slice();
	      return param;
	    };
	
	    /**
	     * Test whether this parameter contains conversions
	     * @returns {boolean} Returns true if the parameter contains one or
	     *                    multiple conversions.
	     */
	    Param.prototype.hasConversions = function () {
	      return this.conversions.length > 0;
	    };
	
	    /**
	     * Tests whether this parameters contains any of the provided types
	     * @param {Object} types  A Map with types, like {'number': true}
	     * @returns {boolean}     Returns true when the parameter contains any
	     *                        of the provided types
	     */
	    Param.prototype.contains = function (types) {
	      for (var i = 0; i < this.types.length; i++) {
	        if (types[this.types[i]]) {
	          return true;
	        }
	      }
	      return false;
	    };
	
	    /**
	     * Return a string representation of this params types, like 'string' or
	     * 'number | boolean' or '...number'
	     * @param {boolean} [toConversion]   If true, the returned types string
	     *                                   contains the types where the parameter
	     *                                   will convert to. If false (default)
	     *                                   the "from" types are returned
	     * @returns {string}
	     */
	    Param.prototype.toString = function (toConversion) {
	      var types = [];
	      var keys = {};
	
	      for (var i = 0; i < this.types.length; i++) {
	        var conversion = this.conversions[i];
	        var type = toConversion && conversion ? conversion.to : this.types[i];
	        if (!(type in keys)) {
	          keys[type] = true;
	          types.push(type);
	        }
	      }
	
	      return (this.varArgs ? '...' : '') + types.join('|');
	    };
	
	    /**
	     * A function signature
	     * @param {string | string[] | Param[]} params
	     *                         Array with the type(s) of each parameter,
	     *                         or a comma separated string with types
	     * @param {Function} fn    The actual function
	     * @constructor
	     */
	    function Signature(params, fn) {
	      var _params;
	      if (typeof params === 'string') {
	        _params = (params !== '') ? params.split(',') : [];
	      }
	      else if (Array.isArray(params)) {
	        _params = params;
	      }
	      else {
	        throw new Error('string or Array expected');
	      }
	
	      this.params = new Array(_params.length);
	      this.anyType = false;
	      this.varArgs = false;
	      for (var i = 0; i < _params.length; i++) {
	        var param = new Param(_params[i]);
	        this.params[i] = param;
	        if (param.anyType) {
	          this.anyType = true;
	        }
	        if (i === _params.length - 1) {
	          // the last argument
	          this.varArgs = param.varArgs;
	        }
	        else {
	          // non-last argument
	          if (param.varArgs) {
	            throw new SyntaxError('Unexpected variable arguments operator "..."');
	          }
	        }
	      }
	
	      this.fn = fn;
	    }
	
	    /**
	     * Create a clone of this signature
	     * @returns {Signature} Returns a cloned version of this signature
	     */
	    Signature.prototype.clone = function () {
	      return new Signature(this.params.slice(), this.fn);
	    };
	
	    /**
	     * Expand a signature: split params with union types in separate signatures
	     * For example split a Signature "string | number" into two signatures.
	     * @return {Signature[]} Returns an array with signatures (at least one)
	     */
	    Signature.prototype.expand = function () {
	      var signatures = [];
	
	      function recurse(signature, path) {
	        if (path.length < signature.params.length) {
	          var i, newParam, conversion;
	
	          var param = signature.params[path.length];
	          if (param.varArgs) {
	            // a variable argument. do not split the types in the parameter
	            newParam = param.clone();
	
	            // add conversions to the parameter
	            // recurse for all conversions
	            for (i = 0; i < typed.conversions.length; i++) {
	              conversion = typed.conversions[i];
	              if (!contains(param.types, conversion.from) && contains(param.types, conversion.to)) {
	                var j = newParam.types.length;
	                newParam.types[j] = conversion.from;
	                newParam.conversions[j] = conversion;
	              }
	            }
	
	            recurse(signature, path.concat(newParam));
	          }
	          else {
	            // split each type in the parameter
	            for (i = 0; i < param.types.length; i++) {
	              recurse(signature, path.concat(new Param(param.types[i])));
	            }
	
	            // recurse for all conversions
	            for (i = 0; i < typed.conversions.length; i++) {
	              conversion = typed.conversions[i];
	              if (!contains(param.types, conversion.from) && contains(param.types, conversion.to)) {
	                newParam = new Param(conversion.from);
	                newParam.conversions[0] = conversion;
	                recurse(signature, path.concat(newParam));
	              }
	            }
	          }
	        }
	        else {
	          signatures.push(new Signature(path, signature.fn));
	        }
	      }
	
	      recurse(this, []);
	
	      return signatures;
	    };
	
	    /**
	     * Compare two signatures.
	     *
	     * When two params are equal and contain conversions, they will be sorted
	     * by lowest index of the first conversions.
	     *
	     * @param {Signature} a
	     * @param {Signature} b
	     * @returns {number} Returns 1 if a > b, -1 if a < b, and else 0.
	     */
	    Signature.compare = function (a, b) {
	      if (a.params.length > b.params.length) return 1;
	      if (a.params.length < b.params.length) return -1;
	
	      // count the number of conversions
	      var i;
	      var len = a.params.length; // a and b have equal amount of params
	      var ac = 0;
	      var bc = 0;
	      for (i = 0; i < len; i++) {
	        if (a.params[i].hasConversions()) ac++;
	        if (b.params[i].hasConversions()) bc++;
	      }
	
	      if (ac > bc) return 1;
	      if (ac < bc) return -1;
	
	      // compare the order per parameter
	      for (i = 0; i < a.params.length; i++) {
	        var cmp = Param.compare(a.params[i], b.params[i]);
	        if (cmp !== 0) {
	          return cmp;
	        }
	      }
	
	      return 0;
	    };
	
	    /**
	     * Test whether any of the signatures parameters has conversions
	     * @return {boolean} Returns true when any of the parameters contains
	     *                   conversions.
	     */
	    Signature.prototype.hasConversions = function () {
	      for (var i = 0; i < this.params.length; i++) {
	        if (this.params[i].hasConversions()) {
	          return true;
	        }
	      }
	      return false;
	    };
	
	    /**
	     * Test whether this signature should be ignored.
	     * Checks whether any of the parameters contains a type listed in
	     * typed.ignore
	     * @return {boolean} Returns true when the signature should be ignored
	     */
	    Signature.prototype.ignore = function () {
	      // create a map with ignored types
	      var types = {};
	      for (var i = 0; i < typed.ignore.length; i++) {
	        types[typed.ignore[i]] = true;
	      }
	
	      // test whether any of the parameters contains this type
	      for (i = 0; i < this.params.length; i++) {
	        if (this.params[i].contains(types)) {
	          return true;
	        }
	      }
	
	      return false;
	    };
	
	    /**
	     * Test whether the path of this signature matches a given path.
	     * @param {Param[]} params
	     */
	    Signature.prototype.paramsStartWith = function (params) {
	      if (params.length === 0) {
	        return true;
	      }
	
	      var aLast = last(this.params);
	      var bLast = last(params);
	
	      for (var i = 0; i < params.length; i++) {
	        var a = this.params[i] || (aLast.varArgs ? aLast: null);
	        var b = params[i]      || (bLast.varArgs ? bLast: null);
	
	        if (!a ||  !b || !a.matches(b)) {
	          return false;
	        }
	      }
	
	      return true;
	    };
	
	    /**
	     * Generate the code to invoke this signature
	     * @param {Refs} refs
	     * @param {string} prefix
	     * @returns {string} Returns code
	     */
	    Signature.prototype.toCode = function (refs, prefix) {
	      var code = [];
	
	      var args = new Array(this.params.length);
	      for (var i = 0; i < this.params.length; i++) {
	        var param = this.params[i];
	        var conversion = param.conversions[0];
	        if (param.varArgs) {
	          args[i] = 'varArgs';
	        }
	        else if (conversion) {
	          args[i] = refs.add(conversion.convert, 'convert') + '(arg' + i + ')';
	        }
	        else {
	          args[i] = 'arg' + i;
	        }
	      }
	
	      var ref = this.fn ? refs.add(this.fn, 'signature') : undefined;
	      if (ref) {
	        return prefix + 'return ' + ref + '(' + args.join(', ') + '); // signature: ' + this.params.join(', ');
	      }
	
	      return code.join('\n');
	    };
	
	    /**
	     * Return a string representation of the signature
	     * @returns {string}
	     */
	    Signature.prototype.toString = function () {
	      return this.params.join(', ');
	    };
	
	    /**
	     * A group of signatures with the same parameter on given index
	     * @param {Param[]} path
	     * @param {Signature} [signature]
	     * @param {Node[]} childs
	     * @param {boolean} [fallThrough=false]
	     * @constructor
	     */
	    function Node(path, signature, childs, fallThrough) {
	      this.path = path || [];
	      this.param = path[path.length - 1] || null;
	      this.signature = signature || null;
	      this.childs = childs || [];
	      this.fallThrough = fallThrough || false;
	    }
	
	    /**
	     * Generate code for this group of signatures
	     * @param {Refs} refs
	     * @param {string} prefix
	     * @returns {string} Returns the code as string
	     */
	    Node.prototype.toCode = function (refs, prefix) {
	      // TODO: split this function in multiple functions, it's too large
	      var code = [];
	
	      if (this.param) {
	        var index = this.path.length - 1;
	        var conversion = this.param.conversions[0];
	        var comment = '// type: ' + (conversion ?
	                (conversion.from + ' (convert to ' + conversion.to + ')') :
	                this.param);
	
	        // non-root node (path is non-empty)
	        if (this.param.varArgs) {
	          if (this.param.anyType) {
	            // variable arguments with any type
	            code.push(prefix + 'if (arguments.length > ' + index + ') {');
	            code.push(prefix + '  var varArgs = [];');
	            code.push(prefix + '  for (var i = ' + index + '; i < arguments.length; i++) {');
	            code.push(prefix + '    varArgs.push(arguments[i]);');
	            code.push(prefix + '  }');
	            code.push(this.signature.toCode(refs, prefix + '  '));
	            code.push(prefix + '}');
	          }
	          else {
	            // variable arguments with a fixed type
	            var getTests = function (types, arg) {
	              var tests = [];
	              for (var i = 0; i < types.length; i++) {
	                tests[i] = refs.add(getTypeTest(types[i]), 'test') + '(' + arg + ')';
	              }
	              return tests.join(' || ');
	            }.bind(this);
	
	            var allTypes = this.param.types;
	            var exactTypes = [];
	            for (var i = 0; i < allTypes.length; i++) {
	              if (this.param.conversions[i] === undefined) {
	                exactTypes.push(allTypes[i]);
	              }
	            }
	
	            code.push(prefix + 'if (' + getTests(allTypes, 'arg' + index) + ') { ' + comment);
	            code.push(prefix + '  var varArgs = [arg' + index + '];');
	            code.push(prefix + '  for (var i = ' + (index + 1) + '; i < arguments.length; i++) {');
	            code.push(prefix + '    if (' + getTests(exactTypes, 'arguments[i]') + ') {');
	            code.push(prefix + '      varArgs.push(arguments[i]);');
	
	            for (var i = 0; i < allTypes.length; i++) {
	              var conversion_i = this.param.conversions[i];
	              if (conversion_i) {
	                var test = refs.add(getTypeTest(allTypes[i]), 'test');
	                var convert = refs.add(conversion_i.convert, 'convert');
	                code.push(prefix + '    }');
	                code.push(prefix + '    else if (' + test + '(arguments[i])) {');
	                code.push(prefix + '      varArgs.push(' + convert + '(arguments[i]));');
	              }
	            }
	            code.push(prefix + '    } else {');
	            code.push(prefix + '      throw createError(name, arguments.length, i, arguments[i], \'' + exactTypes.join(',') + '\');');
	            code.push(prefix + '    }');
	            code.push(prefix + '  }');
	            code.push(this.signature.toCode(refs, prefix + '  '));
	            code.push(prefix + '}');
	          }
	        }
	        else {
	          if (this.param.anyType) {
	            // any type
	            code.push(prefix + '// type: any');
	            code.push(this._innerCode(refs, prefix));
	          }
	          else {
	            // regular type
	            var type = this.param.types[0];
	            var test = type !== 'any' ? refs.add(getTypeTest(type), 'test') : null;
	
	            code.push(prefix + 'if (' + test + '(arg' + index + ')) { ' + comment);
	            code.push(this._innerCode(refs, prefix + '  '));
	            code.push(prefix + '}');
	          }
	        }
	      }
	      else {
	        // root node (path is empty)
	        code.push(this._innerCode(refs, prefix));
	      }
	
	      return code.join('\n');
	    };
	
	    /**
	     * Generate inner code for this group of signatures.
	     * This is a helper function of Node.prototype.toCode
	     * @param {Refs} refs
	     * @param {string} prefix
	     * @returns {string} Returns the inner code as string
	     * @private
	     */
	    Node.prototype._innerCode = function (refs, prefix) {
	      var code = [];
	      var i;
	
	      if (this.signature) {
	        code.push(prefix + 'if (arguments.length === ' + this.path.length + ') {');
	        code.push(this.signature.toCode(refs, prefix + '  '));
	        code.push(prefix + '}');
	      }
	
	      for (i = 0; i < this.childs.length; i++) {
	        code.push(this.childs[i].toCode(refs, prefix));
	      }
	
	      // TODO: shouldn't the this.param.anyType check be redundant
	      if (!this.fallThrough || (this.param && this.param.anyType)) {
	        var exceptions = this._exceptions(refs, prefix);
	        if (exceptions) {
	          code.push(exceptions);
	        }
	      }
	
	      return code.join('\n');
	    };
	
	
	    /**
	     * Generate code to throw exceptions
	     * @param {Refs} refs
	     * @param {string} prefix
	     * @returns {string} Returns the inner code as string
	     * @private
	     */
	    Node.prototype._exceptions = function (refs, prefix) {
	      var index = this.path.length;
	
	      if (this.childs.length === 0) {
	        // TODO: can this condition be simplified? (we have a fall-through here)
	        return [
	          prefix + 'if (arguments.length > ' + index + ') {',
	          prefix + '  throw createError(name, arguments.length, ' + index + ', arguments[' + index + ']);',
	          prefix + '}'
	        ].join('\n');
	      }
	      else {
	        var keys = {};
	        var types = [];
	
	        for (var i = 0; i < this.childs.length; i++) {
	          var node = this.childs[i];
	          if (node.param) {
	            for (var j = 0; j < node.param.types.length; j++) {
	              var type = node.param.types[j];
	              if (!(type in keys) && !node.param.conversions[j]) {
	                keys[type] = true;
	                types.push(type);
	              }
	            }
	          }
	        }
	
	        return prefix + 'throw createError(name, arguments.length, ' + index + ', arguments[' + index + '], \'' + types.join(',') + '\');';
	      }
	    };
	
	    /**
	     * Split all raw signatures into an array with expanded Signatures
	     * @param {Object.<string, Function>} rawSignatures
	     * @return {Signature[]} Returns an array with expanded signatures
	     */
	    function parseSignatures(rawSignatures) {
	      // FIXME: need to have deterministic ordering of signatures, do not create via object
	      var signature;
	      var keys = {};
	      var signatures = [];
	      var i;
	
	      for (var types in rawSignatures) {
	        if (rawSignatures.hasOwnProperty(types)) {
	          var fn = rawSignatures[types];
	          signature = new Signature(types, fn);
	
	          if (signature.ignore()) {
	            continue;
	          }
	
	          var expanded = signature.expand();
	
	          for (i = 0; i < expanded.length; i++) {
	            var signature_i = expanded[i];
	            var key = signature_i.toString();
	            var existing = keys[key];
	            if (!existing) {
	              keys[key] = signature_i;
	            }
	            else {
	              var cmp = Signature.compare(signature_i, existing);
	              if (cmp < 0) {
	                // override if sorted first
	                keys[key] = signature_i;
	              }
	              else if (cmp === 0) {
	                throw new Error('Signature "' + key + '" is defined twice');
	              }
	              // else: just ignore
	            }
	          }
	        }
	      }
	
	      // convert from map to array
	      for (key in keys) {
	        if (keys.hasOwnProperty(key)) {
	          signatures.push(keys[key]);
	        }
	      }
	
	      // order the signatures
	      signatures.sort(function (a, b) {
	        return Signature.compare(a, b);
	      });
	
	      // filter redundant conversions from signatures with varArgs
	      // TODO: simplify this loop or move it to a separate function
	      for (i = 0; i < signatures.length; i++) {
	        signature = signatures[i];
	
	        if (signature.varArgs) {
	          var index = signature.params.length - 1;
	          var param = signature.params[index];
	
	          var t = 0;
	          while (t < param.types.length) {
	            if (param.conversions[t]) {
	              var type = param.types[t];
	
	              for (var j = 0; j < signatures.length; j++) {
	                var other = signatures[j];
	                var p = other.params[index];
	
	                if (other !== signature &&
	                    p &&
	                    contains(p.types, type) && !p.conversions[index]) {
	                  // this (conversion) type already exists, remove it
	                  param.types.splice(t, 1);
	                  param.conversions.splice(t, 1);
	                  t--;
	                  break;
	                }
	              }
	            }
	            t++;
	          }
	        }
	      }
	
	      return signatures;
	    }
	
	    /**
	     * Filter all any type signatures
	     * @param {Signature[]} signatures
	     * @return {Signature[]} Returns only any type signatures
	     */
	    function filterAnyTypeSignatures (signatures) {
	      var filtered = [];
	
	      for (var i = 0; i < signatures.length; i++) {
	        if (signatures[i].anyType) {
	          filtered.push(signatures[i]);
	        }
	      }
	
	      return filtered;
	    }
	
	    /**
	     * create a map with normalized signatures as key and the function as value
	     * @param {Signature[]} signatures   An array with split signatures
	     * @return {Object.<string, Function>} Returns a map with normalized
	     *                                     signatures as key, and the function
	     *                                     as value.
	     */
	    function mapSignatures(signatures) {
	      var normalized = {};
	
	      for (var i = 0; i < signatures.length; i++) {
	        var signature = signatures[i];
	        if (signature.fn && !signature.hasConversions()) {
	          var params = signature.params.join(',');
	          normalized[params] = signature.fn;
	        }
	      }
	
	      return normalized;
	    }
	
	    /**
	     * Parse signatures recursively in a node tree.
	     * @param {Signature[]} signatures  Array with expanded signatures
	     * @param {Param[]} path            Traversed path of parameter types
	     * @param {Signature[]} anys
	     * @return {Node}                   Returns a node tree
	     */
	    function parseTree(signatures, path, anys) {
	      var i, signature;
	      var index = path.length;
	      var nodeSignature;
	
	      var filtered = [];
	      for (i = 0; i < signatures.length; i++) {
	        signature = signatures[i];
	
	        // filter the first signature with the correct number of params
	        if (signature.params.length === index && !nodeSignature) {
	          nodeSignature = signature;
	        }
	
	        if (signature.params[index] != undefined) {
	          filtered.push(signature);
	        }
	      }
	
	      // sort the filtered signatures by param
	      filtered.sort(function (a, b) {
	        return Param.compare(a.params[index], b.params[index]);
	      });
	
	      // recurse over the signatures
	      var entries = [];
	      for (i = 0; i < filtered.length; i++) {
	        signature = filtered[i];
	        // group signatures with the same param at current index
	        var param = signature.params[index];
	
	        // TODO: replace the next filter loop
	        var existing = entries.filter(function (entry) {
	          return entry.param.overlapping(param);
	        })[0];
	
	        //var existing;
	        //for (var j = 0; j < entries.length; j++) {
	        //  if (entries[j].param.overlapping(param)) {
	        //    existing = entries[j];
	        //    break;
	        //  }
	        //}
	
	        if (existing) {
	          if (existing.param.varArgs) {
	            throw new Error('Conflicting types "' + existing.param + '" and "' + param + '"');
	          }
	          existing.signatures.push(signature);
	        }
	        else {
	          entries.push({
	            param: param,
	            signatures: [signature]
	          });
	        }
	      }
	
	      // find all any type signature that can still match our current path
	      var matchingAnys = [];
	      for (i = 0; i < anys.length; i++) {
	        if (anys[i].paramsStartWith(path)) {
	          matchingAnys.push(anys[i]);
	        }
	      }
	
	      // see if there are any type signatures that don't match any of the
	      // signatures that we have in our tree, i.e. we have alternative
	      // matching signature(s) outside of our current tree and we should
	      // fall through to them instead of throwing an exception
	      var fallThrough = false;
	      for (i = 0; i < matchingAnys.length; i++) {
	        if (!contains(signatures, matchingAnys[i])) {
	          fallThrough = true;
	          break;
	        }
	      }
	
	      // parse the childs
	      var childs = new Array(entries.length);
	      for (i = 0; i < entries.length; i++) {
	        var entry = entries[i];
	        childs[i] = parseTree(entry.signatures, path.concat(entry.param), matchingAnys)
	      }
	
	      return new Node(path, nodeSignature, childs, fallThrough);
	    }
	
	    /**
	     * Generate an array like ['arg0', 'arg1', 'arg2']
	     * @param {number} count Number of arguments to generate
	     * @returns {Array} Returns an array with argument names
	     */
	    function getArgs(count) {
	      // create an array with all argument names
	      var args = [];
	      for (var i = 0; i < count; i++) {
	        args[i] = 'arg' + i;
	      }
	
	      return args;
	    }
	
	    /**
	     * Compose a function from sub-functions each handling a single type signature.
	     * Signatures:
	     *   typed(signature: string, fn: function)
	     *   typed(name: string, signature: string, fn: function)
	     *   typed(signatures: Object.<string, function>)
	     *   typed(name: string, signatures: Object.<string, function>)
	     *
	     * @param {string | null} name
	     * @param {Object.<string, Function>} signatures
	     * @return {Function} Returns the typed function
	     * @private
	     */
	    function _typed(name, signatures) {
	      var refs = new Refs();
	
	      // parse signatures, expand them
	      var _signatures = parseSignatures(signatures);
	      if (_signatures.length == 0) {
	        throw new Error('No signatures provided');
	      }
	
	      // filter all any type signatures
	      var anys = filterAnyTypeSignatures(_signatures);
	
	      // parse signatures into a node tree
	      var node = parseTree(_signatures, [], anys);
	
	      //var util = require('util');
	      //console.log('ROOT');
	      //console.log(util.inspect(node, { depth: null }));
	
	      // generate code for the typed function
	      var code = [];
	      var _name = name || '';
	      var _args = getArgs(maxParams(_signatures));
	      code.push('function ' + _name + '(' + _args.join(', ') + ') {');
	      code.push('  "use strict";');
	      code.push('  var name = \'' + _name + '\';');
	      code.push(node.toCode(refs, '  ', false));
	      code.push('}');
	
	      // generate body for the factory function
	      var body = [
	        refs.toCode(),
	        'return ' + code.join('\n')
	      ].join('\n');
	
	      // evaluate the JavaScript code and attach function references
	      var factory = (new Function(refs.name, 'createError', body));
	      var fn = factory(refs, createError);
	
	      //console.log('FN\n' + fn.toString()); // TODO: cleanup
	
	      // attach the signatures with sub-functions to the constructed function
	      fn.signatures = mapSignatures(_signatures);
	
	      return fn;
	    }
	
	    /**
	     * Calculate the maximum number of parameters in givens signatures
	     * @param {Signature[]} signatures
	     * @returns {number} The maximum number of parameters
	     */
	    function maxParams(signatures) {
	      var max = 0;
	
	      for (var i = 0; i < signatures.length; i++) {
	        var len = signatures[i].params.length;
	        if (len > max) {
	          max = len;
	        }
	      }
	
	      return max;
	    }
	
	    /**
	     * Get the type of a value
	     * @param {*} x
	     * @returns {string} Returns a string with the type of value
	     */
	    function getTypeOf(x) {
	      var obj;
	
	      for (var i = 0; i < typed.types.length; i++) {
	        var entry = typed.types[i];
	
	        if (entry.name === 'Object') {
	          // Array and Date are also Object, so test for Object afterwards
	          obj = entry;
	        }
	        else {
	          if (entry.test(x)) return entry.name;
	        }
	      }
	
	      // at last, test whether an object
	      if (obj && obj.test(x)) return obj.name;
	
	      return 'unknown';
	    }
	
	    /**
	     * Test whether an array contains some item
	     * @param {Array} array
	     * @param {*} item
	     * @return {boolean} Returns true if array contains item, false if not.
	     */
	    function contains(array, item) {
	      return array.indexOf(item) !== -1;
	    }
	
	    /**
	     * Returns the last item in the array
	     * @param {Array} array
	     * @return {*} item
	     */
	    function last (array) {
	      return array[array.length - 1];
	    }
	
	    // data type tests
	    var types = [
	      { name: 'number',    test: function (x) { return typeof x === 'number' } },
	      { name: 'string',    test: function (x) { return typeof x === 'string' } },
	      { name: 'boolean',   test: function (x) { return typeof x === 'boolean' } },
	      { name: 'Function',  test: function (x) { return typeof x === 'function'} },
	      { name: 'Array',     test: Array.isArray },
	      { name: 'Date',      test: function (x) { return x instanceof Date } },
	      { name: 'RegExp',    test: function (x) { return x instanceof RegExp } },
	      { name: 'Object',    test: function (x) { return typeof x === 'object' } },
	      { name: 'null',      test: function (x) { return x === null } },
	      { name: 'undefined', test: function (x) { return x === undefined } }
	    ];
	
	    // configuration
	    var config = {};
	
	    // type conversions. Order is important
	    var conversions = [];
	
	    // types to be ignored
	    var ignore = [];
	
	    // temporary object for holding types and conversions, for constructing
	    // the `typed` function itself
	    // TODO: find a more elegant solution for this
	    var typed = {
	      config: config,
	      types: types,
	      conversions: conversions,
	      ignore: ignore
	    };
	
	    /**
	     * Construct the typed function itself with various signatures
	     *
	     * Signatures:
	     *
	     *   typed(signatures: Object.<string, function>)
	     *   typed(name: string, signatures: Object.<string, function>)
	     */
	    typed = _typed('typed', {
	      'Object': function (signatures) {
	        var fns = [];
	        for (var signature in signatures) {
	          if (signatures.hasOwnProperty(signature)) {
	            fns.push(signatures[signature]);
	          }
	        }
	        var name = getName(fns);
	
	        return _typed(name, signatures);
	      },
	      'string, Object': _typed,
	      // TODO: add a signature 'Array.<function>'
	      '...Function': function (fns) {
	        var err;
	        var name = getName(fns);
	        var signatures = {};
	
	        for (var i = 0; i < fns.length; i++) {
	          var fn = fns[i];
	
	          // test whether this is a typed-function
	          if (!(typeof fn.signatures === 'object')) {
	            err = new TypeError('Function is no typed-function (index: ' + i + ')');
	            err.data = {index: i};
	            throw err;
	          }
	
	          // merge the signatures
	          for (var signature in fn.signatures) {
	            if (fn.signatures.hasOwnProperty(signature)) {
	              if (signatures.hasOwnProperty(signature)) {
	                if (fn.signatures[signature] !== signatures[signature]) {
	                  err = new Error('Signature "' + signature + '" is defined twice');
	                  err.data = {signature: signature};
	                  throw err;
	                }
	                // else: both signatures point to the same function, that's fine
	              }
	              else {
	                signatures[signature] = fn.signatures[signature];
	              }
	            }
	          }
	        }
	
	        return _typed(name, signatures);
	      }
	    });
	
	    /**
	     * Find a specific signature from a (composed) typed function, for
	     * example:
	     *
	     *   typed.find(fn, ['number', 'string'])
	     *   typed.find(fn, 'number, string')
	     *
	     * Function find only only works for exact matches.
	     *
	     * @param {Function} fn                   A typed-function
	     * @param {string | string[]} signature   Signature to be found, can be
	     *                                        an array or a comma separated string.
	     * @return {Function}                     Returns the matching signature, or
	     *                                        throws an errror when no signature
	     *                                        is found.
	     */
	    function find (fn, signature) {
	      if (!fn.signatures) {
	        throw new TypeError('Function is no typed-function');
	      }
	
	      // normalize input
	      var arr;
	      if (typeof signature === 'string') {
	        arr = signature.split(',');
	        for (var i = 0; i < arr.length; i++) {
	          arr[i] = arr[i].trim();
	        }
	      }
	      else if (Array.isArray(signature)) {
	        arr = signature;
	      }
	      else {
	        throw new TypeError('String array or a comma separated string expected');
	      }
	
	      var str = arr.join(',');
	
	      // find an exact match
	      var match = fn.signatures[str];
	      if (match) {
	        return match;
	      }
	
	      // TODO: extend find to match non-exact signatures
	
	      throw new TypeError('Signature not found (signature: ' + (fn.name || 'unnamed') + '(' + arr.join(', ') + '))');
	    }
	
	    /**
	     * Convert a given value to another data type.
	     * @param {*} value
	     * @param {string} type
	     */
	    function convert (value, type) {
	      var from = getTypeOf(value);
	
	      // check conversion is needed
	      if (type === from) {
	        return value;
	      }
	
	      for (var i = 0; i < typed.conversions.length; i++) {
	        var conversion = typed.conversions[i];
	        if (conversion.from === from && conversion.to === type) {
	          return conversion.convert(value);
	        }
	      }
	
	      throw new Error('Cannot convert from ' + from + ' to ' + type);
	    }
	
	    // attach types and conversions to the final `typed` function
	    typed.config = config;
	    typed.types = types;
	    typed.conversions = conversions;
	    typed.ignore = ignore;
	    typed.create = create;
	    typed.find = find;
	    typed.convert = convert;
	
	    // add a type
	    typed.addType = function (type) {
	      if (!type || typeof type.name !== 'string' || typeof type.test !== 'function') {
	        throw new TypeError('Object with properties {name: string, test: function} expected');
	      }
	
	      typed.types.push(type);
	    };
	
	    // add a conversion
	    typed.addConversion = function (conversion) {
	      if (!conversion
	          || typeof conversion.from !== 'string'
	          || typeof conversion.to !== 'string'
	          || typeof conversion.convert !== 'function') {
	        throw new TypeError('Object with properties {from: string, to: string, convert: function} expected');
	      }
	
	      typed.conversions.push(conversion);
	    };
	
	    return typed;
	  }
	
	  return create();
	}));


/***/ },
/* 389 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @typedef {{sign: '+' | '-' | '', coefficients: number[], exponent: number}} SplitValue
	 */
	
	/**
	 * Test whether value is a number
	 * @param {*} value
	 * @return {boolean} isNumber
	 */
	exports.isNumber = function(value) {
	  return typeof value === 'number';
	};
	
	/**
	 * Check if a number is integer
	 * @param {number | boolean} value
	 * @return {boolean} isInteger
	 */
	exports.isInteger = function(value) {
	  return isFinite(value)
	      ? (value == Math.round(value))
	      : false;
	  // Note: we use ==, not ===, as we can have Booleans as well
	};
	
	/**
	 * Calculate the sign of a number
	 * @param {number} x
	 * @returns {*}
	 */
	exports.sign = Math.sign || function(x) {
	  if (x > 0) {
	    return 1;
	  }
	  else if (x < 0) {
	    return -1;
	  }
	  else {
	    return 0;
	  }
	};
	
	/**
	 * Convert a number to a formatted string representation.
	 *
	 * Syntax:
	 *
	 *    format(value)
	 *    format(value, options)
	 *    format(value, precision)
	 *    format(value, fn)
	 *
	 * Where:
	 *
	 *    {number} value   The value to be formatted
	 *    {Object} options An object with formatting options. Available options:
	 *                     {string} notation
	 *                         Number notation. Choose from:
	 *                         'fixed'          Always use regular number notation.
	 *                                          For example '123.40' and '14000000'
	 *                         'exponential'    Always use exponential notation.
	 *                                          For example '1.234e+2' and '1.4e+7'
	 *                         'engineering'    Always use engineering notation.
	 *                                          For example '123.4e+0' and '14.0e+6'
	 *                         'auto' (default) Regular number notation for numbers
	 *                                          having an absolute value between
	 *                                          `lower` and `upper` bounds, and uses
	 *                                          exponential notation elsewhere.
	 *                                          Lower bound is included, upper bound
	 *                                          is excluded.
	 *                                          For example '123.4' and '1.4e7'.
	 *                     {number} precision   A number between 0 and 16 to round
	 *                                          the digits of the number.
	 *                                          In case of notations 'exponential' and
	 *                                          'auto', `precision` defines the total
	 *                                          number of significant digits returned
	 *                                          and is undefined by default.
	 *                                          In case of notation 'fixed',
	 *                                          `precision` defines the number of
	 *                                          significant digits after the decimal
	 *                                          point, and is 0 by default.
	 *                     {Object} exponential An object containing two parameters,
	 *                                          {number} lower and {number} upper,
	 *                                          used by notation 'auto' to determine
	 *                                          when to return exponential notation.
	 *                                          Default values are `lower=1e-3` and
	 *                                          `upper=1e5`.
	 *                                          Only applicable for notation `auto`.
	 *    {Function} fn    A custom formatting function. Can be used to override the
	 *                     built-in notations. Function `fn` is called with `value` as
	 *                     parameter and must return a string. Is useful for example to
	 *                     format all values inside a matrix in a particular way.
	 *
	 * Examples:
	 *
	 *    format(6.4);                                        // '6.4'
	 *    format(1240000);                                    // '1.24e6'
	 *    format(1/3);                                        // '0.3333333333333333'
	 *    format(1/3, 3);                                     // '0.333'
	 *    format(21385, 2);                                   // '21000'
	 *    format(12.071, {notation: 'fixed'});                // '12'
	 *    format(2.3,    {notation: 'fixed', precision: 2});  // '2.30'
	 *    format(52.8,   {notation: 'exponential'});          // '5.28e+1'
	 *    format(12345678, {notation: 'engineering'});        // '12.345678e+6'
	 *
	 * @param {number} value
	 * @param {Object | Function | number} [options]
	 * @return {string} str The formatted value
	 */
	exports.format = function(value, options) {
	  if (typeof options === 'function') {
	    // handle format(value, fn)
	    return options(value);
	  }
	
	  // handle special cases
	  if (value === Infinity) {
	    return 'Infinity';
	  }
	  else if (value === -Infinity) {
	    return '-Infinity';
	  }
	  else if (isNaN(value)) {
	    return 'NaN';
	  }
	
	  // default values for options
	  var notation = 'auto';
	  var precision = undefined;
	
	  if (options) {
	    // determine notation from options
	    if (options.notation) {
	      notation = options.notation;
	    }
	
	    // determine precision from options
	    if (exports.isNumber(options)) {
	      precision = options;
	    }
	    else if (options.precision) {
	      precision = options.precision;
	    }
	  }
	
	  // handle the various notations
	  switch (notation) {
	    case 'fixed':
	      return exports.toFixed(value, precision);
	
	    case 'exponential':
	      return exports.toExponential(value, precision);
	
	    case 'engineering':
	      return exports.toEngineering(value, precision);
	
	    case 'auto':
	      return exports
	          .toPrecision(value, precision, options && options.exponential)
	
	          // remove trailing zeros after the decimal point
	          .replace(/((\.\d*?)(0+))($|e)/, function () {
	            var digits = arguments[2];
	            var e = arguments[4];
	            return (digits !== '.') ? digits + e : e;
	          });
	
	    default:
	      throw new Error('Unknown notation "' + notation + '". ' +
	          'Choose "auto", "exponential", or "fixed".');
	  }
	};
	
	/**
	 * Split a number into sign, coefficients, and exponent
	 * @param {number | string} value
	 * @return {SplitValue}
	 *              Returns an object containing sign, coefficients, and exponent
	 */
	exports.splitNumber = function (value) {
	  // parse the input value
	  var match = String(value).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
	  if (!match) {
	    throw new SyntaxError('Invalid number ' + value);
	  }
	
	  var sign         = match[1];
	  var digits       = match[2];
	  var exponent     = parseFloat(match[4] || '0');
	
	  var dot = digits.indexOf('.');
	  exponent += (dot !== -1) ? (dot - 1) : (digits.length - 1);
	
	  var coefficients = digits
	      .replace('.', '')  // remove the dot (must be removed before removing leading zeros)
	      .replace(/^0*/, function (zeros) {
	        // remove leading zeros, add their count to the exponent
	        exponent -= zeros.length;
	        return '';
	      })
	      .replace(/0*$/, '') // remove trailing zeros
	      .split('')
	      .map(function (d) {
	        return parseInt(d);
	      });
	
	  if (coefficients.length === 0) {
	    coefficients.push(0);
	    exponent++;
	  }
	
	  return {
	    sign: sign,
	    coefficients: coefficients,
	    exponent: exponent
	  };
	};
	
	
	/**
	 * Format a number in engineering notation. Like '1.23e+6', '2.3e+0', '3.500e-3'
	 * @param {number | string} value
	 * @param {number} [precision=0]        Optional number of decimals after the
	 *                                      decimal point. Zero by default.
	 */
	exports.toEngineering = function (value, precision) {
	  if (isNaN(value) || !isFinite(value)) {
	    return String(value);
	  }
	  
	  var rounded = exports.roundDigits(exports.splitNumber(value), precision);
	
	  var e = rounded.exponent;
	  var c = rounded.coefficients;
	
	  // find nearest lower multiple of 3 for exponent
	  var newExp = e % 3 === 0 ? e : (e < 0 ? (e - 3) - (e % 3) : e - (e % 3));
	
	  // concatenate coefficients with necessary zeros
	  var significandsDiff = e >= 0 ? e : Math.abs(newExp);
	
	  // add zeros if necessary (for ex: 1e+8)
	  if (c.length - 1 < significandsDiff) c = c.concat(zeros(significandsDiff - (c.length - 1)));
	
	  // find difference in exponents
	  var expDiff = Math.abs(e - newExp);
	
	  var decimalIdx = 1;
	
	  // push decimal index over by expDiff times
	  while (--expDiff >= 0) decimalIdx++;
	
	  // if all coefficient values are zero after the decimal point, don't add a decimal value.
	  // otherwise concat with the rest of the coefficients
	  var decimals = c.slice(decimalIdx).join('');
	  var decimalVal = decimals.match(/[1-9]/) ? ('.' + decimals) : '';
	
	  var str = c.slice(0, decimalIdx).join('') +
	      decimalVal +
	      'e' + (e >= 0 ? '+' : '') + newExp.toString();
	  return rounded.sign + str;
	};
	
	/**
	 * Format a number with fixed notation.
	 * @param {number | string} value
	 * @param {number} [precision=0]        Optional number of decimals after the
	 *                                      decimal point. Zero by default.
	 */
	exports.toFixed = function (value, precision) {
	  if (isNaN(value) || !isFinite(value)) {
	    return String(value);
	  }
	
	  var splitValue = exports.splitNumber(value)
	  var rounded = exports.roundDigits(splitValue, splitValue.exponent + 1 + (precision || 0));
	  var c = rounded.coefficients;
	  var p = rounded.exponent + 1; // exponent may have changed
	
	  // append zeros if needed
	  var pp = p + (precision || 0);
	  if (c.length < pp) {
	    c = c.concat(zeros(pp - c.length));
	  }
	
	  // prepend zeros if needed
	  if (p < 0) {
	    c = zeros(-p + 1).concat(c);
	    p = 1;
	  }
	
	  // insert a dot if needed
	  if (precision) {
	    c.splice(p, 0, (p === 0) ? '0.' : '.');
	  }
	
	  return rounded.sign + c.join('');
	};
	
	/**
	 * Format a number in exponential notation. Like '1.23e+5', '2.3e+0', '3.500e-3'
	 * @param {number | string} value
	 * @param {number} [precision]  Number of digits in formatted output.
	 *                              If not provided, the maximum available digits
	 *                              is used.
	 */
	exports.toExponential = function (value, precision) {
	  if (isNaN(value) || !isFinite(value)) {
	    return String(value);
	  }
	
	  // round if needed, else create a clone
	  var split = exports.splitNumber(value)
	  var rounded = precision ? exports.roundDigits(split, precision) : split;
	  var c = rounded.coefficients;
	  var e = rounded.exponent;
	
	  // append zeros if needed
	  if (c.length < precision) {
	    c = c.concat(zeros(precision - c.length));
	  }
	
	  // format as `C.CCCe+EEE` or `C.CCCe-EEE`
	  var first = c.shift();
	  return rounded.sign + first + (c.length > 0 ? ('.' + c.join('')) : '') +
	      'e' + (e >= 0 ? '+' : '') + e;
	}
	
	/**
	 * Format a number with a certain precision
	 * @param {number | string} value
	 * @param {number} [precision=undefined] Optional number of digits.
	 * @param {{lower: number | undefined, upper: number | undefined}} [options]
	 *                                       By default:
	 *                                         lower = 1e-3 (excl)
	 *                                         upper = 1e+5 (incl)
	 * @return {string}
	 */
	exports.toPrecision = function (value, precision, options) {
	  if (isNaN(value) || !isFinite(value)) {
	    return String(value);
	  }
	
	  // determine lower and upper bound for exponential notation.
	  var lower = (options && options.lower !== undefined) ? options.lower : 1e-3;
	  var upper = (options && options.upper !== undefined) ? options.upper : 1e+5;
	
	  var split = exports.splitNumber(value)
	  var abs = Math.abs(Math.pow(10, split.exponent));
	  if (abs < lower || abs >= upper) {
	    // exponential notation
	    return exports.toExponential(value, precision);
	  }
	  else {
	    var rounded = precision ? exports.roundDigits(split, precision) : split;
	    var c = rounded.coefficients;
	    var e = rounded.exponent;
	
	    // append trailing zeros
	    if (c.length < precision) {
	      c = c.concat(zeros(precision - c.length));
	    }
	
	    // append trailing zeros
	    // TODO: simplify the next statement
	    c = c.concat(zeros(e - c.length + 1 +
	        (c.length < precision ? precision - c.length : 0)));
	
	    // prepend zeros
	    c = zeros(-e).concat(c);
	
	    var dot = e > 0 ? e : 0;
	    if (dot < c.length - 1) {
	      c.splice(dot + 1, 0, '.');
	    }
	
	    return rounded.sign + c.join('');
	  }
	}
	
	/**
	 * Round the number of digits of a number *
	 * @param {SplitValue} split       A value split with .splitNumber(value)
	 * @param {number} precision  A positive integer
	 * @return {SplitValue}
	 *              Returns an object containing sign, coefficients, and exponent
	 *              with rounded digits
	 */
	exports.roundDigits = function (split, precision) {
	  // create a clone
	  var rounded = {
	    sign: split.sign,
	    coefficients: split.coefficients,
	    exponent: split.exponent
	  }
	  var c = rounded.coefficients;
	
	  // prepend zeros if needed
	  while (precision <= 0) {
	    c.unshift(0);
	    rounded.exponent++;
	    precision++;
	  }
	
	  if (c.length > precision) {
	    var removed = c.splice(precision, c.length - precision);
	
	    if (removed[0] >= 5) {
	      var i = precision - 1;
	      c[i]++;
	      while (c[i] === 10) {
	        c.pop();
	        if (i === 0) {
	          c.unshift(0);
	          rounded.exponent++;
	          i++;
	        }
	        i--;
	        c[i]++;
	      }
	    }
	  }
	
	  return rounded;
	};
	
	/**
	 * Create an array filled with zeros.
	 * @param {number} length
	 * @return {Array}
	 */
	function zeros(length) {
	  var arr = [];
	  for (var i = 0; i < length; i++) {
	    arr.push(0);
	  }
	  return arr;
	}
	
	/**
	 * Count the number of significant digits of a number.
	 *
	 * For example:
	 *   2.34 returns 3
	 *   0.0034 returns 2
	 *   120.5e+30 returns 4
	 *
	 * @param {number} value
	 * @return {number} digits   Number of significant digits
	 */
	exports.digits = function(value) {
	  return value
	      .toExponential()
	      .replace(/e.*$/, '')          // remove exponential notation
	      .replace( /^0\.?0*|\./, '')   // remove decimal point and leading zeros
	      .length
	};
	
	/**
	 * Minimum number added to one that makes the result different than one
	 */
	exports.DBL_EPSILON = Number.EPSILON || 2.2204460492503130808472633361816E-16;
	
	/**
	 * Compares two floating point numbers.
	 * @param {number} x          First value to compare
	 * @param {number} y          Second value to compare
	 * @param {number} [epsilon]  The maximum relative difference between x and y
	 *                            If epsilon is undefined or null, the function will
	 *                            test whether x and y are exactly equal.
	 * @return {boolean} whether the two numbers are nearly equal
	*/
	exports.nearlyEqual = function(x, y, epsilon) {
	  // if epsilon is null or undefined, test whether x and y are exactly equal
	  if (epsilon == null) {
	    return x == y;
	  }
	
	  // use "==" operator, handles infinities
	  if (x == y) {
	    return true;
	  }
	
	  // NaN
	  if (isNaN(x) || isNaN(y)) {
	    return false;
	  }
	
	  // at this point x and y should be finite
	  if(isFinite(x) && isFinite(y)) {
	    // check numbers are very close, needed when comparing numbers near zero
	    var diff = Math.abs(x - y);
	    if (diff < exports.DBL_EPSILON) {
	      return true;
	    }
	    else {
	      // use relative error
	      return diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon;
	    }
	  }
	
	  // Infinite and Number or negative Infinite and positive Infinite cases
	  return false;
	};


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var Emitter = __webpack_require__(391);
	
	/**
	 * Extend given object with emitter functions `on`, `off`, `once`, `emit`
	 * @param {Object} obj
	 * @return {Object} obj
	 */
	exports.mixin = function (obj) {
	  // create event emitter
	  var emitter = new Emitter();
	
	  // bind methods to obj (we don't want to expose the emitter.e Array...)
	  obj.on   = emitter.on.bind(emitter);
	  obj.off  = emitter.off.bind(emitter);
	  obj.once = emitter.once.bind(emitter);
	  obj.emit = emitter.emit.bind(emitter);
	
	  return obj;
	};


/***/ },
/* 391 */
/***/ function(module, exports) {

	function E () {
		// Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}
	
	E.prototype = {
		on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});
	
	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });
	
	    return this;
	  },
	
	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };
	
	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },
	
	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var i = 0;
	    var len = evtArr.length;
	
	    }
	
