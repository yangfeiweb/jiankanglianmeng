var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'79a74776'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'79400313'])
Z([[7],[3,'canvasId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0201f6da'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1a392ac6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dee00fee'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2a152609'])
Z([a,[3,'_view data-v-4dffe74a uni-navbar '],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'isFixed']],[1,'uni-navbar-fixed'],[1,'']]],[[2,'?:'],[[7],[3,'hasShadow']],[1,'uni-navbar-shadow'],[1,'']]]]])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']]])
Z([3,'left'])
Z([3,'default'])
Z([3,'right'])
Z([[7],[3,'insertStatusBar']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'qKT-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'233d81c8'])
Z([3,'_view data-v-4dffe74a uni-navbar-header'])
Z([a,z[2][1],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]])
Z([3,'handleProxy'])
Z([3,'_view data-v-4dffe74a uni-navbar-btn uni-navbar-btn-left'])
Z([[7],[3,'$k']])
Z([1,'Nr8-0'])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'lBD-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'dee00fee'])
Z([3,'24'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotleft']],[1,'left']])
Z([3,'_view data-v-4dffe74a uni-navbar-container'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[20])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
Z(z[11])
Z([3,'_view data-v-4dffe74a uni-navbar-btn uni-navbar-btn-right'])
Z(z[13])
Z([1,'H5d-1'])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'nRt-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[17])
Z(z[18])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z(z[20])
Z([[2,'||'],[[7],[3,'$slotright']],[1,'right']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'233d81c8'])
Z([3,'_view data-v-5226a632 uni-status-bar'])
Z([a,[3,' '],[[7],[3,'style']]])
Z([3,'default'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9536c7ea'])
Z([3,'handleProxy'])
Z(z[1])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'WJc-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'CBP-6'])
Z([3,'79a74776'])
Z([3,'mpvueCityPicker'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'9536c7ea'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7efabdf0'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'RzX-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1a392ac6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7efabdf0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'de033688'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'de033688'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'15549192'])
Z([3,'_view data-v-70a523a8 index'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'zFT-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'GzF-8'])
Z([3,'0201f6da'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'pmB-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1a392ac6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'15549192'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6178bd04'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6178bd04'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9eb824a4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'9eb824a4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'13ad5b1f'])
Z([3,'index'])
Z([3,'list'])
Z([[7],[3,'lists']])
Z(z[1])
Z([a,[3,'_view data-v-47cf8645 uni-collapse-content '],[[2,'?:'],[[6],[[7],[3,'list']],[3,'show']],[1,'uni-active'],[1,'']]])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'type']],[1,'pay']])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'type']],[1,'withdraw']])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'type']],[1,'shopEnter']])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'type']],[1,'brokerage']])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'type']],[1,'interest']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'13ad5b1f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2b0806cc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2b0806cc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9d41cf60'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'9d41cf60'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'df038228'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'df038228'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1519aa2e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1519aa2e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0b9a0fd1'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'MVh-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1a392ac6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0b9a0fd1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a281cee0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a281cee0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'00b8849e'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'tHN-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'00b8849e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6765eca4'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'IaH-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1a392ac6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6765eca4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'58e0820e'])
Z([[7],[3,'toast']])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'58e0820e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'091473c8'])
Z([3,'_view data-v-6841f998 content'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9yS-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
Z([[7],[3,'toast']])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'091473c8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3562a6b4'])
Z([3,'_view data-v-ef03008c content'])
Z([3,'_view data-v-ef03008c scroll-view'])
Z([3,'index'])
Z([3,'value'])
Z([[7],[3,'list']])
Z(z[3])
Z([3,'_view data-v-ef03008c'])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z([[2,'=='],[[7],[3,'type']],[1,2]])
Z([[2,'=='],[[7],[3,'type']],[1,3]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'eOV-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
Z([[7],[3,'toast']])
Z([3,'_view data-v-ef03008c top1'])
Z(z[8])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3562a6b4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'8af809bc'])
Z([3,'_view data-v-1814f994 content'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'_view data-v-1814f994 scroll-view'])
Z([3,'index'])
Z([3,'value'])
Z([[7],[3,'list']])
Z(z[4])
Z([3,'_view data-v-1814f994 numLeft'])
Z([[2,'=='],[[7],[3,'type']],[1,'0']])
Z([[2,'=='],[[7],[3,'type']],[1,'1']])
Z([[2,'=='],[[7],[3,'type']],[1,'2']])
Z([[2,'=='],[[7],[3,'type']],[1,'3']])
Z([[2,'=='],[[7],[3,'type']],[1,'4']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'MVS-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'8af809bc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'638d34df'])
Z([3,'_view data-v-0bd6da1a btn'])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z([[2,'=='],[[7],[3,'type']],[1,2]])
Z([[2,'=='],[[7],[3,'type']],[1,4]])
Z([[2,'=='],[[7],[3,'type']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'638d34df'])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4d3e2113'])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4d3e2113'])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'126ba39a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'126ba39a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'77097d70'])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'77097d70'])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'431a5fbf'])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'431a5fbf'])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'84b780d4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'84b780d4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'50470aa5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'50470aa5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'015c4d85'])
Z([3,'_view data-v-3b44a73e content'])
Z([3,'line'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'fhK-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'79400313'])
Z([[7],[3,'toast']])
Z([3,'_view data-v-3b44a73e main'])
Z([[2,'=='],[[7],[3,'sall']],[1,2]])
Z([[2,'>'],[[7],[3,'sallNum']],[[7],[3,'haveNum']]])
Z([[2,'=='],[[7],[3,'sall']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'015c4d85'])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'42dd0119'])
Z([3,'_view data-v-45ffde80 content'])
Z([3,'_view data-v-45ffde80 scsj'])
Z([3,'_view data-v-45ffde80 contentTop'])
Z([3,'_view data-v-45ffde80 ctLeft'])
Z([[2,'!='],[[7],[3,'orderState']],[1,1]])
Z([[2,'=='],[[7],[3,'orderState']],[1,1]])
Z(z[4])
Z([[2,'!='],[[7],[3,'orderState1']],[1,1]])
Z([[2,'=='],[[7],[3,'orderState1']],[1,1]])
Z([3,'_view data-v-45ffde80 screen'])
Z([3,'handleProxy'])
Z([a,[3,'_view data-v-45ffde80 '],[[4],[[5],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'selected']],[1,1]],[[7],[3,'isActive']]],[1,'select'],[1,'']]]]])
Z([[7],[3,'$k']])
Z([1,'Nkm-7'])
Z([3,'1'])
Z([3,'time'])
Z([[2,'=='],[[7],[3,'selecteds']],[1,2]])
Z([[2,'=='],[[7],[3,'selecteds']],[1,5]])
Z(z[11])
Z([a,z[12][1],[[4],[[5],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'selected']],[1,2]],[[7],[3,'isActive']]],[1,'select'],[1,'']]]]])
Z(z[13])
Z([1,'kh9-8'])
Z([3,'2'])
Z(z[16])
Z([[2,'=='],[[7],[3,'selecteds1']],[1,3]])
Z([[2,'=='],[[7],[3,'selecteds1']],[1,6]])
Z(z[11])
Z([a,z[12][1],[[4],[[5],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'selected']],[1,3]],[[7],[3,'isActive']]],[1,'select'],[1,'']]]]])
Z(z[13])
Z([1,'oqw-9'])
Z([3,'3'])
Z(z[16])
Z([[2,'=='],[[7],[3,'selecteds2']],[1,4]])
Z([[2,'=='],[[7],[3,'selecteds2']],[1,7]])
Z([3,'_view data-v-45ffde80 scroll-view'])
Z([3,'index'])
Z([3,'value'])
Z([[7],[3,'list']])
Z(z[36])
Z(z[11])
Z([a,z[12][1],[[2,'?:'],[[2,'=='],[[7],[3,'indexs']],[[7],[3,'index']]],[1,'active'],[1,'']]])
Z(z[13])
Z([[2,'+'],[1,'rLz-12-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'list'])
Z(z[44])
Z([[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,2]],[[2,'=='],[[7],[3,'indexs']],[[7],[3,'index']]]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'kCC-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
Z([[7],[3,'toast']])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'42dd0119'])
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
function gz$gwx_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx_66)return __WXML_GLOBAL__.ops_cached.$gwx_66
__WXML_GLOBAL__.ops_cached.$gwx_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'56dacdc3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_66);return __WXML_GLOBAL__.ops_cached.$gwx_66
}
function gz$gwx_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx_67)return __WXML_GLOBAL__.ops_cached.$gwx_67
__WXML_GLOBAL__.ops_cached.$gwx_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'56dacdc3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_67);return __WXML_GLOBAL__.ops_cached.$gwx_67
}
function gz$gwx_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx_68)return __WXML_GLOBAL__.ops_cached.$gwx_68
__WXML_GLOBAL__.ops_cached.$gwx_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5b8ba18e'])
Z([3,'line'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'qpW-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'79400313'])
})(__WXML_GLOBAL__.ops_cached.$gwx_68);return __WXML_GLOBAL__.ops_cached.$gwx_68
}
function gz$gwx_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx_69)return __WXML_GLOBAL__.ops_cached.$gwx_69
__WXML_GLOBAL__.ops_cached.$gwx_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5b8ba18e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_69);return __WXML_GLOBAL__.ops_cached.$gwx_69
}
function gz$gwx_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx_70)return __WXML_GLOBAL__.ops_cached.$gwx_70
__WXML_GLOBAL__.ops_cached.$gwx_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7ae23333'])
Z([3,'_view data-v-3a819494 login'])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z([[2,'!='],[[7],[3,'phone']],[1,'']])
Z([[2,'!='],[[7],[3,'type']],[1,1]])
Z([3,'_view data-v-3a819494 lMiddle'])
Z([[2,'!='],[[7],[3,'user']],[1,'']])
Z([3,'_view data-v-3a819494 phone'])
Z([[7],[3,'havePwd']])
Z([[2,'!'],[[7],[3,'havePwd']]])
Z(z[8])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_70);return __WXML_GLOBAL__.ops_cached.$gwx_70
}
function gz$gwx_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx_71)return __WXML_GLOBAL__.ops_cached.$gwx_71
__WXML_GLOBAL__.ops_cached.$gwx_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7ae23333'])
})(__WXML_GLOBAL__.ops_cached.$gwx_71);return __WXML_GLOBAL__.ops_cached.$gwx_71
}
function gz$gwx_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx_72)return __WXML_GLOBAL__.ops_cached.$gwx_72
__WXML_GLOBAL__.ops_cached.$gwx_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cdba4418'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'xsQ-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_72);return __WXML_GLOBAL__.ops_cached.$gwx_72
}
function gz$gwx_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx_73)return __WXML_GLOBAL__.ops_cached.$gwx_73
__WXML_GLOBAL__.ops_cached.$gwx_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'cdba4418'])
})(__WXML_GLOBAL__.ops_cached.$gwx_73);return __WXML_GLOBAL__.ops_cached.$gwx_73
}
function gz$gwx_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx_74)return __WXML_GLOBAL__.ops_cached.$gwx_74
__WXML_GLOBAL__.ops_cached.$gwx_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'33799afc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_74);return __WXML_GLOBAL__.ops_cached.$gwx_74
}
function gz$gwx_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx_75)return __WXML_GLOBAL__.ops_cached.$gwx_75
__WXML_GLOBAL__.ops_cached.$gwx_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'33799afc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_75);return __WXML_GLOBAL__.ops_cached.$gwx_75
}
function gz$gwx_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx_76)return __WXML_GLOBAL__.ops_cached.$gwx_76
__WXML_GLOBAL__.ops_cached.$gwx_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3e2f64ee'])
Z([3,'_view data-v-28291802 content'])
Z([[6],[[7],[3,'list']],[3,'length']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'v74-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_76);return __WXML_GLOBAL__.ops_cached.$gwx_76
}
function gz$gwx_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx_77)return __WXML_GLOBAL__.ops_cached.$gwx_77
__WXML_GLOBAL__.ops_cached.$gwx_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e2f64ee'])
})(__WXML_GLOBAL__.ops_cached.$gwx_77);return __WXML_GLOBAL__.ops_cached.$gwx_77
}
function gz$gwx_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx_78)return __WXML_GLOBAL__.ops_cached.$gwx_78
__WXML_GLOBAL__.ops_cached.$gwx_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'106c86db'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'yxh-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_78);return __WXML_GLOBAL__.ops_cached.$gwx_78
}
function gz$gwx_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx_79)return __WXML_GLOBAL__.ops_cached.$gwx_79
__WXML_GLOBAL__.ops_cached.$gwx_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'106c86db'])
})(__WXML_GLOBAL__.ops_cached.$gwx_79);return __WXML_GLOBAL__.ops_cached.$gwx_79
}
function gz$gwx_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx_80)return __WXML_GLOBAL__.ops_cached.$gwx_80
__WXML_GLOBAL__.ops_cached.$gwx_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'26a4d76a'])
Z([3,'_view data-v-e35027ba discount'])
Z([3,'index'])
Z([3,'value'])
Z([[7],[3,'list']])
Z(z[2])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'17j-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_80);return __WXML_GLOBAL__.ops_cached.$gwx_80
}
function gz$gwx_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx_81)return __WXML_GLOBAL__.ops_cached.$gwx_81
__WXML_GLOBAL__.ops_cached.$gwx_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'26a4d76a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_81);return __WXML_GLOBAL__.ops_cached.$gwx_81
}
function gz$gwx_82(){
if( __WXML_GLOBAL__.ops_cached.$gwx_82)return __WXML_GLOBAL__.ops_cached.$gwx_82
__WXML_GLOBAL__.ops_cached.$gwx_82=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'83b77642'])
Z([[7],[3,'toast']])
})(__WXML_GLOBAL__.ops_cached.$gwx_82);return __WXML_GLOBAL__.ops_cached.$gwx_82
}
function gz$gwx_83(){
if( __WXML_GLOBAL__.ops_cached.$gwx_83)return __WXML_GLOBAL__.ops_cached.$gwx_83
__WXML_GLOBAL__.ops_cached.$gwx_83=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'83b77642'])
})(__WXML_GLOBAL__.ops_cached.$gwx_83);return __WXML_GLOBAL__.ops_cached.$gwx_83
}
function gz$gwx_84(){
if( __WXML_GLOBAL__.ops_cached.$gwx_84)return __WXML_GLOBAL__.ops_cached.$gwx_84
__WXML_GLOBAL__.ops_cached.$gwx_84=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'580fab48'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'O0i-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_84);return __WXML_GLOBAL__.ops_cached.$gwx_84
}
function gz$gwx_85(){
if( __WXML_GLOBAL__.ops_cached.$gwx_85)return __WXML_GLOBAL__.ops_cached.$gwx_85
__WXML_GLOBAL__.ops_cached.$gwx_85=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'580fab48'])
})(__WXML_GLOBAL__.ops_cached.$gwx_85);return __WXML_GLOBAL__.ops_cached.$gwx_85
}
function gz$gwx_86(){
if( __WXML_GLOBAL__.ops_cached.$gwx_86)return __WXML_GLOBAL__.ops_cached.$gwx_86
__WXML_GLOBAL__.ops_cached.$gwx_86=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0dd8752c'])
Z([3,'_view data-v-5b836553 chart'])
Z([3,'_view data-v-5b836553 getPhone'])
Z([[7],[3,'havePwd']])
Z([[2,'!'],[[7],[3,'havePwd']]])
Z([3,'_view data-v-5b836553 pwdEye'])
Z(z[3])
Z(z[4])
Z(z[2])
Z([[7],[3,'havePwd1']])
Z([[2,'!'],[[7],[3,'havePwd1']]])
Z(z[5])
Z(z[9])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_86);return __WXML_GLOBAL__.ops_cached.$gwx_86
}
function gz$gwx_87(){
if( __WXML_GLOBAL__.ops_cached.$gwx_87)return __WXML_GLOBAL__.ops_cached.$gwx_87
__WXML_GLOBAL__.ops_cached.$gwx_87=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0dd8752c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_87);return __WXML_GLOBAL__.ops_cached.$gwx_87
}
function gz$gwx_88(){
if( __WXML_GLOBAL__.ops_cached.$gwx_88)return __WXML_GLOBAL__.ops_cached.$gwx_88
__WXML_GLOBAL__.ops_cached.$gwx_88=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6c95900a'])
Z([3,'_view data-v-8b7eff9e content'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'_view data-v-8b7eff9e list'])
Z([3,'index'])
Z([3,'value'])
Z([[7],[3,'list']])
Z(z[4])
Z([a,[3,'_view data-v-8b7eff9e '],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'0']],[[2,'=='],[[7],[3,'coupon']],[1,'1']]],[1,'top1 top'],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'0']],[[2,'=='],[[7],[3,'coupon']],[1,'2']]],[1,'top2 top'],[1,'top3 top']]]])
Z([[2,'=='],[[7],[3,'coupon']],[1,'1']])
Z([3,'_view data-v-8b7eff9e right'])
Z([[2,'=='],[[7],[3,'type']],[1,'1']])
Z([[2,'=='],[[7],[3,'type']],[1,'2']])
Z([[2,'=='],[[7],[3,'type']],[1,'0']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'RHg-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53a2a299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_88);return __WXML_GLOBAL__.ops_cached.$gwx_88
}
function gz$gwx_89(){
if( __WXML_GLOBAL__.ops_cached.$gwx_89)return __WXML_GLOBAL__.ops_cached.$gwx_89
__WXML_GLOBAL__.ops_cached.$gwx_89=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6c95900a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_89);return __WXML_GLOBAL__.ops_cached.$gwx_89
}
function gz$gwx_90(){
if( __WXML_GLOBAL__.ops_cached.$gwx_90)return __WXML_GLOBAL__.ops_cached.$gwx_90
__WXML_GLOBAL__.ops_cached.$gwx_90=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1b467e58'])
})(__WXML_GLOBAL__.ops_cached.$gwx_90);return __WXML_GLOBAL__.ops_cached.$gwx_90
}
function gz$gwx_91(){
if( __WXML_GLOBAL__.ops_cached.$gwx_91)return __WXML_GLOBAL__.ops_cached.$gwx_91
__WXML_GLOBAL__.ops_cached.$gwx_91=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1b467e58'])
})(__WXML_GLOBAL__.ops_cached.$gwx_91);return __WXML_GLOBAL__.ops_cached.$gwx_91
}
function gz$gwx_92(){
if( __WXML_GLOBAL__.ops_cached.$gwx_92)return __WXML_GLOBAL__.ops_cached.$gwx_92
__WXML_GLOBAL__.ops_cached.$gwx_92=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6d98e378'])
})(__WXML_GLOBAL__.ops_cached.$gwx_92);return __WXML_GLOBAL__.ops_cached.$gwx_92
}
function gz$gwx_93(){
if( __WXML_GLOBAL__.ops_cached.$gwx_93)return __WXML_GLOBAL__.ops_cached.$gwx_93
__WXML_GLOBAL__.ops_cached.$gwx_93=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6d98e378'])
})(__WXML_GLOBAL__.ops_cached.$gwx_93);return __WXML_GLOBAL__.ops_cached.$gwx_93
}
function gz$gwx_94(){
if( __WXML_GLOBAL__.ops_cached.$gwx_94)return __WXML_GLOBAL__.ops_cached.$gwx_94
__WXML_GLOBAL__.ops_cached.$gwx_94=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'aae36982'])
Z([3,'_view data-v-0f8d8934 content'])
Z([3,'_view data-v-0f8d8934 title'])
Z([3,'_view data-v-0f8d8934'])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type']],[1,1]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type']],[1,1]]])
Z(z[3])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type']],[1,2]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type']],[1,2]]])
Z(z[3])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type']],[1,3]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type']],[1,3]]])
Z(z[2])
Z(z[3])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type1']],[1,1]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type1']],[1,1]]])
Z(z[3])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type1']],[1,2]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type1']],[1,2]]])
Z(z[3])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type1']],[1,3]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type1']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_94);return __WXML_GLOBAL__.ops_cached.$gwx_94
}
function gz$gwx_95(){
if( __WXML_GLOBAL__.ops_cached.$gwx_95)return __WXML_GLOBAL__.ops_cached.$gwx_95
__WXML_GLOBAL__.ops_cached.$gwx_95=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'aae36982'])
})(__WXML_GLOBAL__.ops_cached.$gwx_95);return __WXML_GLOBAL__.ops_cached.$gwx_95
}
function gz$gwx_96(){
if( __WXML_GLOBAL__.ops_cached.$gwx_96)return __WXML_GLOBAL__.ops_cached.$gwx_96
__WXML_GLOBAL__.ops_cached.$gwx_96=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a4072a44'])
})(__WXML_GLOBAL__.ops_cached.$gwx_96);return __WXML_GLOBAL__.ops_cached.$gwx_96
}
function gz$gwx_97(){
if( __WXML_GLOBAL__.ops_cached.$gwx_97)return __WXML_GLOBAL__.ops_cached.$gwx_97
__WXML_GLOBAL__.ops_cached.$gwx_97=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a4072a44'])
})(__WXML_GLOBAL__.ops_cached.$gwx_97);return __WXML_GLOBAL__.ops_cached.$gwx_97
}
function gz$gwx_98(){
if( __WXML_GLOBAL__.ops_cached.$gwx_98)return __WXML_GLOBAL__.ops_cached.$gwx_98
__WXML_GLOBAL__.ops_cached.$gwx_98=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0bdf158d'])
Z([3,'_view data-v-a690cb98 content'])
Z([[2,'=='],[[7],[3,'type']],[1,'0']])
Z([[2,'!='],[[7],[3,'type']],[1,'0']])
Z([[7],[3,'toast']])
Z([3,'_scroll-view data-v-a690cb98'])
Z([3,'true'])
Z([3,'handleProxy'])
Z([3,'_view data-v-a690cb98 first'])
Z([[7],[3,'$k']])
Z([1,'9ZU-3'])
Z([3,'0'])
Z(z[2])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[14])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[2,'+'],[1,'HWw-4-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[2,'=='],[[7],[3,'type']],[[6],[[7],[3,'item']],[3,'id']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_98);return __WXML_GLOBAL__.ops_cached.$gwx_98
}
function gz$gwx_99(){
if( __WXML_GLOBAL__.ops_cached.$gwx_99)return __WXML_GLOBAL__.ops_cached.$gwx_99
__WXML_GLOBAL__.ops_cached.$gwx_99=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0bdf158d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_99);return __WXML_GLOBAL__.ops_cached.$gwx_99
}
function gz$gwx_100(){
if( __WXML_GLOBAL__.ops_cached.$gwx_100)return __WXML_GLOBAL__.ops_cached.$gwx_100
__WXML_GLOBAL__.ops_cached.$gwx_100=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'146b2d53'])
Z([[7],[3,'address']])
})(__WXML_GLOBAL__.ops_cached.$gwx_100);return __WXML_GLOBAL__.ops_cached.$gwx_100
}
function gz$gwx_101(){
if( __WXML_GLOBAL__.ops_cached.$gwx_101)return __WXML_GLOBAL__.ops_cached.$gwx_101
__WXML_GLOBAL__.ops_cached.$gwx_101=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'146b2d53'])
})(__WXML_GLOBAL__.ops_cached.$gwx_101);return __WXML_GLOBAL__.ops_cached.$gwx_101
}
function gz$gwx_102(){
if( __WXML_GLOBAL__.ops_cached.$gwx_102)return __WXML_GLOBAL__.ops_cached.$gwx_102
__WXML_GLOBAL__.ops_cached.$gwx_102=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'e84423bc'])
Z([3,'_view data-v-4cee436e title'])
Z([3,'_view data-v-4cee436e'])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type']],[1,1]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type']],[1,1]]])
Z(z[2])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type']],[1,2]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type']],[1,2]]])
Z(z[2])
Z([[2,'&&'],[[7],[3,'select']],[[2,'!='],[[7],[3,'type']],[1,3]]])
Z([[2,'&&'],[[7],[3,'select']],[[2,'=='],[[7],[3,'type']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_102);return __WXML_GLOBAL__.ops_cached.$gwx_102
}
function gz$gwx_103(){
if( __WXML_GLOBAL__.ops_cached.$gwx_103)return __WXML_GLOBAL__.ops_cached.$gwx_103
__WXML_GLOBAL__.ops_cached.$gwx_103=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'e84423bc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_103);return __WXML_GLOBAL__.ops_cached.$gwx_103
}
function gz$gwx_104(){
if( __WXML_GLOBAL__.ops_cached.$gwx_104)return __WXML_GLOBAL__.ops_cached.$gwx_104
__WXML_GLOBAL__.ops_cached.$gwx_104=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7cce46f9'])
Z([[2,'!'],[[7],[3,'haveLogin']]])
Z([3,'_view data-v-6b0d91c0 lMiddle'])
Z([[2,'!='],[[7],[3,'userPhone']],[1,'']])
Z([[2,'!='],[[7],[3,'userpwd']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_104);return __WXML_GLOBAL__.ops_cached.$gwx_104
}
function gz$gwx_105(){
if( __WXML_GLOBAL__.ops_cached.$gwx_105)return __WXML_GLOBAL__.ops_cached.$gwx_105
__WXML_GLOBAL__.ops_cached.$gwx_105=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7cce46f9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_105);return __WXML_GLOBAL__.ops_cached.$gwx_105
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/load-more.vue.wxml','./components/mpvue-citypicker/mpvueCityPicker.vue.wxml','./components/mpvue-echarts/src/echarts.vue.wxml','./components/number-box.vue.wxml','./components/shareModel.vue.wxml','./components/slots.wxml','/components/load-more.vue.wxml','/components/number-box.vue.wxml','/components/shareModel.vue.wxml','/components/mpvue-echarts/src/echarts.vue.wxml','/components/mpvue-citypicker/mpvueCityPicker.vue.wxml','/components/uni-status-bar.vue.wxml','/components/uni-icon.vue.wxml','/components/slots','./components/uni-icon.vue.wxml','./components/uni-nav-bar.vue.wxml','./components/uni-status-bar.vue.wxml','./pages/healthyMall/addShippingAddress.vue.wxml','./pages/healthyMall/addShippingAddress.wxml','/pages/healthyMall/addShippingAddress.vue.wxml','./pages/healthyMall/brokerage.vue.wxml','./pages/healthyMall/brokerage.wxml','/pages/healthyMall/brokerage.vue.wxml','./pages/healthyMall/discounts.vue.wxml','./pages/healthyMall/discounts.wxml','/pages/healthyMall/discounts.vue.wxml','./pages/healthyMall/goodsDetails.vue.wxml','./pages/healthyMall/goodsDetails.wxml','/pages/healthyMall/goodsDetails.vue.wxml','./pages/healthyMall/goodsList.vue.wxml','./pages/healthyMall/goodsList.wxml','/pages/healthyMall/goodsList.vue.wxml','./pages/healthyMall/search.vue.wxml','./pages/healthyMall/search.wxml','/pages/healthyMall/search.vue.wxml','./pages/healthyMall/service.vue.wxml','./pages/healthyMall/service.wxml','/pages/healthyMall/service.vue.wxml','./pages/healthyMall/settleAccount.vue.wxml','./pages/healthyMall/settleAccount.wxml','/pages/healthyMall/settleAccount.vue.wxml','./pages/healthyMall/shippingAddress.vue.wxml','./pages/healthyMall/shippingAddress.wxml','/pages/healthyMall/shippingAddress.vue.wxml','./pages/healthyMall/shopEnter.vue.wxml','./pages/healthyMall/shopEnter.wxml','/pages/healthyMall/shopEnter.vue.wxml','./pages/healthyMall/shoppingCart.vue.wxml','./pages/healthyMall/shoppingCart.wxml','/pages/healthyMall/shoppingCart.vue.wxml','./pages/healthySpace/invite.vue.wxml','./pages/healthySpace/invite.wxml','/pages/healthySpace/invite.vue.wxml','./pages/healthySpace/powerCheer.vue.wxml','./pages/healthySpace/powerCheer.wxml','/pages/healthySpace/powerCheer.vue.wxml','./pages/healthySpace/powerRecord.vue.wxml','./pages/healthySpace/powerRecord.wxml','/pages/healthySpace/powerRecord.vue.wxml','./pages/healthySpace/recommend.vue.wxml','./pages/healthySpace/recommend.wxml','/pages/healthySpace/recommend.vue.wxml','./pages/myCenter/bindWx.vue.wxml','./pages/myCenter/bindWx.wxml','/pages/myCenter/bindWx.vue.wxml','./pages/myCenter/healthBank.vue.wxml','./pages/myCenter/healthBank.wxml','/pages/myCenter/healthBank.vue.wxml','./pages/myCenter/myMatters.vue.wxml','./pages/myCenter/myMatters.wxml','/pages/myCenter/myMatters.vue.wxml','./pages/myCenter/myOrder.vue.wxml','./pages/myCenter/myOrder.wxml','/pages/myCenter/myOrder.vue.wxml','./pages/myCenter/orderDetail.vue.wxml','./pages/myCenter/orderDetail.wxml','/pages/myCenter/orderDetail.vue.wxml','./pages/myCenter/privacyUser.vue.wxml','./pages/myCenter/privacyUser.wxml','/pages/myCenter/privacyUser.vue.wxml','./pages/myCenter/serviceTitle.vue.wxml','./pages/myCenter/serviceTitle.wxml','/pages/myCenter/serviceTitle.vue.wxml','./pages/myCenter/setting.vue.wxml','./pages/myCenter/setting.wxml','/pages/myCenter/setting.vue.wxml','./pages/myCenter/system.vue.wxml','./pages/myCenter/system.wxml','/pages/myCenter/system.vue.wxml','./pages/myCenter/walletCode.vue.wxml','./pages/myCenter/walletCode.wxml','/pages/myCenter/walletCode.vue.wxml','./pages/myCenter/withDrawUser.vue.wxml','./pages/myCenter/withDrawUser.wxml','/pages/myCenter/withDrawUser.vue.wxml','./pages/tabBar/dealMarket/dealIndex.vue.wxml','./pages/tabBar/dealMarket/dealIndex.wxml','/pages/tabBar/dealMarket/dealIndex.vue.wxml','./pages/tabBar/dealMarket/dealMarket.vue.wxml','./pages/tabBar/dealMarket/dealMarket.wxml','/pages/tabBar/dealMarket/dealMarket.vue.wxml','./pages/tabBar/healthyMall/healthyMall.vue.wxml','./pages/tabBar/healthyMall/healthyMall.wxml','/pages/tabBar/healthyMall/healthyMall.vue.wxml','./pages/tabBar/healthySpace/healthySpace.vue.wxml','./pages/tabBar/healthySpace/healthySpace.wxml','/pages/tabBar/healthySpace/healthySpace.vue.wxml','./pages/tabBar/login/login.vue.wxml','./pages/tabBar/login/login.wxml','/pages/tabBar/login/login.vue.wxml','./pages/tabBar/myCenter/balance.vue.wxml','./pages/tabBar/myCenter/balance.wxml','/pages/tabBar/myCenter/balance.vue.wxml','./pages/tabBar/myCenter/convertDetail.vue.wxml','./pages/tabBar/myCenter/convertDetail.wxml','/pages/tabBar/myCenter/convertDetail.vue.wxml','./pages/tabBar/myCenter/convertList.vue.wxml','./pages/tabBar/myCenter/convertList.wxml','/pages/tabBar/myCenter/convertList.vue.wxml','./pages/tabBar/myCenter/dataWallet.vue.wxml','./pages/tabBar/myCenter/dataWallet.wxml','/pages/tabBar/myCenter/dataWallet.vue.wxml','./pages/tabBar/myCenter/discounts.vue.wxml','./pages/tabBar/myCenter/discounts.wxml','/pages/tabBar/myCenter/discounts.vue.wxml','./pages/tabBar/myCenter/goodsDetail.vue.wxml','./pages/tabBar/myCenter/goodsDetail.wxml','/pages/tabBar/myCenter/goodsDetail.vue.wxml','./pages/tabBar/myCenter/lifeMall.vue.wxml','./pages/tabBar/myCenter/lifeMall.wxml','/pages/tabBar/myCenter/lifeMall.vue.wxml','./pages/tabBar/myCenter/loginPwd.vue.wxml','./pages/tabBar/myCenter/loginPwd.wxml','/pages/tabBar/myCenter/loginPwd.vue.wxml','./pages/tabBar/myCenter/myCoupon.vue.wxml','./pages/tabBar/myCenter/myCoupon.wxml','/pages/tabBar/myCenter/myCoupon.vue.wxml','./pages/tabBar/myCenter/personal.vue.wxml','./pages/tabBar/myCenter/personal.wxml','/pages/tabBar/myCenter/personal.vue.wxml','./pages/tabBar/myCenter/rank.vue.wxml','./pages/tabBar/myCenter/rank.wxml','/pages/tabBar/myCenter/rank.vue.wxml','./pages/tabBar/myCenter/recharge.vue.wxml','./pages/tabBar/myCenter/recharge.wxml','/pages/tabBar/myCenter/recharge.vue.wxml','./pages/tabBar/myCenter/turnSuccess.vue.wxml','./pages/tabBar/myCenter/turnSuccess.wxml','/pages/tabBar/myCenter/turnSuccess.vue.wxml','./pages/tabBar/myCenter/userWithdraw.vue.wxml','./pages/tabBar/myCenter/userWithdraw.wxml','/pages/tabBar/myCenter/userWithdraw.vue.wxml','./pages/tabBar/myCenter/walletAddress.vue.wxml','./pages/tabBar/myCenter/walletAddress.wxml','/pages/tabBar/myCenter/walletAddress.vue.wxml','./pages/tabBar/myCenter/withdraw.vue.wxml','./pages/tabBar/myCenter/withdraw.wxml','/pages/tabBar/myCenter/withdraw.vue.wxml','./pages/tabBar/register/register.vue.wxml','./pages/tabBar/register/register.wxml','/pages/tabBar/register/register.vue.wxml'];d_[x[0]]={}
d_[x[0]]["53a2a299"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':53a2a299'
r.wxVkey=b
gg.f=$gdc(f_["./components/load-more.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["79a74776"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':79a74776'
r.wxVkey=b
gg.f=$gdc(f_["./components/mpvue-citypicker/mpvueCityPicker.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
d_[x[2]]["79400313"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[2]+':79400313'
r.wxVkey=b
gg.f=$gdc(f_["./components/mpvue-echarts/src/echarts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/mpvue-echarts/src/echarts.vue.wxml:canvas:2:4")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["0201f6da"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[3]+':0201f6da'
r.wxVkey=b
gg.f=$gdc(f_["./components/number-box.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
d_[x[4]]["1a392ac6"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[4]+':1a392ac6'
r.wxVkey=b
gg.f=$gdc(f_["./components/shareModel.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hG=e_[x[5]].i
_ai(hG,x[6],e_,x[5],1,1)
_ai(hG,x[7],e_,x[5],2,2)
_ai(hG,x[8],e_,x[5],3,2)
_ai(hG,x[9],e_,x[5],4,2)
_ai(hG,x[10],e_,x[5],5,2)
_ai(hG,x[11],e_,x[5],6,2)
_ai(hG,x[12],e_,x[5],7,2)
_ai(hG,x[13],e_,x[5],8,2)
_ai(hG,x[8],e_,x[5],9,2)
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[x[6],x[7],x[8],x[9],x[10],x[11],x[12],x[13],x[8]],ic:[]}
d_[x[14]]={}
d_[x[14]]["dee00fee"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[14]+':dee00fee'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[14]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
d_[x[15]]["2a152609"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[15]+':2a152609'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
cs.push("./components/uni-nav-bar.vue.wxml:view:5:4")
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,6,e,s,gg)){xC.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:template:9:6")
var oD=_v()
_(xC,oD)
cs.push("./components/uni-nav-bar.vue.wxml:template:9:6")
var fE=_oz(z,8,e,s,gg)
var cF=_gd(x[15],fE,e_,d_)
if(cF){
var hG=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[15],9,100)
cs.pop()
cs.pop()
}
cs.push("./components/uni-nav-bar.vue.wxml:view:10:6")
var oH=_mz(z,'view',['class',9,'style',1],[],e,s,gg)
cs.push("./components/uni-nav-bar.vue.wxml:view:11:8")
var cI=_mz(z,'view',['bindtap',11,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,15,e,s,gg)){oJ.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:view:12:10")
var aL=_v()
_(oJ,aL)
cs.push("./components/uni-nav-bar.vue.wxml:template:13:12")
var tM=_oz(z,17,e,s,gg)
var eN=_gd(x[15],tM,e_,d_)
if(eN){
var bO=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[15],13,88)
cs.pop()
cs.pop()
}
var lK=_v()
_(cI,lK)
if(_oz(z,19,e,s,gg)){lK.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:view:15:10")
cs.pop()
}
var oP=_v()
_(cI,oP)
cs.push("./components/uni-nav-bar.vue.wxml:template:16:10")
var xQ=_oz(z,21,e,s,gg)
var oR=_gd(x[15],xQ,e_,d_)
if(oR){
var fS=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[15],16,68)
cs.pop()
oJ.wxXCkey=1
lK.wxXCkey=1
cs.pop()
_(oH,cI)
cs.push("./components/uni-nav-bar.vue.wxml:view:18:8")
var cT=_n('view')
_rz(z,cT,'class',22,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,23,e,s,gg)){hU.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:view:19:10")
cs.pop()
}
var oV=_v()
_(cT,oV)
cs.push("./components/uni-nav-bar.vue.wxml:template:20:10")
var cW=_oz(z,25,e,s,gg)
var oX=_gd(x[15],cW,e_,d_)
if(oX){
var lY=_1z(z,24,e,s,gg) || {}
var cur_globalf=gg.f
oV.wxXCkey=3
oX(lY,lY,oV,gg)
gg.f=cur_globalf
}
else _w(cW,x[15],20,68)
cs.pop()
hU.wxXCkey=1
cs.pop()
_(oH,cT)
cs.push("./components/uni-nav-bar.vue.wxml:view:22:8")
var aZ=_mz(z,'view',['bindtap',26,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,30,e,s,gg)){t1.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:view:23:10")
var b3=_v()
_(t1,b3)
cs.push("./components/uni-nav-bar.vue.wxml:template:24:12")
var o4=_oz(z,32,e,s,gg)
var x5=_gd(x[15],o4,e_,d_)
if(x5){
var o6=_1z(z,31,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[15],24,88)
cs.pop()
cs.pop()
}
var e2=_v()
_(aZ,e2)
if(_oz(z,34,e,s,gg)){e2.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:view:26:10")
cs.pop()
}
var f7=_v()
_(aZ,f7)
cs.push("./components/uni-nav-bar.vue.wxml:template:27:10")
var c8=_oz(z,36,e,s,gg)
var h9=_gd(x[15],c8,e_,d_)
if(h9){
var o0=_1z(z,35,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[15],27,68)
cs.pop()
t1.wxXCkey=1
e2.wxXCkey=1
cs.pop()
_(oH,aZ)
cs.pop()
_(oB,oH)
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[15]]["left"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[15]+':left'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[15]]["default"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[15]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[15]]["right"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[15]+':right'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oJ=e_[x[15]].i
_ai(oJ,x[11],e_,x[15],1,1)
_ai(oJ,x[12],e_,x[15],2,2)
_ai(oJ,x[13],e_,x[15],3,2)
oJ.pop()
oJ.pop()
oJ.pop()
return r
}
e_[x[15]]={f:m7,j:[],i:[],ti:[x[11],x[12],x[13]],ic:[]}
d_[x[16]]={}
d_[x[16]]["233d81c8"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[16]+':233d81c8'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-status-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
cs.push("./components/uni-status-bar.vue.wxml:view:3:4")
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/uni-status-bar.vue.wxml:template:5:6")
var oD=_oz(z,5,e,s,gg)
var fE=_gd(x[16],oD,e_,d_)
if(fE){
var cF=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[16],5,64)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[16]]["default"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[16]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-status-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aL=e_[x[16]].i
_ai(aL,x[13],e_,x[16],1,1)
aL.pop()
return r
}
e_[x[16]]={f:m8,j:[],i:[],ti:[x[13]],ic:[]}
d_[x[17]]={}
d_[x[17]]["9536c7ea"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[17]+':9536c7ea'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/addShippingAddress.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/healthyMall/addShippingAddress.vue.wxml:template:29:6")
var xC=_oz(z,6,e,s,gg)
var oD=_gd(x[17],xC,e_,d_)
if(oD){
var fE=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[17],29,197)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eN=e_[x[17]].i
_ai(eN,x[10],e_,x[17],1,1)
eN.pop()
return r
}
e_[x[17]]={f:m9,j:[],i:[],ti:[x[10]],ic:[]}
d_[x[18]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oP=e_[x[18]].i
_ai(oP,x[19],e_,x[18],1,1)
var xQ=_v()
_(r,xQ)
cs.push("./pages/healthyMall/addShippingAddress.wxml:template:1:64")
var oR=_oz(z,1,e,s,gg)
var fS=_gd(x[18],oR,e_,d_)
if(fS){
var cT=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[18],1,76)
cs.pop()
oP.pop()
return r
}
e_[x[18]]={f:m10,j:[],i:[],ti:[x[19]],ic:[]}
d_[x[20]]={}
d_[x[20]]["7efabdf0"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[20]+':7efabdf0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/brokerage.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/healthyMall/brokerage.vue.wxml:template:10:6")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[20],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[20],10,72)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oV=e_[x[20]].i
_ai(oV,x[8],e_,x[20],1,1)
oV.pop()
return r
}
e_[x[20]]={f:m11,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[21]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oX=e_[x[21]].i
_ai(oX,x[22],e_,x[21],1,1)
var lY=_v()
_(r,lY)
cs.push("./pages/healthyMall/brokerage.wxml:template:1:55")
var aZ=_oz(z,1,e,s,gg)
var t1=_gd(x[21],aZ,e_,d_)
if(t1){
var e2=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[21],1,67)
cs.pop()
oX.pop()
return r
}
e_[x[21]]={f:m12,j:[],i:[],ti:[x[22]],ic:[]}
d_[x[23]]={}
d_[x[23]]["de033688"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[23]+':de033688'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/discounts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[23]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[23]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var x5=e_[x[24]].i
_ai(x5,x[25],e_,x[24],1,1)
var o6=_v()
_(r,o6)
cs.push("./pages/healthyMall/discounts.wxml:template:1:55")
var f7=_oz(z,1,e,s,gg)
var c8=_gd(x[24],f7,e_,d_)
if(c8){
var h9=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o6.wxXCkey=3
c8(h9,h9,o6,gg)
gg.f=cur_globalf
}
else _w(f7,x[24],1,67)
cs.pop()
x5.pop()
return r
}
e_[x[24]]={f:m14,j:[],i:[],ti:[x[25]],ic:[]}
d_[x[26]]={}
d_[x[26]]["15549192"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[26]+':15549192'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/goodsDetails.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
cs.push("./pages/healthyMall/goodsDetails.vue.wxml:view:4:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/healthyMall/goodsDetails.vue.wxml:template:123:12")
var oD=_oz(z,6,e,s,gg)
var fE=_gd(x[26],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[26],123,151)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/healthyMall/goodsDetails.vue.wxml:template:145:6")
var oH=_oz(z,8,e,s,gg)
var cI=_gd(x[26],oH,e_,d_)
if(cI){
var oJ=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[26],145,72)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var cAB=e_[x[26]].i
_ai(cAB,x[7],e_,x[26],1,1)
_ai(cAB,x[8],e_,x[26],2,2)
cAB.pop()
cAB.pop()
return r
}
e_[x[26]]={f:m15,j:[],i:[],ti:[x[7],x[8]],ic:[]}
d_[x[27]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lCB=e_[x[27]].i
_ai(lCB,x[28],e_,x[27],1,1)
var aDB=_v()
_(r,aDB)
cs.push("./pages/healthyMall/goodsDetails.wxml:template:1:58")
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[27],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[27],1,70)
cs.pop()
lCB.pop()
return r
}
e_[x[27]]={f:m16,j:[],i:[],ti:[x[28]],ic:[]}
d_[x[29]]={}
d_[x[29]]["6178bd04"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[29]+':6178bd04'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/goodsList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[29]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[29]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oJB=e_[x[30]].i
_ai(oJB,x[31],e_,x[30],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/healthyMall/goodsList.wxml:template:1:55")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[30],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[30],1,67)
cs.pop()
oJB.pop()
return r
}
e_[x[30]]={f:m18,j:[],i:[],ti:[x[31]],ic:[]}
d_[x[32]]={}
d_[x[32]]["9eb824a4"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[32]+':9eb824a4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/search.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[32]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[32]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var lQB=e_[x[33]].i
_ai(lQB,x[34],e_,x[33],1,1)
var aRB=_v()
_(r,aRB)
cs.push("./pages/healthyMall/search.wxml:template:1:52")
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[33],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[33],1,64)
cs.pop()
lQB.pop()
return r
}
e_[x[33]]={f:m20,j:[],i:[],ti:[x[34]],ic:[]}
d_[x[35]]={}
d_[x[35]]["13ad5b1f"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[35]+':13ad5b1f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/service.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[35]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/healthyMall/service.vue.wxml:block:21:12")
var xC=function(fE,oD,cF,gg){
cs.push("./pages/healthyMall/service.vue.wxml:view:24:16")
var oH=_n('view')
_rz(z,oH,'class',5,fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,6,fE,oD,gg)){cI.wxVkey=1
cs.push("./pages/healthyMall/service.vue.wxml:view:25:18")
cs.pop()
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,7,fE,oD,gg)){oJ.wxVkey=1
cs.push("./pages/healthyMall/service.vue.wxml:view:28:18")
cs.pop()
}
var lK=_v()
_(oH,lK)
if(_oz(z,8,fE,oD,gg)){lK.wxVkey=1
cs.push("./pages/healthyMall/service.vue.wxml:view:31:18")
cs.pop()
}
var aL=_v()
_(oH,aL)
if(_oz(z,9,fE,oD,gg)){aL.wxVkey=1
cs.push("./pages/healthyMall/service.vue.wxml:view:34:18")
cs.pop()
}
var tM=_v()
_(oH,tM)
if(_oz(z,10,fE,oD,gg)){tM.wxVkey=1
cs.push("./pages/healthyMall/service.vue.wxml:view:37:18")
cs.pop()
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
cs.pop()
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'list','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[35]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oXB=e_[x[36]].i
_ai(oXB,x[37],e_,x[36],1,1)
var fYB=_v()
_(r,fYB)
cs.push("./pages/healthyMall/service.wxml:template:1:53")
var cZB=_oz(z,1,e,s,gg)
var h1B=_gd(x[36],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[36],1,65)
cs.pop()
oXB.pop()
return r
}
e_[x[36]]={f:m22,j:[],i:[],ti:[x[37]],ic:[]}
d_[x[38]]={}
d_[x[38]]["2b0806cc"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[38]+':2b0806cc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/settleAccount.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[38]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[38]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var l5B=e_[x[39]].i
_ai(l5B,x[40],e_,x[39],1,1)
var a6B=_v()
_(r,a6B)
cs.push("./pages/healthyMall/settleAccount.wxml:template:1:59")
var t7B=_oz(z,1,e,s,gg)
var e8B=_gd(x[39],t7B,e_,d_)
if(e8B){
var b9B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a6B.wxXCkey=3
e8B(b9B,b9B,a6B,gg)
gg.f=cur_globalf
}
else _w(t7B,x[39],1,71)
cs.pop()
l5B.pop()
return r
}
e_[x[39]]={f:m24,j:[],i:[],ti:[x[40]],ic:[]}
d_[x[41]]={}
d_[x[41]]["9d41cf60"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[41]+':9d41cf60'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/shippingAddress.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[41]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[41]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oBC=e_[x[42]].i
_ai(oBC,x[43],e_,x[42],1,1)
var fCC=_v()
_(r,fCC)
cs.push("./pages/healthyMall/shippingAddress.wxml:template:1:61")
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[42],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[42],1,73)
cs.pop()
oBC.pop()
return r
}
e_[x[42]]={f:m26,j:[],i:[],ti:[x[43]],ic:[]}
d_[x[44]]={}
d_[x[44]]["df038228"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[44]+':df038228'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/shopEnter.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[44]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[44]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var lIC=e_[x[45]].i
_ai(lIC,x[46],e_,x[45],1,1)
var aJC=_v()
_(r,aJC)
cs.push("./pages/healthyMall/shopEnter.wxml:template:1:55")
var tKC=_oz(z,1,e,s,gg)
var eLC=_gd(x[45],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[45],1,67)
cs.pop()
lIC.pop()
return r
}
e_[x[45]]={f:m28,j:[],i:[],ti:[x[46]],ic:[]}
d_[x[47]]={}
d_[x[47]]["1519aa2e"]=function(e,s,r,gg){
var z=gz$gwx_30()
var b=x[47]+':1519aa2e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthyMall/shoppingCart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[47]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[47]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oPC=e_[x[48]].i
_ai(oPC,x[49],e_,x[48],1,1)
var fQC=_v()
_(r,fQC)
cs.push("./pages/healthyMall/shoppingCart.wxml:template:1:58")
var cRC=_oz(z,1,e,s,gg)
var hSC=_gd(x[48],cRC,e_,d_)
if(hSC){
var oTC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fQC.wxXCkey=3
hSC(oTC,oTC,fQC,gg)
gg.f=cur_globalf
}
else _w(cRC,x[48],1,70)
cs.pop()
oPC.pop()
return r
}
e_[x[48]]={f:m30,j:[],i:[],ti:[x[49]],ic:[]}
d_[x[50]]={}
d_[x[50]]["0b9a0fd1"]=function(e,s,r,gg){
var z=gz$gwx_32()
var b=x[50]+':0b9a0fd1'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthySpace/invite.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[50]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/healthySpace/invite.vue.wxml:template:8:6")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[50],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[50],8,72)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var oVC=e_[x[50]].i
_ai(oVC,x[8],e_,x[50],1,1)
oVC.pop()
return r
}
e_[x[50]]={f:m31,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[51]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var aXC=e_[x[51]].i
_ai(aXC,x[52],e_,x[51],1,1)
var tYC=_v()
_(r,tYC)
cs.push("./pages/healthySpace/invite.wxml:template:1:53")
var eZC=_oz(z,1,e,s,gg)
var b1C=_gd(x[51],eZC,e_,d_)
if(b1C){
var o2C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tYC.wxXCkey=3
b1C(o2C,o2C,tYC,gg)
gg.f=cur_globalf
}
else _w(eZC,x[51],1,65)
cs.pop()
aXC.pop()
return r
}
e_[x[51]]={f:m32,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[53]]={}
d_[x[53]]["a281cee0"]=function(e,s,r,gg){
var z=gz$gwx_34()
var b=x[53]+':a281cee0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthySpace/powerCheer.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[53]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var f5C=e_[x[54]].i
_ai(f5C,x[55],e_,x[54],1,1)
var c6C=_v()
_(r,c6C)
cs.push("./pages/healthySpace/powerCheer.wxml:template:1:57")
var h7C=_oz(z,1,e,s,gg)
var o8C=_gd(x[54],h7C,e_,d_)
if(o8C){
var c9C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c6C.wxXCkey=3
o8C(c9C,c9C,c6C,gg)
gg.f=cur_globalf
}
else _w(h7C,x[54],1,69)
cs.pop()
f5C.pop()
return r
}
e_[x[54]]={f:m34,j:[],i:[],ti:[x[55]],ic:[]}
d_[x[56]]={}
d_[x[56]]["00b8849e"]=function(e,s,r,gg){
var z=gz$gwx_36()
var b=x[56]+':00b8849e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthySpace/powerRecord.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[56]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/healthySpace/powerRecord.vue.wxml:template:52:12")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[56],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[56],52,78)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var lAD=e_[x[56]].i
_ai(lAD,x[6],e_,x[56],1,1)
lAD.pop()
return r
}
e_[x[56]]={f:m35,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[57]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var tCD=e_[x[57]].i
_ai(tCD,x[58],e_,x[57],1,1)
var eDD=_v()
_(r,eDD)
cs.push("./pages/healthySpace/powerRecord.wxml:template:1:58")
var bED=_oz(z,1,e,s,gg)
var oFD=_gd(x[57],bED,e_,d_)
if(oFD){
var xGD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eDD.wxXCkey=3
oFD(xGD,xGD,eDD,gg)
gg.f=cur_globalf
}
else _w(bED,x[57],1,70)
cs.pop()
tCD.pop()
return r
}
e_[x[57]]={f:m36,j:[],i:[],ti:[x[58]],ic:[]}
d_[x[59]]={}
d_[x[59]]["6765eca4"]=function(e,s,r,gg){
var z=gz$gwx_38()
var b=x[59]+':6765eca4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/healthySpace/recommend.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[59]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/healthySpace/recommend.vue.wxml:template:16:6")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[59],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[59],16,72)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var fID=e_[x[59]].i
_ai(fID,x[8],e_,x[59],1,1)
fID.pop()
return r
}
e_[x[59]]={f:m37,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[60]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var hKD=e_[x[60]].i
_ai(hKD,x[61],e_,x[60],1,1)
var oLD=_v()
_(r,oLD)
cs.push("./pages/healthySpace/recommend.wxml:template:1:56")
var cMD=_oz(z,1,e,s,gg)
var oND=_gd(x[60],cMD,e_,d_)
if(oND){
var lOD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oLD.wxXCkey=3
oND(lOD,lOD,oLD,gg)
gg.f=cur_globalf
}
else _w(cMD,x[60],1,68)
cs.pop()
hKD.pop()
return r
}
e_[x[60]]={f:m38,j:[],i:[],ti:[x[61]],ic:[]}
d_[x[62]]={}
d_[x[62]]["58e0820e"]=function(e,s,r,gg){
var z=gz$gwx_40()
var b=x[62]+':58e0820e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/bindWx.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/myCenter/bindWx.vue.wxml:view:14:6")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[62]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var eRD=e_[x[63]].i
_ai(eRD,x[64],e_,x[63],1,1)
var bSD=_v()
_(r,bSD)
cs.push("./pages/myCenter/bindWx.wxml:template:1:49")
var oTD=_oz(z,1,e,s,gg)
var xUD=_gd(x[63],oTD,e_,d_)
if(xUD){
var oVD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bSD.wxXCkey=3
xUD(oVD,oVD,bSD,gg)
gg.f=cur_globalf
}
else _w(oTD,x[63],1,61)
cs.pop()
eRD.pop()
return r
}
e_[x[63]]={f:m40,j:[],i:[],ti:[x[64]],ic:[]}
d_[x[65]]={}
d_[x[65]]["091473c8"]=function(e,s,r,gg){
var z=gz$gwx_42()
var b=x[65]+':091473c8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/healthBank.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
cs.push("./pages/myCenter/healthBank.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/myCenter/healthBank.vue.wxml:template:84:12")
var fE=_oz(z,3,e,s,gg)
var cF=_gd(x[65],fE,e_,d_)
if(cF){
var hG=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[65],84,78)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
cs.push("./pages/myCenter/healthBank.vue.wxml:view:88:6")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var cXD=e_[x[65]].i
_ai(cXD,x[6],e_,x[65],1,1)
cXD.pop()
return r
}
e_[x[65]]={f:m41,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[66]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var oZD=e_[x[66]].i
_ai(oZD,x[67],e_,x[66],1,1)
var c1D=_v()
_(r,c1D)
cs.push("./pages/myCenter/healthBank.wxml:template:1:53")
var o2D=_oz(z,1,e,s,gg)
var l3D=_gd(x[66],o2D,e_,d_)
if(l3D){
var a4D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c1D.wxXCkey=3
l3D(a4D,a4D,c1D,gg)
gg.f=cur_globalf
}
else _w(o2D,x[66],1,65)
cs.pop()
oZD.pop()
return r
}
e_[x[66]]={f:m42,j:[],i:[],ti:[x[67]],ic:[]}
d_[x[68]]={}
d_[x[68]]["3562a6b4"]=function(e,s,r,gg){
var z=gz$gwx_44()
var b=x[68]+':3562a6b4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/myMatters.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[68]);return}
p_[b]=true
try{
cs.push("./pages/myCenter/myMatters.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/myCenter/myMatters.vue.wxml:view:22:8")
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./pages/myCenter/myMatters.vue.wxml:view:23:10")
var cF=function(oH,hG,cI,gg){
cs.push("./pages/myCenter/myMatters.vue.wxml:view:28:14")
var lK=_n('view')
_rz(z,lK,'class',7,oH,hG,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,8,oH,hG,gg)){aL.wxVkey=1
cs.push("./pages/myCenter/myMatters.vue.wxml:text:29:16")
cs.pop()
}
var tM=_v()
_(lK,tM)
if(_oz(z,9,oH,hG,gg)){tM.wxVkey=1
cs.push("./pages/myCenter/myMatters.vue.wxml:text:30:16")
cs.pop()
}
var eN=_v()
_(lK,eN)
if(_oz(z,10,oH,hG,gg)){eN.wxVkey=1
cs.push("./pages/myCenter/myMatters.vue.wxml:text:31:16")
cs.pop()
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
cs.pop()
_(cI,lK)
return cI
}
fE.wxXCkey=2
_2z(z,5,cF,e,s,gg,fE,'value','index','index')
cs.pop()
var bO=_v()
_(oD,bO)
cs.push("./pages/myCenter/myMatters.vue.wxml:template:56:10")
var oP=_oz(z,12,e,s,gg)
var xQ=_gd(x[68],oP,e_,d_)
if(xQ){
var oR=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[68],56,76)
cs.pop()
cs.pop()
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,13,e,s,gg)){xC.wxVkey=1
cs.push("./pages/myCenter/myMatters.vue.wxml:view:59:6")
cs.push("./pages/myCenter/myMatters.vue.wxml:view:61:10")
var fS=_n('view')
_rz(z,fS,'class',14,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,15,e,s,gg)){cT.wxVkey=1
cs.push("./pages/myCenter/myMatters.vue.wxml:text:63:12")
cs.pop()
}
var hU=_v()
_(fS,hU)
if(_oz(z,16,e,s,gg)){hU.wxVkey=1
cs.push("./pages/myCenter/myMatters.vue.wxml:text:64:12")
cs.pop()
}
cT.wxXCkey=1
hU.wxXCkey=1
cs.pop()
_(xC,fS)
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var e6D=e_[x[68]].i
_ai(e6D,x[6],e_,x[68],1,1)
e6D.pop()
return r
}
e_[x[68]]={f:m43,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[69]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var o8D=e_[x[69]].i
_ai(o8D,x[70],e_,x[69],1,1)
var x9D=_v()
_(r,x9D)
cs.push("./pages/myCenter/myMatters.wxml:template:1:52")
var o0D=_oz(z,1,e,s,gg)
var fAE=_gd(x[69],o0D,e_,d_)
if(fAE){
var cBE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x9D.wxXCkey=3
fAE(cBE,cBE,x9D,gg)
gg.f=cur_globalf
}
else _w(o0D,x[69],1,64)
cs.pop()
o8D.pop()
return r
}
e_[x[69]]={f:m44,j:[],i:[],ti:[x[70]],ic:[]}
d_[x[71]]={}
d_[x[71]]["8af809bc"]=function(e,s,r,gg){
var z=gz$gwx_46()
var b=x[71]+':8af809bc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/myOrder.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[71]);return}
p_[b]=true
try{
cs.push("./pages/myCenter/myOrder.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/myCenter/myOrder.vue.wxml:view:11:6")
cs.push("./pages/myCenter/myOrder.vue.wxml:view:11:6")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./pages/myCenter/myOrder.vue.wxml:view:12:8")
var cF=function(oH,hG,cI,gg){
cs.push("./pages/myCenter/myOrder.vue.wxml:view:42:12")
var lK=_n('view')
_rz(z,lK,'class',8,oH,hG,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,9,oH,hG,gg)){aL.wxVkey=1
cs.push("./pages/myCenter/myOrder.vue.wxml:button:43:14")
cs.pop()
}
var tM=_v()
_(lK,tM)
if(_oz(z,10,oH,hG,gg)){tM.wxVkey=1
cs.push("./pages/myCenter/myOrder.vue.wxml:button:44:14")
cs.pop()
}
var eN=_v()
_(lK,eN)
if(_oz(z,11,oH,hG,gg)){eN.wxVkey=1
cs.push("./pages/myCenter/myOrder.vue.wxml:button:45:14")
cs.pop()
}
var bO=_v()
_(lK,bO)
if(_oz(z,12,oH,hG,gg)){bO.wxVkey=1
cs.push("./pages/myCenter/myOrder.vue.wxml:button:46:14")
cs.pop()
}
var oP=_v()
_(lK,oP)
if(_oz(z,13,oH,hG,gg)){oP.wxVkey=1
cs.push("./pages/myCenter/myOrder.vue.wxml:button:47:14")
cs.pop()
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
cs.pop()
_(cI,lK)
return cI
}
fE.wxXCkey=2
_2z(z,6,cF,e,s,gg,fE,'value','index','index')
cs.pop()
var xQ=_v()
_(oD,xQ)
cs.push("./pages/myCenter/myOrder.vue.wxml:template:51:8")
var oR=_oz(z,15,e,s,gg)
var fS=_gd(x[71],oR,e_,d_)
if(fS){
var cT=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[71],51,74)
cs.pop()
cs.pop()
_(xC,oD)
cs.pop()
}
else{xC.wxVkey=2
cs.push("./pages/myCenter/myOrder.vue.wxml:view:53:6")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var oDE=e_[x[71]].i
_ai(oDE,x[6],e_,x[71],1,1)
oDE.pop()
return r
}
e_[x[71]]={f:m45,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[72]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var oFE=e_[x[72]].i
_ai(oFE,x[73],e_,x[72],1,1)
var lGE=_v()
_(r,lGE)
cs.push("./pages/myCenter/myOrder.wxml:template:1:50")
var aHE=_oz(z,1,e,s,gg)
var tIE=_gd(x[72],aHE,e_,d_)
if(tIE){
var eJE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lGE.wxXCkey=3
tIE(eJE,eJE,lGE,gg)
gg.f=cur_globalf
}
else _w(aHE,x[72],1,62)
cs.pop()
oFE.pop()
return r
}
e_[x[72]]={f:m46,j:[],i:[],ti:[x[73]],ic:[]}
d_[x[74]]={}
d_[x[74]]["638d34df"]=function(e,s,r,gg){
var z=gz$gwx_48()
var b=x[74]+':638d34df'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/orderDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[74]);return}
p_[b]=true
try{
cs.push("./pages/myCenter/orderDetail.vue.wxml:view:85:6")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/myCenter/orderDetail.vue.wxml:button:86:8")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/myCenter/orderDetail.vue.wxml:button:87:8")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/myCenter/orderDetail.vue.wxml:button:88:8")
cs.pop()
}
var cF=_v()
_(oB,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
cs.push("./pages/myCenter/orderDetail.vue.wxml:button:89:8")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
return r
}
e_[x[74]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var xME=e_[x[75]].i
_ai(xME,x[76],e_,x[75],1,1)
var oNE=_v()
_(r,oNE)
cs.push("./pages/myCenter/orderDetail.wxml:template:1:54")
var fOE=_oz(z,1,e,s,gg)
var cPE=_gd(x[75],fOE,e_,d_)
if(cPE){
var hQE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oNE.wxXCkey=3
cPE(hQE,hQE,oNE,gg)
gg.f=cur_globalf
}
else _w(fOE,x[75],1,66)
cs.pop()
xME.pop()
return r
}
e_[x[75]]={f:m48,j:[],i:[],ti:[x[76]],ic:[]}
d_[x[77]]={}
d_[x[77]]["4d3e2113"]=function(e,s,r,gg){
var z=gz$gwx_50()
var b=x[77]+':4d3e2113'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/privacyUser.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[77]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[77]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var oTE=e_[x[78]].i
_ai(oTE,x[79],e_,x[78],1,1)
var lUE=_v()
_(r,lUE)
cs.push("./pages/myCenter/privacyUser.wxml:template:1:54")
var aVE=_oz(z,1,e,s,gg)
var tWE=_gd(x[78],aVE,e_,d_)
if(tWE){
var eXE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lUE.wxXCkey=3
tWE(eXE,eXE,lUE,gg)
gg.f=cur_globalf
}
else _w(aVE,x[78],1,66)
cs.pop()
oTE.pop()
return r
}
e_[x[78]]={f:m50,j:[],i:[],ti:[x[79]],ic:[]}
d_[x[80]]={}
d_[x[80]]["126ba39a"]=function(e,s,r,gg){
var z=gz$gwx_52()
var b=x[80]+':126ba39a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/serviceTitle.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[80]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
return r
}
e_[x[80]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[81]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var x1E=e_[x[81]].i
_ai(x1E,x[82],e_,x[81],1,1)
var o2E=_v()
_(r,o2E)
cs.push("./pages/myCenter/serviceTitle.wxml:template:1:55")
var f3E=_oz(z,1,e,s,gg)
var c4E=_gd(x[81],f3E,e_,d_)
if(c4E){
var h5E=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o2E.wxXCkey=3
c4E(h5E,h5E,o2E,gg)
gg.f=cur_globalf
}
else _w(f3E,x[81],1,67)
cs.pop()
x1E.pop()
return r
}
e_[x[81]]={f:m52,j:[],i:[],ti:[x[82]],ic:[]}
d_[x[83]]={}
d_[x[83]]["77097d70"]=function(e,s,r,gg){
var z=gz$gwx_54()
var b=x[83]+':77097d70'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/setting.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[83]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[83]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[84]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var o8E=e_[x[84]].i
_ai(o8E,x[85],e_,x[84],1,1)
var l9E=_v()
_(r,l9E)
cs.push("./pages/myCenter/setting.wxml:template:1:50")
var a0E=_oz(z,1,e,s,gg)
var tAF=_gd(x[84],a0E,e_,d_)
if(tAF){
var eBF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
l9E.wxXCkey=3
tAF(eBF,eBF,l9E,gg)
gg.f=cur_globalf
}
else _w(a0E,x[84],1,62)
cs.pop()
o8E.pop()
return r
}
e_[x[84]]={f:m54,j:[],i:[],ti:[x[85]],ic:[]}
d_[x[86]]={}
d_[x[86]]["431a5fbf"]=function(e,s,r,gg){
var z=gz$gwx_56()
var b=x[86]+':431a5fbf'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/system.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[86]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
return r
}
e_[x[86]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var xEF=e_[x[87]].i
_ai(xEF,x[88],e_,x[87],1,1)
var oFF=_v()
_(r,oFF)
cs.push("./pages/myCenter/system.wxml:template:1:49")
var fGF=_oz(z,1,e,s,gg)
var cHF=_gd(x[87],fGF,e_,d_)
if(cHF){
var hIF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oFF.wxXCkey=3
cHF(hIF,hIF,oFF,gg)
gg.f=cur_globalf
}
else _w(fGF,x[87],1,61)
cs.pop()
xEF.pop()
return r
}
e_[x[87]]={f:m56,j:[],i:[],ti:[x[88]],ic:[]}
d_[x[89]]={}
d_[x[89]]["84b780d4"]=function(e,s,r,gg){
var z=gz$gwx_58()
var b=x[89]+':84b780d4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/walletCode.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[89]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
return r
}
e_[x[89]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[90]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
var oLF=e_[x[90]].i
_ai(oLF,x[91],e_,x[90],1,1)
var lMF=_v()
_(r,lMF)
cs.push("./pages/myCenter/walletCode.wxml:template:1:53")
var aNF=_oz(z,1,e,s,gg)
var tOF=_gd(x[90],aNF,e_,d_)
if(tOF){
var ePF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lMF.wxXCkey=3
tOF(ePF,ePF,lMF,gg)
gg.f=cur_globalf
}
else _w(aNF,x[90],1,65)
cs.pop()
oLF.pop()
return r
}
e_[x[90]]={f:m58,j:[],i:[],ti:[x[91]],ic:[]}
d_[x[92]]={}
d_[x[92]]["50470aa5"]=function(e,s,r,gg){
var z=gz$gwx_60()
var b=x[92]+':50470aa5'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myCenter/withDrawUser.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[92]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
return r
}
e_[x[92]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[93]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
var xSF=e_[x[93]].i
_ai(xSF,x[94],e_,x[93],1,1)
var oTF=_v()
_(r,oTF)
cs.push("./pages/myCenter/withDrawUser.wxml:template:1:55")
var fUF=_oz(z,1,e,s,gg)
var cVF=_gd(x[93],fUF,e_,d_)
if(cVF){
var hWF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oTF.wxXCkey=3
cVF(hWF,hWF,oTF,gg)
gg.f=cur_globalf
}
else _w(fUF,x[93],1,67)
cs.pop()
xSF.pop()
return r
}
e_[x[93]]={f:m60,j:[],i:[],ti:[x[94]],ic:[]}
d_[x[95]]={}
d_[x[95]]["015c4d85"]=function(e,s,r,gg){
var z=gz$gwx_62()
var b=x[95]+':015c4d85'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/dealMarket/dealIndex.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[95]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/dealMarket/dealIndex.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/tabBar/dealMarket/dealIndex.vue.wxml:template:55:8")
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[95],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[95],55,90)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealIndex.vue.wxml:view:89:6")
cs.push("./pages/tabBar/dealMarket/dealIndex.vue.wxml:view:90:8")
var oH=_n('view')
_rz(z,oH,'class',6,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,7,e,s,gg)){cI.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealIndex.vue.wxml:view:91:10")
var lK=_v()
_(cI,lK)
if(_oz(z,8,e,s,gg)){lK.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealIndex.vue.wxml:text:107:18")
cs.pop()
}
lK.wxXCkey=1
cs.pop()
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,9,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealIndex.vue.wxml:view:133:10")
cs.pop()
}
cI.wxXCkey=1
oJ.wxXCkey=1
cs.pop()
_(xC,oH)
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
var cYF=e_[x[95]].i
_ai(cYF,x[9],e_,x[95],1,1)
cYF.pop()
return r
}
e_[x[95]]={f:m61,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[96]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
var l1F=e_[x[96]].i
_ai(l1F,x[97],e_,x[96],1,1)
var a2F=_v()
_(r,a2F)
cs.push("./pages/tabBar/dealMarket/dealIndex.wxml:template:1:61")
var t3F=_oz(z,1,e,s,gg)
var e4F=_gd(x[96],t3F,e_,d_)
if(e4F){
var b5F=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a2F.wxXCkey=3
e4F(b5F,b5F,a2F,gg)
gg.f=cur_globalf
}
else _w(t3F,x[96],1,73)
cs.pop()
l1F.pop()
return r
}
e_[x[96]]={f:m62,j:[],i:[],ti:[x[97]],ic:[]}
d_[x[98]]={}
d_[x[98]]["42dd0119"]=function(e,s,r,gg){
var z=gz$gwx_64()
var b=x[98]+':42dd0119'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/dealMarket/dealMarket.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[98]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:4:6")
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:5:8")
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:6:10")
var cF=_n('view')
_rz(z,cF,'class',4,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,5,e,s,gg)){hG.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:7:12")
cs.pop()
}
var oH=_v()
_(cF,oH)
if(_oz(z,6,e,s,gg)){oH.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:8:12")
cs.pop()
}
hG.wxXCkey=1
oH.wxXCkey=1
cs.pop()
_(fE,cF)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:10:10")
var cI=_n('view')
_rz(z,cI,'class',7,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,8,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:11:12")
cs.pop()
}
var lK=_v()
_(cI,lK)
if(_oz(z,9,e,s,gg)){lK.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:12:12")
cs.pop()
}
oJ.wxXCkey=1
lK.wxXCkey=1
cs.pop()
_(fE,cI)
cs.pop()
_(oD,fE)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:29:10")
var aL=_n('view')
_rz(z,aL,'class',10,e,s,gg)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:30:12")
var tM=_mz(z,'view',['bindtap',11,'class',1,'data-comkey',2,'data-eventid',3,'data-selected',4,'id',5],[],e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,17,e,s,gg)){eN.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:32:14")
cs.pop()
}
var bO=_v()
_(tM,bO)
if(_oz(z,18,e,s,gg)){bO.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:33:14")
cs.pop()
}
eN.wxXCkey=1
bO.wxXCkey=1
cs.pop()
_(aL,tM)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:35:12")
var oP=_mz(z,'view',['bindtap',19,'class',1,'data-comkey',2,'data-eventid',3,'data-selected',4,'id',5],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,25,e,s,gg)){xQ.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:37:14")
cs.pop()
}
var oR=_v()
_(oP,oR)
if(_oz(z,26,e,s,gg)){oR.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:38:14")
cs.pop()
}
xQ.wxXCkey=1
oR.wxXCkey=1
cs.pop()
_(aL,oP)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:40:12")
var fS=_mz(z,'view',['bindtap',27,'class',1,'data-comkey',2,'data-eventid',3,'data-selected',4,'id',5],[],e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,33,e,s,gg)){cT.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:42:14")
cs.pop()
}
var hU=_v()
_(fS,hU)
if(_oz(z,34,e,s,gg)){hU.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:43:14")
cs.pop()
}
cT.wxXCkey=1
hU.wxXCkey=1
cs.pop()
_(aL,fS)
cs.pop()
_(oD,aL)
cs.pop()
_(oB,oD)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:52:8")
var oV=_n('view')
_rz(z,oV,'class',35,e,s,gg)
var cW=_v()
_(oV,cW)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:53:10")
var oX=function(aZ,lY,t1,gg){
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:53:10")
var b3=_mz(z,'view',['bindtap',40,'class',1,'data-comkey',2,'data-eventid',3,'data-indexs',4,'id',5,'key',6],[],aZ,lY,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,47,aZ,lY,gg)){o4.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:image:68:14")
cs.pop()
}
o4.wxXCkey=1
cs.pop()
_(t1,b3)
return t1
}
cW.wxXCkey=2
_2z(z,38,oX,e,s,gg,cW,'value','index','index')
cs.pop()
var x5=_v()
_(oV,x5)
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:template:71:10")
var o6=_oz(z,49,e,s,gg)
var f7=_gd(x[98],o6,e_,d_)
if(f7){
var c8=_1z(z,48,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[98],71,76)
cs.pop()
cs.pop()
_(oB,oV)
var xC=_v()
_(oB,xC)
if(_oz(z,50,e,s,gg)){xC.wxVkey=1
cs.push("./pages/tabBar/dealMarket/dealMarket.vue.wxml:view:74:6")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
var x7F=e_[x[98]].i
_ai(x7F,x[6],e_,x[98],1,1)
x7F.pop()
return r
}
e_[x[98]]={f:m63,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[99]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
var f9F=e_[x[99]].i
_ai(f9F,x[100],e_,x[99],1,1)
var c0F=_v()
_(r,c0F)
cs.push("./pages/tabBar/dealMarket/dealMarket.wxml:template:1:62")
var hAG=_oz(z,1,e,s,gg)
var oBG=_gd(x[99],hAG,e_,d_)
if(oBG){
var cCG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c0F.wxXCkey=3
oBG(cCG,cCG,c0F,gg)
gg.f=cur_globalf
}
else _w(hAG,x[99],1,74)
cs.pop()
f9F.pop()
return r
}
e_[x[99]]={f:m64,j:[],i:[],ti:[x[100]],ic:[]}
d_[x[101]]={}
d_[x[101]]["56dacdc3"]=function(e,s,r,gg){
var z=gz$gwx_66()
var b=x[101]+':56dacdc3'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/healthyMall/healthyMall.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[101]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m65=function(e,s,r,gg){
var z=gz$gwx_66()
return r
}
e_[x[101]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[102]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx_67()
var aFG=e_[x[102]].i
_ai(aFG,x[103],e_,x[102],1,1)
var tGG=_v()
_(r,tGG)
cs.push("./pages/tabBar/healthyMall/healthyMall.wxml:template:1:64")
var eHG=_oz(z,1,e,s,gg)
var bIG=_gd(x[102],eHG,e_,d_)
if(bIG){
var oJG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tGG.wxXCkey=3
bIG(oJG,oJG,tGG,gg)
gg.f=cur_globalf
}
else _w(eHG,x[102],1,76)
cs.pop()
aFG.pop()
return r
}
e_[x[102]]={f:m66,j:[],i:[],ti:[x[103]],ic:[]}
d_[x[104]]={}
d_[x[104]]["5b8ba18e"]=function(e,s,r,gg){
var z=gz$gwx_68()
var b=x[104]+':5b8ba18e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/healthySpace/healthySpace.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/tabBar/healthySpace/healthySpace.vue.wxml:template:87:12")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[104],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[104],87,94)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m67=function(e,s,r,gg){
var z=gz$gwx_68()
var oLG=e_[x[104]].i
_ai(oLG,x[9],e_,x[104],1,1)
oLG.pop()
return r
}
e_[x[104]]={f:m67,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[105]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx_69()
var cNG=e_[x[105]].i
_ai(cNG,x[106],e_,x[105],1,1)
var hOG=_v()
_(r,hOG)
cs.push("./pages/tabBar/healthySpace/healthySpace.wxml:template:1:66")
var oPG=_oz(z,1,e,s,gg)
var cQG=_gd(x[105],oPG,e_,d_)
if(cQG){
var oRG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hOG.wxXCkey=3
cQG(oRG,oRG,hOG,gg)
gg.f=cur_globalf
}
else _w(oPG,x[105],1,78)
cs.pop()
cNG.pop()
return r
}
e_[x[105]]={f:m68,j:[],i:[],ti:[x[106]],ic:[]}
d_[x[107]]={}
d_[x[107]]["7ae23333"]=function(e,s,r,gg){
var z=gz$gwx_70()
var b=x[107]+':7ae23333'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[107]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/login/login.vue.wxml:view:12:6")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:view:13:8")
var fE=_v()
_(xC,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:image:17:12")
cs.pop()
}
fE.wxXCkey=1
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:view:36:8")
cs.push("./pages/tabBar/login/login.vue.wxml:view:36:8")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:image:40:12")
cs.pop()
}
cs.push("./pages/tabBar/login/login.vue.wxml:view:42:10")
var oH=_n('view')
_rz(z,oH,'class',7,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,8,e,s,gg)){cI.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:input:44:12")
cs.pop()
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,9,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:input:45:12")
cs.pop()
}
var lK=_v()
_(oH,lK)
if(_oz(z,10,e,s,gg)){lK.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:image:46:12")
cs.pop()
}
var aL=_v()
_(oH,aL)
if(_oz(z,11,e,s,gg)){aL.wxVkey=1
cs.push("./pages/tabBar/login/login.vue.wxml:image:47:12")
cs.pop()
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
cs.pop()
_(cF,oH)
hG.wxXCkey=1
cs.pop()
_(oD,cF)
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m69=function(e,s,r,gg){
var z=gz$gwx_70()
return r
}
e_[x[107]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[108]]={}
var m70=function(e,s,r,gg){
var z=gz$gwx_71()
var tUG=e_[x[108]].i
_ai(tUG,x[109],e_,x[108],1,1)
var eVG=_v()
_(r,eVG)
cs.push("./pages/tabBar/login/login.wxml:template:1:52")
var bWG=_oz(z,1,e,s,gg)
var oXG=_gd(x[108],bWG,e_,d_)
if(oXG){
var xYG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eVG.wxXCkey=3
oXG(xYG,xYG,eVG,gg)
gg.f=cur_globalf
}
else _w(bWG,x[108],1,64)
cs.pop()
tUG.pop()
return r
}
e_[x[108]]={f:m70,j:[],i:[],ti:[x[109]],ic:[]}
d_[x[110]]={}
d_[x[110]]["cdba4418"]=function(e,s,r,gg){
var z=gz$gwx_72()
var b=x[110]+':cdba4418'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/balance.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[110]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/tabBar/myCenter/balance.vue.wxml:template:55:12")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[110],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[110],55,78)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m71=function(e,s,r,gg){
var z=gz$gwx_72()
var f1G=e_[x[110]].i
_ai(f1G,x[6],e_,x[110],1,1)
f1G.pop()
return r
}
e_[x[110]]={f:m71,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[111]]={}
var m72=function(e,s,r,gg){
var z=gz$gwx_73()
var h3G=e_[x[111]].i
_ai(h3G,x[112],e_,x[111],1,1)
var o4G=_v()
_(r,o4G)
cs.push("./pages/tabBar/myCenter/balance.wxml:template:1:57")
var c5G=_oz(z,1,e,s,gg)
var o6G=_gd(x[111],c5G,e_,d_)
if(o6G){
var l7G=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o4G.wxXCkey=3
o6G(l7G,l7G,o4G,gg)
gg.f=cur_globalf
}
else _w(c5G,x[111],1,69)
cs.pop()
h3G.pop()
return r
}
e_[x[111]]={f:m72,j:[],i:[],ti:[x[112]],ic:[]}
d_[x[113]]={}
d_[x[113]]["33799afc"]=function(e,s,r,gg){
var z=gz$gwx_74()
var b=x[113]+':33799afc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/convertDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[113]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m73=function(e,s,r,gg){
var z=gz$gwx_74()
return r
}
e_[x[113]]={f:m73,j:[],i:[],ti:[],ic:[]}
d_[x[114]]={}
var m74=function(e,s,r,gg){
var z=gz$gwx_75()
var e0G=e_[x[114]].i
_ai(e0G,x[115],e_,x[114],1,1)
var bAH=_v()
_(r,bAH)
cs.push("./pages/tabBar/myCenter/convertDetail.wxml:template:1:63")
var oBH=_oz(z,1,e,s,gg)
var xCH=_gd(x[114],oBH,e_,d_)
if(xCH){
var oDH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bAH.wxXCkey=3
xCH(oDH,oDH,bAH,gg)
gg.f=cur_globalf
}
else _w(oBH,x[114],1,75)
cs.pop()
e0G.pop()
return r
}
e_[x[114]]={f:m74,j:[],i:[],ti:[x[115]],ic:[]}
d_[x[116]]={}
d_[x[116]]["3e2f64ee"]=function(e,s,r,gg){
var z=gz$gwx_76()
var b=x[116]+':3e2f64ee'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/convertList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[116]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/myCenter/convertList.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/tabBar/myCenter/convertList.vue.wxml:view:4:6")
var oD=_v()
_(xC,oD)
cs.push("./pages/tabBar/myCenter/convertList.vue.wxml:template:20:8")
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[116],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[116],20,74)
cs.pop()
cs.pop()
}
else{xC.wxVkey=2
cs.push("./pages/tabBar/myCenter/convertList.vue.wxml:view:22:6")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m75=function(e,s,r,gg){
var z=gz$gwx_76()
var cFH=e_[x[116]].i
_ai(cFH,x[6],e_,x[116],1,1)
cFH.pop()
return r
}
e_[x[116]]={f:m75,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[117]]={}
var m76=function(e,s,r,gg){
var z=gz$gwx_77()
var oHH=e_[x[117]].i
_ai(oHH,x[118],e_,x[117],1,1)
var cIH=_v()
_(r,cIH)
cs.push("./pages/tabBar/myCenter/convertList.wxml:template:1:61")
var oJH=_oz(z,1,e,s,gg)
var lKH=_gd(x[117],oJH,e_,d_)
if(lKH){
var aLH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cIH.wxXCkey=3
lKH(aLH,aLH,cIH,gg)
gg.f=cur_globalf
}
else _w(oJH,x[117],1,73)
cs.pop()
oHH.pop()
return r
}
e_[x[117]]={f:m76,j:[],i:[],ti:[x[118]],ic:[]}
d_[x[119]]={}
d_[x[119]]["106c86db"]=function(e,s,r,gg){
var z=gz$gwx_78()
var b=x[119]+':106c86db'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/dataWallet.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[119]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/tabBar/myCenter/dataWallet.vue.wxml:template:53:8")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[119],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[119],53,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m77=function(e,s,r,gg){
var z=gz$gwx_78()
var eNH=e_[x[119]].i
_ai(eNH,x[6],e_,x[119],1,1)
eNH.pop()
return r
}
e_[x[119]]={f:m77,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[120]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx_79()
var oPH=e_[x[120]].i
_ai(oPH,x[121],e_,x[120],1,1)
var xQH=_v()
_(r,xQH)
cs.push("./pages/tabBar/myCenter/dataWallet.wxml:template:1:60")
var oRH=_oz(z,1,e,s,gg)
var fSH=_gd(x[120],oRH,e_,d_)
if(fSH){
var cTH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xQH.wxXCkey=3
fSH(cTH,cTH,xQH,gg)
gg.f=cur_globalf
}
else _w(oRH,x[120],1,72)
cs.pop()
oPH.pop()
return r
}
e_[x[120]]={f:m78,j:[],i:[],ti:[x[121]],ic:[]}
d_[x[122]]={}
d_[x[122]]["26a4d76a"]=function(e,s,r,gg){
var z=gz$gwx_80()
var b=x[122]+':26a4d76a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/discounts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[122]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/myCenter/discounts.vue.wxml:view:4:6")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/tabBar/myCenter/discounts.vue.wxml:view:5:8")
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
if(_oz(z,6,cF,fE,gg)){cI.wxVkey=1
cs.push("./pages/tabBar/myCenter/discounts.vue.wxml:image:19:14")
cs.pop()
}
cI.wxXCkey=1
return hG
}
xC.wxXCkey=2
_2z(z,4,oD,e,s,gg,xC,'value','index','index')
cs.pop()
var oJ=_v()
_(oB,oJ)
cs.push("./pages/tabBar/myCenter/discounts.vue.wxml:template:23:8")
var lK=_oz(z,8,e,s,gg)
var aL=_gd(x[122],lK,e_,d_)
if(aL){
var tM=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[122],23,74)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m79=function(e,s,r,gg){
var z=gz$gwx_80()
var oVH=e_[x[122]].i
_ai(oVH,x[6],e_,x[122],1,1)
oVH.pop()
return r
}
e_[x[122]]={f:m79,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[123]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx_81()
var oXH=e_[x[123]].i
_ai(oXH,x[124],e_,x[123],1,1)
var lYH=_v()
_(r,lYH)
cs.push("./pages/tabBar/myCenter/discounts.wxml:template:1:59")
var aZH=_oz(z,1,e,s,gg)
var t1H=_gd(x[123],aZH,e_,d_)
if(t1H){
var e2H=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lYH.wxXCkey=3
t1H(e2H,e2H,lYH,gg)
gg.f=cur_globalf
}
else _w(aZH,x[123],1,71)
cs.pop()
oXH.pop()
return r
}
e_[x[123]]={f:m80,j:[],i:[],ti:[x[124]],ic:[]}
d_[x[125]]={}
d_[x[125]]["83b77642"]=function(e,s,r,gg){
var z=gz$gwx_82()
var b=x[125]+':83b77642'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/goodsDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[125]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/tabBar/myCenter/goodsDetail.vue.wxml:view:41:6")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m81=function(e,s,r,gg){
var z=gz$gwx_82()
return r
}
e_[x[125]]={f:m81,j:[],i:[],ti:[],ic:[]}
d_[x[126]]={}
var m82=function(e,s,r,gg){
var z=gz$gwx_83()
var x5H=e_[x[126]].i
_ai(x5H,x[127],e_,x[126],1,1)
var o6H=_v()
_(r,o6H)
cs.push("./pages/tabBar/myCenter/goodsDetail.wxml:template:1:61")
var f7H=_oz(z,1,e,s,gg)
var c8H=_gd(x[126],f7H,e_,d_)
if(c8H){
var h9H=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o6H.wxXCkey=3
c8H(h9H,h9H,o6H,gg)
gg.f=cur_globalf
}
else _w(f7H,x[126],1,73)
cs.pop()
x5H.pop()
return r
}
e_[x[126]]={f:m82,j:[],i:[],ti:[x[127]],ic:[]}
d_[x[128]]={}
d_[x[128]]["580fab48"]=function(e,s,r,gg){
var z=gz$gwx_84()
var b=x[128]+':580fab48'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/lifeMall.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[128]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/tabBar/myCenter/lifeMall.vue.wxml:template:74:10")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[128],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[128],74,76)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m83=function(e,s,r,gg){
var z=gz$gwx_84()
var cAI=e_[x[128]].i
_ai(cAI,x[6],e_,x[128],1,1)
cAI.pop()
return r
}
e_[x[128]]={f:m83,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[129]]={}
var m84=function(e,s,r,gg){
var z=gz$gwx_85()
var lCI=e_[x[129]].i
_ai(lCI,x[130],e_,x[129],1,1)
var aDI=_v()
_(r,aDI)
cs.push("./pages/tabBar/myCenter/lifeMall.wxml:template:1:58")
var tEI=_oz(z,1,e,s,gg)
var eFI=_gd(x[129],tEI,e_,d_)
if(eFI){
var bGI=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDI.wxXCkey=3
eFI(bGI,bGI,aDI,gg)
gg.f=cur_globalf
}
else _w(tEI,x[129],1,70)
cs.pop()
lCI.pop()
return r
}
e_[x[129]]={f:m84,j:[],i:[],ti:[x[130]],ic:[]}
d_[x[131]]={}
d_[x[131]]["0dd8752c"]=function(e,s,r,gg){
var z=gz$gwx_86()
var b=x[131]+':0dd8752c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/loginPwd.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[131]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:view:4:6")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:view:18:8")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:input:19:10")
cs.pop()
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:input:20:10")
cs.pop()
}
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:view:21:10")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:image:22:12")
cs.pop()
}
var oH=_v()
_(cF,oH)
if(_oz(z,7,e,s,gg)){oH.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:image:23:12")
cs.pop()
}
hG.wxXCkey=1
oH.wxXCkey=1
cs.pop()
_(xC,cF)
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(oB,xC)
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:view:26:8")
var cI=_n('view')
_rz(z,cI,'class',8,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,9,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:input:27:10")
cs.pop()
}
var lK=_v()
_(cI,lK)
if(_oz(z,10,e,s,gg)){lK.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:input:28:10")
cs.pop()
}
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:view:29:10")
var aL=_n('view')
_rz(z,aL,'class',11,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,12,e,s,gg)){tM.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:image:30:12")
cs.pop()
}
var eN=_v()
_(aL,eN)
if(_oz(z,13,e,s,gg)){eN.wxVkey=1
cs.push("./pages/tabBar/myCenter/loginPwd.vue.wxml:image:31:12")
cs.pop()
}
tM.wxXCkey=1
eN.wxXCkey=1
cs.pop()
_(cI,aL)
oJ.wxXCkey=1
lK.wxXCkey=1
cs.pop()
_(oB,cI)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m85=function(e,s,r,gg){
var z=gz$gwx_86()
return r
}
e_[x[131]]={f:m85,j:[],i:[],ti:[],ic:[]}
d_[x[132]]={}
var m86=function(e,s,r,gg){
var z=gz$gwx_87()
var oJI=e_[x[132]].i
_ai(oJI,x[133],e_,x[132],1,1)
var fKI=_v()
_(r,fKI)
cs.push("./pages/tabBar/myCenter/loginPwd.wxml:template:1:58")
var cLI=_oz(z,1,e,s,gg)
var hMI=_gd(x[132],cLI,e_,d_)
if(hMI){
var oNI=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKI.wxXCkey=3
hMI(oNI,oNI,fKI,gg)
gg.f=cur_globalf
}
else _w(cLI,x[132],1,70)
cs.pop()
oJI.pop()
return r
}
e_[x[132]]={f:m86,j:[],i:[],ti:[x[133]],ic:[]}
d_[x[134]]={}
d_[x[134]]["6c95900a"]=function(e,s,r,gg){
var z=gz$gwx_88()
var b=x[134]+':6c95900a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/myCoupon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[134]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:view:9:6")
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:view:9:6")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:view:10:8")
var cF=function(oH,hG,cI,gg){
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:view:11:10")
var lK=_n('view')
_rz(z,lK,'class',8,oH,hG,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,9,oH,hG,gg)){aL.wxVkey=1
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:text:13:14")
cs.pop()
}
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:view:18:12")
var tM=_n('view')
_rz(z,tM,'class',10,oH,hG,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,11,oH,hG,gg)){eN.wxVkey=1
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:image:19:14")
cs.pop()
}
var bO=_v()
_(tM,bO)
if(_oz(z,12,oH,hG,gg)){bO.wxVkey=1
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:image:20:14")
cs.pop()
}
var oP=_v()
_(tM,oP)
if(_oz(z,13,oH,hG,gg)){oP.wxVkey=1
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:image:21:14")
cs.pop()
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
cs.pop()
_(lK,tM)
aL.wxXCkey=1
cs.pop()
_(cI,lK)
return cI
}
fE.wxXCkey=2
_2z(z,6,cF,e,s,gg,fE,'value','index','index')
cs.pop()
var xQ=_v()
_(oD,xQ)
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:template:30:8")
var oR=_oz(z,15,e,s,gg)
var fS=_gd(x[134],oR,e_,d_)
if(fS){
var cT=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[134],30,74)
cs.pop()
cs.pop()
_(xC,oD)
cs.pop()
}
else{xC.wxVkey=2
cs.push("./pages/tabBar/myCenter/myCoupon.vue.wxml:view:32:6")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m87=function(e,s,r,gg){
var z=gz$gwx_88()
var oPI=e_[x[134]].i
_ai(oPI,x[6],e_,x[134],1,1)
oPI.pop()
return r
}
e_[x[134]]={f:m87,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[135]]={}
var m88=function(e,s,r,gg){
var z=gz$gwx_89()
var aRI=e_[x[135]].i
_ai(aRI,x[136],e_,x[135],1,1)
var tSI=_v()
_(r,tSI)
cs.push("./pages/tabBar/myCenter/myCoupon.wxml:template:1:58")
var eTI=_oz(z,1,e,s,gg)
var bUI=_gd(x[135],eTI,e_,d_)
if(bUI){
var oVI=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tSI.wxXCkey=3
bUI(oVI,oVI,tSI,gg)
gg.f=cur_globalf
}
else _w(eTI,x[135],1,70)
cs.pop()
aRI.pop()
return r
}
e_[x[135]]={f:m88,j:[],i:[],ti:[x[136]],ic:[]}
d_[x[137]]={}
d_[x[137]]["1b467e58"]=function(e,s,r,gg){
var z=gz$gwx_90()
var b=x[137]+':1b467e58'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/personal.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[137]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m89=function(e,s,r,gg){
var z=gz$gwx_90()
return r
}
e_[x[137]]={f:m89,j:[],i:[],ti:[],ic:[]}
d_[x[138]]={}
var m90=function(e,s,r,gg){
var z=gz$gwx_91()
var fYI=e_[x[138]].i
_ai(fYI,x[139],e_,x[138],1,1)
var cZI=_v()
_(r,cZI)
cs.push("./pages/tabBar/myCenter/personal.wxml:template:1:58")
var h1I=_oz(z,1,e,s,gg)
var o2I=_gd(x[138],h1I,e_,d_)
if(o2I){
var c3I=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cZI.wxXCkey=3
o2I(c3I,c3I,cZI,gg)
gg.f=cur_globalf
}
else _w(h1I,x[138],1,70)
cs.pop()
fYI.pop()
return r
}
e_[x[138]]={f:m90,j:[],i:[],ti:[x[139]],ic:[]}
d_[x[140]]={}
d_[x[140]]["6d98e378"]=function(e,s,r,gg){
var z=gz$gwx_92()
var b=x[140]+':6d98e378'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/rank.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[140]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m91=function(e,s,r,gg){
var z=gz$gwx_92()
return r
}
e_[x[140]]={f:m91,j:[],i:[],ti:[],ic:[]}
d_[x[141]]={}
var m92=function(e,s,r,gg){
var z=gz$gwx_93()
var a6I=e_[x[141]].i
_ai(a6I,x[142],e_,x[141],1,1)
var t7I=_v()
_(r,t7I)
cs.push("./pages/tabBar/myCenter/rank.wxml:template:1:54")
var e8I=_oz(z,1,e,s,gg)
var b9I=_gd(x[141],e8I,e_,d_)
if(b9I){
var o0I=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
t7I.wxXCkey=3
b9I(o0I,o0I,t7I,gg)
gg.f=cur_globalf
}
else _w(e8I,x[141],1,66)
cs.pop()
a6I.pop()
return r
}
e_[x[141]]={f:m92,j:[],i:[],ti:[x[142]],ic:[]}
d_[x[143]]={}
d_[x[143]]["aae36982"]=function(e,s,r,gg){
var z=gz$gwx_94()
var b=x[143]+':aae36982'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/recharge.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[143]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:10:10")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:11:12")
cs.pop()
}
var cF=_v()
_(oD,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:12:12")
cs.pop()
}
fE.wxXCkey=1
cF.wxXCkey=1
cs.pop()
_(xC,oD)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:20:10")
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,7,e,s,gg)){oH.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:21:12")
cs.pop()
}
var cI=_v()
_(hG,cI)
if(_oz(z,8,e,s,gg)){cI.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:22:12")
cs.pop()
}
oH.wxXCkey=1
cI.wxXCkey=1
cs.pop()
_(xC,hG)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:30:10")
var oJ=_n('view')
_rz(z,oJ,'class',9,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,10,e,s,gg)){lK.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:31:12")
cs.pop()
}
var aL=_v()
_(oJ,aL)
if(_oz(z,11,e,s,gg)){aL.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:32:12")
cs.pop()
}
lK.wxXCkey=1
aL.wxXCkey=1
cs.pop()
_(xC,oJ)
cs.pop()
_(oB,xC)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:36:6")
var tM=_n('view')
_rz(z,tM,'class',12,e,s,gg)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:45:10")
var eN=_n('view')
_rz(z,eN,'class',13,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,14,e,s,gg)){bO.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:47:12")
cs.pop()
}
var oP=_v()
_(eN,oP)
if(_oz(z,15,e,s,gg)){oP.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:48:12")
cs.pop()
}
bO.wxXCkey=1
oP.wxXCkey=1
cs.pop()
_(tM,eN)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:58:10")
var xQ=_n('view')
_rz(z,xQ,'class',16,e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,17,e,s,gg)){oR.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:60:12")
cs.pop()
}
var fS=_v()
_(xQ,fS)
if(_oz(z,18,e,s,gg)){fS.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:61:12")
cs.pop()
}
oR.wxXCkey=1
fS.wxXCkey=1
cs.pop()
_(tM,xQ)
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:view:71:10")
var cT=_n('view')
_rz(z,cT,'class',19,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,20,e,s,gg)){hU.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:73:12")
cs.pop()
}
var oV=_v()
_(cT,oV)
if(_oz(z,21,e,s,gg)){oV.wxVkey=1
cs.push("./pages/tabBar/myCenter/recharge.vue.wxml:image:74:12")
cs.pop()
}
hU.wxXCkey=1
oV.wxXCkey=1
cs.pop()
_(tM,cT)
cs.pop()
_(oB,tM)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m93=function(e,s,r,gg){
var z=gz$gwx_94()
return r
}
e_[x[143]]={f:m93,j:[],i:[],ti:[],ic:[]}
d_[x[144]]={}
var m94=function(e,s,r,gg){
var z=gz$gwx_95()
var fCJ=e_[x[144]].i
_ai(fCJ,x[145],e_,x[144],1,1)
var cDJ=_v()
_(r,cDJ)
cs.push("./pages/tabBar/myCenter/recharge.wxml:template:1:58")
var hEJ=_oz(z,1,e,s,gg)
var oFJ=_gd(x[144],hEJ,e_,d_)
if(oFJ){
var cGJ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cDJ.wxXCkey=3
oFJ(cGJ,cGJ,cDJ,gg)
gg.f=cur_globalf
}
else _w(hEJ,x[144],1,70)
cs.pop()
fCJ.pop()
return r
}
e_[x[144]]={f:m94,j:[],i:[],ti:[x[145]],ic:[]}
d_[x[146]]={}
d_[x[146]]["a4072a44"]=function(e,s,r,gg){
var z=gz$gwx_96()
var b=x[146]+':a4072a44'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/turnSuccess.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[146]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m95=function(e,s,r,gg){
var z=gz$gwx_96()
return r
}
e_[x[146]]={f:m95,j:[],i:[],ti:[],ic:[]}
d_[x[147]]={}
var m96=function(e,s,r,gg){
var z=gz$gwx_97()
var aJJ=e_[x[147]].i
_ai(aJJ,x[148],e_,x[147],1,1)
var tKJ=_v()
_(r,tKJ)
cs.push("./pages/tabBar/myCenter/turnSuccess.wxml:template:1:61")
var eLJ=_oz(z,1,e,s,gg)
var bMJ=_gd(x[147],eLJ,e_,d_)
if(bMJ){
var oNJ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tKJ.wxXCkey=3
bMJ(oNJ,oNJ,tKJ,gg)
gg.f=cur_globalf
}
else _w(eLJ,x[147],1,73)
cs.pop()
aJJ.pop()
return r
}
e_[x[147]]={f:m96,j:[],i:[],ti:[x[148]],ic:[]}
d_[x[149]]={}
d_[x[149]]["0bdf158d"]=function(e,s,r,gg){
var z=gz$gwx_98()
var b=x[149]+':0bdf158d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/userWithdraw.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[149]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:view:3:6")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:view:23:6")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:view:56:6")
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:scroll-view:62:10")
var cF=_mz(z,'scroll-view',['class',5,'scrollY',1],[],e,s,gg)
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:view:63:12")
var hG=_mz(z,'view',['bindtap',7,'class',1,'data-comkey',2,'data-eventid',3,'data-type',4],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,12,e,s,gg)){oH.wxVkey=1
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:image:70:16")
cs.pop()
}
oH.wxXCkey=1
cs.pop()
_(cF,hG)
var cI=_v()
_(cF,cI)
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:block:73:12")
var oJ=function(aL,lK,tM,gg){
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:view:74:14")
var bO=_mz(z,'view',['bindtap',17,'class',1,'data-comkey',2,'data-eventid',3,'data-type',4],[],aL,lK,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,22,aL,lK,gg)){oP.wxVkey=1
cs.push("./pages/tabBar/myCenter/userWithdraw.vue.wxml:image:80:18")
cs.pop()
}
oP.wxXCkey=1
cs.pop()
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,15,oJ,e,s,gg,cI,'item','index','item')
cs.pop()
cs.pop()
_(fE,cF)
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m97=function(e,s,r,gg){
var z=gz$gwx_98()
return r
}
e_[x[149]]={f:m97,j:[],i:[],ti:[],ic:[]}
d_[x[150]]={}
var m98=function(e,s,r,gg){
var z=gz$gwx_99()
var fQJ=e_[x[150]].i
_ai(fQJ,x[151],e_,x[150],1,1)
var cRJ=_v()
_(r,cRJ)
cs.push("./pages/tabBar/myCenter/userWithdraw.wxml:template:1:62")
var hSJ=_oz(z,1,e,s,gg)
var oTJ=_gd(x[150],hSJ,e_,d_)
if(oTJ){
var cUJ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cRJ.wxXCkey=3
oTJ(cUJ,cUJ,cRJ,gg)
gg.f=cur_globalf
}
else _w(hSJ,x[150],1,74)
cs.pop()
fQJ.pop()
return r
}
e_[x[150]]={f:m98,j:[],i:[],ti:[x[151]],ic:[]}
d_[x[152]]={}
d_[x[152]]["146b2d53"]=function(e,s,r,gg){
var z=gz$gwx_100()
var b=x[152]+':146b2d53'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/walletAddress.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[152]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/tabBar/myCenter/walletAddress.vue.wxml:text:10:10")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m99=function(e,s,r,gg){
var z=gz$gwx_100()
return r
}
e_[x[152]]={f:m99,j:[],i:[],ti:[],ic:[]}
d_[x[153]]={}
var m100=function(e,s,r,gg){
var z=gz$gwx_101()
var aXJ=e_[x[153]].i
_ai(aXJ,x[154],e_,x[153],1,1)
var tYJ=_v()
_(r,tYJ)
cs.push("./pages/tabBar/myCenter/walletAddress.wxml:template:1:63")
var eZJ=_oz(z,1,e,s,gg)
var b1J=_gd(x[153],eZJ,e_,d_)
if(b1J){
var o2J=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tYJ.wxXCkey=3
b1J(o2J,o2J,tYJ,gg)
gg.f=cur_globalf
}
else _w(eZJ,x[153],1,75)
cs.pop()
aXJ.pop()
return r
}
e_[x[153]]={f:m100,j:[],i:[],ti:[x[154]],ic:[]}
d_[x[155]]={}
d_[x[155]]["e84423bc"]=function(e,s,r,gg){
var z=gz$gwx_102()
var b=x[155]+':e84423bc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/myCenter/withdraw.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[155]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:view:3:6")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:view:10:10")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:image:12:12")
cs.pop()
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:image:13:12")
cs.pop()
}
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(oB,xC)
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:view:21:10")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:image:23:12")
cs.pop()
}
var oH=_v()
_(cF,oH)
if(_oz(z,7,e,s,gg)){oH.wxVkey=1
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:image:24:12")
cs.pop()
}
hG.wxXCkey=1
oH.wxXCkey=1
cs.pop()
_(oB,cF)
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:view:32:10")
var cI=_n('view')
_rz(z,cI,'class',8,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,9,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:image:34:12")
cs.pop()
}
var lK=_v()
_(cI,lK)
if(_oz(z,10,e,s,gg)){lK.wxVkey=1
cs.push("./pages/tabBar/myCenter/withdraw.vue.wxml:image:35:12")
cs.pop()
}
oJ.wxXCkey=1
lK.wxXCkey=1
cs.pop()
_(oB,cI)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m101=function(e,s,r,gg){
var z=gz$gwx_102()
return r
}
e_[x[155]]={f:m101,j:[],i:[],ti:[],ic:[]}
d_[x[156]]={}
var m102=function(e,s,r,gg){
var z=gz$gwx_103()
var f5J=e_[x[156]].i
_ai(f5J,x[157],e_,x[156],1,1)
var c6J=_v()
_(r,c6J)
cs.push("./pages/tabBar/myCenter/withdraw.wxml:template:1:58")
var h7J=_oz(z,1,e,s,gg)
var o8J=_gd(x[156],h7J,e_,d_)
if(o8J){
var c9J=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c6J.wxXCkey=3
o8J(c9J,c9J,c6J,gg)
gg.f=cur_globalf
}
else _w(h7J,x[156],1,70)
cs.pop()
f5J.pop()
return r
}
e_[x[156]]={f:m102,j:[],i:[],ti:[x[157]],ic:[]}
d_[x[158]]={}
d_[x[158]]["7cce46f9"]=function(e,s,r,gg){
var z=gz$gwx_104()
var b=x[158]+':7cce46f9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[158]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/tabBar/register/register.vue.wxml:view:12:6")
cs.push("./pages/tabBar/register/register.vue.wxml:view:13:8")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/tabBar/register/register.vue.wxml:image:17:12")
cs.pop()
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/tabBar/register/register.vue.wxml:image:22:12")
cs.pop()
}
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(oB,xC)
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m103=function(e,s,r,gg){
var z=gz$gwx_104()
return r
}
e_[x[158]]={f:m103,j:[],i:[],ti:[],ic:[]}
d_[x[159]]={}
var m104=function(e,s,r,gg){
var z=gz$gwx_105()
var aBK=e_[x[159]].i
_ai(aBK,x[160],e_,x[159],1,1)
var tCK=_v()
_(r,tCK)
cs.push("./pages/tabBar/register/register.wxml:template:1:58")
var eDK=_oz(z,1,e,s,gg)
var bEK=_gd(x[159],eDK,e_,d_)
if(bEK){
var oFK=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tCK.wxXCkey=3
bEK(oFK,oFK,tCK,gg)
gg.f=cur_globalf
}
else _w(eDK,x[159],1,70)
cs.pop()
aBK.pop()
return r
}
e_[x[159]]={f:m104,j:[],i:[],ti:[x[160]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/healthySpace/healthySpace","pages/tabBar/healthyMall/healthyMall","pages/tabBar/myCenter/personal","pages/tabBar/myCenter/balance","pages/tabBar/myCenter/loginPwd","pages/healthySpace/invite","pages/healthyMall/brokerage","pages/tabBar/login/login","pages/tabBar/register/register","pages/myCenter/myOrder","pages/tabBar/myCenter/myCoupon","pages/tabBar/myCenter/goodsDetail","pages/tabBar/myCenter/dataWallet","pages/tabBar/myCenter/walletAddress","pages/tabBar/myCenter/discounts","pages/tabBar/myCenter/turnSuccess","pages/myCenter/healthBank","pages/myCenter/myMatters","pages/tabBar/dealMarket/dealMarket","pages/healthySpace/powerRecord","pages/healthySpace/powerCheer","pages/myCenter/privacyUser","pages/myCenter/serviceTitle","pages/myCenter/walletCode","pages/myCenter/system","pages/myCenter/bindWx","pages/myCenter/withDrawUser","pages/tabBar/myCenter/rank","pages/tabBar/myCenter/userWithdraw","pages/myCenter/setting","pages/tabBar/myCenter/convertDetail","pages/tabBar/myCenter/convertList","pages/tabBar/myCenter/lifeMall","pages/tabBar/myCenter/withdraw","pages/tabBar/myCenter/recharge","pages/myCenter/orderDetail","pages/tabBar/dealMarket/dealIndex","pages/healthyMall/discounts","pages/healthyMall/shopEnter","pages/healthyMall/goodsList","pages/healthyMall/service","pages/healthySpace/recommend","pages/healthyMall/shippingAddress","pages/healthyMall/settleAccount","pages/healthyMall/addShippingAddress","pages/healthyMall/goodsDetails","pages/healthyMall/search","pages/healthyMall/shoppingCart"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"健康联盟","navigationBarBackgroundColor":"#fff","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#999999","selectedColor":"#14BFE9","borderStyle":"none","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/healthySpace/healthySpace","iconPath":"static/healthySpace.png","selectedIconPath":"static/healthySpaceSelected.png","text":"健康空间"},{"pagePath":"pages/tabBar/dealMarket/dealIndex","iconPath":"static/tradingMarket.png","selectedIconPath":"static/tradingMarketSelected.png","text":"交易市场"},{"pagePath":"pages/tabBar/healthyMall/healthyMall","iconPath":"static/healthyMall.png","selectedIconPath":"static/healthyMallSelected.png","text":"健康商城"},{"pagePath":"pages/tabBar/myCenter/personal","iconPath":"static/myCenter.png","selectedIconPath":"static/myCenterSelected.png","text":"个人中心"}]},"networkTimeout":{},"debug":false,"functionalPages":false,"subPackages":[],"workers":"","preloadRule":{},"requiredBackgroundModes":[],"plugins":{},"resizable":false,"navigateToMiniProgramAppIdList":[],"usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/manifest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
!function(r){var e=global.webpackJsonp;global.webpackJsonp=function(n,u,c){for(var l,f,a,p=0,i=[];p<n.length;p++)f=n[p],o[f]&&i.push(o[f][0]),o[f]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(r[l]=u[l]);for(e&&e(n,u,c);i.length;)i.shift()();if(c)for(p=0;p<c.length;p++)a=t(t.s=c[p]);return a};var n={},o={50:0};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=n,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t.oe=function(r){throw console.error(r),r}}([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([0],[function(t,e){t.exports=function(t,e,n,i,r){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var l,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),i&&(u._scopeId=i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,h=c?u.render:u.beforeCreate;c?u.render=function(t,e){return l.call(e),h(t,e)}:u.beforeCreate=h?[].concat(h,l):[l]}return{esModule:o,exports:a,options:u}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;return a(e={data:{$root:{}},onLoad:function(e){var n=new o.default(t);this.$vm=n;var i=n.$root;i.__wxWebviewId__=this.__wxWebviewId__,i.$mp||(i.$mp={});var r=i.$mp;r.mpType="page",r.page=this,r.query=e,r.status="load",n.$mount()},handleProxy:function(t){return l(this).$handleProxyWithVue(t)},onShow:function(){var t=l(this);t.$mp.status="show",s(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=l(this);t.$mp.status="ready",s(t,"onReady")},onHide:function(){var t=l(this);t.$mp.status="hide",s(t,"onHide")},onUnload:function(){var t=l(this);s(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){s(l(this),"onPullDownRefresh")},onReachBottom:function(){s(l(this),"onReachBottom")},onPageScroll:function(t){s(l(this),"onPageScroll",t)},onTabItemTap:function(t){s(l(this),"onTabItemTap",t)}},"onPullDownRefresh",function(){s(l(this),"onPullDownRefresh")}),a(e,"onReachBottom",function(){s(l(this),"onReachBottom")}),a(e,"onShareAppMessage",t.onShareAppMessage?function(t){return s(l(this),"onShareAppMessage",t)}:null),a(e,"onPageScroll",function(t){s(l(this),"onPageScroll",t)}),a(e,"onTabItemTap",function(t){s(l(this),"onTabItemTap",t)}),a(e,"onNavigationBarButtonTap",function(t){s(l(this),"onNavigationBarButtonTap",t)}),a(e,"onBackPress",function(){return s(l(this),"onBackPress")}),e};var i,r=n(5),o=(i=r)&&i.__esModule?i:{default:i};function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n){var i,r=t.$options[e];if("onError"===e&&r&&(r=[r]),r)for(var o=0,a=r.length;o<a;o++)try{i=r[o].call(t,n)}catch(n){handleError(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return s(t,e,n)}),i}function l(t){return t.$vm.$root}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return"function"==typeof t},r=/^on|^create|Sync$|Manager$|^pause/,o=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return(!r.test(t)||"createBLEConnection"===t)&&!~o.indexOf(t)},s=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(o.success)||i(o.fail)||i(o.complete)?t.apply(void 0,[o].concat(n)):new Promise(function(e,i){t.apply(void 0,[Object.assign({},o,{success:e,fail:i})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},l=1e-4,u=750,c=!1,h=0,f=0;function d(t,e){var n,i,r,o;return 0===h&&(n=wx.getSystemInfoSync(),i=n.platform,r=n.pixelRatio,o=n.windowWidth,h=o,f=r,c="ios"===i),0===t?0:(t=t/u*(e||h),0===(t=Math.floor(t+l))?1!==f&&c?.5:1:t)}var p={},g={os:{plus:!0}};"undefined"!=typeof Proxy?p=new Proxy({},{get:function(t,e){return g.hasOwnProperty(e)?g[e]:"upx2px"===e?d:wx.hasOwnProperty(e)?a(e)?s(wx[e]):wx[e]:void 0}}):(p.upx2px=d,Object.keys(g).forEach(function(t){p[t]=g[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(a(t)?p[t]=s(wx[t]):p[t]=wx[t])}));var v=p;e.default=v},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(54),r=n.n(i),o=n(55);var a=function(t){n(53)},s=n(0)(r.a,o.a,a,null,null);e.default=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(67),r=n.n(i),o=n(68);var a=function(t){n(66)},s=n(0)(r.a,o.a,a,null,null);e.default=s.exports},function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(t){}var n;n=function(){"use strict";function t(e,n,i,r){if(i!==r&&void 0!==i)if(null==i||null==r||typeof i!=typeof r)e[n]=i;else if(Array.isArray(i)&&Array.isArray(r))if(i.length===r.length)for(var o=0,a=i.length;o<a;++o)t(e,n+"["+o+"]",i[o],r[o]);else e[n]=i;else if("object"==typeof i&&"object"==typeof r){var s=Object.keys(i),l=Object.keys(r);if(s.length!==l.length)e[n]=i;else{var u=Object.create(null);for(o=0,a=s.length;o<a;++o)u[s[o]]=!0,u[l[o]]=!0;if(Object.keys(u).length!==s.length)e[n]=i;else for(o=0,a=s.length;o<a;++o){var c=s[o];t(e,n+"."+c,i[c],r[c])}}}else i!==r&&(e[n]=i)}function n(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function r(t){return!0===t}function o(t){return"string"==typeof t||"number"==typeof t}function a(t){return null!==t&&"object"==typeof t}var s=Object.prototype.toString;function l(t){return"[object Object]"===s.call(t)}function u(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function c(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function h(t){var e=parseFloat(t);return isNaN(e)?t:e}function f(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}f("slot,component",!0);var d=f("key,ref,slot,is");function p(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function v(t,e){return g.call(t,e)}function m(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var y=/-(\w)/g,_=m(function(t){return t.replace(y,function(t,e){return e?e.toUpperCase():""})}),x=m(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),w=/([^-])([A-Z])/g,b=m(function(t){return t.replace(w,"$1-$2").replace(w,"$1-$2").toLowerCase()});function S(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function M(t,e){e=e||0;for(var n=t.length-e,i=new Array(n);n--;)i[n]=t[n+e];return i}function C(t,e){for(var n in e)t[n]=e[n];return t}function k(t,e,n){}var T=function(t,e,n){return!1},I=function(t){return t};function D(t,e){var n=a(t),i=a(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function A(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function O(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var P="data-server-rendered",L=["component","directive","filter"],E=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:k,parsePlatformTagName:I,mustUseProp:T,_lifecycleHooks:E},R=Object.freeze({});function B(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var z=/[^\w.$]/;var $=k;function F(t,e,n){if(N.errorHandler)N.errorHandler.call(null,t,e,n);else{if(!H||"undefined"==typeof console)throw t;console.error(t)}}var V,j="__proto__"in{},H="undefined"!=typeof window,W=["mpvue-runtime"].join(),G=(W&&/msie|trident/.test(W),W&&W.indexOf("msie 9.0"),W&&W.indexOf("edge/")>0),U=(W&&W.indexOf("android"),W&&/iphone|ipad|ipod|ios/.test(W)),q=(W&&/chrome\/\d+/.test(W),{}.watch);if(H)try{var X={};Object.defineProperty(X,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,X)}catch(t){}var Y=function(){return void 0===V&&(V=!H&&void 0!==e&&"server"===e.process.env.VUE_ENV),V},Z=H&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function K(t){return"function"==typeof t&&/native code/.test(t.toString())}var J,Q="undefined"!=typeof Symbol&&K(Symbol)&&"undefined"!=typeof Reflect&&K(Reflect.ownKeys),tt=function(){var t,e=[],n=!1;function i(){n=!1;var t=e.slice(0);e.length=0;for(var i=0;i<t.length;i++)t[i]()}if("undefined"!=typeof Promise&&K(Promise)){var r=Promise.resolve(),o=function(t){console.error(t)};t=function(){r.then(i).catch(o),U&&setTimeout(k)}}else t=function(){setTimeout(i,0)};return function(i,r){var o;if(e.push(function(){if(i)try{i.call(r)}catch(t){F(t,r,"nextTick")}else o&&o(r)}),n||(n=!0,t()),!i&&"undefined"!=typeof Promise)return new Promise(function(t,e){o=t})}}();J="undefined"!=typeof Set&&K(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var et=0,nt=function(){this.id=et++,this.subs=[]};nt.prototype.addSub=function(t){this.subs.push(t)},nt.prototype.removeSub=function(t){p(this.subs,t)},nt.prototype.depend=function(){nt.target&&nt.target.addDep(this)},nt.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},nt.target=null;var it=[];var rt=Array.prototype,ot=Object.create(rt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=rt[t];B(ot,t,function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2)}return r&&a.observeArray(r),a.dep.notify(),o})});var at=Object.getOwnPropertyNames(ot),st={shouldConvert:!0},lt=function(t){(this.value=t,this.dep=new nt,this.vmCount=0,B(t,"__ob__",this),Array.isArray(t))?((j?ut:ct)(t,ot,at),this.observeArray(t)):this.walk(t)};function ut(t,e,n){t.__proto__=e}function ct(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];B(t,o,e[o])}}function ht(t,e){var n;if(a(t))return v(t,"__ob__")&&t.__ob__ instanceof lt?n=t.__ob__:st.shouldConvert&&!Y()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new lt(t)),e&&n&&n.vmCount++,n}function ft(t,e,n,i,r){var o=new nt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set,u=!r&&ht(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return nt.target&&(o.depend(),u&&u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,i=0,r=e.length;i<r;i++)(n=e[i])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e)),e},set:function(e){var i=s?s.call(t):n;e===i||e!=e&&i!=i||(l?l.call(t,e):n=e,u=!r&&ht(e),o.notify())}})}}function dt(t,e,n){if(Array.isArray(t)&&u(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(v(t,e))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(ft(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function pt(t,e){if(Array.isArray(t)&&u(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||v(t,e)&&(delete t[e],n&&n.dep.notify())}}lt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)ft(t,e[n],t[e[n]])},lt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)ht(t[e])};var gt=N.optionMergeStrategies;function vt(t,e){if(!e)return t;for(var n,i,r,o=Object.keys(e),a=0;a<o.length;a++)i=t[n=o[a]],r=e[n],v(t,n)?l(i)&&l(r)&&vt(i,r):dt(t,n,r);return t}function mt(t,e,n){return n?t||e?function(){var i="function"==typeof e?e.call(n):e,r="function"==typeof t?t.call(n):void 0;return i?vt(i,r):r}:void 0:e?t?function(){return vt("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function yt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function _t(t,e){var n=Object.create(t||null);return e?C(n,e):n}gt.data=function(t,e,n){return n?mt(t,e,n):e&&"function"!=typeof e?t:mt.call(this,t,e)},E.forEach(function(t){gt[t]=yt}),L.forEach(function(t){gt[t+"s"]=_t}),gt.watch=function(t,e){if(t===q&&(t=void 0),e===q&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var i in C(n,t),e){var r=n[i],o=e[i];r&&!Array.isArray(r)&&(r=[r]),n[i]=r?r.concat(o):Array.isArray(o)?o:[o]}return n},gt.props=gt.methods=gt.inject=gt.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return C(n,t),C(n,e),n},gt.provide=mt;var xt=function(t,e){return void 0===e?t:e};function wt(t,e,n){"function"==typeof e&&(e=e.options),function(t){var e=t.props;if(e){var n,i,r={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(i=e[n])&&(r[_(i)]={type:null});else if(l(e))for(var o in e)i=e[o],r[_(o)]=l(i)?i:{type:i};t.props=r}}(e),function(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},i=0;i<e.length;i++)n[e[i]]=e[i]}(e),function(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"==typeof i&&(e[n]={bind:i,update:i})}}(e);var i=e.extends;if(i&&(t=wt(t,i,n)),e.mixins)for(var r=0,o=e.mixins.length;r<o;r++)t=wt(t,e.mixins[r],n);var a,s={};for(a in t)u(a);for(a in e)v(t,a)||u(a);function u(i){var r=gt[i]||xt;s[i]=r(t[i],e[i],n,i)}return s}function bt(t,e,n,i){if("string"==typeof n){var r=t[e];if(v(r,n))return r[n];var o=_(n);if(v(r,o))return r[o];var a=x(o);return v(r,a)?r[a]:r[n]||r[o]||r[a]}}function St(t,e,n,i){var r=e[t],o=!v(n,t),a=n[t];if(Ct(Boolean,r.type)&&(o&&!v(r,"default")?a=!1:Ct(String,r.type)||""!==a&&a!==b(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!v(e,"default"))return;var i=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof i&&"Function"!==Mt(e.type)?i.call(t):i}(i,r,t);var s=st.shouldConvert;st.shouldConvert=!0,ht(a),st.shouldConvert=s}return a}function Mt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ct(t,e){if(!Array.isArray(e))return Mt(e)===Mt(t);for(var n=0,i=e.length;n<i;n++)if(Mt(e[n])===Mt(t))return!0;return!1}var kt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Tt={child:{}};Tt.child.get=function(){return this.componentInstance},Object.defineProperties(kt.prototype,Tt);var It=function(t){void 0===t&&(t="");var e=new kt;return e.text=t,e.isComment=!0,e};function Dt(t){return new kt(void 0,void 0,void 0,String(t))}function At(t){var e=new kt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Ot(t){for(var e=t.length,n=new Array(e),i=0;i<e;i++)n[i]=At(t[i]);return n}var Pt,Lt=m(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),i="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=i?t.slice(1):t,once:n,capture:i,passive:e}});function Et(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var i=n.slice(),r=0;r<i.length;r++)i[r].apply(null,t)}return e.fns=t,e}function Nt(t,e,n,r,o){if(i(e)){if(v(e,n))return t[n]=e[n],o||delete e[n],!0;if(v(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Rt(t){return o(t)?[Dt(t)]:Array.isArray(t)?function t(e,a){var s=[];var l,u,c;for(l=0;l<e.length;l++)n(u=e[l])||"boolean"==typeof u||(c=s[s.length-1],Array.isArray(u)?s.push.apply(s,t(u,(a||"")+"_"+l)):o(u)?Bt(c)?c.text+=String(u):""!==u&&s.push(Dt(u)):Bt(u)&&Bt(c)?s[s.length-1]=Dt(c.text+u.text):(r(e._isVList)&&i(u.tag)&&n(u.key)&&i(a)&&(u.key="__vlist"+a+"_"+l+"__"),s.push(u)));return s}(t):void 0}function Bt(t){return i(t)&&i(t.text)&&!1===t.isComment}function zt(t,e){return t.__esModule&&t.default&&(t=t.default),a(t)?e.extend(t):t}function $t(t,e,n){n?Pt.$once(t,e):Pt.$on(t,e)}function Ft(t,e){Pt.$off(t,e)}function Vt(t,e,i){Pt=t,function(t,e,i,r,o){var a,s,l,u;for(a in t)s=t[a],l=e[a],u=Lt(a),n(s)||(n(l)?(n(s.fns)&&(s=t[a]=Et(s)),i(u.name,s,u.once,u.capture,u.passive)):s!==l&&(l.fns=s,t[a]=l));for(a in e)n(t[a])&&r((u=Lt(a)).name,e[a],u.capture)}(e,i||{},$t,Ft)}function jt(t,e){var n={};if(!t)return n;for(var i=[],r=0,o=t.length;r<o;r++){var a=t[r];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)i.push(a);else{var s=a.data.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children):l.push(a)}}return i.every(Ht)||(n.default=i),n}function Ht(t){return t.isComment||" "===t.text}function Wt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?Wt(t[n],e):e[t[n].key]=t[n].fn;return e}var Gt=null;function Ut(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=It),Yt(t,"beforeMount"),i=function(){t._update(t._render(),n)},t._watcher=new re(t,i,k),n=!1,null==t.$vnode&&(t._isMounted=!0,Yt(t,"mounted")),t}function qt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Xt(t,e){if(e){if(t._directInactive=!1,qt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Xt(t.$children[n]);Yt(t,"activated")}}function Yt(t,e){var n=t.$options[e];if(n)for(var i=0,r=n.length;i<r;i++)try{n[i].call(t)}catch(n){F(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Zt=[],Kt=[],Jt={},Qt=!1,te=!1,ee=0;function ne(){var t,e;for(te=!0,Zt.sort(function(t,e){return t.id-e.id}),ee=0;ee<Zt.length;ee++)e=(t=Zt[ee]).id,Jt[e]=null,t.run();var n=Kt.slice(),i=Zt.slice();ee=Zt.length=Kt.length=0,Jt={},Qt=te=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Xt(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&Yt(i,"updated")}}(i),Z&&N.devtools&&Z.emit("flush")}var ie=0,re=function(t,e,n,i){this.vm=t,t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ie,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new J,this.newDepIds=new J,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};re.prototype.get=function(){var t,e;t=this,nt.target&&it.push(nt.target),nt.target=t;var n,i=this.vm;try{e=this.getter.call(i,i)}catch(t){if(!this.user)throw t;F(t,i,'getter for watcher "'+this.expression+'"')}finally{this.deep&&(n=e,oe.clear(),function t(e,n){var i,r,o=Array.isArray(e);if((o||a(e))&&Object.isExtensible(e)){if(e.__ob__){var s=e.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(o)for(i=e.length;i--;)t(e[i],n);else for(r=Object.keys(e),i=r.length;i--;)t(e[r[i]],n)}}(n,oe)),nt.target=it.pop(),this.cleanupDeps()}return e},re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},re.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Jt[e]){if(Jt[e]=!0,te){for(var n=Zt.length-1;n>ee&&Zt[n].id>t.id;)n--;Zt.splice(n+1,0,t)}else Zt.push(t);Qt||(Qt=!0,tt(ne))}}(this)},re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){F(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},re.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},re.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var oe=new J;var ae={enumerable:!0,configurable:!0,get:k,set:k};function se(t,e,n){ae.get=function(){return this[e][n]},ae.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ae)}function le(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;st.shouldConvert=o;var a=function(o){r.push(o);var a=St(o,e,n,t);ft(i,o,a),o in t||se(t,"_props",o)};for(var s in e)a(s);st.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?k:S(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;l(e=t._data="function"==typeof e?function(t,e){try{return t.call(e)}catch(t){return F(t,e,"data()"),{}}}(e,t):e||{})||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);for(;r--;){var o=n[r];i&&v(i,o)||(void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&se(t,"_data",o))}var a;ht(e,!0)}(t):ht(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null);for(var i in e){var r=e[i],o="function"==typeof r?r:r.get;n[i]=new re(t,o,k,ue),i in t||ce(t,i,r)}}(t,e.computed),e.watch&&e.watch!==q&&function(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)fe(t,n,i[r]);else fe(t,n,i)}}(t,e.watch)}var ue={lazy:!0};function ce(t,e,n){"function"==typeof n?(ae.get=he(e),ae.set=k):(ae.get=n.get?!1!==n.cache?he(e):n.get:k,ae.set=n.set?n.set:k),Object.defineProperty(t,e,ae)}function he(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),nt.target&&e.depend(),e.value}}function fe(t,e,n,i){return l(n)&&(i=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,i)}function de(t,e){if(t){for(var n=Object.create(null),i=Q?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){for(var o=i[r],a=t[o],s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}0}return n}}function pe(t,e){for(var n in e)t[_(n)]=e[n]}var ge={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns);return new o.Ctor(a)}(t,Gt,n,r)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var o=t;ge.prepatch(o,o)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,i,r){var o=!!(r||t.$options._renderChildren||i.data.scopedSlots||t.$scopedSlots!==R);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=r,t.$attrs=i.data&&i.data.attrs,t.$listeners=n,e&&t.$options.props){st.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],l=0;l<s.length;l++){var u=s[l];a[u]=St(u,t.$options.props,e,t)}st.shouldConvert=!0,t.$options.propsData=e}if(n){var c=t.$options._parentListeners;t.$options._parentListeners=n,Vt(t,n,c)}o&&(t.$slots=jt(r,i.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,i=t.componentInstance;i._isMounted||(i._isMounted=!0,Yt(i,"mounted")),t.data.keepAlive&&(n._isMounted?((e=i)._inactive=!1,Kt.push(e)):Xt(i,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,qt(e))||e._inactive)){e._inactive=!0;for(var i=0;i<e.$children.length;i++)t(e.$children[i]);Yt(e,"deactivated")}}(e,!0):e.$destroy())}},ve=Object.keys(ge);function me(t,e,o,s,l){if(!n(t)){var u=o.$options._base;if(a(t)&&(t=u.extend(t)),"function"==typeof t){var c;if(n(t.cid)&&void 0===(t=function(t,e,o){if(r(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(r(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var s=t.contexts=[o],l=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},c=O(function(n){t.resolved=zt(n,e),l||u()}),h=O(function(e){i(t.errorComp)&&(t.error=!0,u())}),f=t(c,h);return a(f)&&("function"==typeof f.then?n(t.resolved)&&f.then(c,h):i(f.component)&&"function"==typeof f.component.then&&(f.component.then(c,h),i(f.error)&&(t.errorComp=zt(f.error,e)),i(f.loading)&&(t.loadingComp=zt(f.loading,e),0===f.delay?t.loading=!0:setTimeout(function(){n(t.resolved)&&n(t.error)&&(t.loading=!0,u())},f.delay||200)),i(f.timeout)&&setTimeout(function(){n(t.resolved)&&h(null)},f.timeout))),l=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(o)}(c=t,u,o)))return function(t,e,n,i,r){var o=It();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}(c,e,o,s,l);e=e||{},Le(t),i(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}(t.options,e);var h=function(t,e,r){var o=e.options.props;if(!n(o)){var a={},s=t.attrs,l=t.props;if(i(s)||i(l))for(var u in o){var c=b(u);Nt(a,l,u,c,!0)||Nt(a,s,u,c,!1)}return a}}(e,t);if(r(t.options.functional))return function(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var l in s)a[l]=St(l,s,e||{});else i(n.attrs)&&pe(a,n.attrs),i(n.props)&&pe(a,n.props);var u=Object.create(r),c=t.options.render.call(null,function(t,e,n,i){return we(u,t,e,n,i,!0)},{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:de(t.options.inject,r),slots:function(){return jt(o,r)}});return c instanceof kt&&(c.functionalContext=r,c.functionalOptions=t.options,n.slot&&((c.data||(c.data={})).slot=n.slot)),c}(t,h,e,o,s);var f=e.on;if(r(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}!function(t){t.hook||(t.hook={});for(var e=0;e<ve.length;e++){var n=ve[e],i=t.hook[n],r=ge[n];t.hook[n]=i?ye(r,i):r}}(e);var p=t.options.name||l;return new kt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,o,{Ctor:t,propsData:h,listeners:f,tag:l,children:s},c)}}}function ye(t,e){return function(n,i,r,o){t(n,i,r,o),e(n,i,r,o)}}var _e=1,xe=2;function we(t,e,a,s,l,u){return(Array.isArray(a)||o(a))&&(l=s,s=a,a=void 0),r(u)&&(l=xe),function(t,e,r,o,a){if(i(r)&&i(r.__ob__))return It();i(r)&&i(r.is)&&(e=r.is);if(!e)return It();0;Array.isArray(o)&&"function"==typeof o[0]&&((r=r||{}).scopedSlots={default:o[0]},o.length=0);a===xe?o=Rt(o):a===_e&&(o=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(o));var s,l;if("string"==typeof e){var u;l=N.getTagNamespace(e),s=N.isReservedTag(e)?new kt(N.parsePlatformTagName(e),r,o,void 0,void 0,t):i(u=bt(t.$options,"components",e))?me(u,r,t,o,e):new kt(e,r,o,void 0,void 0,t)}else s=me(e,r,t,o);return i(s)?(l&&function t(e,r){e.ns=r;if("foreignObject"===e.tag)return;if(i(e.children))for(var o=0,a=e.children.length;o<a;o++){var s=e.children[o];i(s.tag)&&n(s.ns)&&t(s,r)}}(s,l),s):It()}(t,e,a,s,l)}function be(t,e){var n,r,o,s,l;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"==typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(a(t))for(s=Object.keys(t),n=new Array(s.length),r=0,o=s.length;r<o;r++)l=s[r],n[r]=e(t[l],l,r);return i(n)&&(n._isVList=!0),n}function Se(t,e,n,i){var r=this.$scopedSlots[t];if(r)return n=n||{},i&&(n=C(C({},i),n)),r(n)||e;var o=this.$slots[t];return o||e}function Me(t){return bt(this.$options,"filters",t)||I}function Ce(t,e,n){var i=N.keyCodes[e]||n;return Array.isArray(i)?-1===i.indexOf(t):i!==t}function ke(t,e,n,i,r){if(n)if(a(n)){var o;Array.isArray(n)&&(n=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}(n));var s=function(a){if("class"===a||"style"===a||d(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||N.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in o||(o[a]=n[a],r&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var l in n)s(l)}else;return t}function Te(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Ot(n):At(n):(De(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),"__static__"+t,!1),n)}function Ie(t,e,n){return De(t,"__once__"+e+(n?"_"+n:""),!0),t}function De(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!=typeof t[i]&&Ae(t[i],e+"_"+i,n);else Ae(t,e,n)}function Ae(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Oe(t,e){if(e)if(l(e)){var n=t.on=t.on?C({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(o,r):o}}else;return t}var Pe=0;function Le(t){var e=t.options;if(t.super){var n=Le(t.super);if(n!==t.superOptions){t.superOptions=n;var i=function(t){var e,n=t.options,i=t.extendOptions,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=Ee(n[o],i[o],r[o]));return e}(t);i&&C(t.extendOptions,i),(e=t.options=wt(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Ee(t,e,n){if(Array.isArray(t)){var i=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var r=0;r<t.length;r++)(e.indexOf(t[r])>=0||n.indexOf(t[r])<0)&&i.push(t[r]);return i}return t}function Ne(t){this._init(t)}function Re(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name,a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=wt(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)se(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)ce(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,L.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=C({},a.options),r[i]=a,a}}Ne.prototype._init=function(t){var e=this;e._uid=Pe++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=wt(Le(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Vt(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=jt(t.$options._renderChildren,n),t.$scopedSlots=R,t._c=function(e,n,i,r){return we(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return we(t,e,n,i,r,!0)};var i=e&&e.data;ft(t,"$attrs",i&&i.attrs,0,!0),ft(t,"$listeners",i&&i.on,0,!0)}(e),Yt(e,"beforeCreate"),function(t){var e=de(t.$options.inject,t);e&&(st.shouldConvert=!1,Object.keys(e).forEach(function(n){ft(t,n,e[n])}),st.shouldConvert=!0)}(e),le(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),Yt(e,"created"),e.$options.el&&e.$mount(e.$options.el)},function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=dt,t.prototype.$delete=pt,t.prototype.$watch=function(t,e,n){if(l(e))return fe(this,t,e,n);(n=n||{}).user=!0;var i=new re(this,t,e,n);return n.immediate&&e.call(this,i.value),function(){i.teardown()}}}(Ne),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var i=0,r=t.length;i<r;i++)this.$on(t[i],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)this.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(1===arguments.length)return n._events[t]=null,n;for(var s=a.length;s--;)if((o=a[s])===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?M(e):e;for(var n=M(arguments,1),i=0,r=e.length;i<r;i++)try{e[i].apply(this,n)}catch(e){F(e,this,'event handler for "'+t+'"')}}return this}}(Ne),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&Yt(n,"beforeUpdate");var i=n.$el,r=n._vnode,o=Gt;Gt=n,n._vnode=t,r?n.$el=n.__patch__(r,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Gt=o,i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Yt(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||p(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Yt(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(Ne),function(t){t.prototype.$nextTick=function(t){return tt(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n.staticRenderFns,o=n._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=Ot(e.$slots[a]);e.$scopedSlots=o&&o.data.scopedSlots||R,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=o;try{t=i.call(e._renderProxy,e.$createElement)}catch(n){F(n,e,"render function"),t=e._vnode}return t instanceof kt||(t=It()),t.parent=o,t},t.prototype._o=Ie,t.prototype._n=h,t.prototype._s=c,t.prototype._l=be,t.prototype._t=Se,t.prototype._q=D,t.prototype._i=A,t.prototype._m=Te,t.prototype._f=Me,t.prototype._k=Ce,t.prototype._b=ke,t.prototype._v=Dt,t.prototype._e=It,t.prototype._u=Wt,t.prototype._g=Oe}(Ne);var Be=[String,RegExp,Array];function ze(t){return t&&(t.Ctor.options.name||t.tag)}function $e(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===s.call(n)&&t.test(e));var n}function Fe(t,e,n){for(var i in t){var r=t[i];if(r){var o=ze(r.componentOptions);o&&!n(o)&&(r!==e&&Ve(r),t[i]=null)}}}function Ve(t){t&&t.componentInstance.$destroy()}var je={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Be,exclude:Be},created:function(){this.cache=Object.create(null)},destroyed:function(){for(var t in this.cache)Ve(this.cache[t])},watch:{include:function(t){Fe(this.cache,this._vnode,function(e){return $e(t,e)})},exclude:function(t){Fe(this.cache,this._vnode,function(e){return!$e(t,e)})}},render:function(){var t=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}(this.$slots.default),e=t&&t.componentOptions;if(e){var n=ze(e);if(n&&(this.include&&!$e(this.include,n)||this.exclude&&$e(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={get:function(){return N}};Object.defineProperty(t,"config",e),t.util={warn:$,extend:C,mergeOptions:wt,defineReactive:ft},t.set=dt,t.delete=pt,t.nextTick=tt,t.options=Object.create(null),L.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,je),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=M(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=wt(this.options,t),this}}(t),Re(t),function(t){L.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Ne),Object.defineProperty(Ne.prototype,"$isServer",{get:Y}),Object.defineProperty(Ne.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ne.version="2.4.1",Ne.mpvueVersion="1.0.12";var He=f("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),We=f("style,class");f("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),f("embed,img,image,input,link,meta",!0);function Ge(t){return t&&t.$attrs?t.$attrs.mpcomid:"0"}var Ue={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},qe={};var Xe=Object.freeze({createElement:function(t,e){return qe},createElementNS:function(t,e){return qe},createTextNode:function(t){return qe},createComment:function(t){return qe},insertBefore:function(t,e,n){},removeChild:function(t,e){},appendChild:function(t,e){},parentNode:function(t){return qe},nextSibling:function(t){return qe},tagName:function(t){return"div"},setTextContent:function(t,e){return qe},setAttribute:function(t,e,n){return qe}}),Ye={create:function(t,e){Ze(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ze(t,!0),Ze(e))},destroy:function(t){Ze(t,!0)}};function Ze(t,e){var n=t.data.ref;if(n){var i=t.context,r=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?p(o[n],r):o[n]===r&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var Ke=new kt("",{},[]),Je=["create","activate","update","remove","destroy"];function Qe(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}(t,e)||r(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&n(e.asyncFactory.error))}function tn(t,e,n){var r,o,a={};for(r=e;r<=n;++r)i(o=t[r].key)&&(a[o]=r);return a}var en=function(t){var e,a,s={},l=t.modules,u=t.nodeOps;for(e=0;e<Je.length;++e)for(s[Je[e]]=[],a=0;a<l.length;++a)i(l[a][Je[e]])&&s[Je[e]].push(l[a][Je[e]]);function c(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function h(t,e,n,o,a){if(t.isRootInsert=!a,!function(t,e,n,o){var a=t.data;if(i(a)){var l=i(t.componentInstance)&&a.keepAlive;if(i(a=a.hook)&&i(a=a.init)&&a(t,!1,n,o),i(t.componentInstance))return d(t,e),r(l)&&function(t,e,n,r){for(var o,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](Ke,a);e.push(a);break}p(n,t.elm,r)}(t,e,n,o),!0}}(t,e,n,o)){var l=t.data,c=t.children,h=t.tag;i(h)?(t.elm=t.ns?u.createElementNS(t.ns,h):u.createElement(h,t),y(t),g(t,c,e),i(l)&&m(t,e),p(n,t.elm,o)):r(t.isComment)?(t.elm=u.createComment(t.text),p(n,t.elm,o)):(t.elm=u.createTextNode(t.text),p(n,t.elm,o))}}function d(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,v(t)?(m(t,e),y(t)):(Ze(t),e.push(t))}function p(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var i=0;i<e.length;++i)h(e[i],n,t.elm,null,!0);else o(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function v(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return i(t.tag)}function m(t,n){for(var r=0;r<s.create.length;++r)s.create[r](Ke,t);i(e=t.data.hook)&&(i(e.create)&&e.create(Ke,t),i(e.insert)&&n.push(t))}function y(t){for(var e,n=t;n;)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=Gt)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function _(t,e,n,i,r,o){for(;i<=r;++i)h(n[i],o,t,e)}function x(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)x(t.children[n])}function w(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(b(o),x(o)):c(o.elm))}}function b(t,e){if(i(e)||i(t.data)){var n,r=s.remove.length+1;for(i(e)?e.listeners+=r:e=function(t,e){function n(){0==--n.listeners&&c(t)}return n.listeners=e,n}(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&b(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else c(t.elm)}function S(t,e,o,a){if(t!==e){var l=e.elm=t.elm;if(r(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?k(t.elm,e,o):e.isAsyncPlaceholder=!0;else if(r(e.isStatic)&&r(t.isStatic)&&e.key===t.key&&(r(e.isCloned)||r(e.isOnce)))e.componentInstance=t.componentInstance;else{var c,f=e.data;i(f)&&i(c=f.hook)&&i(c=c.prepatch)&&c(t,e);var d=t.children,p=e.children;if(i(f)&&v(e)){for(c=0;c<s.update.length;++c)s.update[c](t,e);i(c=f.hook)&&i(c=c.update)&&c(t,e)}n(e.text)?i(d)&&i(p)?d!==p&&function(t,e,r,o,a){for(var s,l,c,f=0,d=0,p=e.length-1,g=e[0],v=e[p],m=r.length-1,y=r[0],x=r[m],b=!a;f<=p&&d<=m;)n(g)?g=e[++f]:n(v)?v=e[--p]:Qe(g,y)?(S(g,y,o),g=e[++f],y=r[++d]):Qe(v,x)?(S(v,x,o),v=e[--p],x=r[--m]):Qe(g,x)?(S(g,x,o),b&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++f],x=r[--m]):Qe(v,y)?(S(v,y,o),b&&u.insertBefore(t,v.elm,g.elm),v=e[--p],y=r[++d]):(n(s)&&(s=tn(e,f,p)),n(l=i(y.key)?s[y.key]:null)?(h(y,o,t,g.elm),y=r[++d]):Qe(c=e[l],y)?(S(c,y,o),e[l]=void 0,b&&u.insertBefore(t,c.elm,g.elm),y=r[++d]):(h(y,o,t,g.elm),y=r[++d]));f>p?_(t,n(r[m+1])?null:r[m+1].elm,r,d,m,o):d>m&&w(0,e,f,p)}(l,d,p,o,a):i(p)?(i(t.text)&&u.setTextContent(l,""),_(l,null,p,0,p.length-1,o)):i(d)?w(0,d,0,d.length-1):i(t.text)&&u.setTextContent(l,""):t.text!==e.text&&u.setTextContent(l,e.text),i(f)&&i(c=f.hook)&&i(c=c.postpatch)&&c(t,e)}}}function M(t,e,n){if(r(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var o=0;o<e.length;++o)e[o].data.hook.insert(e[o])}var C=f("attrs,style,class,staticClass,staticStyle,key");function k(t,n,o){if(r(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var a=n.tag,s=n.data,l=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return d(n,o),!0;if(i(a)){if(i(l))if(t.hasChildNodes()){for(var u=!0,c=t.firstChild,h=0;h<l.length;h++){if(!c||!k(c,l[h],o)){u=!1;break}c=c.nextSibling}if(!u||c)return!1}else g(n,l,o);if(i(s))for(var f in s)if(!C(f)){m(n,o);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,o,a,l,c){if(!n(e)){var f,d=!1,p=[];if(n(t))d=!0,h(e,p,l,c);else{var g=i(t.nodeType);if(!g&&Qe(t,e))S(t,e,p,a);else{if(g){if(1===t.nodeType&&t.hasAttribute(P)&&(t.removeAttribute(P),o=!0),r(o)&&k(t,e,p))return M(e,p,!0),t;f=t,t=new kt(u.tagName(f).toLowerCase(),{},[],void 0,f)}var m=t.elm,y=u.parentNode(m);if(h(e,p,m._leaveCb?null:y,u.nextSibling(m)),i(e.parent)){for(var _=e.parent;_;)_.elm=e.elm,_=_.parent;if(v(e))for(var b=0;b<s.create.length;++b)s.create[b](Ke,e.parent)}i(y)?w(0,[t],0,0):i(t.tag)&&x(t)}}return M(e,p,d),e.elm}i(t)&&x(t)}}({nodeOps:Xe,modules:[Ye]});function nn(t,e,n){var i,r=t.$options[e];if("onError"===e&&r&&(r=[r]),r)for(var o=0,a=r.length;o<a;o++)try{i=r[o].call(t,n)}catch(n){F(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return nn(t,e,n)}),i}function rn(t,e,n){if(t){var i,r,o;if(Array.isArray(t))for(i=t.length;i--;)"string"==typeof(r=t[i])&&(e[o=_(r)]={type:null});else if(l(t))for(var a in t)r=t[a],e[o=_(a)]=l(r)?r:{type:r};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var c=u.observer;u.observer=function(t,e){n[o]=t,"function"==typeof c&&c.call(n,t,e)}}return e}}function on(t){var e=function t(e,n){void 0===n&&(n=[]);var i=(e||{}).$parent;return i?(n.unshift(Ge(i)),i.$parent?t(i,n):n):n}(t).join(","),n=e+(e?",":"")+Ge(t),i=Object.assign(function(t){return[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{})).reduce(function(e,n){return e[n]=t[n],e},{})}(t),{$k:n,$kk:n+",",$p:e}),r={};return r["$root."+n]=i,r}var an=function(t,e,n){var i,r,o,a=null,s=0;function l(){s=!1===n.leading?0:Date.now(),a=null,o=t.apply(i,r),a||(i=r=null)}return n||(n={}),function(u,c){var h=Date.now();s||!1!==n.leading||(s=h);var f=e-(h-s);return i=this,r=r?[u,Object.assign(r[1],c)]:[u,c],f<=0||f>e?(clearTimeout(a),a=null,s=h,o=t.apply(i,r),a||(i=r=null)):a||!1===n.trailing||(a=setTimeout(l,f)),o}}(function(t,e){t(e)},50);function sn(t){var e=t.$root.$mp||{},n=e.mpType;void 0===n&&(n="");var i=e.page;if("app"!==n&&i&&"function"==typeof i.setData)return i}return Ne.config.mustUseProp=function(){},Ne.config.isReservedTag=He,Ne.config.isReservedAttr=We,Ne.config.getTagNamespace=function(){},Ne.config.isUnknownElement=function(){},Ne.prototype.__patch__=function(){en.apply(this,arguments),this.$updateDataToMP()},Ne.prototype.$mount=function(t,e){var n=this,i=this.$options;if(i&&(i.render||i.mpType)){var r=i.mpType;return void 0===r&&(r="page"),this._initMP(r,function(){return Ut(n,void 0,void 0)})}return Ut(this,void 0,void 0)},Ne.prototype._initMP=function(t,n){var i=this.$root;i.$mp||(i.$mp={});var r,o,a=i.$mp;if(a.status)return"app"===t?nn(this,"onLaunch",a.appOptions):nn(this,"onLoad",a.query),n();if(a.mpType=t,a.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return i.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),a.app=this,a.status="launch",this.globalData.appOptions=a.appOptions=t,nn(i,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),a.status="show",this.globalData.appOptions=a.appOptions=t,nn(i,"onShow",t)},onHide:function(){a.status="hide",nn(i,"onHide")},onError:function(t){nn(i,"onError",t)},onUniNViewMessage:function(t){nn(i,"onUniNViewMessage",t)}});else if("component"===t)o=(r=i)._mpProps={},Object.keys(r.$options.properties||{}).forEach(function(t){t in r||(se(r,"_mpProps",t),o[t]=void 0)}),ht(o,!0),e.Component({properties:function(t){var e=t.$options.properties,n=t.$options.props,i={};return rn(e,i,t),rn(n,i,t),i}(i),data:{$root:{}},methods:{handleProxy:function(t){return i.$handleProxyWithVue(t)}},created:function(){a.status="created",a.page=this},attached:function(){a.status="attached",nn(i,"attached")},ready:function(){a.status="ready",nn(i,"ready"),n(),i.$nextTick(function(){i._initDataToMP()})},moved:function(){nn(i,"moved")},detached:function(){a.status="detached",nn(i,"detached")}});else{var s=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return i.$handleProxyWithVue(t)},onLoad:function(t){i.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.query=t,a.status="load",function(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}(s,i),i.$options&&"function"==typeof i.$options.data&&Object.assign(i.$data,i.$options.data()),nn(i,"onLoad",t)},onShow:function(){i.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.status="show",nn(i,"onShow"),i.$nextTick(function(){i._initDataToMP()})},onReady:function(){a.status="ready",nn(i,"onReady"),n()},onHide:function(){a.status="hide",nn(i,"onHide")},onUnload:function(){a.status="unload",nn(i,"onUnload"),a.page=null},onPullDownRefresh:function(){nn(i,"onPullDownRefresh")},onReachBottom:function(){nn(i,"onReachBottom")},onShareAppMessage:i.$options.onShareAppMessage?function(t){return nn(i,"onShareAppMessage",t)}:null,onPageScroll:function(t){nn(i,"onPageScroll",t)},onTabItemTap:function(t){nn(i,"onTabItemTap",t)}})}},Ne.prototype.$updateDataToMP=function(){var e=sn(this);if(e){var n=on(this);an(e.setData.bind(e),JSON.parse(JSON.stringify(function(e,n){for(var i=Object.keys(e),r={},o=0,a=i.length;o<a;++o){for(var s=i[o],l=s.split("."),u=n[l[0]],c=1,h=l.length;c<h&&void 0!==u;++c)u=u[l[c]];t(r,s,e[s],u)}return r}(n,e.data))))}},Ne.prototype._initDataToMP=function(){var t=sn(this);if(t){var e=function t(e,n){void 0===n&&(n={});var i=e.$children;return i&&i.length&&i.forEach(function(e){return t(e,n)}),Object.assign(n,on(e))}(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}},Ne.prototype.$handleProxyWithVue=function(t){var e=this.$root,n=t.type,i=t.target;void 0===i&&(i={});var r=(t.currentTarget||i).dataset;void 0===r&&(r={});var o=r.comkey;void 0===o&&(o="");var a=r.eventid,s=function(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,i=0;i<n;i++){var r=t.$children[i];if(Ge(r)===e)return t=r}return t},t):t}(e,o.split(","));if(s){var l=Ue[n]||[n],u=function t(e,n,i){void 0===i&&(i=[]);var r=[];if(!e||!e.tag)return r;var o=e||{},a=o.data;void 0===a&&(a={});var s=o.children;void 0===s&&(s=[]);var l=o.componentInstance;l?Object.keys(l.$slots).forEach(function(e){var o=l.$slots[e];(Array.isArray(o)?o:[o]).forEach(function(e){r=r.concat(t(e,n,i))})}):s.forEach(function(e){r=r.concat(t(e,n,i))});var u=a.attrs,c=a.on;return u&&c&&u.eventid===n?(i.forEach(function(t){var e=c[t];"function"==typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}(s._vnode,a,l);if(u.length){var c=function(t){var e=t.type,n=t.timeStamp,i=t.touches,r=t.detail;void 0===r&&(r={});var o=t.target;void 0===o&&(o={});var a=t.currentTarget;void 0===a&&(a={});var s={mp:t,type:e,timeStamp:n,x:r.x,y:r.y,target:Object.assign({},o,r),detail:r,currentTarget:a,stopPropagation:k,preventDefault:k};return i&&i.length&&(Object.assign(s,i[0]),s.touches=i),s}(t);if(1===u.length)return u[0](c);u.forEach(function(t){return t(c)})}}},Ne},t.exports=n()}).call(e,n(12))},function(t,e,n){t.exports=n(17)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(40),r=n.n(i),o=n(41);var a=function(t){n(39)},s=n(0)(r.a,o.a,a,null,null);e.default=s.exports},function(t,e,n){"use strict";var i,r,o,a,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};a=function(t){function e(t){if(null==t||"object"!=(void 0===t?"undefined":s(t)))return t;var n=t,i=ts.call(t);if("[object Array]"===i){if(!P(t)){n=[];for(var r=0,o=t.length;r<o;r++)n[r]=e(t[r])}}else if(Qa[i]){if(!P(t)){var a=t.constructor;if(t.constructor.from)n=a.from(t);else{n=new a(t.length);for(r=0,o=t.length;r<o;r++)n[r]=e(t[r])}}}else if(!Ja[i]&&!P(t)&&!b(t))for(var l in n={},t)t.hasOwnProperty(l)&&(n[l]=e(t[l]));return n}function n(t,i,r){if(!_(i)||!_(t))return r?e(i):t;for(var o in i)if(i.hasOwnProperty(o)){var a=t[o],s=i[o];!_(s)||!_(a)||v(s)||v(a)||b(s)||b(a)||x(s)||x(a)||P(s)||P(a)?!r&&o in t||(t[o]=e(i[o])):n(a,s,r)}return t}function i(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function o(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function a(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function l(t,e,n){r(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function u(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function c(t,e,n){if(t&&e)if(t.forEach&&t.forEach===ns)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function h(t,e,n){if(t&&e){if(t.map&&t.map===os)return t.map(e,n);for(var i=[],r=0,o=t.length;r<o;r++)i.push(e.call(n,t[r],r,t));return i}}function f(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===as)return t.reduce(e,n,i);for(var r=0,o=t.length;r<o;r++)n=e.call(i,n,t[r],r,t);return n}}function d(t,e,n){if(t&&e){if(t.filter&&t.filter===is)return t.filter(e,n);for(var i=[],r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function p(t,e){var n=rs.call(arguments,2);return function(){return t.apply(e,n.concat(rs.call(arguments)))}}function g(t){var e=rs.call(arguments,1);return function(){return t.apply(this,e.concat(rs.call(arguments)))}}function v(t){return"[object Array]"===ts.call(t)}function m(t){return"function"==typeof t}function y(t){return"[object String]"===ts.call(t)}function _(t){var e=void 0===t?"undefined":s(t);return"function"===e||!!t&&"object"==e}function x(t){return!!Ja[ts.call(t)]}function w(t){return!!Qa[ts.call(t)]}function b(t){return"object"==(void 0===t?"undefined":s(t))&&"number"==typeof t.nodeType&&"object"==s(t.ownerDocument)}function S(t){return t!=t}function M(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function C(t,e){return null!=t?t:e}function k(t,e,n){return null!=t?t:null!=e?e:n}function T(){return Function.call.apply(rs,arguments)}function I(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function D(t,e){if(!t)throw new Error(e)}function A(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function O(t){t[cs]=!0}function P(t){return t[cs]}function L(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=v(t),i=this;t instanceof L?t.each(e):t&&c(t,e)}function E(t){return new L(t)}function N(){}function R(t,e){var n=new hs(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function B(t){var e=new hs(2);return e[0]=t[0],e[1]=t[1],e}function z(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function $(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function F(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function V(t,e){var n=function(t){return Math.sqrt(function(t){return t[0]*t[0]+t[1]*t[1]}(t))}(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function j(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function H(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function W(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function G(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function U(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function q(t,e){return{target:t,topTarget:e&&e.topTarget}}function X(){}function Y(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||vs}return!1}function Z(){var t=new _s(6);return K(t),t}function K(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function J(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t}function Q(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function tt(t,e,n){var i=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],u=Math.sin(n),c=Math.cos(n);return t[0]=i*c+a*u,t[1]=-i*u+a*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*o+u*l,t[5]=c*l-u*o,t}function et(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function nt(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}function it(t){return t>ws||t<-ws}function rt(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function ot(t){return(t=Math.round(t))<0?0:t>255?255:t}function at(t){return ot(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function st(t){return function(t){return t<0?0:t>1?1:t}(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function lt(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function ut(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function ct(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function ht(t,e){Ls&&ct(Ls,e),Ls=Ps.put(t,Ls||e.slice())}function ft(t,e){if(t){e=e||[];var n=Ps.get(t);if(n)return ct(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in Os)return ct(e,Os[i]),ht(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),o=i.indexOf(")");if(-1!==r&&o+1===i.length){var a=i.substr(0,r),s=i.substr(r+1,o-(r+1)).split(","),l=1;switch(a){case"rgba":if(4!==s.length)return void ut(e,0,0,0,1);l=st(s.pop());case"rgb":return 3!==s.length?void ut(e,0,0,0,1):(ut(e,at(s[0]),at(s[1]),at(s[2]),l),ht(t,e),e);case"hsla":return 4!==s.length?void ut(e,0,0,0,1):(s[3]=st(s[3]),dt(s,e),ht(t,e),e);case"hsl":return 3!==s.length?void ut(e,0,0,0,1):(dt(s,e),ht(t,e),e);default:return}}ut(e,0,0,0,1)}else{if(4===i.length)return(u=parseInt(i.substr(1),16))>=0&&u<=4095?(ut(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),ht(t,e),e):void ut(e,0,0,0,1);if(7===i.length){var u=parseInt(i.substr(1),16);return u>=0&&u<=16777215?(ut(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),ht(t,e),e):void ut(e,0,0,0,1)}}}}function dt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=st(t[1]),r=st(t[2]),o=r<=.5?r*(i+1):r+i-r*i,a=2*r-o;return ut(e=e||[],ot(255*lt(a,o,n+1/3)),ot(255*lt(a,o,n)),ot(255*lt(a,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function pt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function gt(t,e){return t[e]}function vt(t,e,n){t[e]=n}function mt(t,e,n){return(e-t)*n+t}function yt(t,e,n){return n>.5?e:t}function _t(t,e,n,i,r){var o=t.length;if(1==r)for(s=0;s<o;s++)i[s]=mt(t[s],e[s],n);else for(var a=o&&t[0].length,s=0;s<o;s++)for(var l=0;l<a;l++)i[s][l]=mt(t[s][l],e[s][l],n)}function xt(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(a=i;a<r;a++)t.push(1===n?e[a]:Es.call(e[a]));for(var o=t[0]&&t[0].length,a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var s=0;s<o;s++)isNaN(t[a][s])&&(t[a][s]=e[a][s])}function wt(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(o=0;o<i;o++)if(t[o]!==e[o])return!1}else for(var r=t[0].length,o=0;o<i;o++)for(var a=0;a<r;a++)if(t[o][a]!==e[o][a])return!1;return!0}function bt(t,e,n,i,r,o,a,s,l){var u=t.length;if(1==l)for(h=0;h<u;h++)s[h]=St(t[h],e[h],n[h],i[h],r,o,a);else for(var c=t[0].length,h=0;h<u;h++)for(var f=0;f<c;f++)s[h][f]=St(t[h][f],e[h][f],n[h][f],i[h][f],r,o,a)}function St(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function Mt(t){if(u(t)){var e=t.length;if(u(t[0])){for(var n=[],i=0;i<e;i++)n.push(Es.call(t[i]));return n}return Es.call(t)}return t}function Ct(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function kt(t,e,n,i,r,o){var a=t._getter,s=t._setter,l="spline"===e,c=i.length;if(c){var h,f=u(i[0].value),d=!1,p=!1,g=f?function(t){var e=t[t.length-1].value;return u(e&&e[0])?2:1}(i):0;i.sort(function(t,e){return t.time-e.time}),h=i[c-1].time;for(var v=[],m=[],y=i[0].value,_=!0,x=0;x<c;x++){v.push(i[x].time/h);var w=i[x].value;if(f&&wt(w,y,g)||!f&&w===y||(_=!1),y=w,"string"==typeof w){var b=ft(w);b?(w=b,d=!0):p=!0}m.push(w)}if(o||!_){var S=m[c-1];for(x=0;x<c-1;x++)f?xt(m[x],S,g):!isNaN(m[x])||isNaN(S)||p||d||(m[x]=S);f&&xt(a(t._target,r),S,g);var M,C,k,T,I,D=0,A=0;if(d)var O=[0,0,0,0];var P=new rt({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<A){for(n=Math.min(D+1,c-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,c-2)}else{for(n=D;n<c&&!(v[n]>e);n++);n=Math.min(n-1,c-2)}D=n,A=e;var i=v[n+1]-v[n];if(0!==i)if(M=(e-v[n])/i,l)if(k=m[n],C=m[0===n?n:n-1],T=m[n>c-2?c-1:n+1],I=m[n>c-3?c-1:n+2],f)bt(C,k,T,I,M,M*M,M*M*M,a(t,r),g);else{if(d)o=bt(C,k,T,I,M,M*M,M*M*M,O,1),o=Ct(O);else{if(p)return yt(k,T,M);o=St(C,k,T,I,M,M*M,M*M*M)}s(t,r,o)}else if(f)_t(m[n],m[n+1],M,a(t,r),g);else{var o;if(d)_t(m[n],m[n+1],M,O,1),o=Ct(O);else{if(p)return yt(m[n],m[n+1],M);o=mt(m[n],m[n+1],M)}s(t,r,o)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function Tt(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function It(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;!function(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++;return r-e}function Dt(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var o,a=t[i],s=e,l=i;s<l;)r(a,t[o=s+l>>>1])<0?l=o:s=o+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function At(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])>0){for(s=i-r;l<s&&o(t,e[n+r+l])>0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;l<s&&o(t,e[n+r-l])<=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])>0?a=c+1:l=c}return l}function Ot(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])<0){for(s=r+1;l<s&&o(t,e[n+r-l])<0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}else{for(s=i-r;l<s&&o(t,e[n+r+l])>=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])<0?l=c:a=c+1}return l}function Pt(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(r<2)){var o=0;if(r<Gs)return void Dt(t,n,i,n+(o=It(t,n,i,e)),e);var a=new function(t,e){function n(n){var s=o[n],u=a[n],c=o[n+1],h=a[n+1];a[n]=u+h,n===l-3&&(o[n+1]=o[n+2],a[n+1]=a[n+2]),l--;var f=Ot(t[c],t,s,u,0,e);s+=f,0!=(u-=f)&&0!==(h=At(t[s+u-1],t,c,h,h-1,e))&&(u<=h?i(s,u,c,h):r(s,u,c,h))}function i(n,i,r,o){var a=0;for(a=0;a<i;a++)u[a]=t[n+a];var l=0,c=r,h=n;if(t[h++]=t[c++],0!=--o)if(1!==i){for(var f,d,p,g=s;;){f=0,d=0,p=!1;do{if(e(t[c],u[l])<0){if(t[h++]=t[c++],d++,f=0,0==--o){p=!0;break}}else if(t[h++]=u[l++],f++,d=0,1==--i){p=!0;break}}while((f|d)<g);if(p)break;do{if(0!==(f=Ot(t[c],u,l,i,0,e))){for(a=0;a<f;a++)t[h+a]=u[l+a];if(h+=f,l+=f,(i-=f)<=1){p=!0;break}}if(t[h++]=t[c++],0==--o){p=!0;break}if(0!==(d=At(u[l],t,c,o,0,e))){for(a=0;a<d;a++)t[h+a]=t[c+a];if(h+=d,c+=d,0==(o-=d)){p=!0;break}}if(t[h++]=u[l++],1==--i){p=!0;break}g--}while(f>=Us||d>=Us);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===i){for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else{if(0===i)throw new Error;for(a=0;a<i;a++)t[h+a]=u[l+a]}}else{for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else for(a=0;a<i;a++)t[h+a]=u[l+a]}function r(n,i,r,o){var a=0;for(a=0;a<o;a++)u[a]=t[r+a];var l=n+i-1,c=o-1,h=r+o-1,f=0,d=0;if(t[h--]=t[l--],0!=--i)if(1!==o){for(var p=s;;){var g=0,v=0,m=!1;do{if(e(u[c],t[l])<0){if(t[h--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[h--]=u[c--],v++,g=0,1==--o){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!=(g=i-Ot(u[c],t,n,i,i-1,e))){for(i-=g,d=1+(h-=g),f=1+(l-=g),a=g-1;a>=0;a--)t[d+a]=t[f+a];if(0===i){m=!0;break}}if(t[h--]=u[c--],1==--o){m=!0;break}if(0!=(v=o-At(t[l],u,0,o,o-1,e))){for(o-=v,d=1+(h-=v),f=1+(c-=v),a=0;a<v;a++)t[d+a]=u[f+a];if(o<=1){m=!0;break}}if(t[h--]=t[l--],0==--i){m=!0;break}p--}while(g>=Us||v>=Us);if(m)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===o){for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else{if(0===o)throw new Error;for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}}else{for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}var o,a,s=Us,l=0,u=[];o=[],a=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&a[t-1]<=a[t]+a[t+1]||t>=2&&a[t-2]<=a[t]+a[t-1])a[t-1]<a[t+1]&&t--;else if(a[t]>a[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&a[t-1]<a[t+1]&&t--,n(t)}},this.pushRun=function(t,e){o[l]=t,a[l]=e,l+=1}}(t,e),s=function(t){for(var e=0;t>=Gs;)e|=1&t,t>>=1;return t+e}(r);do{if((o=It(t,n,i,e))<s){var l=r;l>s&&(l=s),Dt(t,n,n+l,n+o,e),o=l}a.pushRun(n,o),a.mergeRuns(),r-=o,n+=o}while(0!==r);a.forceMergeRuns()}}function Lt(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Et(){return!1}function Nt(t,e,n){var i=ls(),r=e.getWidth(),o=e.getHeight(),a=i.style;return a&&(a.position="absolute",a.left=0,a.top=0,a.width=r+"px",a.height=o+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=o*n,i}function Rt(t){if("string"==typeof t){var e=rl.get(t);return e&&e.image}return t}function Bt(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var o=rl.get(t),a={hostEl:n,cb:i,cbPayload:r};return o?!$t(e=o.image)&&o.pending.push(a):(!e&&(e=new Image),e.onload=zt,rl.put(t,e.__cachedImgObj={image:e,pending:[a]}),e.src=e.__zrImageSrc=t),e}return t}return e}function zt(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function $t(t){return t&&t.width&&t.height}function Ft(t,e){var n=t+":"+(e=e||ul);if(ol[n])return ol[n];for(var i=(t+"").split("\n"),r=0,o=0,a=i.length;o<a;o++)r=Math.max(Yt(i[o],e).width,r);return al>sl&&(al=0,ol={}),al++,ol[n]=r,r}function Vt(t,e,n,i,r,o,a){return o?function(t,e,n,i,r,o,a){var s=Kt(t,{rich:o,truncate:a,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,u=s.outerHeight;return new Tt(jt(0,l,n),Ht(0,u,i),l,u)}(t,e,n,i,r,o,a):function(t,e,n,i,r,o){var a=Zt(t,e,r,o),s=Ft(t,e);r&&(s+=r[1]+r[3]);var l=a.outerHeight,u=new Tt(jt(0,s,n),Ht(0,l,i),s,l);return u.lineHeight=a.lineHeight,u}(t,e,n,i,r,a)}function jt(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function Ht(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function Wt(t,e,n,i,r){if(!e)return"";var o=(t+"").split("\n");r=Gt(e,n,i,r);for(var a=0,s=o.length;a<s;a++)o[a]=Ut(o[a],r);return o.join("\n")}function Gt(t,e,n,r){(r=i({},r)).font=e;n=C(n,"...");r.maxIterations=C(r.maxIterations,2);var o=r.minChar=C(r.minChar,0);r.cnCharWidth=Ft("国",e);var a=r.ascCharWidth=Ft("a",e);r.placeholder=C(r.placeholder,"");for(var s=t=Math.max(0,t-1),l=0;l<o&&s>=a;l++)s-=a;var u=Ft(n);return u>s&&(n="",u=0),s=t-u,r.ellipsis=n,r.ellipsisWidth=u,r.contentWidth=s,r.containerWidth=t,r}function Ut(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var o=Ft(t,i);if(o<=n)return t;for(var a=0;;a++){if(o<=r||a>=e.maxIterations){t+=e.ellipsis;break}var s=0===a?qt(t,r,e.ascCharWidth,e.cnCharWidth):o>0?Math.floor(t.length*r/o):0;o=Ft(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function qt(t,e,n,i){for(var r=0,o=0,a=t.length;o<a&&r<e;o++){var s=t.charCodeAt(o);r+=0<=s&&s<=127?n:i}return o}function Xt(t){return Ft("国",t)}function Yt(t,e){return cl.measureText(t,e)}function Zt(t,e,n,i){null!=t&&(t+="");var r=Xt(e),o=t?t.split("\n"):[],a=o.length*r,s=a;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth;if(null!=l&&s>l)t="",o=[];else if(null!=u)for(var c=Gt(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),h=0,f=o.length;h<f;h++)o[h]=Ut(o[h],c)}return{lines:o,height:a,outerHeight:s,lineHeight:r}}function Kt(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=ll.lastIndex=0;null!=(i=ll.exec(t));){var o=i.index;o>r&&Jt(n,t.substring(r,o)),Jt(n,i[2],i[1]),r=ll.lastIndex}r<t.length&&Jt(n,t.substring(r,t.length));var a=n.lines,s=0,l=0,u=[],c=e.textPadding,h=e.truncate,f=h&&h.outerWidth,d=h&&h.outerHeight;for(c&&(null!=f&&(f-=c[1]+c[3]),null!=d&&(d-=c[0]+c[2])),A=0;A<a.length;A++){for(var p=a[A],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(O=p.tokens[m]).styleName&&e.rich[O.styleName]||{},_=O.textPadding=y.textPadding,x=O.font=y.font||e.font,w=O.textHeight=C(y.textHeight,Xt(x));if(_&&(w+=_[0]+_[2]),O.height=w,O.lineHeight=k(y.textLineHeight,e.textLineHeight,w),O.textAlign=y&&y.textAlign||e.textAlign,O.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=d&&s+O.lineHeight>d)return{lines:[],width:0,height:0};O.textWidth=Ft(O.text,x);var b=y.textWidth,S=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))O.percentWidth=b,u.push(O),b=0;else{if(S){b=O.textWidth;var M=y.textBackgroundColor,T=M&&M.image;T&&$t(T=Rt(T))&&(b=Math.max(b,T.width*w/T.height))}var I=_?_[1]+_[3]:0;b+=I;var D=null!=f?f-v:null;null!=D&&D<b&&(!S||D<I?(O.text="",O.textWidth=b=0):(O.text=Wt(O.text,D-I,x,h.ellipsis,{minChar:h.minChar}),O.textWidth=Ft(O.text,x),b=O.textWidth+I))}v+=O.width=b,y&&(g=Math.max(g,O.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=C(e.textWidth,l),n.outerHeight=n.height=C(e.textHeight,s),c&&(n.outerWidth+=c[1]+c[3],n.outerHeight+=c[0]+c[2]);for(var A=0;A<u.length;A++){var O=u[A],P=O.percentWidth;O.width=parseInt(P,10)/100*l}return n}function Jt(t,e,n){for(var i=""===e,r=e.split("\n"),o=t.lines,a=0;a<r.length;a++){var s=r[a],l={styleName:n,text:s,isLineHolder:!s&&!i};if(a)o.push({tokens:[l]});else{var u=(o[o.length-1]||(o[0]={tokens:[]})).tokens,c=u.length;1===c&&u[0].isLineHolder?u[0]=l:(s||!c||i)&&u.push(l)}}}function Qt(t,e){var n,i,r,o,a,s=e.x,l=e.y,u=e.width,c=e.height,h=e.r;u<0&&(s+=u,u=-u),c<0&&(l+=c,c=-c),"number"==typeof h?n=i=r=o=h:h instanceof Array?1===h.length?n=i=r=o=h[0]:2===h.length?(n=r=h[0],i=o=h[1]):3===h.length?(n=h[0],i=o=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],o=h[3]):n=i=r=o=0,n+i>u&&(n*=u/(a=n+i),i*=u/a),r+o>u&&(r*=u/(a=r+o),o*=u/a),i+r>c&&(i*=c/(a=i+r),r*=c/a),n+o>c&&(n*=c/(a=n+o),o*=c/a),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+c-r),0!==r&&t.arc(s+u-r,l+c-r,r,0,Math.PI/2),t.lineTo(s+o,l+c),0!==o&&t.arc(s+o,l+c-o,o,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function te(t){return ee(t),c(t.rich,ee),t}function ee(t){if(t){t.font=function(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&A(e)||t.textFont||t.font}(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||hl[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||fl[n]?n:"top",t.textPadding&&(t.textPadding=I(t.textPadding))}}function ne(t,e,n,i,r){i.rich?function(t,e,n,i,r){var o=t.__textCotentBlock;o&&!t.__dirty||(o=t.__textCotentBlock=Kt(n,i)),function(t,e,n,i,r){var o=n.width,a=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=le(s,i,r),c=u.baseX,h=u.baseY,f=u.textAlign,d=u.textVerticalAlign;ie(e,i,r,c,h);var p=jt(c,a,f),g=Ht(h,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+o;oe(i)&&ae(t,e,i,p,g,a,s);for(var _=0;_<n.lines.length;_++){for(var x,w=n.lines[_],b=w.tokens,S=b.length,M=w.lineHeight,C=w.width,k=0,T=v,I=y,D=S-1;k<S&&(!(x=b[k]).textAlign||"left"===x.textAlign);)re(t,e,x,i,M,m,T,"left"),C-=x.width,T+=x.width,k++;for(;D>=0&&"right"===(x=b[D]).textAlign;)re(t,e,x,i,M,m,I,"right"),C-=x.width,I-=x.width,D--;for(T+=(o-(T-v)-(y-I)-C)/2;k<=D;)re(t,e,x=b[k],i,M,m,T+x.width/2,"center"),T+=x.width,k++;m+=M}}(t,e,o,i,r)}(t,e,n,i,r):function(t,e,n,i,r){var o=ue(e,"font",i.font||ul),a=i.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=Zt(n,o,a,i.truncate));var l=s.outerHeight,u=s.lines,c=s.lineHeight,h=le(l,i,r),f=h.baseX,d=h.baseY,p=h.textAlign,g=h.textVerticalAlign;ie(e,i,r,f,d);var v=Ht(d,l,g),m=f,y=v,_=oe(i);if(_||a){var x=Ft(n,o);a&&(x+=a[1]+a[3]);var w=jt(f,x,p);_&&ae(t,e,i,w,v,x,l),a&&(m=de(f,p,a),y+=a[0])}ue(e,"textAlign",p||"left"),ue(e,"textBaseline","middle"),ue(e,"shadowBlur",i.textShadowBlur||0),ue(e,"shadowColor",i.textShadowColor||"transparent"),ue(e,"shadowOffsetX",i.textShadowOffsetX||0),ue(e,"shadowOffsetY",i.textShadowOffsetY||0),y+=c/2;var b=i.textStrokeWidth,S=ce(i.textStroke,b),M=he(i.textFill);S&&(ue(e,"lineWidth",b),ue(e,"strokeStyle",S)),M&&ue(e,"fillStyle",M);for(var C=0;C<u.length;C++)S&&e.strokeText(u[C],m,y),M&&e.fillText(u[C],m,y),y+=c}(t,e,n,i,r)}function ie(t,e,n,i,r){if(n&&e.textRotation){var o=e.textOrigin;"center"===o?(i=n.width/2+n.x,r=n.height/2+n.y):o&&(i=o[0]+n.x,r=o[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function re(t,e,n,i,r,o,a,s){var l=i.rich[n.styleName]||{},u=n.textVerticalAlign,c=o+r/2;"top"===u?c=o+n.height/2:"bottom"===u&&(c=o+r-n.height/2),!n.isLineHolder&&oe(l)&&ae(t,e,l,"right"===s?a-n.width:"center"===s?a-n.width/2:a,c-n.height/2,n.width,n.height);var h=n.textPadding;h&&(a=de(a,s,h),c-=n.height/2-h[2]-n.textHeight/2),ue(e,"shadowBlur",k(l.textShadowBlur,i.textShadowBlur,0)),ue(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),ue(e,"shadowOffsetX",k(l.textShadowOffsetX,i.textShadowOffsetX,0)),ue(e,"shadowOffsetY",k(l.textShadowOffsetY,i.textShadowOffsetY,0)),ue(e,"textAlign",s),ue(e,"textBaseline","middle"),ue(e,"font",n.font||ul);var f=ce(l.textStroke||i.textStroke,p),d=he(l.textFill||i.textFill),p=C(l.textStrokeWidth,i.textStrokeWidth);f&&(ue(e,"lineWidth",p),ue(e,"strokeStyle",f),e.strokeText(n.text,a,c)),d&&(ue(e,"fillStyle",d),e.fillText(n.text,a,c))}function oe(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function ae(t,e,n,i,r,o,a){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,c=y(s);if(ue(e,"shadowBlur",n.textBoxShadowBlur||0),ue(e,"shadowColor",n.textBoxShadowColor||"transparent"),ue(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),ue(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),c||l&&u){e.beginPath();var h=n.textBorderRadius;h?Qt(e,{x:i,y:r,width:o,height:a,r:h}):e.rect(i,r,o,a),e.closePath()}if(c)ue(e,"fillStyle",s),e.fill();else if(_(s)){var f=s.image;(f=Bt(f,null,t,se,s))&&$t(f)&&e.drawImage(f,i,r,o,a)}l&&u&&(ue(e,"lineWidth",l),ue(e,"strokeStyle",u),e.stroke())}function se(t,e){e.image=t}function le(t,e,n){var i=e.x||0,r=e.y||0,o=e.textAlign,a=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+fe(s[0],n.width),r=n.y+fe(s[1],n.height);else{var l=function(t,e,n){var i=e.x,r=e.y,o=e.height,a=e.width,s=o/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+a,r+=s,u="middle";break;case"top":i+=a/2,r-=n,l="center",u="bottom";break;case"bottom":i+=a/2,r+=o+n,l="center";break;case"inside":i+=a/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=a-n,r+=s,l="right",u="middle";break;case"insideTop":i+=a/2,r+=n,l="center";break;case"insideBottom":i+=a/2,r+=o-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=a-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=o-n,u="bottom";break;case"insideBottomRight":i+=a-n,r+=o-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}(s,n,e.textDistance);i=l.x,r=l.y,o=o||l.textAlign,a=a||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:o,textVerticalAlign:a}}function ue(t,e,n){return t[e]=Ys(t,e,n),t[e]}function ce(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function he(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function fe(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function de(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function pe(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function ge(t){for(var e in t=t||{},Fs.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new Ks(t.style,this),this._rect=null,this.__clipPaths=[]}function ve(t){ge.call(this,t)}function me(t){return parseInt(t,10)}function ye(t,e,n,i){return n=n||{},i||!Ka.canvasSupported?_e(t,e,n):Ka.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):_e(t,e,n),n}function _e(t,e,n){var i=function(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function xe(t,e,n){if(null!=(e=e||window.event).zrX)return e;var i=e.type;if(i&&i.indexOf("touch")>=0){var r="touchend"!=i?e.targetTouches[0]:e.changedTouches[0];r&&ye(t,r,e,n)}else ye(t,e,e,n),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var o=e.button;return null==e.which&&void 0!==o&&_l.test(e.type)&&(e.which=1&o?1:2&o?3:4&o?2:0),e}function we(t,e,n){yl?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function be(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function Se(t){return"mousewheel"===t&&Ka.browser.firefox?"DOMMouseScroll":t}function Me(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var o=r.type;e.gestureEvent=o,t.handler.dispatchToElement({target:r.target},o,r.event)}}function Ce(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function ke(t){var e=t.pointerType;return"pen"===e||"touch"===e}function Te(t){function e(e,n){c(e,function(e){!function(t,e,n){yl?t.addEventListener(e,n):t.attachEvent("on"+e,n)}(t,Se(e),n._handlers[e])},n)}gs.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new wl,this._handlers={},function(t){c(Ml,function(e){t._handlers[e]=p(Tl[e],t)}),c(kl,function(e){t._handlers[e]=p(Tl[e],t)}),c(Sl,function(e){t._handlers[e]=function(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}(Tl[e],t)})}(this),Ka.pointerEventsSupported?e(kl,this):(Ka.touchEventsSupported&&e(Ml,this),e(Sl,this))}function Ie(t,e){return new Ol(Za(),t,e)}function De(t){return t instanceof Array?t:null==t?[]:[t]}function Ae(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var o=n[i];!t.emphasis[e].hasOwnProperty(o)&&t[e].hasOwnProperty(o)&&(t.emphasis[e][o]=t[e][o])}}}function Oe(t){return!Ll(t)||El(t)||t instanceof Date?t:t.value}function Pe(t,e){e=(e||[]).slice();var n=h(t||[],function(t,e){return{exist:t}});return Pl(e,function(t,i){if(Ll(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var o=n[r].exist;if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||Ee(t)||Ee(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),Pl(e,function(t,e){if(Ll(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!Ee(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function Le(t){var e=t.name;return!(!e||!e.indexOf(Nl))}function Ee(t){return Ll(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Ne(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?v(e.dataIndex)?h(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?v(e.name)?h(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Re(){var t="__\0ec_inner_"+Bl+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function Be(t,e,n){if(y(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||ze(e,r+"Index")||ze(e,r+"Id")||ze(e,r+"Name")||(e[r+"Index"]=0);var a={};return Pl(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var s=r.match(/^(\w+)(Index|Id|Name)$/)||[],l=s[1],u=(s[2]||"").toLowerCase();if(!(!l||!u||null==i||"index"===u&&"none"===i||n&&n.includeMainTypes&&o(n.includeMainTypes,l)<0)){var c={mainType:l};"index"===u&&"all"===i||(c[u]=i);var h=t.queryComponents(c);a[l+"Models"]=h,a[l+"Model"]=h[0]}}else a[r]=i}),a}function ze(t,e){return t&&t.hasOwnProperty(e)}function $e(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function Fe(t){var e={main:"",sub:""};return t&&(t=t.split(zl),e.main=t[0]||"",e.sub=t[1]||""),e}function Ve(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return i(n.prototype,t),n.extend=this.extend,n.superCall=He,n.superApply=We,a(n,this),n.superClass=e,n}}function je(t){var e=["__\0is_clz",Fl++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function He(t,e){var n=T(arguments,2);return this.superClass.prototype[e].apply(t,n)}function We(t,e,n){return this.superClass.prototype[e].apply(t,n)}function Ge(t,e){e=e||{};var n={};if(t.registerClass=function(t,e){return e&&(function(t){D(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}(e),(e=Fe(e)).sub?e.sub!==$l&&((function(t){var e=n[t.main];return e&&e[$l]||((e=n[t.main]={})[$l]=!0),e}(e))[e.sub]=t):n[e.main]=t),t},t.getClass=function(t,e,i){var r=n[t];if(r&&r[$l]&&(r=e?r[e]:null),i&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=Fe(t);var e=[],i=n[t.main];return i&&i[$l]?c(i,function(t,n){n!==$l&&e.push(t)}):e.push(i),e},t.hasClass=function(t){return t=Fe(t),!!n[t.main]},t.getAllClassMainTypes=function(){var t=[];return c(n,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=Fe(t);var e=n[t.main];return e&&e[$l]},t.parseClassType=Fe,e.registerWhenExtend){var i=t.extend;i&&(t.extend=function(e){var n=i.call(this,e);return t.registerClass(n,e.type)})}return t}function Ue(t){return t>-Xl&&t<Xl}function qe(t){return t>Xl||t<-Xl}function Xe(t,e,n,i,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function Ye(t,e,n,i,r){var o=1-r;return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function Ze(t,e,n,i,r){var o=6*n-12*e+6*t,a=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(Ue(a))qe(o)&&(h=-s/o)>=0&&h<=1&&(r[l++]=h);else{var u=o*o-4*a*s;if(Ue(u))r[0]=-o/(2*a);else if(u>0){var c=ql(u),h=(-o+c)/(2*a),f=(-o-c)/(2*a);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}function Ke(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,c=(l-s)*r+s,h=(c-u)*r+u;o[0]=t,o[1]=a,o[2]=u,o[3]=h,o[4]=h,o[5]=c,o[6]=l,o[7]=i}function Je(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function Qe(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function tn(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function en(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function nn(t,e,n,i,r,o){r[0]=eu(t,n),r[1]=eu(e,i),o[0]=nu(t,n),o[1]=nu(e,i)}function rn(t,e,n,i,r,o,a,s,l,u){var c,h=Ze,f=Xe,d=h(t,n,r,a,uu);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,c=0;c<d;c++){var p=f(t,n,r,a,uu[c]);l[0]=eu(p,l[0]),u[0]=nu(p,u[0])}for(d=h(e,i,o,s,cu),c=0;c<d;c++){var g=f(e,i,o,s,cu[c]);l[1]=eu(g,l[1]),u[1]=nu(g,u[1])}l[0]=eu(t,l[0]),u[0]=nu(t,u[0]),l[0]=eu(a,l[0]),u[0]=nu(a,u[0]),l[1]=eu(e,l[1]),u[1]=nu(e,u[1]),l[1]=eu(s,l[1]),u[1]=nu(s,u[1])}function on(t,e,n,i,r,o,a,s){var l=tn,u=Je,c=nu(eu(l(t,n,r),1),0),h=nu(eu(l(e,i,o),1),0),f=u(t,n,r,c),d=u(e,i,o,h);a[0]=eu(t,r,f),a[1]=eu(e,o,d),s[0]=nu(t,r,f),s[1]=nu(e,o,d)}function an(t,e,n,i,r,o,a,s,l){var u=W,c=G,h=Math.abs(r-o);if(h%ou<1e-4&&h>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(au[0]=ru(r)*n+t,au[1]=iu(r)*i+e,su[0]=ru(o)*n+t,su[1]=iu(o)*i+e,u(s,au,su),c(l,au,su),(r%=ou)<0&&(r+=ou),(o%=ou)<0&&(o+=ou),r>o&&!a?o+=ou:r<o&&a&&(r+=ou),a){var f=o;o=r,r=f}for(var d=0;d<o;d+=Math.PI/2)d>r&&(lu[0]=ru(d)*n+t,lu[1]=iu(d)*i+e,u(s,lu,s),c(l,lu,l))}function sn(t,e,n,i,r,o,a){if(0===r)return!1;var s,l=r;if(a>e+l&&a>i+l||a<e-l&&a<i-l||o>t+l&&o>n+l||o<t-l&&o<n-l)return!1;if(t===n)return Math.abs(o-t)<=l/2;var u=(s=(e-i)/(t-n))*o-a+(t*i-n*e)/(t-n);return u*u/(s*s+1)<=l/2*l/2}function ln(t,e,n,i,r,o,a,s,l,u,c){if(0===l)return!1;var h=l;return!(c>e+h&&c>i+h&&c>o+h&&c>s+h||c<e-h&&c<i-h&&c<o-h&&c<s-h||u>t+h&&u>n+h&&u>r+h&&u>a+h||u<t-h&&u<n-h&&u<r-h&&u<a-h)&&function(t,e,n,i,r,o,a,s,l,u,c){var h,f,d,p,g,v=.005,m=1/0;Jl[0]=l,Jl[1]=u;for(var y=0;y<1;y+=.05)Ql[0]=Xe(t,n,r,a,y),Ql[1]=Xe(e,i,o,s,y),(p=ds(Jl,Ql))<m&&(h=y,m=p);m=1/0;for(var _=0;_<32&&!(v<Yl);_++)f=h-v,d=h+v,Ql[0]=Xe(t,n,r,a,f),Ql[1]=Xe(e,i,o,s,f),p=ds(Ql,Jl),f>=0&&p<m?(h=f,m=p):(tu[0]=Xe(t,n,r,a,d),tu[1]=Xe(e,i,o,s,d),g=ds(tu,Jl),d<=1&&g<m?(h=d,m=g):v*=.5);return c&&(c[0]=Xe(t,n,r,a,h),c[1]=Xe(e,i,o,s,h)),ql(m)}(t,e,n,i,r,o,a,s,u,c,null)<=h/2}function un(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;return!(l>e+u&&l>i+u&&l>o+u||l<e-u&&l<i-u&&l<o-u||s>t+u&&s>n+u&&s>r+u||s<t-u&&s<n-u&&s<r-u)&&function(t,e,n,i,r,o,a,s,l){var u,c=.005,h=1/0;Jl[0]=a,Jl[1]=s;for(var f=0;f<1;f+=.05)Ql[0]=Je(t,n,r,f),Ql[1]=Je(e,i,o,f),(v=ds(Jl,Ql))<h&&(u=f,h=v);h=1/0;for(var d=0;d<32&&!(c<Yl);d++){var p=u-c,g=u+c;Ql[0]=Je(t,n,r,p),Ql[1]=Je(e,i,o,p);var v=ds(Ql,Jl);if(p>=0&&v<h)u=p,h=v;else{tu[0]=Je(t,n,r,g),tu[1]=Je(e,i,o,g);var m=ds(tu,Jl);g<=1&&m<h?(u=g,h=m):c*=.5}}return l&&(l[0]=Je(t,n,r,u),l[1]=Je(e,i,o,u)),ql(h)}(t,e,n,i,r,o,s,l,null)<=u/2}function cn(t){return(t%=Mu)<0&&(t+=Mu),t}function hn(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;s-=t,l-=e;var c=Math.sqrt(s*s+l*l);if(c-u>n||c+u<n)return!1;if(Math.abs(i-r)%Cu<1e-4)return!0;if(o){var h=i;i=cn(r),r=cn(h)}else i=cn(i),r=cn(r);i>r&&(r+=Cu);var f=Math.atan2(l,s);return f<0&&(f+=Cu),f>=i&&f<=r||f+Cu>=i&&f+Cu<=r}function fn(t,e,n,i,r,o){if(o>e&&o>i||o<e&&o<i)return 0;if(i===e)return 0;var a=i<e?1:-1,s=(o-e)/(i-e);1!==s&&0!==s||(a=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?a:0}function dn(){var t=Au[0];Au[0]=Au[1],Au[1]=t}function pn(t,e,n,i,r,o,a,s,l,u){if(u>e&&u>i&&u>o&&u>s||u<e&&u<i&&u<o&&u<s)return 0;var c=function(t,e,n,i,r,o){var a=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,c=s*s-3*a*l,h=s*l-9*a*u,f=l*l-3*s*u,d=0;if(Ue(c)&&Ue(h))Ue(s)?o[0]=0:(M=-l/s)>=0&&M<=1&&(o[d++]=M);else{var p=h*h-4*c*f;if(Ue(p)){var g=h/c,v=-g/2;(M=-s/a+g)>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v)}else if(p>0){var m=ql(p),y=c*s+1.5*a*(-h+m),_=c*s+1.5*a*(-h-m);(M=(-s-((y=y<0?-Ul(-y,Kl):Ul(y,Kl))+(_=_<0?-Ul(-_,Kl):Ul(_,Kl))))/(3*a))>=0&&M<=1&&(o[d++]=M)}else{var x=(2*c*s-3*a*h)/(2*ql(c*c*c)),w=Math.acos(x)/3,b=ql(c),S=Math.cos(w),M=(-s-2*b*S)/(3*a),C=(v=(-s+b*(S+Zl*Math.sin(w)))/(3*a),(-s+b*(S-Zl*Math.sin(w)))/(3*a));M>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v),C>=0&&C<=1&&(o[d++]=C)}}return d}(e,i,o,s,u,Du);if(0===c)return 0;for(var h,f,d=0,p=-1,g=0;g<c;g++){var v=Du[g],m=0===v||1===v?.5:1;Xe(t,n,r,a,v)<l||(p<0&&(p=Ze(e,i,o,s,Au),Au[1]<Au[0]&&p>1&&dn(),h=Xe(e,i,o,s,Au[0]),p>1&&(f=Xe(e,i,o,s,Au[1]))),2==p?v<Au[0]?d+=h<e?m:-m:v<Au[1]?d+=f<h?m:-m:d+=s<f?m:-m:v<Au[0]?d+=h<e?m:-m:d+=s<h?m:-m)}return d}function gn(t,e,n,i,r,o,a,s){if(s>e&&s>i&&s>o||s<e&&s<i&&s<o)return 0;var l=function(t,e,n,i,r){var o=t-2*e+n,a=2*(e-t),s=t-i,l=0;if(Ue(o))qe(a)&&(h=-s/a)>=0&&h<=1&&(r[l++]=h);else{var u=a*a-4*o*s;if(Ue(u))(h=-a/(2*o))>=0&&h<=1&&(r[l++]=h);else if(u>0){var c=ql(u),h=(-a+c)/(2*o),f=(-a-c)/(2*o);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}(e,i,o,s,Du);if(0===l)return 0;var u=tn(e,i,o);if(u>=0&&u<=1){for(var c=0,h=Je(e,i,o,u),f=0;f<l;f++)d=0===Du[f]||1===Du[f]?.5:1,(p=Je(t,n,r,Du[f]))<a||(Du[f]<u?c+=h<e?d:-d:c+=o<h?d:-d);return c}var d=0===Du[0]||1===Du[0]?.5:1,p=Je(t,n,r,Du[0]);return p<a?0:o<e?d:-d}function vn(t,e,n,i,r,o,a,s){if((s-=e)>n||s<-n)return 0;u=Math.sqrt(n*n-s*s),Du[0]=-u,Du[1]=u;var l=Math.abs(i-r);if(l<1e-4)return 0;if(l%Tu<1e-4)return i=0,r=Tu,p=o?1:-1,a>=Du[0]+t&&a<=Du[1]+t?p:0;if(o){var u=i;i=cn(r),r=cn(u)}else i=cn(i),r=cn(r);i>r&&(r+=Tu);for(var c=0,h=0;h<2;h++){var f=Du[h];if(f+t>a){var d=Math.atan2(s,f),p=o?1:-1;d<0&&(d=Tu+d),(d>=i&&d<=r||d+Tu>=i&&d+Tu<=r)&&(d>Math.PI/2&&d<1.5*Math.PI&&(p=-p),c+=p)}}return c}function mn(t,e,n,i,r){for(var o=0,a=0,s=0,l=0,u=0,c=0;c<t.length;){var h=t[c++];switch(h===ku.M&&c>1&&(n||(o+=fn(a,s,l,u,i,r))),1==c&&(l=a=t[c],u=s=t[c+1]),h){case ku.M:a=l=t[c++],s=u=t[c++];break;case ku.L:if(n){if(sn(a,s,t[c],t[c+1],e,i,r))return!0}else o+=fn(a,s,t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case ku.C:if(n){if(ln(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=pn(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case ku.Q:if(n){if(un(a,s,t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=gn(a,s,t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case ku.A:var f=t[c++],d=t[c++],p=t[c++],g=t[c++],v=t[c++],m=t[c++],y=(t[c++],1-t[c++]),_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;c>1?o+=fn(a,s,_,x,i,r):(l=_,u=x);var w=(i-f)*g/p+f;if(n){if(hn(f,d,g,v,v+m,y,e,w,r))return!0}else o+=vn(f,d,g,v,v+m,y,w,r);a=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case ku.R:l=a=t[c++],u=s=t[c++];_=l+t[c++],x=u+t[c++];if(n){if(sn(l,u,_,u,e,i,r)||sn(_,u,_,x,e,i,r)||sn(_,x,l,x,e,i,r)||sn(l,x,l,u,e,i,r))return!0}else o+=fn(_,u,_,x,i,r),o+=fn(l,x,l,u,i,r);break;case ku.Z:if(n){if(sn(a,s,l,u,e,i,r))return!0}else o+=fn(a,s,l,u,i,r);a=l,s=u}}return n||function(t,e){return Math.abs(t-e)<Iu}(s,u)||(o+=fn(a,s,l,u,i,r)||0),0!==o}function yn(t){ge.call(this,t),this.path=null}function _n(t,e,n,i,r,o,a,s,l,u,c){var h=l*(Hu/180),f=ju(h)*(t-n)/2+Vu(h)*(e-i)/2,d=-1*Vu(h)*(t-n)/2+ju(h)*(e-i)/2,p=f*f/(a*a)+d*d/(s*s);p>1&&(a*=Fu(p),s*=Fu(p));var g=(r===o?-1:1)*Fu((a*a*(s*s)-a*a*(d*d)-s*s*(f*f))/(a*a*(d*d)+s*s*(f*f)))||0,v=g*a*d/s,m=g*-s*f/a,y=(t+n)/2+ju(h)*v-Vu(h)*m,_=(e+i)/2+Vu(h)*v+ju(h)*m,x=Uu([1,0],[(f-v)/a,(d-m)/s]),w=[(f-v)/a,(d-m)/s],b=[(-1*f-v)/a,(-1*d-m)/s],S=Uu(w,b);Gu(w,b)<=-1&&(S=Hu),Gu(w,b)>=1&&(S=0),0===o&&S>0&&(S-=2*Hu),1===o&&S<0&&(S+=2*Hu),c.addData(u,y,_,a,s,x,S,h,o)}function xn(t,e){var n=function(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<$u.length;e++)n=n.replace(new RegExp($u[e],"g"),"|"+$u[e]);var i,r=n.split("|"),o=0,a=0,s=new Su,l=Su.CMD;for(e=1;e<r.length;e++){var u,c=r[e],h=c.charAt(0),f=0,d=c.slice(1).replace(/e,-/g,"e-").split(",");d.length>0&&""===d[0]&&d.shift();for(var p=0;p<d.length;p++)d[p]=parseFloat(d[p]);for(;f<d.length&&!isNaN(d[f])&&!isNaN(d[0]);){var g,v,m,y,_,x,w,b=o,S=a;switch(h){case"l":o+=d[f++],a+=d[f++],u=l.L,s.addData(u,o,a);break;case"L":o=d[f++],a=d[f++],u=l.L,s.addData(u,o,a);break;case"m":o+=d[f++],a+=d[f++],u=l.M,s.addData(u,o,a),h="l";break;case"M":o=d[f++],a=d[f++],u=l.M,s.addData(u,o,a),h="L";break;case"h":o+=d[f++],u=l.L,s.addData(u,o,a);break;case"H":o=d[f++],u=l.L,s.addData(u,o,a);break;case"v":a+=d[f++],u=l.L,s.addData(u,o,a);break;case"V":a=d[f++],u=l.L,s.addData(u,o,a);break;case"C":u=l.C,s.addData(u,d[f++],d[f++],d[f++],d[f++],d[f++],d[f++]),o=d[f-2],a=d[f-1];break;case"c":u=l.C,s.addData(u,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a),o+=d[f-2],a+=d[f-1];break;case"S":g=o,v=a;var M=s.len(),C=s.data;i===l.C&&(g+=o-C[M-4],v+=a-C[M-3]),u=l.C,b=d[f++],S=d[f++],o=d[f++],a=d[f++],s.addData(u,g,v,b,S,o,a);break;case"s":g=o,v=a,M=s.len(),C=s.data,i===l.C&&(g+=o-C[M-4],v+=a-C[M-3]),u=l.C,b=o+d[f++],S=a+d[f++],o+=d[f++],a+=d[f++],s.addData(u,g,v,b,S,o,a);break;case"Q":b=d[f++],S=d[f++],o=d[f++],a=d[f++],u=l.Q,s.addData(u,b,S,o,a);break;case"q":b=d[f++]+o,S=d[f++]+a,o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,b,S,o,a);break;case"T":g=o,v=a,M=s.len(),C=s.data,i===l.Q&&(g+=o-C[M-4],v+=a-C[M-3]),o=d[f++],a=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"t":g=o,v=a,M=s.len(),C=s.data,i===l.Q&&(g+=o-C[M-4],v+=a-C[M-3]),o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"A":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],_n(b=o,S=a,o=d[f++],a=d[f++],x,w,m,y,_,u=l.A,s);break;case"a":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],_n(b=o,S=a,o+=d[f++],a+=d[f++],x,w,m,y,_,u=l.A,s)}}"z"!==h&&"Z"!==h||(u=l.Z,s.addData(u)),i=u}return s.toStatic(),s}(t);return(e=e||{}).buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){zu(n,t),this.dirty(!0)},e}function wn(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function bn(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var o=tc(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var a=i.length,s=0;s<(n?a:a-1);s++){var l=o[2*s],u=o[2*s+1],c=i[(s+1)%a];t.bezierCurveTo(l[0],l[1],u[0],u[1],c[0],c[1])}}else{"spline"===r&&(i=Qu(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var h=i.length;s<h;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function Sn(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Ye:Xe)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Ye:Xe)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?Qe:Je)(t.x1,t.cpx1,t.x2,e),(n?Qe:Je)(t.y1,t.cpy1,t.y2,e)]}function Mn(t){ge.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function Cn(t){return yn.extend(t)}function kn(t,e,n,i){var r=function(t,e){return new yn(xn(t,e))}(t,e),o=r.getBoundingRect();return n&&("center"===i&&(n=In(n,o)),Dn(r,n)),r}function Tn(t,e,n){var i=new ve({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(In(e,r))}}});return i}function In(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function Dn(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function An(t){var e=t.shape,n=t.style.lineWidth;return dc(2*e.x1)===dc(2*e.x2)&&(e.x1=e.x2=On(e.x1,n,!0)),dc(2*e.y1)===dc(2*e.y2)&&(e.y1=e.y2=On(e.y1,n,!0)),t}function On(t,e,n){var i=dc(2*t);return(i+dc(e))%2==0?i/2:(i+(n?1:-1))/2}function Pn(t){return null!=t&&"none"!=t}function Ln(t){return"string"==typeof t?function(t,e){var n=ft(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return pt(n,4===n.length?"rgba":"rgb")}}(t,-.1):t}function En(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl;i.fill=i.fill||(Pn(n)?Ln(n):null),i.stroke=i.stroke||(Pn(e)?Ln(e):null);var r={};for(var o in i)null!=i[o]&&(r[o]=t.style[o]);t.__normalStl=r,t.__hoverStlDirty=!1}}function Nn(t){if(!t.__isHover){if(En(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,n=e.insideRollbackOpt;n&&function(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}(e),e.extendFrom(t.__hoverStl),n&&(Zn(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function Rn(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function Bn(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Nn(t)}):Nn(t)}function zn(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Rn(t)}):Rn(t)}function $n(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&En(t)}function Fn(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Bn(this)}function Vn(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&zn(this)}function jn(){this.__isEmphasis=!0,Bn(this)}function Hn(){this.__isEmphasis=!1,zn(this)}function Wn(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&$n(t,e)}):$n(t,e),t.on("mouseover",Fn).on("mouseout",Vn),t.on("emphasis",jn).on("normal",Hn)}function Gn(t,e,n,i,r,o,a){var s,l=(r=r||vc).labelFetcher,u=r.labelDataIndex,c=r.labelDimIndex,h=n.getShallow("show"),f=i.getShallow("show");(h||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,c)),null==s&&(s=m(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=h?s:null,p=f?C(l?l.getFormattedLabel(u,"emphasis",null,c):null,s):null;null==d&&null==p||(Un(t,n,o,r),Un(e,i,a,r,!0)),t.text=d,e.text=p}function Un(t,e,n,r,o){return qn(t,e,r,o),n&&i(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function qn(t,e,n,i){if((n=n||vc).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var o=e.getShallow("rotate");null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=C(e.getShallow("distance"),i?null:5)}var a,s=e.ecModel,l=s&&s.option.textStyle,u=function(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||vc).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}(e);if(u)for(var c in a={},u)if(u.hasOwnProperty(c)){var h=e.getModel(["rich",c]);Xn(a[c]={},h,l,n,i)}return t.rich=a,Xn(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function Xn(t,e,n,i,r,o){if(n=!r&&n||vc,t.textFill=Yn(e.getShallow("color"),i)||n.color,t.textStroke=Yn(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=C(e.getShallow("textBorderWidth"),n.textBorderWidth),!r){if(o){var a=t.textPosition;t.insideRollback=Zn(t,a,i),t.insideOriginalTextPosition=a,t.insideRollbackOpt=i}null==t.textFill&&(t.textFill=i.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&i.disableBox||(t.textBackgroundColor=Yn(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Yn(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Yn(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Zn(t,e,n){var i,r=n.useInsideStyle;return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function Kn(t,e){var n=e||e.getModel("textStyle");return A([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function Jn(t,e,n,i,r,o){if("function"==typeof r&&(o=r,r=null),i&&i.isAnimationEnabled()){var a=t?"Update":"",s=i.getShallow("animationDuration"+a),l=i.getShallow("animationEasing"+a),u=i.getShallow("animationDelay"+a);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,o,!!o):(e.stopAnimation(),e.attr(n),o&&o())}else e.stopAnimation(),e.attr(n),o&&o()}function Qn(t,e,n,i,r){Jn(!0,t,e,n,i,r)}function ti(t,e,n,i,r){Jn(!1,t,e,n,i,r)}function ei(t,e,n){return e&&!u(e)&&(e=bs.getLocalTransform(e)),n&&(e=nt([],e)),H([],t,e)}function ni(t,e,n,r){function o(t){var e={position:B(t.position),rotation:t.rotation};return t.shape&&(e.shape=i({},t.shape)),e}if(t&&e){var a=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=a[t.anid];if(e){var i=o(t);t.attr(o(e)),Qn(t,i,n,t.dataIndex)}}})}}function ii(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function ri(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==(void 0===t?"undefined":s(t))?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function oi(t,e){var n=Sc(t).getParent;return n?n.call(t,e):t.parentModel}function ai(t){return[t||"",Mc++,Math.random().toFixed(5)].join("_")}function si(t,e,n,i){var r=e[1]-e[0],o=n[1]-n[0];if(0===r)return 0===o?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*o+n[0]}function li(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?function(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function ui(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function ci(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function hi(t){var e=2*Math.PI;return(t%e+e)%e}function fi(t){return t>-Cc&&t<Cc}function di(t){if(t instanceof Date)return t;if("string"==typeof t){var e=kc.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function pi(t){return Math.floor(Math.log(t)/Math.LN10)}function gi(t,e){var n=pi(t),i=Math.pow(10,n),r=t/i;return t=(e?r<1.5?1:r<2.5?2:r<4?3:r<7?5:10:r<1?1:r<2?2:r<3?3:r<5?5:10)*i,n>=-20?+t.toFixed(n<0?-n:0):t}function vi(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function mi(t){return null==t?"":(t+"").replace(Ic,function(t,e){return Dc[e]})}function yi(t,e){var n=(t=y(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type;e=t.extraCssText;return n?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8upx;margin-left:3upx;border-radius:4upx;width:4upx;height:4upx;background-color:'+mi(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5upx;border-radius:10upx;width:10upx;height:10upx;background-color:'+mi(n)+";"+(e||"")+'"></span>':""}function _i(t,e){return"0000".substr(0,e-(t+="").length)+t}function xi(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=di(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),a=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),h=i["get"+r+"Milliseconds"]();return t.replace("MM",_i(a,2)).replace("M",a).replace("yyyy",o).replace("yy",o%100).replace("dd",_i(s,2)).replace("d",s).replace("hh",_i(l,2)).replace("h",l).replace("mm",_i(u,2)).replace("m",u).replace("ss",_i(c,2)).replace("s",c).replace("SSS",_i(h,3))}function wi(t,e,n,i,r){var o=0,a=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);(c=o+v)>i||l.newline?(o=0,c=v,a+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);(h=a+m)>r||l.newline?(o+=s+n,a=0,h=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=o,f[1]=a,"horizontal"===t?o=c+n:a=h+n)})}function bi(t,e,n){function i(n,i){var a={},l=0,u={},c=0;if(Lc(n,function(e){u[e]=t[e]}),Lc(n,function(t){r(e,t)&&(a[t]=u[t]=e[t]),o(a,t)&&l++,o(u,t)&&c++}),s[i])return o(e,n[1])?u[n[2]]=null:o(e,n[2])&&(u[n[1]]=null),u;if(2!==c&&l){if(l>=2)return a;for(var h=0;h<n.length;h++){var f=n[h];if(!r(a,f)&&r(t,f)){a[f]=t[f];break}}return a}return u}function r(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function a(t,e,n){Lc(t,function(t){e[t]=n[t]})}!_(n)&&(n={});var s=n.ignoreSize;!v(s)&&(s=[s,s]);var l=i(Nc[0],0),u=i(Nc[1],1);a(Nc[0],t,l),a(Nc[1],t,u)}function Si(t){return function(t,e){return e&&t&&Lc(Ec,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}({},t)}function Mi(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:E(),categoryAxisMap:E()},i=Hc[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}function Ci(t){return"category"===t.get("type")}function ki(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===qc?{}:[]),this.sourceFormat=t.sourceFormat||Xc,this.seriesLayoutBy=t.seriesLayoutBy||Zc,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&E(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Ti(t){var e=t.option,n=e.data,i=w(n)?Yc:Wc,r=!1,o=e.seriesLayoutBy,a=e.sourceHeader,s=e.dimensions,l=function(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}(t);if(l){var u=l.option;n=u.source,i=Jc(l).sourceFormat,r=!0,o=o||u.seriesLayoutBy,null==a&&(a=u.sourceHeader),s=s||u.dimensions}var h=function(t,e,n,i,r){if(!t)return{dimensionsDefine:Ii(r)};var o,a,s,l;if(e===Gc)"auto"===i||null==i?Di(function(t){null!=t&&"-"!==t&&(y(t)?null==a&&(a=1):a=0)},n,t,10):a=i?1:0,r||1!==a||(r=[],Di(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===Kc?t.length:t[0]?t[0].length:null;else if(e===Uc)r||(r=function(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return c(e,function(t,e){i.push(e)}),i}}(t),s=!0);else if(e===qc)r||(r=[],s=!0,c(t,function(t,e){r.push(e)}));else if(e===Wc){var u=Oe(t[0]);o=v(u)&&u.length||1}return s&&c(r,function(t,e){"name"===(_(t)?t.name:t)&&(l=e)}),{startIndex:a,dimensionsDefine:Ii(r),dimensionsDetectCount:o,potentialNameDimIndex:l}}(n,i,o,a,s),f=e.encode;!f&&l&&(f=function(t,e,n,i,r,o){var a=Mi(t),s={},l=[],u=[],h=t.subType,f=E(["pie","map","funnel"]),d=E(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(a&&null!=d.get(h)){var p=t.ecModel,g=Jc(p).datasetMap,v=e.uid+"_"+r,m=g.get(v)||g.set(v,{categoryWayDim:1,valueWayDim:0});c(a.coordSysDims,function(t){if(null==a.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(a.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=f.get(h)){for(var y,_=0;_<5&&null==y;_++)Oi(n,i,r,o.dimensionsDefine,o.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=o.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}(t,l,n,i,o,h)),Jc(t).source=new ki({data:n,fromDataset:r,seriesLayoutBy:o,sourceFormat:i,dimensionsDefine:h.dimensionsDefine,startIndex:h.startIndex,dimensionsDetectCount:h.dimensionsDetectCount,encodeDefine:f})}function Ii(t){if(t){var e=E();return h(t,function(t,n){if(null==(t=i({},_(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var r=e.get(t.name);return r?t.name+="-"+r.count++:e.set(t.name,{count:1}),t})}}function Di(t,e,n,i){if(null==i&&(i=1/0),e===Kc)for(o=0;o<n.length&&o<i;o++)t(n[o]?n[o][0]:null,o);else for(var r=n[0]||[],o=0;o<r.length&&o<i;o++)t(r[o],o)}function Ai(t,e){return Oi(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Oi(t,e,n,i,r,o){function a(t){return(null==t||!isFinite(t)||""===t)&&(!(!y(t)||"-"===t)||void 0)}var s,l;if(w(t))return!1;if(i&&(l=_(l=i[o])?l.name:l),e===Gc)if(n===Kc){for(var u=t[o],c=0;c<(u||[]).length&&c<5;c++)if(null!=(s=a(u[r+c])))return s}else for(c=0;c<t.length&&c<5;c++){var h=t[r+c];if(h&&null!=(s=a(h[o])))return s}else if(e===Uc){if(!l)return;for(c=0;c<t.length&&c<5;c++)if((f=t[c])&&null!=(s=a(f[l])))return s}else if(e===qc){if(!l)return;if(!(u=t[l])||w(u))return!1;for(c=0;c<u.length&&c<5;c++)if(null!=(s=a(u[c])))return s}else if(e===Wc)for(c=0;c<t.length&&c<5;c++){var f=t[c],d=Oe(f);if(!v(d))return!1;if(null!=(s=a(d[o])))return s}return!1}function Pi(t){t=t,this.option={},this.option[Qc]=1,this._componentsMap=E({series:[]}),this._seriesIndices,this._seriesIndicesMap,function(t,i){var r=t.color&&!t.colorLayer;c(i,function(i,o){"colorLayer"===o&&r||zc.hasClass(o)||("object"==(void 0===i?"undefined":s(i))?t[o]=t[o]?n(t[o],i,!1):e(i):null==t[o]&&(t[o]=i))})}(t,this._theme.option),n(t,Fc,!1),this.mergeOption(t)}function Li(t,e){t._seriesIndicesMap=E(t._seriesIndices=h(e,function(t){return t.componentIndex})||[])}function Ei(t,e){return e.hasOwnProperty("subType")?d(t,function(t){return t.subType===e.subType}):t}function Ni(t){c(eh,function(e){this[e]=p(t[e],t)},this)}function Ri(){this._coordinateSystems=[]}function Bi(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function zi(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return c(t,function(t,e){var n=e.match(sh);if(n&&n[1]&&n[2]){var o=n[1],a=n[2].toLowerCase();(function(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e})(i[a],t,o)||(r=!1)}}),r}function $i(t){var e=t&&t.itemStyle;if(e)for(var i=0,r=ch.length;i<r;i++){var o=ch[i],a=e.normal,s=e.emphasis;a&&a[o]&&(t[o]=t[o]||{},t[o].normal?n(t[o].normal,a[o]):t[o].normal=a[o],a[o]=null),s&&s[o]&&(t[o]=t[o]||{},t[o].emphasis?n(t[o].emphasis,s[o]):t[o].emphasis=s[o],s[o]=null)}}function Fi(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,o=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,r(t[e],i)):t[e]=i),o&&(t.emphasis=t.emphasis||{},t.emphasis[e]=o)}}function Vi(t){Fi(t,"itemStyle"),Fi(t,"lineStyle"),Fi(t,"areaStyle"),Fi(t,"label"),Fi(t,"labelLine"),Fi(t,"upperLabel"),Fi(t,"edgeLabel")}function ji(t,e){var n=uh(t)&&t[e],i=uh(n)&&n.textStyle;if(i)for(var r=0,o=Rl.length;r<o;r++){e=Rl[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function Hi(t){t&&(Vi(t),ji(t,"label"),t.emphasis&&ji(t.emphasis,"label"))}function Wi(t){return v(t)?t:t?[t]:[]}function Gi(t){return(v(t)?t[0]:t)||{}}function Ui(t){c(fh,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function qi(t){c(t,function(e,n){var i=[],r=[NaN,NaN],o=[e.stackResultDimension,e.stackedOverDimension],a=e.data,s=e.isStackedByIndex,l=a.map(o,function(o,l,u){var c,h,f=a.get(e.stackedDimension,u);if(isNaN(f))return r;s?h=a.getRawIndex(u):c=a.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(h=g.data.rawIndexOf(g.stackedByDimension,c)),h>=0){var v=g.data.getByRawIndex(g.stackResultDimension,h);if(f>=0&&v>0||f<=0&&v<0){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});a.hostModel.setData(l),e.data=l})}function Xi(t,e){ki.isInstance(t)||(t=ki.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,r=t.sourceFormat;r===Yc&&(this._offset=0,this._dimSize=e,this._data=n),i(this,vh[r===Gc?r+"_"+t.seriesLayoutBy:r])}function Yi(){return this._data.length}function Zi(t){return this._data[t]}function Ki(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function Ji(t,e,n,i){return null!=n?t[n]:t}function Qi(t,e,n,i){return tr(t[i],this._dimensionInfos[e])}function tr(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+di(t)),null==t||""===t?NaN:+t}function er(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,o,a=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,o=s.index),mh[a](i,e,o,r)}}}function nr(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===Wc||i===Uc){var r=t.getRawDataItem(e);return i!==Wc||_(r)||(r=null),r?r[n]:void 0}}}function ir(t){return new rr(t)}function rr(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function or(t,e,n,i,r,o){bh.reset(n,i,r,o),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:bh.next},t.context)}function ar(t){var e=t.name;Le(t)||(t.name=function(t){var e=t.getRawData(),n=[];return c(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}(t)||e)}function sr(t){return t.model.getRawData().count()}function lr(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),ur}function ur(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function cr(t,e){c(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,g(hr,e))})}function hr(t){var e=fr(t);e&&e.setOutputEnd(this.count())}function fr(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function dr(){this.group=new Ws,this.uid=ai("viewChart"),this.renderTask=ir({plan:vr,reset:mr}),this.renderTask.context={view:this}}function pr(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)pr(t.childAt(n),e)}function gr(t,e,n){var i=Ne(t,e);null!=i?c(De(i),function(e){pr(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){pr(t,n)})}function vr(t){return Dh(t.model)}function mr(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,o=e.pipelineContext.progressiveRender,a=t.view,s=r&&Ih(r).updateMethod,l=o?"incrementalPrepareRender":s&&a[s]?s:"render";return"render"!==l&&a[l](e,n,i,r),Oh[l]}function yr(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=E()}function _r(t,e,n,i,r){function o(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var a;r=r||{},c(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,c=l.overallTask;if(c){var h,f=c.agentStubMap;f.each(function(t){o(r,t)&&(t.dirty(),h=!0)}),h&&c.dirty(),Bh(c,i);var d=t.getPerformArgs(c,r.block);f.each(function(t){t.perform(d)}),a|=c.perform(d)}else u&&u.each(function(s,l){o(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),Bh(s,i),a|=s.perform(u)})}}),t.unfinished|=a}function xr(t){t.overallReset(t.ecModel,t.api,t.payload)}function wr(t,e){return t.overallProgress&&br}function br(){this.agent.dirty(),this.getDownstream().dirty()}function Sr(){this.agent&&this.agent.dirty()}function Mr(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function Cr(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=De(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?h(e,function(t,e){return kr(e)}):zh}function kr(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var o=e.start;o<e.end;o++)r.dataEach(i,o);else r&&r.progress&&r.progress(e,i)}}function Tr(t){return t.data.count()}function Ir(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function Dr(t,e){for(var n in e.prototype)t[n]=N}function Ar(t){return function(e,n,i){e=e&&e.toLowerCase(),gs.prototype[t].call(this,e,n,i)}}function Or(){gs.call(this)}function Pr(t,n,i){function r(t,e){return t.__prio-e.__prio}i=i||{},"string"==typeof n&&(n=pf[n]),this.id,this.group,this._dom=t;var o=this._zr=Ie(t,{renderer:i.renderer||"canvas",devicePixelRatio:i.devicePixelRatio,width:i.width,height:i.height});this._throttledZrFlush=function(t,e,n){function i(){c=(new Date).getTime(),h=null,t.apply(a,s||[])}var r,o,a,s,l,u=0,c=0,h=null;e=e||0;var f=function(){r=(new Date).getTime(),a=this,s=arguments;var t=l||e,f=l||n;l=null,o=r-(f?u:c)-t,clearTimeout(h),f?h=setTimeout(i,t):o>=0?i():h=setTimeout(i,-o),u=r};return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){l=t},f}(p(o.flush,o),17),(n=e(n))&&ph(n,!0),this._theme=n,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Ri;var a=this._api=Ur(this);Pt(df,r),Pt(cf,r),this._scheduler=new yr(this,a,cf,df),gs.call(this),this._messageCenter=new Or,this._initEvents(),this.resize=p(this.resize,this),this._pendingActions=[],o.animation.on("frame",this._onframe,this),function(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[nf]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}(o,this),O(this)}function Lr(t,e,n){var i,r=this._model,o=this._coordSysMgr.getCoordinateSystems();e=Be(r,e);for(var a=0;a<o.length;a++){var s=o[a];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function Er(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),Fr(t,"component",e,n),Fr(t,"chart",e,n),n.plan()}function Nr(t,e,n,i,r){function o(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}var a=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=E(De(u))),a&&a.eachComponent(l,function(e){u&&null!=u.get(e.id)||o(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else qh(t._componentsViews.concat(t._chartsViews),o)}function Rr(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function Br(t,e){var n=t.type,o=t.escapeConnect,a=lf[n],s=a.actionInfo,l=(s.update||"update").split(":"),u=l.pop();l=null!=l[0]&&Zh(l[0]),this[ef]=!0;var c=[t],f=!1;t.batch&&(f=!0,c=h(t.batch,function(e){return(e=r(i({},e),t)).batch=null,e}));var d,p=[],g="highlight"===n||"downplay"===n;qh(c,function(t){(d=(d=a.action(t,this._model,this._api))||i({},t)).type=s.event||d.type,p.push(d),g?Nr(this,u,t,"series"):l&&Nr(this,u,t,l.main,l.sub)},this),"none"===u||g||l||(this[nf]?(Er(this),af.update.call(this,t),this[nf]=!1):af[u].call(this,t)),d=f?{type:s.event||n,escapeConnect:o,batch:p}:p[0],this[ef]=!1,!e&&this._messageCenter.trigger(d.type,d)}function zr(t){for(var e=this._pendingActions;e.length;){var n=e.shift();Br.call(this,n,t)}}function $r(t){!t&&this.trigger("updated")}function Fr(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var c=Zh(t.type);(r=new(o?Ch.getClass(c.main,c.sub):dr.getClass(c.sub))).init(n,u),s[e]=r,a.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!o&&i.prepareView(r,t,n,u)}for(var o="component"===e,a=o?t._componentsViews:t._chartsViews,s=o?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,c=0;c<a.length;c++)a[c].__alive=!1;for(o?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r),c=0;c<a.length;){var h=a[c];h.__alive?c++:(!o&&h.renderTask.dispose(),l.remove(h.group),h.dispose(n,u),a.splice(c,1),delete s[h.__id],h.__id=h.group.__ecComponentInfo=null)}}function Vr(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function jr(t,e,n,i){(function(t,e,n,i,r){qh(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),Gr(r,t)})})(t,e,n,i),qh(t._chartsViews,function(t){t.__alive=!1}),Hr(t,e,n,i),qh(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function Hr(t,e,n,i,r){var o,a=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;a.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),o|=s.perform(a.getPerformArgs(s)),n.group.silent=!!e.get("silent"),Gr(e,n),function(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}(e,n)}),a.unfinished|=o,function(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!Ka.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}(t._zr,e),Eh(t._zr.dom,e)}function Wr(t,e){qh(ff,function(n){n(t,e)})}function Gr(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function Ur(t){var e=t._coordSysMgr;return i(new Ni(t),{getCoordinateSystems:p(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function qr(t){mf[t]=!1}function Xr(t){return vf[function(t,e){return t.getAttribute?t.getAttribute(e):t[e]}(t,xf)]}function Yr(t,e){pf[t]=e}function Zr(t){hf.push(t)}function Kr(t,e){eo(cf,t,e,Kh)}function Jr(t,e,n){"function"==typeof e&&(n=e,e="");var i=Yh(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,Uh(rf.test(i)&&rf.test(e)),lf[i]||(lf[i]={action:n,actionInfo:t}),uf[e]=i}function Qr(t,e){eo(df,t,e,Jh,"layout")}function to(t,e){eo(df,t,e,Qh,"visual")}function eo(t,e,n,i,r){(Xh(e)||Yh(e))&&(n=e,e=i);var o=yr.wrapStageHandler(n,r);return o.__prio=e,o.__raw=n,t.push(o),o}function no(t,e){gf[t]=e}function io(t){return Ch.extend(t)}function ro(t){return Mh.extend(t)}function oo(t){return dr.extend(t)}function ao(t){return t}function so(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||ao,this._newKeyGetter=i||ao,this.context=r}function lo(t,e,n,i,r){for(var o=0;o<t.length;o++){var a="_ec_"+r[i](t[o],o),s=e[a];null==s?(n.push(a),e[a]=o):(s.length||(e[a]=s=[s]),s.push(o))}}function uo(t){return t._rawCount>65535?Tf:If}function co(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function ho(t,n){c(Df.concat(n.__wrappedMethods||[]),function(e){n.hasOwnProperty(e)&&(t[e]=n[e])}),t.__wrappedMethods=n.__wrappedMethods,c(Af,function(i){t[i]=e(n[i])}),t._calculationInfo=i(n._calculationInfo)}function fo(t){var e=t._invertedIndicesMap;c(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){for(n=e[i]=new Tf(r.categories.length),o=0;o<n.length;o++)n[o]=NaN;for(var o=0;o<t._count;o++)n[t.get(i,o)]=o}})}function po(t,e,n){var i;if(null!=e){var r=t._chunkSize,o=Math.floor(n/r),a=n%r,s=t.dimensions[e],l=t._storage[s][o];if(l){i=l[a];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function go(t){return t}function vo(t){return t<this._count&&t>=0?this._indices[t]:-1}function mo(t,e){var n=t._idList[e];return null==n&&(n=po(t,t._idDimIdx,e)),null==n&&(n=Cf+e),n}function yo(t){return v(t)||(t=[t]),t}function _o(t,e){var n=t.dimensions,i=new Of(h(n,t.getDimensionInfo,t),t.hostModel);ho(i,t);for(var r=i._storage={},a=t._storage,s=0;s<n.length;s++){var l=n[s];a[l]&&(o(e,l)>=0?(r[l]=xo(a[l]),i._rawExtent[l]=[1/0,-1/0],i._extent[l]=null):r[l]=a[l])}return i}function xo(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=co(t[n]);return e}function wo(t,n,o){function a(t,e,n){null!=Sf.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,h.set(e,!0))}ki.isInstance(n)||(n=ki.seriesDataToSource(n)),o=o||{},t=(t||[]).slice();for(var s=(o.dimsDef||[]).slice(),l=E(o.encodeDef),u=E(),h=E(),f=[],d=function(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return c(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}(n,t,s,o.dimCount),p=0;p<d;p++){var g=s[p]=i({},_(s[p])?s[p]:{name:s[p]}),v=g.name,m=f[p]={otherDims:{}};null!=v&&null==u.get(v)&&(m.name=m.displayName=v,u.set(v,p)),null!=g.type&&(m.type=g.type),null!=g.displayName&&(m.displayName=g.displayName)}l.each(function(t,e){t=De(t).slice();var n=l.set(e,[]);c(t,function(t,i){y(t)&&(t=u.get(t)),null!=t&&t<d&&(n[i]=t,a(f[t],e,i))})});var x=0;c(t,function(t,n){var i,o,s;if(y(t))i=t,t={};else{i=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=e(t)).ordinalMeta=u,o=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var h=De(l.get(i));if(!h.length)for(var d=0;d<(o&&o.length||1);d++){for(;x<f.length&&null!=f[x].coordDim;)x++;x<f.length&&h.push(x++)}c(h,function(e,n){var l=f[e];if(a(r(l,t),i,n),null==l.name&&o){var u=o[n];!_(u)&&(u={name:u}),l.name=l.displayName=u.name,l.defaultTooltip=u.defaultTooltip}s&&r(l.otherDims,s)})});var w=o.generateCoord,b=o.generateCoordCount,S=null!=b;b=w?b||1:0;for(var M=w||"value",C=0;C<d;C++)null==(m=f[C]=f[C]||{}).coordDim&&(m.coordDim=bo(M,h,S),m.coordDimIndex=0,(!w||b<=0)&&(m.isExtraCoord=!0),b--),null==m.name&&(m.name=bo(m.coordDim,u)),null==m.type&&Ai(n,C,m.name)&&(m.type="ordinal");return f}function bo(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function So(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function Mo(t,e,n){n=n||{},ki.isInstance(t)||(t=ki.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),o=Ri.get(r),a=Mi(e);a&&(i=h(a.coordSysDims,function(t){var e={name:t},n=a.axisMap.get(t);if(n){var i=n.get("type");e.type=function(t){return"category"===t?"ordinal":"time"===t?"time":"float"}(i)}return e})),i||(i=o&&(o.getDimensionsInfo?o.getDimensionsInfo():o.dimensions.slice())||["x","y"]);var s,l,u=Ef(t,{coordDimensions:i,generateCoord:n.generateCoord});a&&c(u,function(t,e){var n=t.coordDim,i=a.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var f=function(t,e,n){var i,r,o,a,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(c(e,function(t,n){y(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){o="__\0ecstackresult",a="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var h=r.coordDim,f=r.type,d=0;c(e,function(t){t.coordDim===h&&d++}),e.push({name:o,coordDim:h,coordDimIndex:d,type:f,isExtraCoord:!0,isCalculationCoord:!0}),d++,e.push({name:a,coordDim:a,coordDimIndex:d,type:f,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:a,stackResultDimension:o}}(e,u),d=new Of(u,e);d.setCalculationInfo(f);var p=null!=s&&function(t){if(t.sourceFormat===Wc){var e=function(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}(t.data||[]);return null!=e&&!v(Oe(e))}}(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return d.hasItemOption=!1,d.initData(t,null,p),d}function Co(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function ko(t,e,n,i,r,o,a){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),(s=0===t.indexOf("image://")?Tn(t.slice(8),new Tt(e,n,i,r),a?"center":"cover"):0===t.indexOf("path://")?kn(t.slice(7),{},new Tt(e,n,i,r),a?"center":"cover"):new Vf({shape:{symbolType:t,x:e,y:n,width:i,height:r}})).__isEmptyBrush=l,s.setColor=Co,s.setColor(o),s}function To(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return er(t,e,n[0]);if(i){for(var r=[],o=0;o<n.length;o++){var a=er(t,e,n[o]);r.push(a)}return r.join(" ")}}function Io(t,e,n){Ws.call(this),this.updateData(t,e,n)}function Do(t){return[t[0]/2,t[1]/2]}function Ao(t,e){this.parent.drift(t,e)}function Oo(t){this.group=new Ws,this._symbolCtor=t||Io}function Po(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function Lo(t){return null==t||_(t)||(t={isIgnore:t}),t||{}}function Eo(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function No(t,e,n){var i,r=t.getBaseAxis(),o=t.getOtherAxis(r),a=function(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}(o,n),s=r.dim,l=o.dim,u=e.mapDimension(l),c=e.mapDimension(s),f="x"===l||"radius"===l?1:0,d=h(t.dimensions,function(t){return e.mapDimension(t)}),p=e.getCalculationInfo("stackResultDimension");return(i|=So(e,d[0]))&&(d[0]=p),(i|=So(e,d[1]))&&(d[1]=p),{dataDimsForPoint:d,valueStart:a,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:c,baseDataOffset:f,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Ro(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var o=t.baseDataOffset,a=[];return a[o]=n.get(t.baseDim,i),a[1-o]=r,e.dataToPoint(a)}function Bo(t){return isNaN(t[0])||isNaN(t[1])}function zo(t,e,n,i,r,o,a,s,l,u,c){return"none"!==u&&u?function(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Bo(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[h],v="y"===u?1:0,m=(p[v]-g[v])*l;Jf(td,g),td[v]=g[v]+m,Jf(ed,p),ed[v]=p[v]-m,t.bezierCurveTo(td[0],td[1],ed[0],ed[1],p[0],p[1])}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}.apply(this,arguments):function(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Bo(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]),Jf(td,p);else if(l>0){var g=f+o,v=e[g];if(c)for(;v&&Bo(e[g]);)v=e[g+=o];var m=.5,y=e[h];if(!(v=e[g])||Bo(v))Jf(ed,p);else{var _,x;if(Bo(v)&&!c&&(v=p),$(Qf,v,y),"x"===u||"y"===u){var w="x"===u?0:1;_=Math.abs(p[w]-y[w]),x=Math.abs(p[w]-v[w])}else _=fs(p,y),x=fs(p,v);Kf(ed,p,Qf,-l*(1-(m=x/(x+_))))}Yf(td,td,s),Zf(td,td,a),Yf(ed,ed,s),Zf(ed,ed,a),t.bezierCurveTo(td[0],td[1],ed[0],ed[1],p[0],p[1]),Kf(td,p,Qf,l*m)}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}.apply(this,arguments)}function $o(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1])}return{min:e?n:i,max:e?i:n}}function Fo(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Vo(t){return"number"==typeof t?t:t?.5:0}function jo(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function Ho(t,e,n,i){return"polar"===t.type?function(t,e,n,i){var r=t.getAngleAxis(),o=t.getRadiusAxis().getExtent().slice();o[0]>o[1]&&o.reverse();var a=r.getExtent(),s=Math.PI/180;n&&(o[0]-=.5,o[1]+=.5);var l=new Ku({shape:{cx:ui(t.cx,1),cy:ui(t.cy,1),r0:ui(o[0],1),r:ui(o[1],1),startAngle:-a[0]*s,endAngle:-a[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-a[0]*s,ti(l,{shape:{endAngle:-a[1]*s}},i)),l}(t,e,n,i):function(t,e,n,i){var r=jo(t.getAxis("x")),o=jo(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(o[0],o[1]),u=Math.max(r[0],r[1])-s,c=Math.max(o[0],o[1])-l;if(n)s-=.5,u+=.5,l-=.5,c+=.5;else{var h=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?h/2:Math.max(u,c);a?(l-=f,c+=2*f):(s-=f,u+=2*f)}var d=new ic({shape:{x:s,y:l,width:u,height:c}});return e&&(d.shape[a?"width":"height"]=0,ti(d,{shape:{width:u,height:c}},i)),d}(t,e,n,i)}function Wo(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,o=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];o.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],o.push(u);break;case"middle":var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],o.push(u),o.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],o.push(u)}}return t[a]&&o.push(t[a]),o}function Go(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,o=n.length-1;o>=0;o--){var a=n[o].dimension,s=t.dimensions[a],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[o];break}}if(r){var u=e.getAxis(i),f=h(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),d=f.length,p=r.outerColors.slice();d&&f[0].coord>f[d-1].coord&&(f.reverse(),p.reverse());var g=f[0].coord-10,v=f[d-1].coord+10,m=v-g;if(m<.001)return"transparent";c(f,function(t){t.offset=(t.coord-g)/m}),f.push({offset:d?f[d-1].offset:.5,color:p[1]||"transparent"}),f.unshift({offset:d?f[0].offset:.5,color:p[0]||"transparent"});var y=new cc(0,0,0,0,f,!0);return y[i]=g,y[i+"2"]=v,y}}}function Uo(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var o=n.getAxesByScale("ordinal")[0];if(o&&(!r||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),o=Math.max(1,Math.round(r/5)),a=0;a<r;a+=o)if(1.5*Io.getSymbolSize(e,a)[t.isHorizontal()?1:0]>i)return!1;return!0}(o,e))){var a=e.mapDimension(o.dim),s={};return c(o.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(a,t))}}}}function qo(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Xo(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Yo(t){return t._map||(t._map=E(t.categories))}function Zo(t){return _(t)&&null!=t.value?t.value:t+""}function Ko(t){return ci(t)+2}function Jo(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function Qo(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Jo(t,0,e),Jo(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function ta(t){return t.get("stack")||fd+t.seriesIndex}function ea(t){return t.dim+t.index}function na(t,e){var n=[];return e.eachSeriesByType(t,function(t){oa(t)&&!aa(t)&&n.push(t)}),n}function ia(t){var e=[];return c(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),o="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),a=li(t.get("barWidth"),o),s=li(t.get("barMaxWidth"),o),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:o,barWidth:a,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:ea(i),stackId:ta(t)})}),function(t){var e={};c(t,function(t,n){var i=t.axisKey,r=t.bandWidth,o=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},a=o.stacks;e[i]=o;var s=t.stackId;a[s]||o.autoWidthCount++,a[s]=a[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!a[s].width&&(a[s].width=l,l=Math.min(o.remainedWidth,l),o.remainedWidth-=l);var u=t.barMaxWidth;u&&(a[s].maxWidth=u);var c=t.barGap;null!=c&&(o.gap=c);var h=t.barCategoryGap;null!=h&&(o.categoryGap=h)});var n={};return c(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,o=li(t.categoryGap,r),a=li(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-o)/(l+(l-1)*a);u=Math.max(u,0),c(i,function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),u=(s-o)/(l+(l-1)*a),u=Math.max(u,0);var h,f=0;c(i,function(t,e){t.width||(t.width=u),h=t,f+=t.width*(1+a)}),h&&(f-=h.width*a);var d=-f/2;c(i,function(t,i){n[e][i]=n[e][i]||{offset:d,width:t.width},d+=t.width*(1+a)})}),n}(e)}function ra(t,e,n){if(t&&e){var i=t[ea(e)];return null!=i&&null!=n&&(i=i[ta(n)]),i}}function oa(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function aa(t){return t.pipelineContext&&t.pipelineContext.large}function sa(t,e,n){return o(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function la(t,e){return Sd(t,bd(e))}function ua(t,e){var n,i,r,o=t.type,a=e.getMin(),s=e.getMax(),l=null!=a,u=null!=s,h=t.getExtent();"ordinal"===o?n=e.getCategories().length:(v(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=li(i[0],1),i[1]=li(i[1],1),r=h[1]-h[0]||Math.abs(h[0])),null==a&&(a="ordinal"===o?n?0:NaN:h[0]-i[0]*r),null==s&&(s="ordinal"===o?n?n-1:NaN:h[1]+i[1]*r),"dataMin"===a?a=h[0]:"function"==typeof a&&(a=a({min:h[0],max:h[1]})),"dataMax"===s?s=h[1]:"function"==typeof s&&(s=s({min:h[0],max:h[1]})),(null==a||!isFinite(a))&&(a=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(S(a)||S(s)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(a>0&&s>0&&!l&&(a=0),a<0&&s<0&&!u&&(s=0));var f=e.ecModel;if(f&&"time"===o){var d,p=na("bar",f);if(c(p,function(t){d|=t.getBaseAxis()===e.axis}),d){var g=ia(p),m=function(t,e,n,i){var r=n.axis.getExtent(),o=r[1]-r[0],a=ra(i,n.axis);if(void 0===a)return{min:t,max:e};var s=1/0;c(a,function(t){s=Math.min(t.offset,s)});var l=-1/0;c(a,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,h=e-t,f=h/(1-(s+l)/o)-h;return{min:t-=f*(s/u),max:e+=f*(l/u)}}(a,s,e,g);a=m.min,s=m.max}}return[a,s]}function ca(t,e){var n=ua(t,e),i=null!=e.getMin(),r=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var a=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:r,minInterval:"interval"===a||"time"===a?e.get("minInterval"):null,maxInterval:"interval"===a||"time"===a?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function ha(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(function(t,e){return"category"===t.type?t.scale.getLabel(e):e}(t,i),r)}:function(e){return t.scale.getLabel(e)}}function fa(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,o=i.height,a=r*Math.cos(n)+o*Math.sin(n),s=r*Math.sin(n)+o*Math.cos(n);return new Tt(i.x,i.y,a,s)}function da(t){return this._axes[t]}function pa(t){Dd.call(this,t)}function ga(t){return"category"===t.type?function(t){var e=t.getLabelModel(),n=ma(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}(t):function(t){var e=t.scale.getTicks(),n=ha(t);return{labels:h(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}(t)}function va(t,e){return"category"===t.type?function(t,e){var n,i,r=ya(t,"ticks"),o=Sa(e),a=_a(r,o);if(a)return a;if(e.get("show")&&!t.scale.isBlank()||(n=[]),m(o))n=ba(t,o,!0);else if("auto"===o){var s=ma(t,t.getLabelModel());i=s.labelCategoryInterval,n=h(s.labels,function(t){return t.tickValue})}else n=wa(t,i=o,!0);return xa(r,o,{ticks:n,tickCategoryInterval:i})}(t,e):{ticks:t.scale.getTicks()}}function ma(t,e){var n,i=ya(t,"labels"),r=Sa(e),o=_a(i,r);return o||xa(i,r,{labels:m(r)?ba(t,r):wa(t,n="auto"===r?function(t){var e=Ad(t).autoInterval;return null!=e?e:Ad(t).autoInterval=t.calculateCategoryInterval()}(t):r),labelCategoryInterval:n})}function ya(t,e){return Ad(t)[e]||(Ad(t)[e]=[])}function _a(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function xa(t,e,n){return t.push({key:e,value:n}),n}function wa(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:o.getLabel(t),tickValue:t})}var r=ha(t),o=t.scale,a=o.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),c=a[0],h=o.count();0!==c&&u>1&&h/u>2&&(c=Math.round(Math.ceil(c/u)*u));var f=s.get("showMinLabel"),d=s.get("showMaxLabel");f&&c!==a[0]&&i(a[0]);for(var p=c;p<=a[1];p+=u)i(p);return d&&p!==a[1]&&i(a[1]),l}function ba(t,e,n){var i=t.scale,r=ha(t),o=[];return c(i.getTicks(),function(t){var a=i.getLabel(t);e(t,a)&&o.push(n?t:{formattedLabel:r(t),rawLabel:a,tickValue:t})}),o}function Sa(t){var e=t.get("interval");return null==e?"auto":e}function Ma(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function Ca(t,e){return e.type||(e.data?"category":"value")}function ka(t,e,n){return t.getCoordSysModel()===e}function Ta(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function Ia(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]};var i,r=t[e],o=n.model,a=o.get("axisLine.onZero"),s=o.get("axisLine.onZeroAxisIndex");if(a)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&Da(r[l])){i=r[l];break}}else Da(r[s])&&(i=r[s])}function Da(t){return t&&"category"!==t.type&&"time"!==t.type&&function(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}(t)}function Aa(t,e){return h(jd,function(e){return t.getReferringComponents(e)[0]})}function Oa(t){return"cartesian2d"===t.get("coordinateSystem")}function Pa(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function La(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function Ea(t){t&&(t.ignore=!0)}function Na(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var o=K([]);return tt(o,o,-t.rotation),i.applyTransform(J([],o,t.getLocalTransform())),r.applyTransform(J([],o,e.getLocalTransform())),i.intersect(r)}}function Ra(t){return"middle"===t||"center"===t}function Ba(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[function(t){return t.type+"||"+t.id}(t)]}function za(t,e,n,i,r,o){var a=qd.getAxisPointerClass(t.axisPointerClass);if(a){var s=function(t){var e=Ba(t);return e&&e.axisPointerModel}(e);s?(t._axisPointer||(t._axisPointer=new a)).render(e,s,i,o):$a(t,i)}}function $a(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function Fa(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function Va(t,e,n){n.style.text=null,Qn(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function ja(t,e,n){n.style.text=null,Qn(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function Ha(t,e,n,i,o,a,s,l){var u=e.getItemVisual(n,"color"),c=e.getItemVisual(n,"opacity"),h=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();l||t.setShape("r",h.get("barBorderRadius")||0),t.useStyle(r({fill:u,opacity:c},h.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);s?o.height:o.width;l||function(t,e,n,i,r,o,a){Gn(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:o,defaultText:To(r.getData(),o),isRectText:!0,autoColor:i}),Fa(t),Fa(e)}(t.style,f,i,u,a,n),Wn(t,f)}function Wa(t,e,n){var i=t.getData(),r=[],o=i.getLayout("valueAxisHorizontal")?1:0;r[1-o]=i.getLayout("valueAxisStart");var a=new ip({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:o});e.add(a),function(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}(a,t,i)}function Ga(t,e,n,i){var r=e.getData(),o=this.dataIndex,a=r.getName(o),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:a,seriesId:e.id}),r.each(function(t){Ua(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function Ua(t,e,n,i,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=n?i:0,u=[a*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function qa(t,e){function n(){o.ignore=o.hoverIgnore,a.ignore=a.hoverIgnore}function i(){o.ignore=o.normalIgnore,a.ignore=a.normalIgnore}Ws.call(this);var r=new Ku({z2:2}),o=new nc,a=new qu;this.add(r),this.add(o),this.add(a),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function Xa(t,e,n,i,r,o,a){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,o){for(var a=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),c=t[s].len,h=t[s].len2,f=u<r+c?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-n);e&&f>=a&&(f=a-10),!e&&f<=a&&(f=a+10),t[s].x=n+f*o,a=f}}t.sort(function(t,e){return t.y-e.y});for(var u,c=0,h=t.length,f=[],d=[],p=0;p<h;p++)(u=t[p].y-c)<0&&function(e,n,i,r){for(var o=e;o<n;o++)if(t[o].y+=i,o>e&&o+1<n&&t[o+1].y>t[o].y+t[o].height)return void s(o,i/2);s(n-1,i/2)}(p,h,-u),c=t[p].y+t[p].height;for(a-c<0&&s(h-1,c-a),p=0;p<h;p++)t[p].y>=n?d.push(t[p]):f.push(t[p]);l(f,!1,e,n,i,r),l(d,!0,e,n,i,r)}var Ya=2311,Za=function(){return Ya++},Ka="object"==("undefined"==typeof wx?"undefined":s(wx))&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var e={},n=t.match(/Firefox\/([\d.]+)/),i=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),r=t.match(/Edge\/([\d.]+)/),o=/micromessenger/i.test(t);return n&&(e.firefox=!0,e.version=n[1]),i&&(e.ie=!0,e.version=i[1]),r&&(e.edge=!0,e.version=r[1]),o&&(e.weChat=!0),{browser:e,os:{},node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!e.ie&&!e.edge,pointerEventsSupported:"onpointerdown"in window&&(e.edge||e.ie&&e.version>=11)}}(navigator.userAgent),Ja={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},Qa={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},ts=Object.prototype.toString,es=Array.prototype,ns=es.forEach,is=es.filter,rs=es.slice,os=es.map,as=es.reduce,ss={},ls=function(){return ss.createCanvas()};ss.createCanvas=function(){return document.createElement("canvas")};var us,cs="__ec_primitive__";L.prototype={constructor:L,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=p(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}};var hs="undefined"==typeof Float32Array?Array:Float32Array,fs=j,ds=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};U.prototype={constructor:U,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(q(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,o=i-this._y;this._x=n,this._y=i,e.drift(r,o,t),this.dispatchToElement(q(e,t),"drag",t.event);var a=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=a,e!==a&&(s&&a!==s&&this.dispatchToElement(q(s,t),"dragleave",t.event),a&&a!==s&&this.dispatchToElement(q(a,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(q(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(q(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var ps=Array.prototype.slice,gs=function(){this._$handlers={}};gs.prototype={constructor:gs,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;r<o;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>3&&(e=ps.call(e,1));for(var i=this._$handlers[t],r=i.length,o=0;o<r;){switch(n){case 1:i[o].h.call(i[o].ctx);break;case 2:i[o].h.call(i[o].ctx,e[1]);break;case 3:i[o].h.call(i[o].ctx,e[1],e[2]);break;default:i[o].h.apply(i[o].ctx,e)}i[o].one?(i.splice(o,1),r--):o++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>4&&(e=ps.call(e,1,e.length-1));for(var i=e[e.length-1],r=this._$handlers[t],o=r.length,a=0;a<o;){switch(n){case 1:r[a].h.call(i);break;case 2:r[a].h.call(i,e[1]);break;case 3:r[a].h.call(i,e[1],e[2]);break;default:r[a].h.apply(i,e)}r[a].one?(r.splice(a,1),o--):a++}}return this}};var vs="silent";X.prototype.dispose=function(){};var ms=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],ys=function(t,e,n,i){gs.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new X,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,U.call(this),this.setHandlerProxy(n)};ys.prototype={constructor:ys,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(c(ms,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var o=this._hovered=this.findHover(e,n),a=o.target,s=this.proxy;s.setCursor&&s.setCursor(a?a.cursor:"default"),r&&a!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(o,"mousemove",t),a&&a!==r&&this.dispatchToElement(o,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,o=function(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}(e,t,n);i&&(i[r]&&(o.cancelBubble=i[r].call(i,o)),i.trigger(e,o),i=i.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},o=i.length-1;o>=0;o--){var a;if(i[o]!==n&&!i[o].ignore&&(a=Y(i[o],t,e))&&(!r.topTarget&&(r.topTarget=i[o]),a!==vs)){r.target=i[o];break}}return r}},c(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){ys.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||fs(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),l(ys,gs),l(ys,U);var _s="undefined"==typeof Float32Array?Array:Float32Array,xs=K,ws=5e-5,bs=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Ss=bs.prototype;Ss.transform=null,Ss.needLocalTransform=function(){return it(this.rotation)||it(this.position[0])||it(this.position[1])||it(this.scale[0]-1)||it(this.scale[1]-1)},Ss.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;n||e?(i=i||Z(),n?this.getLocalTransform(i):xs(i),e&&(n?J(i,t.transform,i):function(t,e){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5]}(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||Z(),nt(this.invTransform,i)):i&&xs(i)},Ss.getLocalTransform=function(t){return bs.getLocalTransform(this,t)},Ss.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},Ss.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Ms=[];Ss.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(J(Ms,t.invTransform,e),e=Ms);var n=e[0]*e[0]+e[1]*e[1],i=e[2]*e[2]+e[3]*e[3],r=this.position,o=this.scale;it(n-1)&&(n=Math.sqrt(n)),it(i-1)&&(i=Math.sqrt(i)),e[0]<0&&(n=-n),e[3]<0&&(i=-i),r[0]=e[4],r[1]=e[5],o[0]=n,o[1]=i,this.rotation=Math.atan2(-e[1]/i,e[0]/n)}},Ss.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},Ss.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&H(n,n,i),n},Ss.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&H(n,n,i),n},bs.getLocalTransform=function(t,e){xs(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,o=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),et(e,e,i),r&&tt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=o[0],e[5]+=o[1],e};var Cs={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Cs.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Cs.bounceIn(2*t):.5*Cs.bounceOut(2*t-1)+.5}};rt.prototype={constructor:rt,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Cs[i]:i,o="function"==typeof r?r(n):n;return this.fire("frame",o),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var ks=function(){this.head=null,this.tail=null,this._len=0},Ts=ks.prototype;Ts.insert=function(t){var e=new Is(t);return this.insertEntry(e),e},Ts.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Ts.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Ts.len=function(){return this._len},Ts.clear=function(){this.head=this.tail=null,this._len=0};var Is=function(t){this.value=t,this.next,this.prev},Ds=function(t){this._list=new ks,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},As=Ds.prototype;As.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var o=n.len(),a=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}a?a.value=e:a=new Is(e),a.key=t,n.insertEntry(a),i[t]=a}return r},As.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},As.clear=function(){this._list.clear(),this._map={}};var Os={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},Ps=new Ds(20),Ls=null,Es=Array.prototype.slice,Ns=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||gt,this._setter=i||vt,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};Ns.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Mt(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var a=kt(this,t,function(){--r||i._doneCallback()},this._tracks[o],o,e);a&&(this._clipList.push(a),r++,this.animation&&this.animation.addClip(a),n=a)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var Rs=1;"undefined"!=typeof window&&(Rs=Math.max(window.devicePixelRatio||1,1));var Bs=Rs,zs=function(){},$s=function(){this.animators=[]};$s.prototype={constructor:$s,animate:function(t,e){var n,i=!1,r=this,a=this.__zr;if(t){var s=t.split("."),l=r;i="shape"===s[0];for(var u=0,c=s.length;u<c;u++)l&&(l=l[s[u]]);l&&(n=l)}else n=r;if(n){var h=r.animators,f=new Ns(n,e);return f.during(function(t){r.dirty(i)}).done(function(){h.splice(o(h,f),1)}),h.push(f),a&&a.animation.addAnimator(f),f}zs('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,o){y(n)?(r=i,i=n,n=0):m(i)?(r=i,i="linear",n=0):m(n)?(r=n,n=0):m(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n);var a=this.animators.slice(),s=a.length;s||r&&r();for(var l=0;l<a.length;l++)a[l].done(function(){--s||r&&r()}).start(i,o)},_animateToShallow:function(t,e,n,i,r){var o={},a=0;for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])_(n[s])&&!u(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(o[s]=n[s],a++);else if(null!=n[s])if(t){var l={};l[t]={},l[t][s]=n[s],this.attr(l)}else this.attr(s,n[s]);return a>0&&this.animate(t,!1).when(null==i?500:i,o).delay(r||0),this}};var Fs=function(t){bs.call(this,t),gs.call(this,t),$s.call(this,t),this.id=t.id||Za()};Fs.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(_(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},l(Fs,$s),l(Fs,bs),l(Fs,gs);var Vs=H,js=Math.min,Hs=Math.max;Tt.prototype={constructor:Tt,union:function(t){var e=js(t.x,this.x),n=js(t.y,this.y);this.width=Hs(t.x+t.width,this.x+this.width)-e,this.height=Hs(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,Vs(t,t,r),Vs(e,e,r),Vs(n,n,r),Vs(i,i,r),this.x=js(t[0],e[0],n[0],i[0]),this.y=js(t[1],e[1],n[1],i[1]);var o=Hs(t[0],e[0],n[0],i[0]),a=Hs(t[1],e[1],n[1],i[1]);this.width=o-this.x,this.height=a-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=Z();return Q(r,r,[-e.x,-e.y]),et(r,r,[n,i]),Q(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof Tt||(t=Tt.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,o=e.y+e.height,a=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<a||s<n||o<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new Tt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},Tt.create=function(t){return new Tt(t.x,t.y,t.width,t.height)};var Ws=function(t){for(var e in t=t||{},Fs.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};Ws.prototype={constructor:Ws,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof Ws&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=o(i,t);return r<0?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof Ws&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof Ws&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof Ws&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof Ws&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new Tt(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var a=i[o];if(!a.ignore&&!a.invisible){var s=a.getBoundingRect(),l=a.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},a(Ws,Fs);var Gs=32,Us=7,qs=function(){this._roots=[],this._displayList=[],this._displayListLen=0};qs.prototype={constructor:qs,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,Ka.canvasSupported&&Pt(n,Lt)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.clipPath}if(t.isGroup){for(var a=t._children,s=0;s<a.length;s++){var l=a[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof Ws&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof Ws&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)this.delRoot(t[n]);else{var r=o(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof Ws&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:Lt};var Xs={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},Ys=function(t,e,n){return Xs.hasOwnProperty(e)?n*=t.dpr:n},Zs=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],Ks=function(t,e){this.extendFrom(t,!1),this.host=e};Ks.prototype={constructor:Ks,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,o=!r,a=0;a<Zs.length;a++){var s=Zs[a],l=s[0];(o||i[l]!==r[l])&&(t[l]=Ys(t,l,i[l]||s[1]))}if((o||i.fill!==r.fill)&&(t.fillStyle=i.fill),(o||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(o||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(o||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?function(t,e,n){var i=n.width,r=n.height,o=Math.min(i,r),a=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(a=a*i+n.x,s=s*r+n.y,l*=o),t.createRadialGradient(a,s,0,a,s,l)}:function(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,o=null==e.y?0:e.y,a=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,o=o*n.height+n.y,a=a*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,o=isNaN(o)?0:o,a=isNaN(a)?0:a,t.createLinearGradient(i,o,r,a)})(t,e,n),r=e.colorStops,o=0;o<r.length;o++)i.addColorStop(r[o].offset,r[o].color);return i}};for(var Js=Ks.prototype,Qs=0;Qs<Zs.length;Qs++){var tl=Zs[Qs];tl[0]in Js||(Js[tl[0]]=tl[1])}Ks.getGradient=Js.getGradient;var el=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};el.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var nl=function(t,e,n){var i;n=n||Bs,"string"==typeof t?i=Nt(t,e,n):_(t)&&(t=(i=t).id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=Et,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};nl.prototype={constructor:nl,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Nt("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,o=i.width,a=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/u,a/u)),r.clearRect(0,0,o,a),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||Ks.getGradient(r,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=n):e.image&&(n=el.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,o,a),r.restore());if(s){var c=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(c,0,0,o,a),r.restore()}}};var il="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},rl=new Ds(50),ol={},al=0,sl=5e3,ll=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,ul="12px sans-serif",cl={};cl.measureText=function(t,e){var n=(us||(us=ls().getContext("2d")),us);return n.font=e||ul,n.measureText(t)};var hl={left:1,right:1,center:1},fl={top:1,bottom:1,middle:1},dl=new Tt,pl=function(){};pl.prototype={constructor:pl,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&te(n);var i=n.text;if(null!=i&&(i+=""),pe(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(dl.copy(e),dl.applyTransform(r),e=dl),ne(this,t,i,n,e),t.restore()}}},ge.prototype={constructor:ge,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?Fs.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new Ks(t,this),this.dirty(!1),this}},a(ge,Fs),l(ge,pl),ve.prototype={constructor:ve,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Bt(i,this._image,this,this.onload);if(r&&$t(r)){var o=n.x||0,a=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,h=n.sy||0;t.drawImage(r,c,h,n.sWidth,n.sHeight,o,a,s,l)}else if(n.sx&&n.sy){var f=s-(c=n.sx),d=l-(h=n.sy);t.drawImage(r,c,h,f,d,o,a,s,l)}else t.drawImage(r,o,a,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new Tt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},a(ve,ge);var gl=new Tt(0,0,0,0),vl=new Tt(0,0,0,0),ml=function(t,e,n){this.type="canvas";var r=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=i({},n||{}),this.dpr=n.devicePixelRatio||Bs,this._singleCanvas=r,this.root=t;var o=t.style;o&&(o["-webkit-tap-highlight-color"]="transparent",o["-webkit-user-select"]=o["user-select"]=o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var a=this._zlevelList=[],s=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,r){var l=t.width,u=t.height;null!=n.width&&(l=n.width),null!=n.height&&(u=n.height),this.dpr=n.devicePixelRatio||1,t.width=l*this.dpr,t.height=u*this.dpr,this._width=l,this._height=u;var c=new nl(t,this,this.dpr);c.__builtin__=!0,c.initContext(),s[314159]=c,c.zlevel=314159,a.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var h=this._domRoot=function(t,e){var n=document.createElement("div");return n.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}(this._width,this._height);t.appendChild(h)}this._hoverlayer=null,this._hoverElements=[]};ml.prototype={constructor:ml,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],o=this._layers[r];if(!o.__builtin__&&o.refresh){var a=0===i?this._backgroundColor:null;o.refresh(a)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=o(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){Pt(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var o=t[r],a=o.__from;a&&a.__zr?(r++,a.invisible||(o.transform=a.transform,o.invTransform=a.invTransform,o.__clipPaths=a.__clipPaths,this._doPaintEl(o,n,!0,i))):(t.splice(r,1),a.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;il(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];(s=this._layers[r]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&n.push(s)}for(var o=!0,a=0;a<n.length;a++){var s=n[a],l=s.ctx,u={};l.save();var h=e?s.__startIndex:s.__drawIndex,f=!e&&s.incremental&&Date.now,d=f&&Date.now(),p=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,p);else if(h===s.__startIndex){var g=t[h];g.incremental&&g.notClear&&!e||s.clear(!1,p)}-1===h&&(console.error("For some unknown reason. drawIndex is -1"),h=s.__startIndex);for(var v=h;v<s.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,s,e,u),m.__dirty=!1,f&&Date.now()-d>15)break}s.__drawIndex=v,s.__drawIndex<s.__endIndex&&(o=!1),u.prevElClipPaths&&l.restore(),l.restore()}return Ka.wxa&&c(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),o},_doPaintEl:function(t,e,n,i){var r=e.ctx,o=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!o||o[0]||o[3])&&(!t.culling||!function(t,e,n){return gl.copy(t.getBoundingRect()),t.transform&&gl.applyTransform(t.transform),vl.width=e,vl.height=n,!gl.intersect(vl)}(t,this._width,this._height))){var a=t.__clipPaths;i.prevElClipPaths&&!function(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}(a,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),a&&(r.save(),function(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}(a,r),i.prevElClipPaths=a)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var i=this._layers[t];return i||((i=new nl("zr_"+t,this,this.dpr)).zlevel=t,i.__builtin__=!0,this._layerConfig[t]&&n(i,this._layerConfig[t],!0),e&&(i.virtual=e),this.insertLayer(t,i),i.initContext()),i},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,a=-1,s=this._domRoot;if(n[t])zs("ZLevel "+t+" has been used already");else if(function(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}(e)){if(r>0&&t>i[0]){for(a=0;a<r-1&&!(i[a]<t&&i[a+1]>t);a++);o=n[i[a]]}if(i.splice(a+1,0,t),n[t]=e,!e.virtual)if(o){var l=o.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else zs("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((a=t[r]).zlevel!==t[r-1].zlevel||a.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var o,a=t[r],s=a.zlevel;a.incremental?((o=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,i=1):o=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),o.__builtin__||zs("ZLevel "+s+" has been used by unkown layer "+o.id),o!==n&&(o.__used=!0,o.__startIndex!==r&&(o.__dirty=!0),o.__startIndex=r,o.incremental?o.__drawIndex=-1:o.__drawIndex=r,e(r),n=o),a.__dirty&&(o.__dirty=!0,o.incremental&&o.__drawIndex<0&&(o.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var i=this._layerConfig;i[t]?n(i[t],e,!0):i[t]=e;for(var r=0;r<this._zlevelList.length;r++){var o=this._zlevelList[r];o!==t&&o!==t+.01||n(this._layers[o],i[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(o(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);c(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new nl("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var o={},a=this.storage.getDisplayList(!0),s=0;s<a.length;s++){var l=a[s];this._doPaintEl(l,e,!0,o)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],i=["clientWidth","clientHeight"][t],r=["paddingLeft","paddingTop"][t],o=["paddingRight","paddingBottom"][t];if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n]);var a=this.root,s=document.defaultView.getComputedStyle(a);return(a[i]||me(s[n])||me(a.style[n]))-(me(s[r])||0)-(me(s[o])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var n=document.createElement("canvas"),i=n.getContext("2d"),r=t.getBoundingRect(),o=t.style,a=o.shadowBlur*e,s=o.shadowOffsetX*e,l=o.shadowOffsetY*e,u=o.hasStroke()?o.lineWidth:0,c=Math.max(u/2,-s+a),h=Math.max(u/2,s+a),f=Math.max(u/2,-l+a),d=Math.max(u/2,l+a),p=r.width+c+h,g=r.height+f+d;n.width=p*e,n.height=g*e,i.scale(e,e),i.clearRect(0,0,p,g),i.dpr=e;var v={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[c-r.x,f-r.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(i);var m=new ve({style:{x:0,y:0,image:n}});return null!=v.position&&(m.position=t.position=v.position),null!=v.rotation&&(m.rotation=t.rotation=v.rotation),null!=v.scale&&(m.scale=t.scale=v.scale),m}};var yl="undefined"!=typeof window&&!!window.addEventListener,_l=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,xl=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,gs.call(this)};xl.prototype={constructor:xl,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=o(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],o=[],a=0;a<i;a++){var s=n[a],l=s.step(t,e);l&&(r.push(l),o.push(s))}for(a=0;a<i;)n[a]._needsRemove?(n[a]=n[i-1],n.pop(),i--):a++;for(i=r.length,a=0;a<i;a++)o[a].fire(r[a]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){var t=this;this._running=!0,il(function e(){t._running&&(il(e),!t._paused&&t._update())})},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new Ns(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},l(xl,gs);var wl=function(){this._track=[]};wl.prototype={constructor:wl,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},o=0,a=i.length;o<a;o++){var s=i[o],l=ye(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in bl)if(bl.hasOwnProperty(e)){var n=bl[e](this._track,t);if(n)return n}}};var bl={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var o=be(i)/be(r);!isFinite(o)&&(o=1),e.pinchScale=o;var a=function(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}(i);return e.pinchX=a[0],e.pinchY=a[1],{type:"pinch",target:t[0].target,event:e}}}}},Sl=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Ml=["touchstart","touchend","touchmove"],Cl={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},kl=h(Sl,function(t){var e=t.replace("mouse","pointer");return Cl[e]?e:t}),Tl={mousemove:function(t){t=xe(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=xe(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=xe(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,Me(this,t,"start"),Tl.mousemove.call(this,t),Tl.mousedown.call(this,t),Ce(this)},touchmove:function(t){(t=xe(this.dom,t)).zrByTouch=!0,Me(this,t,"change"),Tl.mousemove.call(this,t),Ce(this)},touchend:function(t){(t=xe(this.dom,t)).zrByTouch=!0,Me(this,t,"end"),Tl.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Tl.click.call(this,t),Ce(this)},pointerdown:function(t){Tl.mousedown.call(this,t)},pointermove:function(t){ke(t)||Tl.mousemove.call(this,t)},pointerup:function(t){Tl.mouseup.call(this,t)},pointerout:function(t){ke(t)||Tl.mouseout.call(this,t)}};c(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Tl[t]=function(e){e=xe(this.dom,e),this.trigger(t,e)}});var Il=Te.prototype;Il.dispose=function(){for(var t=Sl.concat(Ml),e=0;e<t.length;e++){var n=t[e];we(this.dom,Se(n),this._handlers[n])}},Il.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},l(Te,gs);var Dl=!Ka.canvasSupported,Al={canvas:ml},Ol=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new qs,o=n.renderer;if(Dl){if(!Al.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");o="vml"}else o&&Al[o]||(o="canvas");var a=new Al[o](e,r,n,t);this.storage=r,this.painter=a;var s=Ka.node||Ka.worker?null:new Te(a.getViewportRoot());this.handler=new ys(r,a,s,a.root),this.animation=new xl({stage:{update:p(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};Ol.prototype={constructor:Ol,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var Pl=c,Ll=_,El=v,Nl="series\0",Rl=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],Bl=0,zl=".",$l="___EC__COMPONENT__CONTAINER___",Fl=0,Vl=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},a=0;a<t.length;a++){var s=t[a][1];if(!(n&&o(n,s)>=0||i&&o(i,s)<0)){var l=e.getShallow(s);null!=l&&(r[t[a][0]]=l)}}return r}},jl=Vl([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Hl={getLineStyle:function(t){var e=jl(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},Wl=Vl([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),Gl={getAreaStyle:function(t,e){return Wl(this,t,e)}},Ul=Math.pow,ql=Math.sqrt,Xl=1e-8,Yl=1e-4,Zl=ql(3),Kl=1/3,Jl=R(),Ql=R(),tu=R(),eu=Math.min,nu=Math.max,iu=Math.sin,ru=Math.cos,ou=2*Math.PI,au=R(),su=R(),lu=R(),uu=[],cu=[],hu={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},fu=[],du=[],pu=[],gu=[],vu=Math.min,mu=Math.max,yu=Math.cos,_u=Math.sin,xu=Math.sqrt,wu=Math.abs,bu="undefined"!=typeof Float32Array,Su=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Su.prototype={constructor:Su,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=wu(1/Bs/t)||0,this._uy=wu(1/Bs/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(hu.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=wu(t-this._xi)>this._ux||wu(e-this._yi)>this._uy||this._len<5;return this.addData(hu.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,o){return this.addData(hu.C,t,e,n,i,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,o):this._ctx.bezierCurveTo(t,e,n,i,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,n,i){return this.addData(hu.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,o){return this.addData(hu.A,t,e,n,n,i,r-i,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=yu(r)*n+t,this._yi=_u(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(hu.R,t,e,n,i),this},closePath:function(){this.addData(hu.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!bu||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(bu&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,c=t-l,h=e-u,f=xu(c*c+h*h),d=l,p=u,g=a.length;for(c/=f,h/=f,o<0&&(o=r+o),d-=(o%=r)*c,p-=o*h;c>0&&d<=t||c<0&&d>=t||0==c&&(h>0&&p<=e||h<0&&p>=e);)d+=c*(n=a[i=this._dashIdx]),p+=h*n,this._dashIdx=(i+1)%g,c>0&&d<l||c<0&&d>l||h>0&&p<u||h<0&&p>u||s[i%2?"moveTo":"lineTo"](c>=0?vu(d,t):mu(d,t),h>=0?vu(p,e):mu(p,e));c=d-t,h=p-e,this._dashOffset=-xu(c*c+h*h)},_dashedBezierTo:function(t,e,n,i,r,o){var a,s,l,u,c,h=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=Xe,y=0,_=this._dashIdx,x=d.length,w=0;for(f<0&&(f=h+f),f%=h,a=0;a<1;a+=.1)s=m(g,t,n,r,a+.1)-m(g,t,n,r,a),l=m(v,e,i,o,a+.1)-m(v,e,i,o,a),y+=xu(s*s+l*l);for(;_<x&&!((w+=d[_])>f);_++);for(a=(w-f)/y;a<=1;)u=m(g,t,n,r,a),c=m(v,e,i,o,a),_%2?p.moveTo(u,c):p.lineTo(u,c),a+=d[_]/y,_=(_+1)%x;_%2!=0&&p.lineTo(r,o),s=r-u,l=o-c,this._dashOffset=-xu(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,o=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,o)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,bu&&(this.data=new Float32Array(t)))},getBoundingRect:function(){fu[0]=fu[1]=pu[0]=pu[1]=Number.MAX_VALUE,du[0]=du[1]=gu[0]=gu[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,o=0;o<t.length;){var a=t[o++];switch(1==o&&(i=e=t[o],r=n=t[o+1]),a){case hu.M:e=i=t[o++],n=r=t[o++],pu[0]=i,pu[1]=r,gu[0]=i,gu[1]=r;break;case hu.L:nn(e,n,t[o],t[o+1],pu,gu),e=t[o++],n=t[o++];break;case hu.C:rn(e,n,t[o++],t[o++],t[o++],t[o++],t[o],t[o+1],pu,gu),e=t[o++],n=t[o++];break;case hu.Q:on(e,n,t[o++],t[o++],t[o],t[o+1],pu,gu),e=t[o++],n=t[o++];break;case hu.A:var s=t[o++],l=t[o++],u=t[o++],c=t[o++],h=t[o++],f=t[o++]+h,d=(t[o++],1-t[o++]);1==o&&(i=yu(h)*u+s,r=_u(h)*c+l),an(s,l,u,c,h,f,d,pu,gu),e=yu(f)*u+s,n=_u(f)*c+l;break;case hu.R:nn(i=e=t[o++],r=n=t[o++],i+t[o++],r+t[o++],pu,gu);break;case hu.Z:e=i,n=r}W(fu,fu,pu),G(du,du,gu)}return 0===o&&(fu[0]=fu[1]=du[0]=du[1]=0),new Tt(fu[0],fu[1],du[0]-fu[0],du[1]-fu[1])},rebuildPath:function(t){for(var e,n,i,r,o,a,s=this.data,l=this._ux,u=this._uy,c=this._len,h=0;h<c;){var f=s[h++];switch(1==h&&(e=i=s[h],n=r=s[h+1]),f){case hu.M:e=i=s[h++],n=r=s[h++],t.moveTo(i,r);break;case hu.L:o=s[h++],a=s[h++],(wu(o-i)>l||wu(a-r)>u||h===c-1)&&(t.lineTo(o,a),i=o,r=a);break;case hu.C:t.bezierCurveTo(s[h++],s[h++],s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case hu.Q:t.quadraticCurveTo(s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case hu.A:var d=s[h++],p=s[h++],g=s[h++],v=s[h++],m=s[h++],y=s[h++],_=s[h++],x=s[h++],w=g>v?g:v,b=g>v?1:g/v,S=g>v?v/g:1,M=m+y;Math.abs(g-v)>.001?(t.translate(d,p),t.rotate(_),t.scale(b,S),t.arc(0,0,w,m,M,1-x),t.scale(1/b,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,w,m,M,1-x),1==h&&(e=yu(m)*g+d,n=_u(m)*v+p),i=yu(M)*g+d,r=_u(M)*v+p;break;case hu.R:e=i=s[h],n=r=s[h+1],t.rect(s[h++],s[h++],s[h++],s[h++]);break;case hu.Z:t.closePath(),i=e,r=n}}}},Su.CMD=hu;var Mu=2*Math.PI,Cu=2*Math.PI,ku=Su.CMD,Tu=2*Math.PI,Iu=1e-4,Du=[-1,-1,-1],Au=[-1,-1],Ou=el.prototype.getCanvasPattern,Pu=Math.abs,Lu=new Su(!0);yn.prototype={constructor:yn,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||Lu,o=i.hasStroke(),a=i.hasFill(),s=i.fill,l=i.stroke,u=a&&!!s.colorStops,c=o&&!!l.colorStops,h=a&&!!s.image,f=o&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),c&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:h&&(t.fillStyle=Ou.call(s,t)),c?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=Ou.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();r.setScale(v[0],v[1]),this.__dirtyPath||d&&!g&&o?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a&&r.fill(t),d&&g&&(t.setLineDash(d),t.lineDashOffset=p),o&&r.stroke(t),d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new Su},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new Su),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var o=e.lineWidth,a=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),a>1e-10&&(r.width+=o/a,r.height+=o/a,r.x-=o/a/2,r.y-=o/a/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path.data;if(r.hasStroke()){var a=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),function(t,e,n,i){return mn(t,e,!0,n,i)}(o,a/s,t,e)))return!0}if(r.hasFill())return function(t,e,n){return mn(t,0,!1,e,n)}(o,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):ge.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(_(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&Pu(t[0]-1)>1e-10&&Pu(t[3]-1)>1e-10?Math.sqrt(Pu(t[0]*t[3]-t[2]*t[1])):1}},yn.extend=function(t){var e=function(e){yn.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in a(e,yn),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},a(yn,ge);var Eu=Su.CMD,Nu=[[],[],[]],Ru=Math.sqrt,Bu=Math.atan2,zu=function(t,e){var n,i,r,o,a,s,l=t.data,u=Eu.M,c=Eu.C,h=Eu.L,f=Eu.R,d=Eu.A,p=Eu.Q;for(r=0,o=0;r<l.length;){switch(n=l[r++],o=r,i=0,n){case u:case h:i=1;break;case c:i=3;break;case p:i=2;break;case d:var g=e[4],v=e[5],m=Ru(e[0]*e[0]+e[1]*e[1]),y=Ru(e[2]*e[2]+e[3]*e[3]),_=Bu(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=_,l[r++]+=_,o=r+=2;break;case f:s[0]=l[r++],s[1]=l[r++],H(s,s,e),l[o++]=s[0],l[o++]=s[1],s[0]+=l[r++],s[1]+=l[r++],H(s,s,e),l[o++]=s[0],l[o++]=s[1]}for(a=0;a<i;a++)(s=Nu[a])[0]=l[r++],s[1]=l[r++],H(s,s,e),l[o++]=s[0],l[o++]=s[1]}},$u=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],Fu=Math.sqrt,Vu=Math.sin,ju=Math.cos,Hu=Math.PI,Wu=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},Gu=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(Wu(t)*Wu(e))},Uu=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(Gu(t,e))},qu=function(t){ge.call(this,t)};qu.prototype={constructor:qu,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&te(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),n.bind(t,this,e),pe(i,n)&&(this.setTransform(t),ne(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&te(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=Vt(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,ce(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},a(qu,ge);var Xu=yn.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),Yu=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],Zu=function(t){return Ka.browser.ie&&Ka.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var o=n[r],a=o&&o.shape,s=o&&o.type;if(a&&("sector"===s&&a.startAngle===a.endAngle||"rect"===s&&(!a.width||!a.height))){for(l=0;l<Yu.length;l++)Yu[l][2]=i[Yu[l][0]],i[Yu[l][0]]=Yu[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<Yu.length;l++)i[Yu[l][0]]=Yu[l][2]}:t},Ku=yn.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:Zu(yn.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(a),c=Math.sin(a);t.moveTo(u*r+n,c*r+i),t.lineTo(u*o+n,c*o+i),t.arc(n,i,o,a,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,a,l),t.closePath()}}),Ju=yn.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),Qu=function(t,e){for(var n=t.length,i=[],r=0,o=1;o<n;o++)r+=j(t[o-1],t[o]);var a=r/2;for(a=a<n?n:a,o=0;o<a;o++){var s,l,u,c=o/(a-1)*(e?n:n-1),h=Math.floor(c),f=c-h,d=t[h%n];e?(s=t[(h-1+n)%n],l=t[(h+1)%n],u=t[(h+2)%n]):(s=t[0===h?h:h-1],l=t[h>n-2?n-1:h+1],u=t[h>n-3?n-1:h+2]);var p=f*f,g=f*p;i.push([wn(s[0],d[0],l[0],u[0],f,p,g),wn(s[1],d[1],l[1],u[1],f,p,g)])}return i},tc=function(t,e,n,i){var r,o,a,s,l=[],u=[],c=[],h=[];if(i){a=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;f<d;f++)W(a,a,t[f]),G(s,s,t[f]);W(a,a,i[0]),G(s,s,i[1])}for(f=0,d=t.length;f<d;f++){var p=t[f];if(n)r=t[f?f-1:d-1],o=t[(f+1)%d];else{if(0===f||f===d-1){l.push(B(t[f]));continue}r=t[f-1],o=t[f+1]}$(u,o,r),F(u,u,e);var g=j(p,r),v=j(p,o),m=g+v;0!==m&&(g/=m,v/=m),F(c,u,-g),F(h,u,v);var y=z([],p,c),_=z([],p,h);i&&(G(y,y,a),W(y,y,s),G(_,_,a),W(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},ec=yn.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){bn(t,e,!0)}}),nc=yn.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){bn(t,e,!1)}}),ic=yn.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,o=e.height;e.r?Qt(t,e):t.rect(n,i,r,o),t.closePath()}}),rc=yn.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.percent;0!==a&&(t.moveTo(n,i),a<1&&(r=n*(1-a)+r*a,o=i*(1-a)+o*a),t.lineTo(r,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),oc=[],ac=yn.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,c=e.percent;0!==c&&(t.moveTo(n,i),null==l||null==u?(c<1&&(en(n,a,r,c,oc),a=oc[1],r=oc[2],en(i,s,o,c,oc),s=oc[1],o=oc[2]),t.quadraticCurveTo(a,s,r,o)):(c<1&&(Ke(n,a,l,r,c,oc),a=oc[1],l=oc[2],r=oc[3],Ke(i,s,u,o,c,oc),s=oc[1],u=oc[2],o=oc[3]),t.bezierCurveTo(a,s,l,u,r,o)))},pointAt:function(t){return Sn(this.shape,t,!1)},tangentAt:function(t){var e=Sn(this.shape,t,!0);return V(e,e)}}),sc=yn.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)}}),lc=yn.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),yn.prototype.getBoundingRect.call(this)}}),uc=function(t){this.colorStops=t||[]};uc.prototype={constructor:uc,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var cc=function(t,e,n,i,r,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,uc.call(this,r)};cc.prototype={constructor:cc},a(cc,uc);var hc=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,uc.call(this,i)};hc.prototype={constructor:hc},a(hc,uc),Mn.prototype.incremental=!0,Mn.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},Mn.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},Mn.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},Mn.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},Mn.prototype.update=function(){for(this.updateTransform(),t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},Mn.prototype.brush=function(t,e){for(n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);this._cursor=n;for(var n=0;n<this._temporaryDisplayables.length;n++){var i=this._temporaryDisplayables[n];i.beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var fc=[];Mn.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new Tt(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(fc)),t.union(i)}this._rect=t}return this._rect},Mn.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},a(Mn,ge);var dc=Math.round,pc=Math.max,gc=Math.min,vc={},mc=(Object.freeze||Object)({extendShape:Cn,extendPath:function(t,e){return function(t,e){return yn.extend(xn(t,e))}(t,e)},makePath:kn,makeImage:Tn,mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var o=t[r];o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var a=new yn(e);return a.createPathProxy(),a.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},a},resizePath:Dn,subPixelOptimizeLine:An,subPixelOptimizeRect:function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,o=e.width,a=e.height;return e.x=On(e.x,n,!0),e.y=On(e.y,n,!0),e.width=Math.max(On(i+o,n,!1)-e.x,0===o?0:1),e.height=Math.max(On(r+a,n,!1)-e.y,0===a?0:1),t},subPixelOptimize:On,setHoverStyle:Wn,setLabelStyle:Gn,setTextStyle:Un,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,qn(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:Kn,updateProps:Qn,initProps:ti,getTransform:function(t,e){for(var n=K([]);t&&t!==e;)J(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:ei,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return o=ei(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"},groupTransition:ni,clipPointsByRect:function(t,e){return h(t,function(t){var n=t[0];n=pc(n,e.x),n=gc(n,e.x+e.width);var i=t[1];return i=pc(i,e.y),[n,i=gc(i,e.y+e.height)]})},clipRectByRect:function(t,e){var n=pc(t.x,e.x),i=gc(t.x+t.width,e.x+e.width),r=pc(t.y,e.y),o=gc(t.y+t.height,e.y+e.height);if(i>=n&&o>=r)return{x:n,y:r,width:i-n,height:o-r}},createIcon:function(t,e,n){var o=(e=i({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(o.image=t.slice(8),r(o,n),new ve(e)):kn(t.replace("path://",""),e,n,"center")},Group:Ws,Image:ve,Text:qu,Circle:Xu,Sector:Ku,Ring:Ju,Polygon:ec,Polyline:nc,Rect:ic,Line:rc,BezierCurve:ac,Arc:sc,IncrementalDisplayable:Mn,CompoundPath:lc,LinearGradient:cc,RadialGradient:hc,BoundingRect:Tt}),yc=["textStyle","color"],_c={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(yc):null)},getFont:function(){return Kn({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return Vt(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},xc=Vl([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),wc={getItemStyle:function(t,e){var n=xc(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},bc=l,Sc=Re();ii.prototype={constructor:ii,init:null,mergeOption:function(t){n(this.option,t,!0)},get:function(t,e){return null==t?this.option:ri(this.option,this.parsePath(t),!e&&oi(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&oi(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n;return new ii(null==t?this.option:ri(this.option,t=this.parsePath(t)),e=e||(n=oi(this,t))&&n.getModel(t),this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(e(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Sc(this).getParent=t},isAnimationEnabled:function(){if(!Ka.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Ve(ii),je(ii),bc(ii,Hl),bc(ii,Gl),bc(ii,_c),bc(ii,wc);var Mc=0,Cc=1e-4,kc=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Tc=I,Ic=/([&<>"'])/g,Dc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ac=["a","b","c","d","e","f","g"],Oc=function(t,e){return"{"+t+(null==e?"":e)+"}"},Pc=Wt,Lc=c,Ec=["left","right","top","bottom","width","height"],Nc=[["width","left","right"],["height","top","bottom"]],Rc=(g(wi,"vertical"),g(wi,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),Bc=Re(),zc=ii.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){ii.call(this,t,e,n,i),this.uid=ai("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,r=i?Si(t):{};n(t,e.getTheme().get(this.mainType)),n(t,this.getDefaultOption()),i&&bi(t,r,i)},mergeOption:function(t,e){n(this.option,t,!0);var i=this.layoutMode;i&&bi(this.option,t,i)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=Bc(this);if(!t.defaultOption){for(var e=[],i=this.constructor;i;){var r=i.prototype.defaultOption;r&&e.push(r),i=i.superClass}for(var o={},a=e.length-1;a>=0;a--)o=n(o,e[a],!0);t.defaultOption=o}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});Ge(zc,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=Fe(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var o=Fe(n).main;t.hasSubTypes(n)&&e[o]&&(r=e[o](i))}return r}}(zc),function(t,e){function n(t){var n={},r=[];return c(t,function(a){var s=i(n,a),l=function(t,e){var n=[];return c(t,function(t){o(e,t)>=0&&n.push(t)}),n}(s.originalDeps=e(a),t);s.entryCount=l.length,0===s.entryCount&&r.push(a),c(l,function(t){o(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);o(e.successor,t)<0&&e.successor.push(a)})}),{graph:n,noEntryList:r}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}zc.topologicalTravel=function(t,e,i,r){function o(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var a=n(e),s=a.graph,l=a.noEntryList,u={};for(c(t,function(t){u[t]=!0});l.length;){var h=l.pop(),f=s[h],d=!!u[h];d&&(i.call(r,h,f.originalDeps.slice()),delete u[h]),c(f.successor,d?function(t){u[t]=!0,o(t)}:o)}c(u,function(){throw new Error("Circle dependency may exists")})}}}(0,function(t){var e=[];return c(zc.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=h(e,function(t){return Fe(t).main}),"dataset"!==t&&o(e,"dataset")<=0&&e.unshift("dataset"),e}),l(zc,Rc);var $c="";"undefined"!=typeof navigator&&($c=navigator.platform||"");var Fc={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:$c.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},Vc=Re(),jc={clearColorPalette:function(){Vc(this).colorIdx=0,Vc(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=Vc(e=e||this),r=i.colorIdx||0,o=i.colorNameMap=i.colorNameMap||{};if(o.hasOwnProperty(t))return o[t];var a=De(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?function(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}(s,n):a;if((l=l||a)&&l.length){var u=l[r];return t&&(o[t]=u),i.colorIdx=(r+1)%l.length,u}}},Hc={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],o=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",o),Ci(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Ci(o)&&(i.set("y",o),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Ci(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],o=r.findAxisModel("radiusAxis"),a=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",o),n.set("angle",a),Ci(o)&&(i.set("radius",o),e.firstCategoryDimIndex=0),Ci(a)&&(i.set("angle",a),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),a=e.coordSysDims=o.dimensions.slice();c(o.parallelAxisIndex,function(t,o){var s=r.getComponent("parallelAxis",t),l=a[o];n.set(l,s),Ci(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=o)})}},Wc="original",Gc="arrayRows",Uc="objectRows",qc="keyedColumns",Xc="unknown",Yc="typedArray",Zc="column",Kc="row";ki.seriesDataToSource=function(t){return new ki({data:t,sourceFormat:w(t)?Yc:Wc,fromDataset:!1})},je(ki);var Jc=Re(),Qc="\0_ec_inner",th=ii.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new ii(n),this._optionManager=i},setOption:function(t,e){D(!(Qc in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Pi.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o.length&&c(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var r=this.option,o=this._componentsMap,a=[];(function(t){Jc(t).datasetMap=E()})(this),c(t,function(t,i){null!=t&&(zc.hasClass(i)?i&&a.push(i):r[i]=null==r[i]?e(t):n(r[i],t,!0))}),zc.topologicalTravel(a,zc.getAllClassMainTypes(),function(e,n){var a=De(t[e]),s=Pe(o.get(e),a);(function(t){var e=E();Pl(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),Pl(t,function(t,n){var i=t.option;D(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),Pl(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo;if(Ll(r)){if(o.name=null!=r.name?r.name+"":i?i.name:Nl+n,i)o.id=i.id;else if(null!=r.id)o.id=r.id+"";else{var a=0;do{o.id="\0"+o.name+"\0"+a++}while(e.get(o.id))}e.set(o.id,t)}})})(s),c(s,function(t,n){var i=t.option;_(i)&&(t.keyInfo.mainType=e,t.keyInfo.subType=function(t,e,n){return e.type?e.type:n?n.subType:zc.determineSubType(t,e)}(e,i,t.exist))});var l=function(t,e){v(e)||(e=e?[e]:[]);var n={};return c(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}(o,n);r[e]=[],o.set(e,[]),c(s,function(t,n){var a=t.exist,s=t.option;if(D(_(s)||a,"Empty component definition"),s){var u=zc.getClass(e,t.keyInfo.subType,!0);if(a&&a instanceof u)a.name=t.keyInfo.name,a.mergeOption(s,this),a.optionUpdated(s,!1);else{var c=i({dependentModels:l,componentIndex:n},t.keyInfo);i(a=new u(s,this,this,c),c),a.init(s,this,this,c),a.optionUpdated(null,!0)}}else a.mergeOption({},this),a.optionUpdated({},!1);o.get(e)[n]=a,r[e][n]=a.option},this),"series"===e&&Li(this,o.get("series"))},this),this._seriesIndicesMap=E(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=e(this.option);return c(t,function(e,n){if(zc.hasClass(n)){for(var i=(e=De(e)).length-1;i>=0;i--)Ee(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Qc],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,a=t.name,s=this._componentsMap.get(e);if(!s||!s.length)return[];if(null!=i)v(i)||(i=[i]),n=d(h(i,function(t){return s[t]}),function(t){return!!t});else if(null!=r){var l=v(r);n=d(s,function(t){return l&&o(r,t.id)>=0||!l&&t.id===r})}else if(null!=a){var u=v(a);n=d(s,function(t){return u&&o(a,t.name)>=0||!u&&t.name===a})}else n=s.slice();return Ei(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?d(e,t.filter):e}(Ei(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){c(t,function(t,r){e.call(n,i,t,r)})})):y(t)?c(i.get(t),e,n):_(t)&&c(this.findComponents(t),e,n)},getSeriesByName:function(t){return d(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return d(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){c(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){c(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){c(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return c(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){Li(this,d(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;Li(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),zc.topologicalTravel(n,zc.getAllClassMainTypes(),function(n,i){c(e.get(n),function(e){("series"!==n||!function(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}(e,t))&&e.restoreData()})})}});l(th,jc);var eh=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],nh={};Ri.prototype={constructor:Ri,create:function(t,e){var n=[];c(nh,function(i,r){var o=i.create(t,e);n=n.concat(o||[])}),this._coordinateSystems=n},update:function(t,e){c(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Ri.register=function(t,e){nh[t]=e},Ri.get=function(t){return nh[t]};var ih=c,rh=e,oh=h,ah=n,sh=/^(min|max)?(.+)$/;Bi.prototype={constructor:Bi,setOption:function(t,e){t&&c(De(t.series),function(t){t&&t.data&&w(t.data)&&O(t.data)}),t=rh(t,!0);var n=this._optionBackup,i=function(t,e,n){var i,r,o=[],a=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},o=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;ih(l,function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),ih([r].concat(o).concat(h(a,function(t){return t.option})),function(t){ih(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:o,mediaDefault:i,mediaList:a}}.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(function(t,e){ih(e=e||{},function(e,n){if(null!=e){var i=t[n];if(zc.hasClass(n)){e=De(e);var r=Pe(i=De(i),e);t[n]=oh(r,function(t){return t.option&&t.exist?ah(t.exist,t.option,!0):t.exist||t.option})}else t[n]=ah(i,e,!0)}})}(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=oh(e.timelineOptions,rh),this._mediaList=oh(e.mediaList,rh),this._mediaDefault=rh(e.mediaDefault),this._currentMediaIndices=[],rh(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=rh(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,o=[],a=[];if(!i.length&&!r)return a;for(var s=0,l=i.length;s<l;s++)zi(i[s].query,e,n)&&o.push(s);return!o.length&&r&&(o=[-1]),o.length&&!function(t,e){return t.join(",")===e.join(",")}(o,this._currentMediaIndices)&&(a=oh(o,function(t){return rh(-1===t?r.option:i[t].option)})),this._currentMediaIndices=o,a}};var lh=c,uh=_,ch=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],hh=function(t,e){lh(Wi(t.series),function(t){uh(t)&&function(t){if(uh(t)){$i(t),Vi(t),ji(t,"label"),ji(t,"upperLabel"),ji(t,"edgeLabel"),t.emphasis&&(ji(t.emphasis,"label"),ji(t.emphasis,"upperLabel"),ji(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&($i(e),Hi(e));var n=t.markLine;n&&($i(n),Hi(n));var i=t.markArea;i&&Hi(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var o=t.links||t.edges;if(o&&!w(o))for(s=0;s<o.length;s++)Hi(o[s]);c(t.categories,function(t){Vi(t)})}if(r&&!w(r))for(s=0;s<r.length;s++)Hi(r[s]);if((e=t.markPoint)&&e.data)for(var a=e.data,s=0;s<a.length;s++)Hi(a[s]);if((n=t.markLine)&&n.data){var l=n.data;for(s=0;s<l.length;s++)v(l[s])?(Hi(l[s][0]),Hi(l[s][1])):Hi(l[s])}"gauge"===t.type?(ji(t,"axisLabel"),ji(t,"title"),ji(t,"detail")):"treemap"===t.type?(Fi(t.breadcrumb,"itemStyle"),c(t.levels,function(t){Vi(t)})):"tree"===t.type&&Vi(t.leaves)}}(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),lh(n,function(e){lh(Wi(t[e]),function(t){t&&(ji(t,"axisLabel"),ji(t.axisPointer,"label"))})}),lh(Wi(t.parallel),function(t){var e=t&&t.parallelAxisDefault;ji(e,"axisLabel"),ji(e&&e.axisPointer,"label")}),lh(Wi(t.calendar),function(t){Fi(t,"itemStyle"),ji(t,"dayLabel"),ji(t,"monthLabel"),ji(t,"yearLabel")}),lh(Wi(t.radar),function(t){ji(t,"name")}),lh(Wi(t.geo),function(t){uh(t)&&(Hi(t),lh(Wi(t.regions),function(t){Hi(t)}))}),lh(Wi(t.timeline),function(t){Hi(t),Fi(t,"label"),Fi(t,"itemStyle"),Fi(t,"controlStyle",!0);var e=t.data;v(e)&&c(e,function(t){_(t)&&(Fi(t,"label"),Fi(t,"itemStyle"))})}),lh(Wi(t.toolbox),function(t){Fi(t,"iconStyle"),lh(t.feature,function(t){Fi(t,"iconStyle")})}),ji(Gi(t.axisPointer),"label"),ji(Gi(t.tooltip).axisPointer,"label")},fh=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],dh=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],ph=function(t,e){hh(t,e),t.series=De(t.series),c(t.series,function(t){if(_(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=function(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}(t,"pointer.color");null!=n&&function(t,e,n,i){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++)null==o[r=e[a]]&&(o[r]={}),o=o[r];(i||null==o[e[a]])&&(o[e[a]]=n)}(t,"itemStyle.normal.color",n)}Ui(t)}}),t.dataRange&&(t.visualMap=t.dataRange),c(dh,function(e){var n=t[e];n&&(v(n)||(n=[n]),c(n,function(t){Ui(t)}))})},gh=Xi.prototype;gh.pure=!1,gh.persistent=!0,gh.getSource=function(){return this._source};var vh={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:Ki},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:Yi,getItem:Zi,appendData:Ki},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;c(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:Yi,getItem:Zi,appendData:Ki},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},mh={arrayRows:Ji,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:Ji,original:function(t,e,n,i){var r=Oe(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:Ji},yh={arrayRows:Qi,objectRows:function(t,e,n,i){return tr(t[e],this._dimensionInfos[e])},keyedColumns:Qi,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&function(t){return Ll(t)&&!(t instanceof Array)}(t)&&(this.hasItemOption=!0),tr(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},_h=/\{@(.+?)\}/g,xh={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),a=n.getRawDataItem(t),s=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:o,dataIndex:r,data:a,dataType:e,value:i,color:s,marker:yi(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var o=this.getData(n),a=o.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=a.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?function(t,e,n){v(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],o=0;o<r.length;o++){var a=Ac[o];t=t.replace(Oc(a),Oc(a,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(Oc(Ac[l],s),n?mi(u):u)}return t}(l,s).replace(_h,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),er(o,t,n)}):void 0},getRawValue:function(t,e){return er(this.getData(e),t)},formatTooltip:function(){}},wh=rr.prototype;wh.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var a,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),c=t&&t.modDataCount||0;s===u&&l===c||(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,a=function(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),v(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}(this,r)),this._modBy=u,this._modDataCount=c;var h=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=h?this._dueIndex+h:1/0,this._dueEnd);if(!r&&(a||f<d)){var p=this._progress;if(v(p))for(var g=0;g<p.length;g++)or(this,p[g],f,d,u,c);else or(this,p,f,d,u,c)}this._dueIndex=d;var m=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=m}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var bh=function(){function t(){return i<n?i++:null}function e(){var t=i%a*r+Math.ceil(i/a),e=i>=n?null:t<o?t:i;return i++,e}var n,i,r,o,a,s={reset:function(l,u,c,h){i=l,n=u,r=c,o=h,a=Math.ceil(o/r),s.next=r>1&&o>0?e:t}};return s}();wh.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},wh.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},wh.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},wh.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},wh.getUpstream=function(){return this._upstream},wh.getDownstream=function(){return this._downstream},wh.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Sh=Re(),Mh=zc.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=ir({count:sr,reset:lr}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Ti(this);var r=this.getInitialData(t,n);cr(r,this),this.dataTask.context.data=r,Sh(this).dataBeforeProcessed=r,ar(this)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,r=i?Si(t):{},o=this.subType;zc.hasClass(o)&&(o+="Series"),n(t,e.getTheme().get(this.subType)),n(t,this.getDefaultOption()),Ae(t,"label",["show"]),this.fillDataTextStyle(t.data),i&&bi(t,r,i)},mergeOption:function(t,e){t=n(this.option,t,!0),this.fillDataTextStyle(t.data);var i=this.layoutMode;i&&bi(this.option,t,i),Ti(this);var r=this.getInitialData(t,e);cr(r,this),this.dataTask.dirty(),this.dataTask.context.data=r,Sh(this).dataBeforeProcessed=r,ar(this)},fillDataTextStyle:function(t){if(t&&!w(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&Ae(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=fr(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Sh(this).data},setData:function(t){var e=fr(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Sh(this).data=t},getSource:function(){return Jc(this).source},getRawData:function(){return Sh(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){var i=this.getData(),r=i.mapDimension("defaultedTooltip",!0),o=r.length,a=this.getRawValue(t),s=v(a),l=i.getItemVisual(t,"color");_(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=o>1||s&&!o?function(n){function o(t,n){var r=i.getDimensionInfo(n);if(r&&!1!==r.otherDims.tooltip){var o=r.type,u=yi({color:l,type:"subItem"}),c=(a?u+mi(r.displayName||"-")+": ":"")+mi("ordinal"===o?t+"":"time"===o?e?"":xi("yyyy/MM/dd hh:mm:ss",t):vi(t));c&&s.push(c)}}var a=f(n,function(t,e,n){var r=i.getDimensionInfo(n);return t|(r&&!1!==r.tooltip&&null!=r.displayName)},0),s=[];return r.length?c(r,function(e){o(er(i,t,e),e)}):c(n,o),(a?"<br/>":"")+s.join(a?"<br/>":", ")}(a):function(t){return mi(vi(t))}(o?er(i,t,r[0]):s?a[0]:a),h=yi(l),d=i.getName(t),p=this.name;return Le(this)||(p=""),p=p?mi(p)+(e?": ":"<br/>"):"",e?h+p+u:p+h+(d?mi(d)+": "+u:u)},isAnimationEnabled:function(){if(Ka.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=jc.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});l(Mh,xh),l(Mh,jc);var Ch=function(){this.group=new Ws,this.uid=ai("viewComponent")};Ch.prototype={constructor:Ch,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var kh=Ch.prototype;kh.updateView=kh.updateLayout=kh.updateVisual=function(t,e,n,i){},Ve(Ch),Ge(Ch,{registerWhenExtend:!0});var Th=function(){var t=Re();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,o=n.progressiveRender,a=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^a||o^s)&&"reset"}},Ih=Re(),Dh=Th();dr.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){gr(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){gr(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};var Ah=dr.prototype;Ah.updateView=Ah.updateLayout=Ah.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},Ve(dr),Ge(dr,{registerWhenExtend:!0}),dr.markUpdateMethod=function(t,e){Ih(t).updateMethod=e};var Oh={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},Ph={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof uc||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}},Lh={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},Eh=function(t,e){function n(t,e){if("string"!=typeof t)return t;var n=t;return c(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function i(t){var e=r.get(t);if(null==e){for(var n=t.split("."),i=Lh.aria,o=0;o<n.length;++o)i=i[n[o]];return i}return e}var r=e.getModel("aria");if(r.get("show"))if(r.get("description"))t.setAttribute("aria-label",r.get("description"));else{var o=0;e.eachSeries(function(t,e){++o},this);var a,s=r.get("data.maxCount")||10,l=r.get("series.maxCount")||10,u=Math.min(o,l);if(!(o<1)){var h=function(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();a=h?n(i("general.withTitle"),{title:h}):i("general.withoutTitle");var f=[];a+=n(i(o>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:o}),e.eachSeries(function(t,e){if(e<u){var r,a=t.get("name"),l="series."+(o>1?"multiple":"single")+".";r=n(r=i(a?l+"withName":l+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:function(t){return Lh.series.typeNames[t]||"自定义图"}(t.subType)});var c=t.getData();window.data=c,c.count()>s?r+=n(i("data.partialData"),{displayCnt:s}):r+=i("data.allData");for(var h=[],d=0;d<c.count();d++)if(d<s){var p=c.getName(d),g=er(c,d);h.push(n(i(p?"data.withName":"data.withoutName"),{name:p,value:g}))}r+=h.join(i("data.separator.middle"))+i("data.separator.end"),f.push(r)}}),a+=f.join(i("series.multiple.separator.middle"))+i("series.multiple.separator.end"),t.setAttribute("aria-label",a)}}},Nh=Math.PI,Rh=yr.prototype;Rh.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},Rh.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,o=i&&i.modDataCount;return{step:r,modBy:null!=o?Math.ceil(o/r):null,modDataCount:o}}},Rh.getPipeline=function(t){return this._pipelineMap.get(t)},Rh.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,o=t.get("large")&&i>=t.get("largeThreshold"),a="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:a,large:o}},Rh.restorePipelines=function(t){var e=this,n=e._pipelineMap=E();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),Ir(e,t,t.dataTask)})},Rh.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;c(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&function(t,e,n,i,r){function o(n){var o=n.uid,s=a.get(o)||a.set(o,ir({plan:Mr,reset:Cr,count:Tr}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},Ir(t,n,s)}var a=n.seriesTaskMap||(n.seriesTaskMap=E()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(o):s?i.eachRawSeriesByType(s,o):l&&l(i,r).each(o);var u=t._pipelineMap;a.each(function(t,e){u.get(e)||(t.dispose(),a.removeKey(e))})}(this,i,r,e,n),i.overallReset&&function(t,e,n,i,r){function o(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,ir({reset:wr,onDirty:Sr})),a.dirty()),i.context={model:e,overallProgress:h,modifyOutputEnd:f},i.agent=a,i.__block=h,Ir(t,e,i)}var a=n.overallTask=n.overallTask||ir({reset:xr});a.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=a.agentStubMap=a.agentStubMap||E(),l=e.seriesType,u=e.getTargetSeries,h=!0,f=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,o):u?u(i,r).each(o):(h=!1,c(i.getSeries(),o));var d=t._pipelineMap;s.each(function(t,e){d.get(e)||(t.dispose(),a.dirty(),s.removeKey(e))})}(this,i,r,e,n)},this)},Rh.prepareView=function(t,e,n,i){var r=t.renderTask,o=r.context;o.model=e,o.ecModel=n,o.api=i,r.__block=!t.incrementalPrepareRender,Ir(this,e,r)},Rh.performDataProcessorTasks=function(t,e){_r(this,this._dataProcessorHandlers,t,e,{block:!0})},Rh.performVisualTasks=function(t,e,n){_r(this,this._visualHandlers,t,e,n)},Rh.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},Rh.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var Bh=Rh.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},zh=kr(0);yr.wrapStageHandler=function(t,e){return m(t)&&(t={overallReset:t,seriesType:function(t){$h=null;try{t(Fh,Vh)}catch(t){}return $h}(t)}),t.uid=ai("stageHandler"),e&&(t.visualType=e),t};var $h,Fh={},Vh={};Dr(Fh,th),Dr(Vh,Ni),Fh.eachSeriesByType=Fh.eachRawSeriesByType=function(t){$h=t},Fh.eachComponent=function(t){"series"===t.mainType&&t.subType&&($h=t.subType)};var jh=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],Hh={color:jh,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],jh]},Wh=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],Gh={color:Wh,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:Wh[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:Wh},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};Gh.categoryAxis.splitLine.show=!1,zc.extend({type:"dataset",defaultOption:{seriesLayoutBy:Zc,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){!function(t){var e=t.option.source,n=Xc;if(w(e))n=Yc;else if(v(e))for(var i=0,r=e.length;i<r;i++){var o=e[i];if(null!=o){if(v(o)){n=Gc;break}if(_(o)){n=Uc;break}}}else if(_(e)){for(var a in e)if(e.hasOwnProperty(a)&&u(e[a])){n=qc;break}}else if(null!=e)throw new Error("Invalid data");Jc(t).sourceFormat=n}(this)}}),Ch.extend({type:"dataset"});var Uh=D,qh=c,Xh=m,Yh=_,Zh=zc.parseClassType,Kh=1e3,Jh=1e3,Qh=3e3,tf={PROCESSOR:{FILTER:Kh,STATISTIC:5e3},VISUAL:{LAYOUT:Jh,GLOBAL:2e3,CHART:Qh,COMPONENT:4e3,BRUSH:5e3}},ef="__flagInMainProcess",nf="__optionUpdated",rf=/^[a-zA-Z0-9_]+$/;Or.prototype.on=Ar("on"),Or.prototype.off=Ar("off"),Or.prototype.one=Ar("one"),l(Or,gs);var of=Pr.prototype;of._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[nf]){var e=this[nf].silent;this[ef]=!0,Er(this),af.update.call(this),this[ef]=!1,this[nf]=!1,zr.call(this,e),$r.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api,t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),Rr(this,i),t.performVisualTasks(i),Hr(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},of.getDom=function(){return this._dom},of.getZr=function(){return this._zr},of.setOption=function(t,e,n){var i;if(Yh(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[ef]=!0,!this._model||e){var r=new Bi(this._api),o=this._theme,a=this._model=new th(null,null,o,r);a.scheduler=this._scheduler,a.init(null,null,o,r)}this._model.setOption(t,hf),n?(this[nf]={silent:i},this[ef]=!1):(Er(this),af.update.call(this),this._zr.flush(),this[nf]=!1,this[ef]=!1,zr.call(this,i),$r.call(this,i))},of.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},of.getModel=function(){return this._model},of.getOption=function(){return this._model&&this._model.getOption()},of.getWidth=function(){return this._zr.getWidth()},of.getHeight=function(){return this._zr.getHeight()},of.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},of.getRenderedCanvas=function(t){if(Ka.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},of.getSvgDataUrl=function(){if(Ka.svgSupported){var t=this._zr;return c(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},of.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;qh(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var o="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return qh(i,function(t){t.group.ignore=!1}),o},of.getConnectedDataURL=function(t){if(Ka.canvasSupported){var n=this.group,i=Math.min,r=Math.max;if(mf[n]){var o=1/0,a=1/0,s=-1/0,l=-1/0,u=[],h=t&&t.pixelRatio||1;c(vf,function(c,h){if(c.group===n){var f=c.getRenderedCanvas(e(t)),d=c.getDom().getBoundingClientRect();o=i(d.left,o),a=i(d.top,a),s=r(d.right,s),l=r(d.bottom,l),u.push({dom:f,left:d.left,top:d.top})}});var f=(s*=h)-(o*=h),d=(l*=h)-(a*=h),p=ls();p.width=f,p.height=d;var g=Ie(p);return qh(u,function(t){var e=new ve({style:{x:t.left*h-o,y:t.top*h-a,image:t.dom}});g.add(e)}),g.refreshImmediately(),p.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},of.convertToPixel=g(Lr,"convertToPixel"),of.convertFromPixel=g(Lr,"convertFromPixel"),of.containPixel=function(t,e){var n;return c(t=Be(this._model,t),function(t,i){i.indexOf("Models")>=0&&c(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var o=this._chartsMap[t.__viewId];o&&o.containPoint&&(n|=o.containPoint(e,t))}},this)},this),!!n},of.getVisual=function(t,e){var n=(t=Be(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},of.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},of.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var af={prepareAndUpdate:function(t){Er(this),af.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,o=this._scheduler;if(e){o.restoreData(e,t),o.performSeriesTasks(e),r.create(e,n),o.performDataProcessorTasks(e,t),Rr(this,e),r.update(e,n),Vr(e),o.performVisualTasks(e,t),jr(this,e,n,t);var a=e.get("backgroundColor")||"transparent";if(Ka.canvasSupported)i.setBackgroundColor(a);else{var s=ft(a);a=pt(s,"rgb"),0===s[3]&&(a="transparent")}Wr(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(o,a){var s=n.getViewOfComponentModel(a);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(a,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var o=E();e.eachSeries(function(r){var a=n._chartsMap[r.__viewId];if(a.updateTransform){var s=a.updateTransform(r,e,i,t);s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),Vr(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),Hr(n,e,0,t,o),Wr(e,this._api)}},updateView:function(t){var e=this._model;e&&(dr.markUpdateMethod(t,"updateView"),Vr(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),jr(this,this._model,this._api,t),Wr(e,this._api))},updateVisual:function(t){af.update.call(this,t)},updateLayout:function(t){af.update.call(this,t)}};of.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[ef]=!0,n&&Er(this),af.update.call(this),this[ef]=!1,zr.call(this,i),$r.call(this,i)}},of.showLoading=function(t,e){if(Yh(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),gf[t]){var n=gf[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},of.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},of.makeActionFromEvent=function(t){var e=i({},t);return e.type=uf[t.type],e},of.dispatchAction=function(t,e){Yh(e)||(e={silent:!!e}),lf[t.type]&&this._model&&(this[ef]?this._pendingActions.push(t):(Br.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&Ka.browser.weChat&&this._throttledZrFlush(),zr.call(this,e.silent),$r.call(this,e.silent)))},of.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},of.on=Ar("on"),of.off=Ar("off"),of.one=Ar("one");var sf=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];of._initEvents=function(){qh(sf,function(t){this._zr.on(t,function(e){var n,r=this.getModel(),o=e.target;if("globalout"===t)n={};else if(o&&null!=o.dataIndex){var a=o.dataModel||r.getSeriesByIndex(o.seriesIndex);n=a&&a.getDataParams(o.dataIndex,o.dataType)||{}}else o&&o.eventData&&(n=i({},o.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),qh(uf,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},of.isDisposed=function(){return this._disposed},of.clear=function(){this.setOption({series:[]},!0)},of.dispose=function(){if(!this._disposed){this._disposed=!0,$e(this.getDom(),xf,"");var t=this._api,e=this._model;qh(this._componentsViews,function(n){n.dispose(e,t)}),qh(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete vf[this.id]}},l(Pr,gs);var lf={},uf={},cf=[],hf=[],ff=[],df=[],pf={},gf={},vf={},mf={},yf=new Date-0,_f=new Date-0,xf="_echarts_instance_",wf={},bf=qr;to(2e3,Ph),Zr(ph),Kr(5e3,function(t){var e=E();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),o={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!o.stackedDimension||!o.isStackedByIndex&&!o.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(o)}}),e.each(qi)}),no("default",function(t,e){r(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new ic({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new sc({shape:{startAngle:-Nh/2,endAngle:-Nh/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),o=new ic({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*Nh/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*Nh/2}).delay(300).start("circularInOut");var a=new Ws;return a.add(i),a.add(o),a.add(n),a.resize=function(){var e=t.getWidth()/2,r=t.getHeight()/2;i.setShape({cx:e,cy:r});var a=i.shape.r;o.setShape({x:e-a,y:r-a,width:2*a,height:2*a}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),Jr({type:"highlight",event:"highlight",update:"highlight"},N),Jr({type:"downplay",event:"downplay",update:"downplay"},N),Yr("light",Hh),Yr("dark",Gh);so.prototype={constructor:so,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(lo(t,{},i,"_oldKeyGetter",this),lo(e,n,r,"_newKeyGetter",this),o=0;o<t.length;o++)null!=(s=n[a=i[o]])?((u=s.length)?(1===u&&(n[a]=null),s=s.unshift()):n[a]=null,this._update&&this._update(s,o)):this._remove&&this._remove(o);for(var o=0;o<r.length;o++){var a=r[o];if(n.hasOwnProperty(a)){var s=n[a];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var Sf=E(["tooltip","label","itemName","itemId","seriesName"]),Mf=_,Cf="e\0\0",kf={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},Tf="undefined"==typeof Uint32Array?Array:Uint32Array,If="undefined"==typeof Uint16Array?Array:Uint16Array,Df=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],Af=["_extent","_approximateExtent","_rawExtent"],Of=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},o=0;o<t.length;o++){var a=t[o];y(a)&&(a={name:a});var s=a.name;a.type=a.type||"float",a.coordDim||(a.coordDim=s,a.coordDimIndex=0),a.otherDims=a.otherDims||{},i.push(s),n[s]=a,a.index=o,a.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=function(t){var e={},n=e.encode={},i=E(),r=[],o=[];c(t.dimensions,function(e){var a=t.getDimensionInfo(e),s=a.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[a.coordDimIndex]=e,a.isExtraCoord||(i.set(s,1),function(t){return!("ordinal"===t||"time"===t)}(a.type)&&(r[0]=e)),a.defaultTooltip&&o.push(e)}Sf.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=a.otherDims[e];null!=r&&!1!==r&&(i[r]=a.name)})});var a=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],a=a.concat(i)}),e.dataDimsOnCoord=a,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?o=u.slice():o.length||(o=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=o,e}(this),this._invertedIndicesMap=r,this._calculationInfo={}},Pf=Of.prototype;Pf.type="list",Pf.hasItemOption=!0,Pf.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},Pf.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},Pf.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},Pf.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},Pf.initData=function(t,e,n){(ki.isInstance(t)||u(t))&&(t=new Xi(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=yh[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},Pf.getProvider=function(){return this._rawData},Pf.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},Pf._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,o=this._storage,a=this.dimensions,s=a.length,l=this._dimensionInfos,u=this._nameList,c=this._idList,h=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=d-1,g=0;g<s;g++){h[k=a[g]]||(h[k]=[1/0,-1/0]);var v=l[k];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=kf[v.type];o[k]||(o[k]=[]);var y=o[k][p];if(y&&y.length<i){for(var _=new m(Math.min(e-p*i,i)),x=0;x<y.length;x++)_[x]=y[x];o[k][p]=_}for(C=d*i;C<e;C+=i)o[k].push(new m(Math.min(e-C,i)));this._chunkCount=o[k].length}for(var w=new Array(s),b=t;b<e;b++){w=r.getItem(b,w);for(var S=Math.floor(b/i),M=b%i,C=0;C<s;C++){var k=a[C],T=o[k][S],I=this._dimValueGetter(w,k,b,C);T[M]=I;var D=h[k];I<D[0]&&(D[0]=I),I>D[1]&&(D[1]=I)}if(!r.pure){var A=u[b];if(w&&null==A)if(null!=w.name)u[b]=A=w.name;else if(null!=n){var O=a[n],P=o[O][S];if(P){A=P[M];var L=l[O].ordinalMeta;L&&L.categories.length&&(A=L.categories[A])}}var E=null==w?null:w.id;null==E&&null!=A&&(f[A]=f[A]||0,E=A,f[A]>0&&(E+="__ec__"+f[A]),f[A]++),null!=E&&(c[b]=E)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},fo(this)}},Pf.count=function(){return this._count},Pf.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array)for(i=new e(n),r=0;r<n;r++)i[r]=t[r];else i=new e(t.buffer,0,n)}else for(var i=new(e=uo(this))(this.count()),r=0;r<i.length;r++)i[r]=r;return i},Pf.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},Pf.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},Pf._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},Pf.getValues=function(t,e){var n=[];v(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},Pf.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},Pf.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],o=n[1],a=0;a<i;a++){var s=this._getFast(t,this.getRawIndex(a));s<r&&(r=s),s>o&&(o=s)}return n=[r,o],this._extent[t]=n,n},Pf.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},Pf.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},Pf.getCalculationInfo=function(t){return this._calculationInfo[t]},Pf.setCalculationInfo=function(t,e){Mf(t)?i(this._calculationInfo,t):this._calculationInfo[t]=e},Pf.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},Pf.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},Pf.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},Pf.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},Pf.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},Pf.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,o=-1,a=0,s=this.count();a<s;a++){var l=e-this.get(t,a),u=Math.abs(l);l<=n&&u<=r&&((u<r||l>=0&&o<0)&&(r=u,o=l,i.length=0),i.push(a))}return i},Pf.getRawIndex=go,Pf.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},Pf.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||po(this,this._nameDimIdx,e)||""},Pf.getId=function(t){return mo(this,this.getRawIndex(t))},Pf.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=h(yo(t),this.getDimension,this)).length,o=0;o<this.count();o++)switch(r){case 0:e.call(n,o);break;case 1:e.call(n,this.get(t[0],o),o);break;case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o);break;default:for(var a=0,s=[];a<r;a++)s[a]=this.get(t[a],o);s[a]=o,e.apply(n,s)}}},Pf.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=h(yo(t),this.getDimension,this);for(var r=this.count(),o=new(uo(this))(r),a=[],s=t.length,l=0,u=t[0],c=0;c<r;c++){var f,d=this.getRawIndex(c);if(0===s)f=e.call(n,c);else if(1===s){var p=this._getFast(u,d);f=e.call(n,p,c)}else{for(var g=0;g<s;g++)a[g]=this._getFast(u,d);a[g]=c,f=e.apply(n,a)}f&&(o[l++]=d)}return l<r&&(this._indices=o),this._count=l,this._extent={},this.getRawIndex=this._indices?vo:go,this}},Pf.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),o=new(uo(this))(r),a=0,s=e[0],l=t[s][0],u=t[s][1],c=!1;if(!this._indices){var h=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)((w=p[v])>=l&&w<=u||isNaN(w))&&(o[a++]=h),h++;c=!0}else if(2===i){f=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(d=0;d<this._chunkCount;d++){p=f[d];var x=m[d];for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var w=p[v],b=x[v];(w>=l&&w<=u||isNaN(w))&&(b>=y&&b<=_||isNaN(b))&&(o[a++]=h),h++}}c=!0}}if(!c)if(1===i)for(v=0;v<r;v++)M=this.getRawIndex(v),((w=this._getFast(s,M))>=l&&w<=u||isNaN(w))&&(o[a++]=M);else for(v=0;v<r;v++){var S=!0,M=this.getRawIndex(v);for(d=0;d<i;d++){var C=e[d];((w=this._getFast(n,M))<t[C][0]||w>t[C][1])&&(S=!1)}S&&(o[a++]=this.getRawIndex(v))}return a<r&&(this._indices=o),this._count=a,this._extent={},this.getRawIndex=this._indices?vo:go,this}}},Pf.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},Pf.map=function(t,e,n,i){n=n||i||this;var r=_o(this,t=h(yo(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?vo:go;for(var o=r._storage,a=[],l=this._chunkSize,u=t.length,c=this.count(),f=[],d=r._rawExtent,p=0;p<c;p++){for(var g=0;g<u;g++)f[g]=this.get(t[g],p);f[u]=p;var v=e&&e.apply(n,f);if(null!=v){"object"!=(void 0===v?"undefined":s(v))&&(a[0]=v,v=a);for(var m=this.getRawIndex(p),y=Math.floor(m/l),_=m%l,x=0;x<v.length;x++){var w=t[x],b=v[x],S=d[w],M=o[w];M&&(M[y][_]=b),b<S[0]&&(S[0]=b),b>S[1]&&(S[1]=b)}}}return r},Pf.downSample=function(t,e,n,i){for(var r=_o(this,[t]),o=r._storage,a=[],s=Math.floor(1/e),l=o[t],u=this.count(),c=this._chunkSize,h=r._rawExtent[t],f=new(uo(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,a.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/c),y=v%c;a[g]=l[m][y]}var _=n(a),x=this.getRawIndex(Math.min(p+i(a,_)||0,u-1)),w=x%c;l[Math.floor(x/c)][w]=_,_<h[0]&&(h[0]=_),_>h[1]&&(h[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=vo,r},Pf.getItemModel=function(t){var e=this.hostModel;return new ii(this.getRawDataItem(t),e,e&&e.ecModel)},Pf.diff=function(t){var e=this;return new so(t?t.getIndices():[],this.getIndices(),function(e){return mo(t,e)},function(t){return mo(e,t)})},Pf.getVisual=function(t){var e=this._visual;return e&&e[t]},Pf.setVisual=function(t,e){if(Mf(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},Pf.setLayout=function(t,e){if(Mf(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},Pf.getLayout=function(t){return this._layout[t]},Pf.getItemLayout=function(t){return this._itemLayouts[t]},Pf.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?i(this._itemLayouts[t]||{},e):e},Pf.clearItemLayouts=function(){this._itemLayouts.length=0},Pf.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},Pf.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,Mf(e))for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o],r[o]=!0);else i[e]=n,r[e]=!0},Pf.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var Lf=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};Pf.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(Lf,e)),this._graphicEls[t]=e},Pf.getItemGraphicEl=function(t){return this._graphicEls[t]},Pf.eachItemGraphicEl=function(t,e){c(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},Pf.cloneShallow=function(t){if(!t){var e=h(this.dimensions,this.getDimensionInfo,this);t=new Of(e,this.hostModel)}if(t._storage=this._storage,ho(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?vo:go,t},Pf.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(T(arguments)))})},Pf.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],Pf.CHANGABLE_METHODS=["filterSelf","selectRange"];var Ef=function(t,e){return wo((e=e||{}).coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Mh.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return Mo(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var Nf=Cn({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),Rf=Cn({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),Bf=Cn({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),c=Math.cos(u)*a,h=Math.sin(u),f=Math.cos(u),d=.6*a,p=.7*a;t.moveTo(n-c,l+s),t.arc(n,l,a,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+c-h*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-c+h*d,l+s+f*d,n-c,l+s),t.closePath()}}),zf=Cn({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2;t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),$f={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i);r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},Ff={};c({line:rc,rect:ic,roundRect:ic,square:ic,circle:Xu,diamond:Rf,pin:Bf,arrow:zf,triangle:Nf},function(t,e){Ff[e]=new t});var Vf=Cn({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=Ff[i];"none"!==e.symbolType&&(r||(r=Ff[i="rect"]),$f[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),jf=Io.prototype,Hf=Io.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};jf._createSymbol=function(t,e,n,i,r){this.removeAll();var o=ko(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);o.attr({z2:100,culling:!0,scale:Do(i)}),o.drift=Ao,this._symbolType=t,this.add(o)},jf.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},jf.getSymbolPath=function(){return this.childAt(0)},jf.getScale=function(){return this.childAt(0).scale},jf.highlight=function(){this.childAt(0).trigger("emphasis")},jf.downplay=function(){this.childAt(0).trigger("normal")},jf.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},jf.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},jf.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=Hf(t,e),a=i!==this._symbolType;if(a){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,o,s)}else(l=this.childAt(0)).silent=!1,Qn(l,{scale:Do(o)},r,e);if(this._updateCommon(t,e,o,n),a){var l=this.childAt(0),u=n&&n.fadeIn,c={scale:l.scale.slice()};u&&(c.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),ti(l,c,r,e)}this._seriesModel=r};var Wf=["itemStyle"],Gf=["emphasis","itemStyle"],Uf=["label"],qf=["emphasis","label"];jf._updateCommon=function(t,e,n,r){var o=this.childAt(0),a=t.hostModel,s=t.getItemVisual(e,"color");"image"!==o.type&&o.useStyle({strokeNoScale:!0});var l=r&&r.itemStyle,u=r&&r.hoverItemStyle,c=r&&r.symbolRotate,h=r&&r.symbolOffset,f=r&&r.labelModel,d=r&&r.hoverLabelModel,p=r&&r.hoverAnimation,g=r&&r.cursorStyle;if(!r||t.hasItemOption){var v=r&&r.itemModel?r.itemModel:t.getItemModel(e);l=v.getModel(Wf).getItemStyle(["color"]),u=v.getModel(Gf).getItemStyle(),c=v.getShallow("symbolRotate"),h=v.getShallow("symbolOffset"),f=v.getModel(Uf),d=v.getModel(qf),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else u=i({},u);var m=o.style;o.attr("rotation",(c||0)*Math.PI/180||0),h&&o.attr("position",[li(h[0],n[0]),li(h[1],n[1])]),g&&o.attr("cursor",g),o.setColor(s,r&&r.symbolInnerColor),o.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var _=t.getItemVisual(e,"liftZ"),x=o.__z2Origin;null!=_?null==x&&(o.__z2Origin=o.z2,o.z2+=_):null!=x&&(o.z2=x,o.__z2Origin=null);var w=r&&r.useNameLabel;Gn(m,u,f,d,{labelFetcher:a,labelDataIndex:e,defaultText:function(e,n){return w?t.getName(e):To(t,e)},isRectText:!0,autoColor:s}),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),o.hoverStyle=u,Wn(o);var b=Do(n);if(p&&a.isAnimationEnabled()){var S=function(){if(!this.incremental){var t=b[1]/b[0];this.animateTo({scale:[Math.max(1.1*b[0],b[0]+3),Math.max(1.1*b[1],b[1]+3*t)]},400,"elasticOut")}},M=function(){this.incremental||this.animateTo({scale:b},400,"elasticOut")};o.on("mouseover",S).on("mouseout",M).on("emphasis",S).on("normal",M)}},jf.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),Qn(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},a(Io,Ws);var Xf=Oo.prototype;Xf.updateData=function(t,e){e=Lo(e);var n=this.group,i=t.hostModel,r=this._data,o=this._symbolCtor,a=Eo(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(Po(t,r,i,e)){var s=new o(t,i,a);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),c=t.getItemLayout(s);Po(t,c,s,e)?(u?(u.updateData(t,s,a),Qn(u,{position:c},i)):(u=new o(t,s)).attr("position",c),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},Xf.isPersistent=function(){return!0},Xf.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},Xf.incrementalPrepareUpdate=function(t){this._seriesScope=Eo(t),this._data=null,this.group.removeAll()},Xf.incrementalUpdate=function(t,e,n){n=Lo(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(Po(e,r,i,n)){var o=new this._symbolCtor(e,i,this._seriesScope);o.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),o.attr("position",r),this.group.add(o),e.setItemGraphicEl(i,o)}}},Xf.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var Yf=W,Zf=G,Kf=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},Jf=function(t,e){return t[0]=e[0],t[1]=e[1],t},Qf=[],td=[],ed=[],nd=yn.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:Zu(yn.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,o=$o(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Bo(n[r-1]);r--);for(;i<r&&Bo(n[i]);i++);}for(;i<r;)i+=zo(t,n,i,r,r,1,o.min,o.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),id=yn.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:Zu(yn.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,o=n.length,a=e.smoothMonotone,s=$o(n,e.smoothConstraint),l=$o(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&Bo(n[o-1]);o--);for(;r<o&&Bo(n[r]);r++);}for(;r<o;){var u=zo(t,n,r,o,o,1,s.min,s.max,e.smooth,a,e.connectNulls);zo(t,i,r+u-1,u,o,-1,l.min,l.max,e.stackedOnSmooth,a,e.connectNulls),r+=u+1,t.closePath()}}});dr.extend({type:"line",init:function(){var t=new Ws,e=new Oo;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,o=this.group,a=t.getData(),s=t.getModel("lineStyle"),l=t.getModel("areaStyle"),u=a.mapArray(a.getItemLayout),c="polar"===i.type,h=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!l.isEmpty(),y=l.get("origin"),_=function(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,o=e.count();r<o;r++)i.push(Ro(n,t,e,r));return i}(i,a,No(i,a,y)),x=t.get("showSymbol"),w=x&&!c&&Uo(t,a,i),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(o.remove(t),b.setItemGraphicEl(e,null))}),x||f.remove(),o.add(g);var S=!c&&t.get("step");d&&h.type===i.type&&S===this._step?(m&&!p?p=this._newPolygon(u,_,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(Ho(i,!1,!1,t)),x&&f.updateData(a,{isIgnore:w,clipShape:Ho(i,!1,!0,t)}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),Fo(this._stackedOnPoints,_)&&Fo(this._points,u)||(v?this._updateAnimation(a,_,i,n,S,y):(S&&(u=Wo(u,i,S),_=Wo(_,i,S)),d.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:_})))):(x&&f.updateData(a,{isIgnore:w,clipShape:Ho(i,!1,!0,t)}),S&&(u=Wo(u,i,S),_=Wo(_,i,S)),d=this._newPolyline(u,i,v),m&&(p=this._newPolygon(u,_,i,v)),g.setClipPath(Ho(i,!0,!1,t)));var M=Go(a,i)||a.getVisual("color");d.useStyle(r(s.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var C=t.get("smooth");if(C=Vo(t.get("smooth")),d.setShape({smooth:C,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var k=a.getCalculationInfo("stackedOnSeries"),T=0;p.useStyle(r(l.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),k&&(T=Vo(k.get("smooth"))),p.setShape({smooth:C,stackedOnSmooth:T,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=i,this._stackedOnPoints=_,this._points=u,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=Ne(r,i);if(!(o instanceof Array)&&null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);if(!s)return;(a=new Io(r,o)).position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a)}a.highlight()}else dr.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),o=Ne(r,i);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else dr.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new nd({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new id({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,o){var a=this._polyline,s=this._polygon,l=t.hostModel,u=function(t,e,n,i,r,o,a,s){for(var l=function(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}(t,e),u=[],c=[],h=[],f=[],d=[],p=[],g=[],v=No(r,e,a),m=No(o,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var w=t.getItemLayout(_.idx),b=e.getItemLayout(_.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),c.push(b),h.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":S=_.idx,u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),c.push(e.getItemLayout(S).slice()),h.push(Ro(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":var S=_.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),c.push(o.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),h.push(n[S]),f.push(Ro(m,o,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var C=[],k=[],T=[],I=[],D=[];for(y=0;y<p.length;y++)S=p[y],C[y]=u[S],k[y]=c[S],T[y]=h[S],I[y]=f[S],D[y]=d[S];return{current:C,next:k,stackedOnCurrent:T,stackedOnNext:I,status:D}}(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,o),c=u.current,h=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(c=Wo(u.current,n,r),h=Wo(u.stackedOnCurrent,n,r),f=Wo(u.next,n,r),d=Wo(u.stackedOnNext,n,r)),a.shape.__points=u.current,a.shape.points=c,Qn(a,{shape:{points:f}},l),s&&(s.setShape({points:c,stackedOnPoints:h}),Qn(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}a.animators&&a.animators.length&&a.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",a.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var rd={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},od=function(t,e){return Math.round(t.length/2)};qo.prototype.parse=function(t){return t},qo.prototype.getSetting=function(t){return this._setting[t]},qo.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},qo.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},qo.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},qo.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},qo.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},qo.prototype.getExtent=function(){return this._extent.slice()},qo.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},qo.prototype.isBlank=function(){return this._isBlank},qo.prototype.setBlank=function(t){this._isBlank=t},qo.prototype.getLabel=null,Ve(qo),Ge(qo,{registerWhenExtend:!0}),Xo.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&h(n,Zo);return new Xo({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var ad=Xo.prototype;ad.getOrdinal=function(t){return Yo(this).get(t)},ad.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Yo(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var sd=qo.prototype,ld=qo.extend({type:"ordinal",init:function(t,e){t&&!v(t)||(t=new Xo({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),sd.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return sd.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(sd.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:N,niceExtent:N});ld.create=function(){return new ld};var ud=ui,cd=ui,hd=qo.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),hd.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Ko(t)},getTicks:function(){return function(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var o=n[0];o<=n[1]&&(r.push(o),(o=ud(o+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=ci(t)||0:"auto"===n&&(n=this._intervalPrecision),vi(t=cd(t,n,!0))},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var o=function(t,e,n,i){var r={},o=t[1]-t[0],a=r.interval=gi(o/e,!0);null!=n&&a<n&&(a=r.interval=n),null!=i&&a>i&&(a=r.interval=i);var s=r.intervalPrecision=Ko(a);return Qo(r.niceTickExtent=[ud(Math.ceil(t[0]/a)*a,s),ud(Math.floor(t[1]/a)*a,s)],t),r}(i,t,e,n);this._intervalPrecision=o.intervalPrecision,this._interval=o.interval,this._niceExtent=o.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=cd(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=cd(Math.ceil(e[1]/r)*r))}});hd.create=function(){return new hd};var fd="__ec_stack_",dd="undefined"!=typeof Float32Array?Float32Array:Array,pd={seriesType:"bar",plan:Th(),reset:function(t){if(oa(t)&&aa(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),o=e.mapDimension(r.dim),a=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=ra(ia([t]),i,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var c,h=new dd(2*t.count),f=[],d=[],p=0;null!=(c=t.next());)d[l]=e.get(o,c),d[1-l]=e.get(a,c),f=n.dataToPoint(d,null,f),h[p++]=f[0],h[p++]=f[1];e.setLayout({largePoints:h,barWidth:u,valueAxisStart:sa(i,r,!1),valueAxisHorizontal:s})}}}}},gd=hd.prototype,vd=Math.ceil,md=Math.floor,yd=hd.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return xi(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=ui(md(e[0]/i)*i)),t.fixMax||(e[1]=ui(vd(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],o=r/t;null!=e&&o<e&&(o=e),null!=n&&o>n&&(o=n);var a=_d.length,s=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n}(_d,o,0,a),l=_d[Math.min(s,a-1)],u=l[1];"year"===l[0]&&(u*=gi(r/u/t,!0));var c=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,h=[Math.round(vd((i[0]-c)/u)*u+c),Math.round(md((i[1]-c)/u)*u+c)];Qo(h,i),this._stepLvl=l,this._interval=u,this._niceExtent=h},parse:function(t){return+di(t)}});c(["contain","normalize"],function(t){yd.prototype[t]=function(e){return gd[t].call(this,this.parse(e))}});var _d=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];yd.create=function(t){return new yd({useUTC:t.ecModel.get("useUTC")})};var xd=qo.prototype,wd=hd.prototype,bd=ci,Sd=ui,Md=Math.floor,Cd=Math.ceil,kd=Math.pow,Td=Math.log,Id=qo.extend({type:"log",base:10,$constructor:function(){qo.apply(this,arguments),this._originalScale=new hd},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return h(wd.getTicks.call(this),function(i){var r=ui(kd(this.base,i));return r=i===e[0]&&t.__fixMin?la(r,n[0]):r,i===e[1]&&t.__fixMax?la(r,n[1]):r},this)},getLabel:wd.getLabel,scale:function(t){return t=xd.scale.call(this,t),kd(this.base,t)},setExtent:function(t,e){var n=this.base;t=Td(t)/Td(n),e=Td(e)/Td(n),wd.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=xd.getExtent.call(this);e[0]=kd(t,e[0]),e[1]=kd(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=la(e[0],i[0])),n.__fixMax&&(e[1]=la(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=Td(t[0])/Td(e),t[1]=Td(t[1])/Td(e),xd.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=function(t){return Math.pow(10,pi(t))}(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[ui(Cd(e[0]/i)*i),ui(Md(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){wd.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});c(["contain","normalize"],function(t){Id.prototype[t]=function(e){return e=Td(e)/Td(this.base),xd[t].call(this,e)}}),Id.create=function(){return new Id};var Dd=function(t){this._axes={},this._dimList=[],this.name=t||""};Dd.prototype={constructor:Dd,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return h(this._dimList,da,this)},getAxesByScale:function(t){return t=t.toLowerCase(),d(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var o=n[r],a=this._axes[o];i[o]=a[e](t[o])}return i}},pa.prototype={constructor:pa,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return(n=n||[])[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),o=i.getExtent(),a=n.parse(t[0]),s=i.parse(t[1]);return(e=e||[])[0]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return(e=e||[])[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},a(pa,Dd);var Ad=Re(),Od=[0,1],Pd=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};Pd.prototype={constructor:Pd,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return function(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20);return isFinite(a)?a:20}(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&Ma(n=n.slice(),i.count()),si(t,Od,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&Ma(n=n.slice(),i.count());var r=si(t,n,Od,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=va(this,e),i=h(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return function(t,e,n,i,r){function o(t,e){return h?t>e:t<e}var a=e.length;if(t.onBand&&!i&&a){var s,l=t.getExtent();if(1===a)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;c(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[a-1].coord+u},e.push(s)}var h=l[0]>l[1];o(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&o(l[0],e[0].coord)&&e.unshift({coord:l[0]}),o(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&o(s.coord,l[1])&&e.push({coord:l[1]})}}(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return ga(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return function(t){var e=function(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),n=ha(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,o=r.getExtent(),a=r.count();if(o[1]-o[0]<1)return 0;var s=1;a>40&&(s=Math.max(1,Math.floor(a/40)));for(var l=o[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),c=Math.abs(u*Math.cos(i)),h=Math.abs(u*Math.sin(i)),f=0,d=0;l<=o[1];l+=s){var p,g,v=Vt(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/c,y=d/h;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=Ad(t.model),w=x.lastAutoInterval,b=x.lastTickCount;return null!=w&&null!=b&&Math.abs(w-_)<=1&&Math.abs(b-a)<=1&&w>_?_=w:(x.lastTickCount=a,x.lastAutoInterval=_),_}(this)}};var Ld=function(t,e,n,i,r){Pd.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};Ld.prototype={constructor:Ld,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},a(Ld,Pd);var Ed={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},Nd={};Nd.categoryAxis=n({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},Ed),Nd.valueAxis=n({boundaryGap:[0,0],splitNumber:5},Ed),Nd.timeAxis=r({scale:!0,min:"dataMin",max:"dataMax"},Nd.valueAxis),Nd.logAxis=r({scale:!0,logBase:10},Nd.valueAxis);var Rd=["value","category","time","log"],Bd=function(t,e,i,r){c(Rd,function(o){e.extend({type:t+"Axis."+o,mergeDefaultAndTheme:function(e,r){var a=this.layoutMode,s=a?Si(e):{};n(e,r.getTheme().get(o+"Axis")),n(e,this.getDefaultOption()),e.type=i(t,e),a&&bi(e,s,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=Xo.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:function(t,e){for(var i=t[0],r=1,o=t.length;r<o;r++)i=n(i,t[r],e);return i}([{},Nd[o+"Axis"],r],!0)})}),zc.registerSubTypeDefaulter(t+"Axis",g(i,t))},zd={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!S(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!S(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:N,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},$d=zc.extend({type:"cartesian2dAxis",axis:null,init:function(){$d.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){$d.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){$d.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});n($d.prototype,zd);var Fd={offset:0};Bd("x",$d,Ca,Fd),Bd("y",$d,Ca,Fd),zc.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var Vd=Ta.prototype;Vd.type="grid",Vd.axisPointerEnabled=!0,Vd.getRect=function(){return this._rect},Vd.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),c(n.x,function(t){ca(t.scale,t.model)}),c(n.y,function(t){ca(t.scale,t.model)}),c(n.x,function(t){Ia(n,"y",t)}),c(n.y,function(t){Ia(n,"x",t)}),this.resize(this.model,e)},Vd.resize=function(t,e,n){function i(){c(o,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),function(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}(t,e?r.x:r.y)})}var r=function(t,e,n){n=Tc(n||0);var i=e.width,r=e.height,o=li(t.left,i),a=li(t.top,r),s=li(t.right,i),l=li(t.bottom,r),u=li(t.width,i),c=li(t.height,r),h=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-o),isNaN(c)&&(c=r-l-h-a),null!=d&&(isNaN(u)&&isNaN(c)&&(d>i/r?u=.8*i:c=.8*r),isNaN(u)&&(u=d*c),isNaN(c)&&(c=u/d)),isNaN(o)&&(o=i-s-u-f),isNaN(a)&&(a=r-l-c-h),t.left||t.right){case"center":o=i/2-u/2-n[3];break;case"right":o=i-u-f}switch(t.top||t.bottom){case"middle":case"center":a=r/2-c/2-n[0];break;case"bottom":a=r-c-h}o=o||0,a=a||0,isNaN(u)&&(u=i-f-o-(s||0)),isNaN(c)&&(c=r-h-a-(l||0));var p=new Tt(o+n[3],a+n[0],u,c);return p.margin=n,p}(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var o=this._axesList;i(),!n&&t.get("containLabel")&&(c(o,function(t){if(!t.model.get("axisLabel.inside")){var e=function(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,o="category"===t.type,a=n.getExtent();r=o?n.count():(i=n.getTicks()).length;var s,l=t.getLabelModel(),u=ha(t),c=1;r>40&&(c=Math.ceil(r/40));for(var h=0;h<r;h+=c){var f=u(i?i[h]:a[0]+h),d=fa(l.getTextRect(f),l.get("rotate")||0);s?s.union(d):s=d}return s}}(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},Vd.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},Vd.getAxes=function(){return this._axesList.slice()},Vd.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}_(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},Vd.getCartesians=function(){return this._coordsList.slice()},Vd.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},Vd.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},Vd._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,a=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],s=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],l=e.gridModel,u=this._coordsList;return r?o(u,n=r.coordinateSystem)<0&&(n=null):a&&s?n=this.getCartesian(a.componentIndex,s.componentIndex):a?i=this.getAxis("x",a.componentIndex):s?i=this.getAxis("y",s.componentIndex):l&&l.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},Vd.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},Vd._initCartesian=function(t,e,n){function i(e){return function(n,i){if(ka(n,t)){var s=n.get("position");"x"===e?"top"!==s&&"bottom"!==s&&r[s="bottom"]&&(s="top"===s?"bottom":"top"):"left"!==s&&"right"!==s&&r[s="left"]&&(s="left"===s?"right":"left"),r[s]=!0;var l=new Ld(e,function(t,e){if(e=e||t.get("type"))switch(e){case"category":return new ld(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new hd;default:return(qo.getClass(e)||hd).create(t)}}(n),[0,0],n.get("type"),s),u="category"===l.type;l.onBand=u&&n.get("boundaryGap"),l.inverse=n.get("inverse"),n.axis=l,l.model=n,l.grid=this,l.index=i,this._axesList.push(l),o[e][i]=l,a[e]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},o={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",i("x"),this),e.eachComponent("yAxis",i("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=o,c(o.x,function(e,n){c(o.y,function(i,r){var o="x"+n+"y"+r,a=new pa(o);a.grid=this,a.model=t,this._coordsMap[o]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(i)},this)},this)},Vd._updateScale=function(t,e){function n(t,e,n){c(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,function(t,e){return So(t,e)?t.getCalculationInfo("stackResultDimension"):e}(t,n))})}c(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(t){if(Oa(t)){var i=Aa(t),r=i[0],o=i[1];if(!ka(r,e)||!ka(o,e))return;var a=this.getCartesian(r.componentIndex,o.componentIndex),s=t.getData(),l=a.getAxis("x"),u=a.getAxis("y");"list"===s.type&&(n(s,l),n(s,u))}},this)},Vd.getTooltipAxes=function(t){var e=[],n=[];return c(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),a=i.getOtherAxis(r);o(e,r)<0&&e.push(r),o(n,a)<0&&n.push(a)}),{baseAxes:e,otherAxes:n}};var jd=["xAxis","yAxis"];Ta.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var o=new Ta(i,t,e);o.name="grid_"+r,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)}),t.eachSeries(function(t){if(Oa(t)){var e=Aa(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Ta.dimensions=Ta.prototype.dimensions=pa.prototype.dimensions,Ri.register("cartesian2d",Ta);var Hd=Math.PI,Wd=function(t,e){this.opt=e,this.axisModel=t,r(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new Ws;var n=new Ws({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};Wd.prototype={constructor:Wd,hasBuilder:function(t){return!!Gd[t]},add:function(t){Gd[t].call(this)},getGroup:function(){return this.group}};var Gd={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),r=this._transform,o=[n[0],0],a=[n[1],0];r&&(H(o,o,r),H(a,a,r));var s=i({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new rc(An({anid:"line",shape:{x1:o[0],y1:o[1],x2:a[0],y2:a[1]},style:s,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),h=e.get("axisLine.symbolOffset")||0;if("number"==typeof h&&(h=[h,h]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var f=u[0],d=u[1];c([{rotate:t.rotation+Math.PI/2,offset:h[0],r:0},{rotate:t.rotation-Math.PI/2,offset:h[1],r:Math.sqrt((o[0]-a[0])*(o[0]-a[0])+(o[1]-a[1])*(o[1]-a[1]))}],function(e,n){if("none"!==l[n]&&null!=l[n]){var i=ko(l[n],-f/2,-d/2,f,d,s.stroke,!0),r=e.r+e.offset,a=[o[0]+r*Math.cos(t.rotation),o[1]-r*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:a,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=function(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var o=e.getModel("axisTick"),a=o.getModel("lineStyle"),s=o.get("length"),l=i.getTicksCoords(),u=[],c=[],h=t._transform,f=[],d=0;d<l.length;d++){var p=l[d].coord;u[0]=p,u[1]=0,c[0]=p,c[1]=n.tickDirection*s,h&&(H(u,u,h),H(c,c,h));var g=new rc(An({anid:"tick_"+l[d].tickValue,shape:{x1:u[0],y1:u[1],x2:c[0],y2:c[1]},style:r(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),f.push(g)}return f}}(this,t,e);!function(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var o=e[0],a=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],c=n[1],h=n[n.length-1],f=n[n.length-2];!1===i?(Ea(o),Ea(u)):Na(o,a)&&(i?(Ea(a),Ea(c)):(Ea(o),Ea(u))),!1===r?(Ea(s),Ea(h)):Na(l,s)&&(r?(Ea(l),Ea(f)):(Ea(s),Ea(h)))}(t,function(t,e,n){var i=e.axis;if(M(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),o=r.get("margin"),a=i.getViewLabels(),s=(M(n.labelRotate,r.get("rotate"))||0)*Hd/180,l=Ud(n.rotation,s,n.labelDirection),u=e.getCategories(!0),h=[],f=La(e),d=e.get("triggerEvent");return c(a,function(a,s){var c=a.tickValue,p=a.formattedLabel,g=a.rawLabel,v=r;u&&u[c]&&u[c].textStyle&&(v=new ii(u[c].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(c),n.labelOffset+n.labelDirection*o],_=new qu({anid:"label_"+c,position:y,rotation:l.rotation,silent:f,z2:10});Un(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?c+"":c,s):m}),d&&(_.eventData=Pa(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),h.push(_),t.group.add(_),_.decomposeTransform()}),h}}(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=M(t.axisName,e.get("name"));if(n){var r,o,a=e.get("nameLocation"),s=t.nameDirection,l=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,c=this.axisModel.axis.getExtent(),h=c[0]>c[1]?-1:1,f=["start"===a?c[0]-h*u:"end"===a?c[1]+h*u:(c[0]+c[1])/2,Ra(a)?t.labelOffset+s*u:0],d=e.get("nameRotate");null!=d&&(d=d*Hd/180),Ra(a)?r=Ud(t.rotation,null!=d?d:t.rotation,s):(r=function(t,e,n,i){var r,o,a=hi(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return fi(a-Hd/2)?(o=l?"bottom":"top",r="center"):fi(a-1.5*Hd)?(o=l?"top":"bottom",r="center"):(o="middle",r=a<1.5*Hd&&a>Hd/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}(t,a,d||0,c),null!=(o=t.axisNameAvailableWidth)&&(o=Math.abs(o/Math.sin(r.rotation)),!isFinite(o)&&(o=null)));var p=l.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=M(t.nameTruncateMaxWidth,g.maxWidth,o),y=null!=v&&null!=m?Pc(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,w={componentType:x,name:n,$vars:["name"]};w[x+"Index"]=e.componentIndex;var b=new qu({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:r.rotation,silent:La(e),z2:1,tooltip:_&&_.show?i({content:n,formatter:function(){return n},formatterParams:w},_):null});Un(b.style,l,{text:y,textFont:p,textFill:l.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:r.textAlign,textVerticalAlign:r.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=Pa(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},Ud=Wd.innerTextLayout=function(t,e,n){var i,r,o=hi(e-t);return fi(o)?(r=n>0?"top":"bottom",i="center"):fi(o-Hd)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&o<Hd?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},qd=io({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&function(t){var e=Ba(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value");null!=a&&(a=i.parse(a));var s=function(t){return!!t.get("handle.show")}(n);null==o&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==a||a>l[1])&&(a=l[1]),a<l[0]&&(a=l[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}(t),qd.superApply(this,"render",arguments),za(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i,r){za(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),qd.superApply(this,"remove",arguments)},dispose:function(t,e){$a(this,e),qd.superApply(this,"dispose",arguments)}}),Xd=[];qd.registerAxisPointerClass=function(t,e){Xd[t]=e},qd.getAxisPointerClass=function(t){return t&&Xd[t]};var Yd=["axisLine","axisTickLabel","axisName"],Zd=["splitArea","splitLine"],Kd=qd.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new Ws,this.group.add(this._axisGroup),t.get("show")){var o=t.getCoordSysModel(),a=function(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,o={},a=r.getAxesOnZeroOf()[0],s=r.position,l=a?"onZero":s,u=r.dim,c=i.getRect(),h=[c.x,c.x+c.width,c.y,c.y+c.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[h[2]-d,h[3]+d]:[h[0]-d,h[1]+d];if(a){var g=a.toGlobalCoord(a.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}o.position=["y"===u?p[f[l]]:h[0],"x"===u?p[f[l]]:h[3]],o.rotation=Math.PI/2*("x"===u?0:1),o.labelDirection=o.tickDirection=o.nameDirection={top:-1,bottom:1,left:-1,right:1}[s],o.labelOffset=a?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),M(n.labelInside,e.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var v=e.get("axisLabel.rotate");return o.labelRotate="top"===l?-v:v,o.z2=1,o}(o,t),s=new Wd(t,a);c(Yd,s.add,s),this._axisGroup.add(s.getGroup()),c(Zd,function(e){t.get(e+".show")&&this["_"+e](t,o)},this),ni(r,this._axisGroup,t),Kd.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),o=i.getModel("lineStyle"),a=o.get("color");a=v(a)?a:[a];for(var s=e.coordinateSystem.getRect(),l=n.isHorizontal(),u=0,c=n.getTicksCoords({tickModel:i}),h=[],f=[],d=o.getLineStyle(),p=0;p<c.length;p++){var g=n.toGlobalCoord(c[p].coord);l?(h[0]=g,h[1]=s.y,f[0]=g,f[1]=s.y+s.height):(h[0]=s.x,h[1]=g,f[0]=s.x+s.width,f[1]=g);var m=u++%a.length,y=c[p].tickValue;this._axisGroup.add(new rc(An({anid:null!=y?"line_"+c[p].tickValue:null,shape:{x1:h[0],y1:h[1],x2:f[0],y2:f[1]},style:r({stroke:a[m]},d),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),o=i.getModel("areaStyle"),a=o.get("color"),s=e.coordinateSystem.getRect(),l=n.getTicksCoords({tickModel:i,clamp:!0});if(l.length){var u=a.length,c=this._splitAreaColors,h=E(),f=0;if(c)for(m=0;m<l.length;m++){var d=c.get(l[m].tickValue);if(null!=d){f=(d+(u-1)*m)%u;break}}var p=n.toGlobalCoord(l[0].coord),g=o.getAreaStyle();a=v(a)?a:[a];for(var m=1;m<l.length;m++){var y,_,x,w,b=n.toGlobalCoord(l[m].coord);n.isHorizontal()?(y=p,_=s.y,x=b-y,w=s.height,p=y+x):(y=s.x,_=p,x=s.width,p=_+(w=b-_));var S=l[m-1].tickValue;null!=S&&h.set(S,f),this._axisGroup.add(new ic({anid:null!=S?"area_"+S:null,shape:{x:y,y:_,width:x,height:w},style:r({fill:a[f]},g),silent:!0})),f=(f+1)%u}this._splitAreaColors=h}}}});Kd.extend({type:"xAxis"}),Kd.extend({type:"yAxis"}),io({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new ic({shape:t.coordinateSystem.getRect(),style:r({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Zr(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),to({seriesType:"line",performRawSeries:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("symbol")||"circle",o=t.get("symbolSize"),a=t.get("symbolKeepAspect");if(i.setVisual({legendSymbol:"line",symbol:r,symbolSize:o,symbolKeepAspect:a}),!e.isSeriesFiltered(t)){var s="function"==typeof o;return{dataEach:i.hasItemOption||s?function(e,n){if("function"==typeof o){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",o(i,r))}if(e.hasItemOption){var a=e.getItemModel(n),s=a.getShallow("symbol",!0),l=a.getShallow("symbolSize",!0),u=a.getShallow("symbolKeepAspect",!0);null!=s&&e.setItemVisual(n,"symbol",s),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}),Qr({seriesType:"line",plan:Th(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=h(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),o=r.length,a=e.getCalculationInfo("stackResultDimension");return So(e,r[0])&&(r[0]=a),So(e,r[1])&&(r[1]=a),o&&{progress:function(t,e){for(var a=t.end-t.start,s=i&&new Float32Array(a*o),l=t.start,u=0,c=[],h=[];l<t.end;l++){var f;if(1===o)d=e.get(r[0],l),f=!isNaN(d)&&n.dataToPoint(d,null,h);else{var d=c[0]=e.get(r[0],l),p=c[1]=e.get(r[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(c,null,h)}i?(s[u++]=f?f[0]:NaN,s[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}),Kr(tf.PROCESSOR.STATISTIC,{seriesType:"line",modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),o=t.coordinateSystem;if("cartesian2d"===o.type&&r){var a,s=o.getBaseAxis(),l=o.getOtherAxis(s),u=s.getExtent(),c=u[1]-u[0],h=Math.round(i.count()/c);h>1&&("string"==typeof r?a=rd[r]:"function"==typeof r&&(a=r),a&&t.setData(i.downSample(i.mapDimension(l.dim),1/h,a,od)))}}}),Mh.extend({type:"series.__base_bar__",getInitialData:function(t,e){return Mo(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),o=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+o/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var Jd=Vl([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Qd={getBarItemStyle:function(t){var e=Jd(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},tp=["itemStyle","barBorderWidth"];i(ii.prototype,Qd),oo({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,o=t.getData(),a=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;o.diff(a).add(function(e){if(o.hasValue(e)){var n=o.getItemModel(e),a=np[s.type](o,e,n),l=ep[s.type](o,e,n,a,i,u);o.setItemGraphicEl(e,l),r.add(l),Ha(l,o,e,n,a,t,i,"polar"===s.type)}}).update(function(e,n){var l=a.getItemGraphicEl(n);if(o.hasValue(e)){var c=o.getItemModel(e),h=np[s.type](o,e,c);l?Qn(l,{shape:h},u,e):l=ep[s.type](o,e,c,h,i,u,!0),o.setItemGraphicEl(e,l),r.add(l),Ha(l,o,e,c,h,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=a.getItemGraphicEl(t);"cartesian2d"===s.type?e&&Va(t,u,e):e&&ja(t,u,e)}).execute(),this._data=o},_renderLarge:function(t,e,n){this._clear(),Wa(t,this.group)},_incrementalRenderLarge:function(t,e){Wa(e,this.group,!0)},dispose:N,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?ja(e.dataIndex,t,e):Va(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var ep={cartesian2d:function(t,e,n,r,o,a,s){var l=new ic({shape:i({},r)});if(a){var u=l.shape,c=o?"height":"width",h={};u[c]=0,h[c]=r[c],mc[s?"updateProps":"initProps"](l,{shape:h},a,e)}return l},polar:function(t,e,n,i,o,a,s){var l=i.startAngle<i.endAngle,u=new Ku({shape:r({clockwise:l},i)});if(a){var c=u.shape,h=o?"r":"endAngle",f={};c[h]=o?0:i.startAngle,f[h]=i[h],mc[s?"updateProps":"initProps"](u,{shape:f},a,e)}return u}},np={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=function(t,e){var n=t.get(tp)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}(n,i),o=i.width>0?1:-1,a=i.height>0?1:-1;return{x:i.x+o*r/2,y:i.y+a*r/2,width:i.width-o*r,height:i.height-a*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}},ip=yn.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,o=0;o<n.length;o+=2)i[this.__valueIdx]=n[o+r],t.moveTo(i[0],i[1]),t.lineTo(n[o],n[o+1])}});Qr(g(function(t,e){var n=na(t,e),i=ia(n),r={};c(n,function(t){var e=t.getData(),n=t.coordinateSystem,o=n.getBaseAxis(),a=ta(t),s=i[ea(o)][a],l=s.offset,u=s.width,c=n.getOtherAxis(o),h=t.get("barMinHeight")||0;r[a]=r[a]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(c.dim),d=e.mapDimension(o.dim),p=So(e,f),g=c.isHorizontal(),v=sa(o,c,p),m=0,y=e.count();m<y;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)){var w,b,S,M,C=_>=0?"p":"n",k=v;if(p&&(r[a][x]||(r[a][x]={p:v,n:v}),k=r[a][x][C]),g)w=k,b=(T=n.dataToPoint([_,x]))[1]+l,S=T[0]-v,M=u,Math.abs(S)<h&&(S=(S<0?-1:1)*h),p&&(r[a][x][C]+=S);else{var T=n.dataToPoint([x,_]);w=T[0]+l,b=k,S=u,M=T[1]-v,Math.abs(M)<h&&(M=(M<=0?-1:1)*h),p&&(r[a][x][C]+=M)}e.setItemLayout(m,{x:w,y:b,width:S,height:M})}}},this)},"bar")),Qr(pd),to({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var rp={updateSelectedMap:function(t){this._targetList=v(t)?t.slice():[],this._selectTargetMap=f(t||[],function(t,e){return t.set(e.name,e),t},E())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},op=ro({type:"series.pie",init:function(t){op.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){op.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return function(t,e,n){e=v(e)&&{coordDimensions:e}||i({},e);var r=t.getSource(),o=Ef(r,e),a=new Of(o,t);return a.initData(r,n),a}(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:nr(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=op.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=function(t,e,n){if(!t[e])return 0;var i=f(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),o=h(t,function(t){return(isNaN(t)?0:t)/i*r*100}),a=100*r,s=h(o,function(t){return Math.floor(t)}),l=f(s,function(t,e){return t+e},0),u=h(o,function(t,e){return t-s[e]});l<a;){for(var c=Number.NEGATIVE_INFINITY,d=null,p=0,g=u.length;p<g;++p)u[p]>c&&(c=u[p],d=p);++s[d],u[d]=0,++l}return s[e]/r}(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){Ae(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});l(op,rp);var ap=qa.prototype;ap.updateData=function(t,e,n){function o(){s.stopAnimation(!0),s.animateTo({shape:{r:c.r+l.get("hoverOffset")}},300,"elasticOut")}function a(){s.stopAnimation(!0),s.animateTo({shape:{r:c.r}},300,"elasticOut")}var s=this.childAt(0),l=t.hostModel,u=t.getItemModel(e),c=t.getItemLayout(e),h=i({},c);h.label=null,n?(s.setShape(h),"scale"===l.getShallow("animationType")?(s.shape.r=c.r0,ti(s,{shape:{r:c.r}},l,e)):(s.shape.endAngle=c.startAngle,Qn(s,{shape:{endAngle:c.endAngle}},l,e))):Qn(s,{shape:h},l,e);var f=t.getItemVisual(e,"color");s.useStyle(r({lineJoin:"bevel",fill:f},u.getModel("itemStyle").getItemStyle())),s.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var d=u.getShallow("cursor");d&&s.attr("cursor",d),Ua(this,t.getItemLayout(e),l.isSelected(null,e),l.get("selectedOffset"),l.get("animation")),s.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&l.isAnimationEnabled()&&s.on("mouseover",o).on("mouseout",a).on("emphasis",o).on("normal",a),this._updateLabel(t,e),Wn(this)},ap._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),a=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Qn(n,{shape:{points:a.linePoints||[[a.x,a.y],[a.x,a.y],[a.x,a.y]]}},r,e),Qn(i,{style:{x:a.x,y:a.y}},r,e),i.attr({rotation:a.rotation,origin:[a.x,a.y],z2:10});var l=o.getModel("label"),u=o.getModel("emphasis.label"),c=o.getModel("labelLine"),h=o.getModel("emphasis.labelLine");s=t.getItemVisual(e,"color");Gn(i.style,i.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!a.inside},{textAlign:a.textAlign,textVerticalAlign:a.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!u.get("show"),n.ignore=n.normalIgnore=!c.get("show"),n.hoverIgnore=!h.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(c.getModel("lineStyle").getLineStyle()),n.hoverStyle=h.getModel("lineStyle").getLineStyle();var f=c.get("smooth");f&&!0===f&&(f=.4),n.setShape({smooth:f})},a(qa,Ws),dr.extend({type:"pie",init:function(){var t=new Ws;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),o=this._data,a=this.group,s=e.get("animation"),l=!o,u=t.get("animationType"),c=g(Ga,this.uid,t,s,n),h=t.get("selectedMode");if(r.diff(o).add(function(t){var e=new qa(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),h&&e.on("click",c),r.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var n=o.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),h&&n.on("click",c),a.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var f=r.getItemLayout(0),d=Math.max(n.getWidth(),n.getHeight())/2,v=p(a.removeClipPath,a);a.setClipPath(this._createClipPath(f.cx,f.cy,d,f.startAngle,f.clockwise,v,t))}this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,o,a){var s=new Ku({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return ti(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},a,o),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,o=Math.sqrt(i*i+r*r);return o<=n.r&&o>=n.r0}}});var sp=function(t,e,n,i){var r,o,a=t.getData(),s=[],l=!1;a.each(function(n){var i,u,c,h,f=a.getItemLayout(n),d=a.getItemModel(n),p=d.getModel("label"),g=p.get("position")||d.get("emphasis.label.position"),v=d.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(f.startAngle+f.endAngle)/2,x=Math.cos(_),w=Math.sin(_);r=f.cx,o=f.cy;var b="inside"===g||"inner"===g;if("center"===g)i=f.cx,u=f.cy,h="center";else{var S=(b?(f.r+f.r0)/2*x:f.r*x)+r,M=(b?(f.r+f.r0)/2*w:f.r*w)+o;if(i=S+3*x,u=M+3*w,!b){var C=S+x*(m+e-f.r),k=M+w*(m+e-f.r),T=C+(x<0?-1:1)*y;i=T+(x<0?-5:5),u=k,c=[[S,M],[C,k],[T,k]]}h=b?"center":x>0?"left":"right"}var I=p.getFont(),D=p.get("rotate")?x<0?-_+Math.PI:-_:0,A=Vt(t.getFormattedLabel(n,"normal")||a.getName(n),I,h,"top");l=!!D,f.label={x:i,y:u,position:g,height:A.height,len:m,len2:y,linePoints:c,textAlign:h,verticalAlign:"middle",rotation:D,inside:b},b||s.push(f.label)}),!l&&t.get("avoidLabelOverlap")&&function(t,e,n,i,r,o){for(var a=[],s=[],l=0;l<t.length;l++)t[l].x<e?a.push(t[l]):s.push(t[l]);for(Xa(s,e,n,i,1,0,o),Xa(a,e,n,i,-1,0,o),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var c=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+c}}}(s,r,o,e,0,i)},lp=2*Math.PI,up=Math.PI/180;c([{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}],function(t){t.update="updateView",Jr(t,function(e,n){var i={};return n.eachComponent({mainType:"series",subType:"pie",query:e},function(n){n[t.method]&&n[t.method](e.name,e.dataIndex);var r=n.getData();r.each(function(t){var e=r.getName(t);i[e]=n.isSelected(e)||!1})}),{name:e.name,selected:i}})}),to({getTargetSeries:function(t){var e={},n=E();return t.eachSeriesByType("pie",function(t){t.__paletteScope=e,n.set(t.uid,t)}),n},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var o=i[e],a=null!=o&&r.getItemVisual(o,"color",!0);if(a)n.setItemVisual(e,"color",a);else{var s=n.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",s),null!=o&&r.setItemVisual(o,"color",s)}})}}),Qr(g(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),o=t.get("radius");v(o)||(o=[0,o]),v(r)||(r=[r,r]);var a=n.getWidth(),s=n.getHeight(),l=Math.min(a,s),u=li(r[0],a),c=li(r[1],s),h=li(o[0],l/2),f=li(o[1],l/2),d=-t.get("startAngle")*up,p=t.get("minAngle")*up,g=0;e.each(i,function(t){!isNaN(t)&&g++});var m=e.getSum(i),y=Math.PI/(m||g)*2,_=t.get("clockwise"),x=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(i);b[0]=0;var S=lp,M=0,C=d,k=_?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:_,cx:u,cy:c,r0:h,r:x?NaN:f});else{(i="area"!==x?0===m&&w?y:t*y:lp/g)<p?(i=p,S-=p):M+=t;var r=C+k*i;e.setItemLayout(n,{angle:i,startAngle:C,endAngle:r,clockwise:_,cx:u,cy:c,r0:h,r:x?si(t,b,[h,f]):f}),C=r}}),S<lp&&g)if(S<=.001){var T=lp/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=T,i.startAngle=d+k*n*T,i.endAngle=d+k*(n+1)*T}})}else y=S/M,C=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*y;i.startAngle=C,i.endAngle=C+k*r,C+=k*r}});sp(t,f,0,s)})},"pie")),Kr({seriesType:"pie",reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}),t.version="4.1.0",t.dependencies={zrender:"4.0.4"},t.PRIORITY=tf,t.init=function(t,e,n){var i=Xr(t);if(i)return i;var r=new Pr(t,e,n);return r.id="ec_"+yf++,vf[r.id]=r,$e(t,xf,r.id),function(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";qh(uf,function(i,r){t._messageCenter.on(r,function(i){if(mf[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),o=[];qh(vf,function(e){e!==t&&e.group===t.group&&o.push(e)}),e(o,0),qh(o,function(t){1!==t[n]&&t.dispatchAction(r)}),e(o,2)}})})}(r),r},t.connect=function(t){if(v(t)){var e=t;t=null,qh(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+_f++,qh(e,function(e){e.group=t})}return mf[t]=!0,t},t.disConnect=qr,t.disconnect=bf,t.dispose=function(t){"string"==typeof t?t=vf[t]:t instanceof Pr||(t=Xr(t)),t instanceof Pr&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=Xr,t.getInstanceById=function(t){return vf[t]},t.registerTheme=Yr,t.registerPreprocessor=Zr,t.registerProcessor=Kr,t.registerPostUpdate=function(t){ff.push(t)},t.registerAction=Jr,t.registerCoordinateSystem=function(t,e){Ri.register(t,e)},t.getCoordinateSystemDimensions=function(t){var e=Ri.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=Qr,t.registerVisual=to,t.registerLoading=no,t.extendComponentModel=function(t){return zc.extend(t)},t.extendComponentView=io,t.extendSeriesModel=ro,t.extendChartView=oo,t.setCanvasCreator=function(t){!function(t,e){"createCanvas"===t&&(us=null),ss[t]=e}("createCanvas",t)},t.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),wf[t]={geoJson:e,specialAreas:n}},t.getMap=function(t){return wf[t]},t.dataTool={}},"object"==s(e)&&void 0!==t?a(e):(r=[e],void 0===(o="function"==typeof(i=a)?i.apply(e,r):i)||(t.exports=o))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(25),r=n.n(i),o=n(27);var a=function(t){n(24)},s=n(0)(r.a,o.a,a,"data-v-92c626a4",null);e.default=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=n.n(i),o=n(42);var a=function(t){n(33)},s=n(0)(r.a,o.a,a,null,null);e.default=s.exports},,function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,,,function(t,e,n){var i=function(){return this}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n(18),r)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(t){i.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"==typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{(c=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==i&&r.call(y,a)&&(v=y);var _=M.prototype=b.prototype=Object.create(v);S.prototype=_.constructor=M,M.constructor=S,M[l]=S.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(_),t},c.awrap=function(t){return{__await:t}},C(k.prototype),k.prototype[s]=function(){return this},c.AsyncIterator=k,c.async=function(t,e,n,i){var r=new k(x(t,e,n,i));return c.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},C(_),_[l]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},c.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;D(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function x(t,e,n,i){var r=e&&e.prototype instanceof b?e:b,o=Object.create(r.prototype),a=new A(i||[]);return o._invoke=function(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return P()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var l=w(t,e,n);if("normal"===l.type){if(i=n.done?p:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=p,n.method="throw",n.arg=l.arg)}}}(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function b(){}function S(){}function M(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,i){function o(){return new Promise(function(e,o){!function e(n,i,o,a){var s=w(t[n],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){l.value=t,o(l)},a)}a(s.arg)}(n,i,e,o)})}return e=e?e.then(o,o):o()}}function T(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=w(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Store",function(){return c}),n.d(e,"install",function(){return y}),n.d(e,"mapState",function(){return _}),n.d(e,"mapMutations",function(){return x}),n.d(e,"mapGetters",function(){return w}),n.d(e,"mapActions",function(){return b}),n.d(e,"createNamespacedHelpers",function(){return S});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){o(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,s);var l=function(t){this.register([],t,!1)};l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},l.prototype.update=function(t){!function t(e,n,i){0;n.update(i);if(i.modules)for(var r in i.modules){if(!n.getChild(r))return void 0;t(e.concat(r),n.getChild(r),i.modules[r])}}([],this.root,t)},l.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new a(e,n);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&o(e.modules,function(e,r){i.register(t.concat(r),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var u;var c=function(t){var e=this;void 0===t&&(t={}),!u&&"undefined"!=typeof window&&window.Vue&&y(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.state;void 0===o&&(o={}),"function"==typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new u;var a=this,s=this.dispatch,c=this.commit;this.dispatch=function(t,e){return s.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=i,g(this,o,[],this._modules.root),p(this,o),n.forEach(function(t){return t(e)}),u.config.devtools&&function(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}(this)},h={state:{configurable:!0}};function f(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;g(t,n,[],t._modules.root,!0),p(t,n,e)}function p(t,e,n){var i=t._vm;t.getters={};var r={};o(t._wrappedGetters,function(e,n){r[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=u.config.silent;u.config.silent=!0,t._vm=new u({data:{$$state:e},computed:r}),u.config.silent=a,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),u.nextTick(function(){return i.$destroy()}))}function g(t,e,n,i,r){var o=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!o&&!r){var s=v(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){u.set(s,l,i.state)})}var c=i.context=function(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=m(n,i,r),a=o.payload,s=o.options,l=o.type;return s&&s.root||(l=e+l),t.dispatch(l,a)},commit:i?t.commit:function(n,i,r){var o=m(n,i,r),a=o.payload,s=o.options,l=o.type;s&&s.root||(l=e+l),t.commit(l,a,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return function(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return v(t.state,n)}}}),r}(t,a,n);i.forEachMutation(function(e,n){!function(t,e,n,i){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,i.state,e)})}(t,a+n,e,c)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,r=e.handler||e;!function(t,e,n,i){(t._actions[e]||(t._actions[e]=[])).push(function(e,r){var o,a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return(o=a)&&"function"==typeof o.then||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}(t,i,r,c)}),i.forEachGetter(function(e,n){!function(t,e,n,i){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)}}(t,a+n,e,c)}),i.forEachChild(function(i,o){g(t,e,n.concat(o),i,r)})}function v(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function m(t,e,n){var i;return null!==(i=t)&&"object"==typeof i&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function y(t){u&&t===u||i(u=t)}h.state.get=function(){return this._vm._data.$$state},h.state.set=function(t){0},c.prototype.commit=function(t,e,n){var i=this,r=m(t,e,n),o=r.type,a=r.payload,s=(r.options,{type:o,payload:a}),l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},c.prototype.dispatch=function(t,e){var n=this,i=m(t,e),r=i.type,o=i.payload,a={type:r,payload:o},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},c.prototype.subscribe=function(t){return f(t,this._subscribers)},c.prototype.subscribeAction=function(t){return f(t,this._actionSubscribers)},c.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},c.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},c.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),g(this,this.state,t,this._modules.get(t),n.preserveState),p(this,this.state)},c.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=v(e.state,t.slice(0,-1));u.delete(n,t[t.length-1])}),d(this)},c.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},c.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(c.prototype,h);var _=C(function(t,e){var n={};return M(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=k(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),x=C(function(t,e){var n={};return M(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=k(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"==typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),w=C(function(t,e){var n={};return M(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||k(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),b=C(function(t,e){var n={};return M(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=k(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"==typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),S=function(t){return{mapState:_.bind(null,t),mapGetters:w.bind(null,t),mapMutations:x.bind(null,t),mapActions:b.bind(null,t)}};function M(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function C(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function k(t,e,n){return t._modulesNamespaceMap[n]}var T={Store:c,install:y,version:"3.0.1",mapState:_,mapMutations:x,mapGetters:w,mapActions:b,createNamespacedHelpers:S};e.default=T},,,,,function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=n(26),a=(i=o)&&i.__esModule?i:{default:i};e.default={props:{echarts:{required:!0,type:Object,default:function(){return null}},onInit:{required:!0,type:Function,default:null},canvasId:{type:String,default:"ec-canvas"},lazyLoad:{type:Boolean,default:!1},disableTouch:{type:Boolean,default:!1},throttleTouch:{type:Boolean,default:!1}},onReady:function(){this.echarts?this.lazyLoad||this.init():console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>')},methods:{init:function(){var t=this,e=wx.version.version.split(".").map(function(t){return parseInt(t,10)});if(e[0]>1||1===e[0]&&e[1]>9||1===e[0]&&9===e[1]&&e[2]>=91)if(this.onInit){var n=this.canvasId;this.ctx=wx.createCanvasContext(n);var i=new a.default(this.ctx,n);this.echarts.setCanvasCreator(function(){return i}),wx.createSelectorQuery().select("#"+n).boundingClientRect(function(e){e?t.chart=t.onInit(i,e.width,e.height):setTimeout(function(){return t.init()},50)}).exec()}else console.warn("请传入 onInit 函数进行初始化");else console.error("微信基础库版本过低，需大于等于 1.9.91。参见：https://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82")},canvasToTempFilePath:function(t){var e=this.canvasId;this.ctx.draw(!0,function(){wx.canvasToTempFilePath(r({canvasId:e},t))})},touchStart:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n&&t.mp.touches.length){var i=t.mp.touches[0];n._zr.handler.dispatch("mousedown",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("mousemove",{zrX:i.x,zrY:i.y})}},touchMove:function(t){var e=this.disableTouch,n=this.throttleTouch,i=this.chart,r=this.lastMoveTime;if(!e&&i&&t.mp.touches.length){if(n){var o=Date.now();if(o-r<240)return;this.lastMoveTime=o}var a=t.mp.touches[0];i._zr.handler.dispatch("mousemove",{zrX:a.x,zrY:a.y})}},touchEnd:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n){var i=t.mp.changedTouches?t.mp.changedTouches[0]:{};n._zr.handler.dispatch("mouseup",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("click",{zrX:i.x,zrY:i.y})}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return i(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}].forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments;["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"].forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set"+e.charAt(0).toUpperCase()+e.slice(1)](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=r},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.canvasId?n("canvas",{staticClass:"ec-canvas",attrs:{id:t.canvasId,canvasId:t.canvasId,eventid:"JBx-0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,error:t.error}}):t._e()},staticRenderFns:[]};e.a=i},,,,,,function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(35)),r=o(n(7));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{uniStatusBar:i.default,uniIcon:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:""},shadow:{type:String,default:""}},computed:{isFixed:function(){return"true"===String(this.fixed)},insertStatusBar:function(){switch(String(this.statusBar)){case"true":return!0;case"false":return!1;default:return this.isFixed}},hasShadow:function(){var t=this.backgroundColor;switch(String(this.shadow)){case"true":return!0;case"false":return!1;default:return"transparent"!==t&&t.indexOf("rgba")<0}}},methods:{onClickLeft:function(){this.$emit("clickLeft"),this.$emit("click-left")},onClickRight:function(){this.$emit("clickRight"),this.$emit("click-right")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),r=n.n(i),o=n(38);var a=function(t){n(36)},s=n(0)(r.a,o.a,a,null,null);e.default=s.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{style:function(){return""}}}},function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:"uni-status-bar",style:this.style},[this._t("default",null,{mpcomid:"WKh-0"})],2)},staticRenderFns:[]};e.a=i},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String,color:String,size:Number},computed:{fontSize:function(){return this.size+"px"}},methods:{onClick:function(){this.$emit("click")}}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("view",{staticClass:"uni-icon",class:[t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"Vsz-0"},on:{click:function(e){t.onClick()}}})},staticRenderFns:[]};e.a=i},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-navbar",class:{"uni-navbar-fixed":t.isFixed,"uni-navbar-shadow":t.hasShadow},style:{"background-color":t.backgroundColor}},[t.insertStatusBar?n("uni-status-bar",{attrs:{mpcomid:"qKT-0"}}):t._e(),n("view",{staticClass:"uni-navbar-header",style:{color:t.color}},[n("view",{staticClass:"uni-navbar-btn uni-navbar-btn-left",attrs:{eventid:"Nr8-0"},on:{tap:t.onClickLeft}},[t.leftIcon.length?n("view",{staticClass:"uni-navbar-btn-icon",class:{"uni-navbar-btn-icon-left":!t.leftText.length}},[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24",mpcomid:"lBD-1"}})],1):t._e(),t.leftText.length?n("view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left",null,{mpcomid:"LJh-2"})],2),n("view",{staticClass:"uni-navbar-container"},[t.title.length?n("view",{staticClass:"uni-navbar-container-title"},[t._v(t._s(t.title))]):t._e(),t._t("default",null,{mpcomid:"od6-3"})],2),n("view",{staticClass:"uni-navbar-btn uni-navbar-btn-right",attrs:{eventid:"H5d-1"},on:{tap:t.onClickRight}},[t.rightIcon.length?n("view",{staticClass:"uni-navbar-btn-icon uni-navbar-btn-icon-right"},[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24",mpcomid:"nRt-4"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right",null,{mpcomid:"uJ4-5"})],2)])],1)},staticRenderFns:[]};e.a=i},,,,,,,,,,,function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"load-more"},[n("view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[n("view",{staticClass:"load1"},[n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}})]),n("view",{staticClass:"load2"},[n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}})]),n("view",{staticClass:"load3"},[n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}}),n("view",{style:{background:t.color}})])]),n("text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])])},staticRenderFns:[]};e.a=i},,,,,,,,,,,function(t,e){},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(6),o=(i=r)&&i.__esModule?i:{default:i};e.default={props:{maskShow:{type:Boolean,default:!1},popupShow:{type:Boolean,default:!1},shareType:{type:Number,default:0},shareData:{type:Object}},data:function(){return{providerList:[]}},onShareAppMessage:function(){return{title:this.shareData.title,path:this.shareData.path,imageUrl:this.shareData.imageUrl}},onUnload:function(){this.shareText=this.data.shareText,this.href=this.data.href,this.image=this.data.image},onLoad:function(){var e=this;t.getProvider({service:"share",success:function(t){console.log("success",t);for(var n=[],i=0;i<t.provider.length;i++)switch(t.provider[i]){case"weixin":n.push({name:"分享到微信",id:"weixin",type:"WXSceneSession",sort:0,imgUrl:"../../static/shareIconhaoyou.png"}),n.push({name:"朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1,imgUrl:"../../static/shareIconPeng.png"});break;case"qq":n.push({name:"QQ好友",id:"qq",sort:3,imgUrl:"../../static/shareQQ.png"})}e.providerList=n.sort(function(t,e){return t.sort-e.sort})},fail:function(e){console.log("获取登录通道失败",e),t.showModal({content:"获取登录通道失败",showCancel:!1})}})},methods:{hide:function(){this.maskShow=!1,this.popupShow=!1},share:function(e){var n,i=this;return(n=o.default.mark(function n(){var r;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:console.log("分享通道:"+e.id+"； 分享类型:"+i.shareType),"qq"===e.id?i.shareType=1:i.shareType=0,console.log("qq分享类型:"+i.shareType),0===(r={provider:e.id,scene:e.type&&"WXSenceTimeline"===e.type?"WXSenceTimeline":"WXSceneSession",type:i.shareType,href:i.shareData.href,summary:i.shareData.shareText,imageUrl:i.shareData.image,title:i.shareData.title,success:function(t){console.log("success",t)},fail:function(t){console.log("fail",t)},complete:function(){console.log("分享操作结束!")}}).type&&"qq"===r.provider&&(console.log("分享到扣扣"),r.href="baidu.com",r.title="欢迎体验健康联盟"),console.log(r,"当前shareOPtions"),t.share(r);case 7:case"end":return n.stop()}},n,i)}),function(){var t=n.apply(this,arguments);return new Promise(function(e,n){return function i(r,o){try{var a=t[r](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){i("next",t)},function(t){i("throw",t)});e(s)}("next")})})()}}}}).call(e,n(2).default)},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"shareModel"},[n("view",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"shareMask",attrs:{eventid:"0YF-0"},on:{click:t.hide}}),n("view",{directives:[{name:"show",rawName:"v-show",value:t.popupShow,expression:"popupShow"}],staticClass:"sharePopup"},[n("view",{staticClass:"shareList"},t._l(t.providerList,function(e,i){return n("view",{key:i,staticClass:"shareItem",attrs:{eventid:"9Ln-1-"+i},on:{tap:function(n){t.share(e)}}},[n("image",{attrs:{src:e.imgUrl,mode:""}}),n("text",{staticClass:"shareName"},[t._v(t._s(e.name))])])})),n("text",{staticClass:"cancel",attrs:{eventid:"dVU-2"},on:{tap:t.hide}},[t._v("取消")])])])},staticRenderFns:[]};e.a=i}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([49],[,,,,,,,,,,,function(e,n,t){"use strict";var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=a(t(5)),i=a(t(13)),r=a(t(16));function a(e){return e&&e.__esModule?e:{default:e}}u.default.config.productionTip=!1,u.default.prototype.$store=r.default,u.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},i.default.mpType="app",new u.default(o({store:r.default},i.default)).$mount()},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(15),u=t.n(o);var i=function(e){t(14)},r=t(0)(u.a,null,i,null,null);n.default=r.exports},function(e,n){},function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default={onLaunch:function(){console.log("App Launch"),plus.screen.lockOrientation("portrait-primary");var n={appid:plus.runtime.appid,version:plus.runtime.version,imei:plus.device.imei};e.request({url:"https://uniapp.dcloud.io/update",data:n,success:function(n){if(console.log("success",n),200==n.statusCode&&n.data.isUpdate){var t="iOS"===plus.os.name?n.data.iOS:n.data.Android;e.showModal({title:"更新提示",content:n.data.note?n.data.note:"是否选择更新",success:function(e){e.confirm&&plus.runtime.openURL(t)}})}}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}}).call(n,t(2).default)},function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(6)),u=r(t(5)),i=r(t(19));function r(e){return e&&e.__esModule?e:{default:e}}u.default.use(i.default);var a=new i.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null},mutations:{login:function(e,n){e.hasLogin=!0,e.loginProvider=n},logout:function(e){e.hasLogin=!1,e.openid=null},setOpenid:function(e,n){e.openid=n}},actions:{getUserOpenId:function(){var n,t=(n=o.default.mark(function n(t){var u=t.commit,i=t.state;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise(function(n,t){i.openid?n(i.openid):e.login({success:function(e){u("login"),setTimeout(function(){console.log("uni.request mock openid[123456789]"),u("setOpenid","123456789"),n("123456789")},1e3)},fail:function(e){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),t(e)}})});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,this)}),function(){var e=n.apply(this,arguments);return new Promise(function(n,t){return function o(u,i){try{var r=e[u](i),a=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(a).then(function(e){o("next",e)},function(e){o("throw",e)});n(a)}("next")})});return function(e){return t.apply(this,arguments)}}()}});n.default=a}).call(n,t(2).default)}],[11]);
});
require('app.js');


__wxRoute = 'pages/tabBar/healthySpace/healthySpace';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/healthySpace/healthySpace.js';

define('pages/tabBar/healthySpace/healthySpace.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([21],{20:function(t,e,a){"use strict";var i=n(a(1)),s=n(a(21));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},21:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(23),s=a.n(i),n=a(28);var o=function(t){a(22)},c=a(0)(s.a,n.a,o,null,null);e.default=c.exports},22:function(t,e){},23:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i,s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a(8)),n=a(9),o=(i=n)&&i.__esModule?i:{default:i};var c=[11,11,150,13,121,13,10,150,13,121,13,10,111,11,150,13,121,13,10];e.default={data:function(){return{echarts:s,lineInit:function(t,e,a){console.log(this),console.log(c);var i=s.init(t,null,{width:e,height:a});return t.setChart(i),i.setOption({tooltip:{show:!0,trigger:"axis"},color:["#ffffff"],legend:{data:["价格"]},calculable:!1,xAxis:[{show:!1,type:"category",splitArea:{show:!1},boundaryGap:!1}],yAxis:[{show:!1,type:"value",splitArea:{show:!1}}],series:[{name:"价格",type:"line",showSymbol:!1,data:c,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}}]}),i},tooltipBoxShow:!0,tooltipText:"生命果还没有成熟哦,成熟以后小果会通知你的哦...",animationData:"",animationDatas:"",mascotImg:"../../../static/mascotIcon.png",mascotStatus:"normal",currentTime:2,indicatorDots:!0,autoplay:!0,interval:3e3,duration:500,dealData:{zenith:"26.44",lowest:"23.38",start:"25.24",bazaarPrice:"1,442,050.00",dayVolume:"421,050.31",bazaarGross:"90,153,44 PRC"},noticeData:[{text:"国庆特惠：国庆节日期间，健康商城商品大酬宾，海量商品",id:1,url:"../../healthySpace/notice"},{text:"国庆特惠：国庆节日期间，健康商城商品大酬宾，海量商品",id:2,url:"../../healthySpace/notice"},{text:"国庆特惠：国庆节日期间，健康商城商品大酬宾，海量商品",id:3,url:"../../healthySpace/notice"}],energyList:[{imgUrl:"../../../static/InviteIcon.png",id:"1",name:"邀请好友",hrefUrl:"/pages/healthySpace/invite"},{imgUrl:"../../../static/nominateIcon.png",id:"2",name:"推荐有礼",hrefUrl:"/pages/healthySpace/recommend"},{imgUrl:"../../../static/garageIcon.png",id:"3",name:"体力加油站",hrefUrl:"/pages/healthySpace/garage"},{imgUrl:"../../../static/zoologyIcon.png",id:"4",name:"生态规划",hrefUrl:"/pages/healthySpace/zoology"}],swiperData:[{id:1,imgUrl:"../../../static/indexSwiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/indexSwiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/indexSwiper.png",hrefUrl:"baidu.com"}],timeList:["10MIN","1H","24H","1M","3M","1Y"],clickTrue:!1,timer:null}},watch:{mascotStatus:function(t,e){console.log(t,e)}},onUnload:function(){this.animationData="",this.animationDatas=""},onLoad:function(){this.animation=t.createAnimation(),this.mascotImg="../../../static/mascotWalk.png"},methods:{imgTouchstart:function(){"../../../static/mascotWalk.png"===this.mascotImg?(console.log("开始",-90*Math.random(),-90*Math.random()),this.animation.translate(-90*Math.random(),-90*Math.random()).step(),this.animationDatas=this.animation.export(),this.clickTrue=!0):this.clickTrue=!1},getSwiper:function(t){},getAction:function(e){t.navigateTo({url:e.hrefUrl})},getTime:function(t){console.log("点击选择当前时间",t.currentTarget.dataset.a);var e=t.currentTarget.dataset.a;this.currentTime=e,c=[110,110,1500,13,121,13,10,11,11,150,13,121,13,10,11,11,150,13,121,130,1e3],console.log(c)},tipScale:function(){this.clickTrue&&(this.animation.translate(0,0).step(),this.animationDatas=this.animation.export(),this.clickTrue=!1),this.animation.scale(1,1).step({duration:500,timingFunction:"linear"}),this.animationData=this.animation.export()},reset:function(){this.animation.scale(0,0).step({duration:500,timingFunction:"linear"}),this.animationData=this.animation.export()},output:function(){this.mascotImg="../../../static/mascotHappy2.png",this.tooltipText="生命果还没有成熟哦,成熟以后小果会通知你的哦...",this.tipScale(),setTimeout(function(){this.reset()}.bind(this),2e3)},energy:function(){this.mascotImg="../../../static/mascotShy.png",this.tooltipText="生命果还没有成熟哦,成熟以后小果会通知你的哦...",this.tipScale(),setTimeout(function(){this.reset()}.bind(this),2e3)},harvestIfLife:function(){this.mascotImg="../../../static/mascotHappy1.png",this.tooltipText="生命果还没有成熟哦,成熟以后小果会通知你的哦...",this.tipScale(),setTimeout(function(){this.reset()}.bind(this),2e3)}},components:{mpvueEcharts:o.default}}}).call(e,a(2).default)},28:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"healthySpace"},[a("image",{staticClass:"healthySpaceBg",attrs:{src:"../../../static/healthySpaceBg.png",mode:""}}),a("view",{staticClass:"grace-swiper-msg"},[t._m(0),a("swiper",{attrs:{vertical:"true",autoplay:"true",circular:"true",interval:"3000"}},t._l(t.noticeData,function(e,i){return a("swiper-item",{key:i,attrs:{mpcomid:"6p0-0-"+i}},[a("text",[t._v(t._s(e.text))]),a("text",{staticClass:"move"},[t._v("更多详情>>")])])}))],1),a("view",{staticClass:"mascotView"},[a("view",{staticClass:"energyView"},[a("view",{staticClass:"modeView posi",attrs:{eventid:"1Kj-0"},on:{tap:t.energy}},[a("view",{staticClass:"mode"}),a("view",{staticClass:"mode"}),a("view",{staticClass:"mode"}),t._m(1)]),a("view",{staticClass:"outputView posi",attrs:{eventid:"x3u-1"},on:{tap:t.output}},[t._m(2),t._m(3)]),a("view",{staticClass:"ifLife posi",attrs:{eventid:"ftz-2"},on:{tap:t.harvestIfLife}},[a("image",{attrs:{src:"../../../static/ifLifeIcon.png",mode:""}}),t._m(4)])]),a("view",{staticClass:"mascot"},[a("image",{class:"../../../static/mascotWalk.png"===t.mascotImg?"animationImg animation-element mascotImg":"animation-element mascotImg",attrs:{src:t.mascotImg,mode:"",animation:t.animationDatas,eventid:"t23-3"},on:{touchstart:t.imgTouchstart,touchend:t.imgTouchend}}),a("view",{directives:[{name:"show",rawName:"v-show",value:t.tooltipBoxShow,expression:"tooltipBoxShow"}],staticClass:"tooltip",attrs:{animation:t.animationData}},[a("image",{attrs:{src:"../../../static/tooltipBg.png",mode:""}}),a("text",{staticClass:"tooltipText"},[t._v("\n              "+t._s(t.tooltipText)+"\n            ")])])])]),a("view",{staticClass:"energyOperateView"},t._l(t.energyList,function(e,i){return a("view",{key:i,staticClass:"energyOperateViewItem",attrs:{eventid:"z0U-4-"+i},on:{click:function(a){t.getAction(e)}}},[a("image",{staticClass:"energyBlockImg",attrs:{src:e.imgUrl,mode:""}}),a("text",{staticClass:"aenergyBlockText"},[t._v(t._s(e.name))])])})),a("view",{staticClass:"swiperView"},[a("swiper",{attrs:{"indicator-dots":t.indicatorDots,"indicator-active-color":"#fff",autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.swiperData,function(e,i){return a("swiper-item",{key:i,attrs:{eventid:"J97-5-"+i,mpcomid:"6B1-1-"+i},on:{tap:function(a){t.getSwiper(e)}}},[a("view",{staticClass:"swiper-item"},[a("image",{attrs:{src:e.imgUrl,mode:""}})])])}))],1),a("view",{staticClass:"brokenLine"},[a("view",{staticClass:"brokenLineHeader"},[a("view",{staticClass:"brokenLineHeaderItem"},[a("text",{staticClass:"brokenLineTitle"},[t._v("开盘点")]),a("text",{staticClass:"line"}),a("text",{staticClass:"brokenLineText"},[t._v("￥"+t._s(t.dealData.start))])]),a("view",{staticClass:"brokenLineHeaderItem"},[a("text",{staticClass:"brokenLineTitle"},[t._v("全天最高")]),a("text",{staticClass:"line"}),a("text",{staticClass:"brokenLineText"},[t._v("￥"+t._s(t.dealData.zenith))])]),a("view",{staticClass:"brokenLineHeaderItem"},[a("text",{staticClass:"brokenLineTitle"},[t._v("全天最低")]),a("text",{staticClass:"line"}),a("text",{staticClass:"brokenLineText"},[t._v("￥"+t._s(t.dealData.lowest))])])]),a("view",{staticClass:"chatView"},[a("view",{staticClass:"canvasView"},[a("mpvue-echarts",{attrs:{echarts:t.echarts,onInit:t.lineInit,canvasId:"line",mpcomid:"qpW-2"}})],1)]),a("view",{staticClass:"dealView"},[a("view",{staticClass:"dealViewItem"},[a("text",{staticClass:"dealTitle"},[t._v("市场价格")]),a("text",{staticClass:"dealLine"}),a("text",{staticClass:"dealText"},[t._v("￥"+t._s(t.dealData.bazaarPrice))])]),a("view",{staticClass:"dealViewItem"},[a("text",{staticClass:"dealTitle"},[t._v("全天交易")]),a("text",{staticClass:"dealLine"}),a("text",{staticClass:"dealText"},[t._v("￥"+t._s(t.dealData.dayVolume))])]),a("view",{staticClass:"dealViewItem"},[a("text",{staticClass:"dealTitle"},[t._v("市场总量")]),a("text",{staticClass:"dealLine"}),a("text",{staticClass:"dealText"},[t._v("￥"+t._s(t.dealData.bazaarGross))])])]),a("view",{staticClass:"timeList"},t._l(t.timeList,function(e,i){return a("view",{key:i,class:t.currentTime===i?"current timeListItem":"timeListItem",attrs:{"data-a":i,eventid:"vTf-6-"+i},on:{click:t.getTime}},[a("text",{class:t.currentTime===i?"timeText currentText":"timeText"},[t._v(" "+t._s(e))])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"grace-swiper-msg-icon"},[e("image",{attrs:{src:"../../../static/newsIcon.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"text"},[e("text",{staticClass:"title"},[this._v("体力")]),e("text",{staticClass:"val"},[this._v("52%")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"circle"},[e("image",{attrs:{src:"../../../static/download.png",mode:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"text"},[e("text",{staticClass:"title"},[this._v("生产值")]),e("text",{staticClass:"val"},[this._v("1H / 82")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"text"},[e("text",{staticClass:"title"},[this._v("生命果")]),e("text",{staticClass:"val"},[this._v("4,311,353,154")])])}]};e.a=i}},[20]);
});
require('pages/tabBar/healthySpace/healthySpace.js');
__wxRoute = 'pages/tabBar/healthyMall/healthyMall';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/healthyMall/healthyMall.js';

define('pages/tabBar/healthyMall/healthyMall.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([22],{29:function(t,s,e){"use strict";var i=r(e(1)),a=r(e(30));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},30:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(32),a=e.n(i),r=e(43);var o=function(t){e(31)},n=e(0)(a.a,r.a,o,null,null);s.default=n.exports},31:function(t,s){},32:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var i=o(e(6)),a=o(e(10)),r=o(e(7));function o(t){return t&&t.__esModule?t:{default:t}}function n(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,e){return function i(a,r){try{var o=s[a](r),n=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(n).then(function(t){i("next",t)},function(t){i("throw",t)});t(n)}("next")})}}s.default={components:{uniNavBar:a.default,uniIcon:r.default},data:function(){return{autoPlay:!1,indicator:!1,currents:1,interval:3e3,duration:500,scrollLeft:0,isClickChange:!1,currentTab:0,goodsListShow:!0,sortord:"综合排序",salesLitre:!1,priceLitre:!1,commissionLitre:!1,tabsList:[{name:"精选",id:"jing1"},{name:"有机食品",id:"you2"},{name:"保健养生",id:"bao3"},{name:"母婴用品",id:"mu4"},{name:"美妆护肤",id:"mei5"},{name:"时尚女装",id:"shi6"},{name:"男装",id:"nan7"},{name:"时尚鞋包",id:"shi8"},{name:"家居用品",id:"jia9"}],imgUrlList:[{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"}],actionList:[{imgUrl:"../../../static/yongjin.png",id:"1",name:"佣金好礼",hrefUrl:"/pages/healthyMall/brokerage"},{imgUrl:"../../../static/youhui.png",id:"2",name:"优惠礼包",hrefUrl:"/pages/healthyMall/discounts"},{imgUrl:"../../../static/shangjia_icon.png",id:"3",name:"商家入驻",hrefUrl:"/pages/healthyMall/shopEnter"},{imgUrl:"../../../static/kefu_icon.png",id:"4",name:"联系客服",hrefUrl:"/pages/healthyMall/service"}],newText:{text:"一降再降，喜迎国庆黄金周，美妆达人惊喜推荐，进口美，更有优惠好...",url:"",imgUrl:"../../../static/swiper.png"},time:{hour:"",minute:"",second:""},timeLimitData:{time:"11:20:48",list:[{imgUrl:"../../../static/time_img.png",id:1,brokerage:"28.65",price:"96",originalPrice:"106",hrefUrl:""},{imgUrl:"../../../static/time_img.png",id:2,brokerage:"28.65",price:"96",hrefUrl:"",originalPrice:"106"},{imgUrl:"../../../static/time_img.png",id:3,brokerage:"28.65",price:"96",hrefUrl:"",originalPrice:"106"},{imgUrl:"../../../static/time_img.png",id:4,brokerage:"28.65",price:"96",hrefUrl:"",originalPrice:"106"}]},hotGoodsData:[{imgUrl:"../../../static/organicFood.png",id:"1",hrefUrl:""},{imgUrl:"../../../static/babyCare.png",id:"3",hrefUrl:""},{imgUrl:"../../../static/cosmetics.png",id:"4",hrefUrl:""},{imgUrl:"../../../static/healthcare.png",id:"2",hrefUrl:""}],recommendListData:[{id:1,goodsName:"澳洲进口保健钙片儿童老...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""},{id:2,goodsName:"澳洲进口保健钙片儿童老...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""}]}},onLoad:function(){var t=this.timeLimitData.time.split(":");this.time.hour=t[0],this.time.minute=t[1],this.time.second=t[2],console.log(this.time)},onUnload:function(){this.scrollLeft=0,this.isClickChange=!1,this.currentTab=0},methods:{getTimeLimit:function(){t.navigateTo({url:"/pages/healthyMall/goodsList"})},getAction:function(s){console.log(s),t.navigateTo({url:s.hrefUrl})},getHotShop:function(t){console.log("getHotShop",t.currentTarget.dataset.current)},getDetails:function(s){console.log(s),console.log("进入产品详情页"),t.navigateTo({url:"/pages/healthyMall/goodsDetails"})},searchIdenx:function(){console.log("点击搜索"),t.navigateTo({url:"/pages/healthyMall/search"})},getListData:function(){console.log("请求接口")},synthesis:function(){console.log("综合排序"),"综合排序"!==this.sortord&&(this.sortord="综合排序",this.getListData())},sales:function(){console.log("销量"),this.sortord="销量",this.salesLitre?(this.salesLitre=!1,console.log("销量的降序"),this.getListData()):(this.salesLitre=!0,console.log("销量的升序"),this.getListData())},price:function(){this.sortord="价格",console.log("价格"),this.priceLitre?(console.log("价钱的降序"),this.priceLitre=!1,this.getListData()):(console.log("价钱的升序"),this.priceLitre=!0,this.getListData())},commission:function(){this.sortord="佣金",console.log("佣金"),this.commissionLitre?(console.log("佣金的降序"),this.commissionLitre=!1,this.getListData()):(console.log("佣金的升序"),this.commissionLitre=!0,this.getListData())},cart:function(){console.log("点击购物车"),t.navigateTo({url:"/pages/healthyMall/shoppingCart"})},getSwiper:function(t){console.log(t.detail.current),this.currents=t.detail.current},onPullDownRefresh:function(){console.log("onPullDownRefresh"),setTimeout(function(){t.stopPullDownRefresh(),console.log("stopPullDownRefresh")},1e3)},bindChange:function(){var s=n(i.default.mark(function s(e){var a,r,o,n,c,l,m,d,g;return i.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(a=e.target.current,console.log("bingChange",a),!this.isClickChange){s.next=6;break}return this.currentTab=a,this.isClickChange=!1,s.abrupt("return");case 6:return s.next=8,this.getWidth("tab-bar");case 8:r=s.sent,o=r.scrollLeft,n=0,c=0;case 12:if(!(c<a)){s.next=20;break}return s.next=15,this.getWidth(this.tabs[c].id);case 15:l=s.sent,n+=l.width;case 17:c++,s.next=12;break;case 20:return m=t.getSystemInfoSync().windowWidth,s.next=23,this.getWidth(this.tabs[a].id);case 23:d=s.sent,g=d.width,n+g-o>m&&(this.scrollLeft=n+g-m),n<o&&(this.scrollLeft=n),this.isClickChange=!1,this.currentTab=a,console.log("bingChange",this.currentTab);case 30:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}(),getWidth:function(s){return new Promise(function(e,i){t.createSelectorQuery().select("#"+s).fields({size:!0,scrollOffset:!0},function(t){"tab-bar"===s&&console.log("id=",s,"数据:",t),e(t)}).exec()})},swichNav:function(){var t=n(i.default.mark(function t(s){var e,a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentTab!==s.target.dataset.current){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getWidth("tab-bar");case 6:e=t.sent,a=e.scrollLeft,this.scrollLeft=a,this.isClickChange=!0,this.currentTab=s.target.dataset.current,console.log("swichNav",s.target),console.log("swichNav",this.currentTab),0===this.currentTab?(this.goodsListShow=!0,console.log(this.goodsListShow)):this.goodsListShow=!1;case 14:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}()}}}).call(s,e(2).default)},43:function(t,s,e){"use strict";var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"healthyMall"},[e("view",{staticClass:"header"},[e("view",{staticClass:"search"},[e("view",{staticClass:"uni-icon uni-icon-search"}),e("text",{staticClass:"searchInput",attrs:{eventid:"Xq1-0"},on:{click:t.searchIdenx}},[t._v("点击搜索商品或者店铺")])]),e("image",{staticClass:"cart",attrs:{src:"../../../static/cart.png",mode:"",eventid:"uOv-1"},on:{click:t.cart}})]),e("view",{staticClass:"swiperContent"},[e("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabsList,function(s,i){return e("block",{key:s.id},[e("view",{class:["swiper-tab-list",t.currentTab==i?"on":""],attrs:{id:s.id,"data-current":i,eventid:"rcf-2-"+i},on:{click:t.swichNav}},[t._v(t._s(s.name))])])})),e("view",{staticClass:"swiperContentDetails"},[t.goodsListShow?e("block",[e("view",{staticClass:"swiper"},[e("swiper",{attrs:{"previous-margin":"30rpx","next-margin":"30rpx",current:1,"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,eventid:"KFh-3"},on:{change:t.getSwiper}},t._l(t.imgUrlList,function(s,i){return e("swiper-item",{key:i,class:t.currents===i?"current swiperView":"noCurrent swiperView",attrs:{mpcomid:"fY4-0-"+i}},[e("view",{staticClass:"swiper-item"},[e("image",{attrs:{src:s.imgUrl,mode:""}})])])}))],1),e("view",{staticClass:"actionBlock"},t._l(t.actionList,function(s,i){return e("view",{key:i,staticClass:"actionBlockItem",attrs:{eventid:"bqV-4-"+i},on:{click:function(e){t.getAction(s)}}},[e("image",{staticClass:"actionBlockImg",attrs:{src:s.imgUrl,mode:""}}),e("text",{staticClass:"actionBlockText"},[t._v(t._s(s.name))])])})),e("view",{staticClass:"borderBlock"}),e("view",{staticClass:"newsBlock"},[e("image",{staticClass:"newIcon",attrs:{src:"../../../static/zixun.png",mode:""}}),e("text",{staticClass:"newsBlockText"},[t._v(t._s(t.newText.text))]),e("image",{staticClass:"newImg",attrs:{src:t.newText.imgUrl,mode:""}})]),e("view",{staticClass:"timeLimit"},[e("view",{staticClass:"timeLimitHeader"},[e("view",{staticClass:"timeLimitHeaderLeft"},[e("text",{staticClass:"timeBorder"}),e("text",{staticClass:"textTitle"},[t._v("限时高佣")]),e("text",{staticClass:"timeText"},[t._v(t._s(t.time.hour))]),e("text",{staticClass:"timeFen"},[t._v(":")]),e("text",{staticClass:"timeText"},[t._v(t._s(t.time.minute))]),e("text",{staticClass:"timeFen"},[t._v(":")]),e("text",{staticClass:"timeText"},[t._v(t._s(t.time.second))])]),e("view",{staticClass:"timeLimitHeaderRight",attrs:{eventid:"TNf-5"},on:{tap:t.getTimeLimit}},[e("text",[t._v("更多")]),e("image",{attrs:{src:"../../../static/move.png",mode:""}})])]),e("view",{staticClass:"timeLimitList"},t._l(t.timeLimitData.list,function(s,i){return e("view",{key:i,staticClass:"timeLimitListItem",attrs:{eventid:"79q-6-"+i},on:{tap:function(s){t.getDetails()}}},[e("image",{attrs:{src:s.imgUrl,mode:""}}),e("text",{staticClass:"brokerage"},[t._v("￥"+t._s(s.brokerage))]),e("view",{staticClass:"priceBlock"},[e("text",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"originalPrice"},[t._v("￥"+t._s(s.originalPrice))])])])}))]),e("view",{staticClass:"hotShopp"},[e("view",{staticClass:"timeLimitHeader"},[e("view",{staticClass:"timeLimitHeaderLeft"},[e("text",{staticClass:"timeBorder"}),e("text",{staticClass:"textTitle"},[t._v("热卖商城")])])]),e("view",{staticClass:"hotGoodsList"},t._l(t.hotGoodsData,function(s,i){return e("view",{key:s.id,staticClass:"hotGoodsListItem",attrs:{"data-current":s.id,eventid:"PlA-7-"+i},on:{tap:t.getHotShop}},[e("image",{attrs:{src:s.imgUrl,mode:""}})])}))]),e("view",{staticClass:"recommend"},[e("view",{staticClass:"timeLimitHeader"},[e("view",{staticClass:"timeLimitHeaderLeft"},[e("text",{staticClass:"timeBorder"}),e("text",{staticClass:"textTitle"},[t._v("热卖推荐")])]),e("view",{staticClass:"timeLimitHeaderRight"},[e("text",[t._v("综合推荐")]),e("image",{staticClass:"down",attrs:{src:"../../../static/down.png",mode:""}})])]),e("view",{staticClass:"recommendList"},t._l(t.recommendListData,function(s,i){return e("view",{key:i,staticClass:"recommendListItem",attrs:{eventid:"xPN-8-"+i},on:{tap:t.getDetails}},[e("image",{staticClass:"recommendImg",attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"recommendListRight"},[e("view",{staticClass:"recommendListRightHeader"},[e("text",{staticClass:"discounts"},[t._v(t._s(s.discounts))]),e("text",{staticClass:"goodsName"},[t._v(t._s(s.goodsName))])]),e("view",{staticClass:"goodsIntro"},[e("text",{staticClass:"discountsIntro"},[t._v("佣金:"+t._s(s.discountsIntro))]),e("text",{staticClass:"sales"},[t._v("\n                             销量:"+t._s(s.sales)+"\n                           ")])]),e("view",{staticClass:"goodsPrice"},[e("text",{staticClass:"goodsPriceTitle"},[t._v("优惠:")]),e("text",{staticClass:"goodsPriceText"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"goodsOriginalPrice"},[t._v("￥"+t._s(s.originalPrice))]),e("button",{staticClass:"lookBtn"},[t._v("立即查看")])],1)])])}))])]):e("block",[e("view",{staticClass:"goodslist"},[e("view",{staticClass:"goodslistHeader"},[e("view",{staticClass:"tabItems",attrs:{eventid:"BYO-9"},on:{tap:t.synthesis}},[e("text",{class:"综合排序"===t.sortord?"active":""},[t._v("综合排序")])]),e("view",{staticClass:"tabItems",attrs:{eventid:"ZHp-10"},on:{tap:t.sales}},[e("text",{class:"销量"===t.sortord?"active":""},[t._v("销量")]),e("view",{staticClass:"arrowsView"},[e("text",{class:!1===t.salesLitre&&"销量"===t.sortord?"arrowsTop active":"arrowsTop"}),e("text",{class:!0===t.salesLitre&&"销量"===t.sortord?"arrowsBottom active":"arrowsBottom"})])]),e("view",{staticClass:"tabItems",attrs:{eventid:"EOr-11"},on:{tap:t.price}},[e("text",{class:"价格"===t.sortord?"active":""},[t._v("价格")]),e("view",{staticClass:"arrowsView"},[e("text",{class:!1===t.priceLitre&&"价格"===t.sortord?"arrowsTop active":"arrowsTop"}),e("text",{class:!0===t.priceLitre&&"价格"===t.sortord?"arrowsBottom active":"arrowsBottom"})])]),e("view",{staticClass:"tabItems",attrs:{eventid:"zuG-12"},on:{tap:t.commission}},[e("text",{class:"佣金"===t.sortord?"active":""},[t._v("佣金")]),e("view",{staticClass:"arrowsView"},[e("text",{class:!1===t.commissionLitre&&"佣金"===t.sortord?"arrowsTop active":"arrowsTop"}),e("text",{class:!0===t.commissionLitre&&"佣金"===t.sortord?"arrowsBottom active":"arrowsBottom"})])])]),e("view",{staticClass:"goodsListItems"},[e("view",{staticClass:"recommendList"},t._l(t.recommendListData,function(s,i){return e("view",{key:i,staticClass:"recommendListItem",attrs:{eventid:"J0l-13-"+i},on:{tap:t.getDetails}},[e("image",{staticClass:"recommendImg",attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"recommendListRight"},[e("view",{staticClass:"recommendListRightHeader"},[e("text",{staticClass:"discounts"},[t._v(t._s(s.discounts))]),e("text",{staticClass:"goodsName"},[t._v(t._s(s.goodsName))])]),e("view",{staticClass:"goodsIntro"},[e("text",{staticClass:"discountsIntro"},[t._v("佣金:"+t._s(s.discountsIntro))]),e("text",{staticClass:"sales"},[t._v("\n                            销量:"+t._s(s.sales)+"\n                          ")])]),e("view",{staticClass:"goodsPrice"},[e("text",{staticClass:"goodsPriceTitle"},[t._v("优惠:")]),e("text",{staticClass:"goodsPriceText"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"goodsOriginalPrice"},[t._v("￥"+t._s(s.originalPrice))]),e("button",{staticClass:"lookBtn"},[t._v("立即查看")])],1)])])}))])])])],1)],1)])},staticRenderFns:[]};s.a=i}},[29]);
});
require('pages/tabBar/healthyMall/healthyMall.js');
__wxRoute = 'pages/tabBar/myCenter/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/personal.js';

define('pages/tabBar/myCenter/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([10],{44:function(t,s,a){"use strict";var e=r(a(1)),i=r(a(45));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},45:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(47),i=a.n(e),r=a(48);var l=function(t){a(46)},c=a(0)(i.a,r.a,l,null,null);s.default=c.exports},46:function(t,s){},47:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},48:function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"content"},[a("view",{staticClass:"setting"},[t._m(0),a("view",{staticClass:"personal"},[t._m(1),a("view",{staticClass:"life"},[t._m(2),a("view",{staticClass:"lBottom"},[a("navigator",{attrs:{url:"../../myCenter/healthBank"}},[a("image",{attrs:{src:"../../../static/bankHealth.png",mode:""}}),a("text",[t._v("充值中心")])]),a("navigator",{attrs:{url:"balance"}},[a("image",{attrs:{src:"../../../static/dataWallet.png",mode:""}}),a("text",[t._v("生命果交易")])]),a("navigator",{attrs:{url:"dataWallet"}},[a("image",{attrs:{src:"../../../static/wallet.png",mode:""}}),a("text",[t._v("数据钱包")])])],1)])])]),a("view",{staticClass:"list"},[a("navigator",{staticClass:"flexs",attrs:{url:"../healthyMall/healthyMall"}},[a("view",{staticClass:"Fleft"},[a("image",{attrs:{src:"../../../static/healthMall.png",mode:""}}),a("text",[t._v("健康商城")])]),a("view",{staticClass:"Fright"},[a("text",[t._v("订单更新")]),a("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),a("navigator",{staticClass:"flexs",attrs:{url:"myCoupon"}},[a("view",{staticClass:"Fleft"},[a("image",{attrs:{src:"../../../static/redPacket.png",mode:""}}),a("text",[t._v("红包/卡券")])]),a("view",{staticClass:"Fright"},[a("text",[t._v("订单更新")]),a("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),a("navigator",{staticClass:"flexs",attrs:{url:"../myCenter/balance"}},[a("view",{staticClass:"Fleft"},[a("image",{attrs:{src:"../../../static/idCard.png",mode:""}}),a("text",[t._v("提现交易")])]),a("view",{staticClass:"Fright"},[a("text",[t._v("订单更新")]),a("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),a("navigator",{staticClass:"flexs",attrs:{url:"../myCenter/lifeMall"}},[a("view",{staticClass:"Fleft noBorder"},[a("image",{attrs:{src:"../../../static/lifeFrit.png",mode:""}}),a("text",[t._v("生命果商城")])]),a("view",{staticClass:"Fright"},[a("text",[t._v("订单更新")]),a("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),a("navigator",{staticClass:"flexs",attrs:{url:"../../healthyMall/shippingAddress"}},[a("view",{staticClass:"Fleft noBorder"},[a("image",{attrs:{src:"../../../static/getGoods.png",mode:""}}),a("text",[t._v("收货地址")])]),a("view",{staticClass:"Fright"},[a("text",[t._v("订单更新")]),a("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])])],1),a("view",{staticClass:"goSetting"},[a("navigator",{staticClass:"flexs",attrs:{url:"../../myCenter/setting"}},[a("view",{staticClass:"Fleft"},[a("image",{attrs:{src:"../../../static/sete.png",mode:""}}),a("text",[t._v("设置")])]),a("view",{staticClass:"Fright"},[a("text",[t._v("新版本")]),a("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"setImg"},[s("image",{attrs:{src:"../../../static/personalBg.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"pPhoto"},[s("view",{staticClass:"pImg"},[s("image",{attrs:{src:"../../../static/photo.png",mode:""}})]),s("view",{staticClass:"pLeft"},[s("text",[this._v("MyName")]),s("image",{attrs:{src:"../../../static/vip.png",mode:""}}),s("text",[this._v("LV.1\\n")]),s("text",[this._v("ID:15899999999")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"lTop"},[s("view",[s("text",[this._v("生命果\\n")]),s("text",[this._v("66666")])]),s("view",[s("text",[this._v("余额\\n")]),s("text",[this._v("666666666")])]),s("view",[s("text",[this._v("体力\\n")]),s("text",[this._v("6666")])])])}]};s.a=e}},[44]);
});
require('pages/tabBar/myCenter/personal.js');
__wxRoute = 'pages/tabBar/myCenter/balance';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/balance.js';

define('pages/tabBar/myCenter/balance.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([19],{49:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(50));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},50:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(52),a=i.n(s),n=i(56);var r=function(t){i(51)},o=i(0)(a.a,n.a,r,null,null);e.default=o.exports},51:function(t,e){},52:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(3),n=(s=a)&&s.__esModule?s:{default:s};e.default={data:function(){return{list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],i=this.list[this.list.length-1],s=i+6,a=i+1;a<s;a++)e.push(a);setTimeout(function(){s>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},1500)}},components:{loadMore:n.default}}},56:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[t._m(0),i("view",{staticClass:"recharge"},[i("navigator",{staticClass:"withdraw",attrs:{url:"recharge"}},[i("view",[i("image",{attrs:{src:"../../../static/recharge.png",mode:""}}),i("text",[t._v("充值")])]),i("view",[i("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),i("navigator",{staticClass:"withdraw",attrs:{url:"withdraw"}},[i("view",[i("image",{attrs:{src:"../../../static/withardw.png",mode:""}}),i("text",[t._v("提现")])]),i("view",[i("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])])],1),i("view",{staticClass:"list"},[t._m(1),i("view",{staticClass:"scroll-view"},[i("block",[t._l(t.list,function(e,s){return i("view",{key:s,staticClass:"title"},[i("view",[i("text",[t._v("+100\\n")]),i("text",[t._v("充值")])]),i("view",[i("text",[t._v("成功\\n")]),i("text",[t._v("2018.10.31.14:41")])])])}),i("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"xsQ-0"}})],2)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"balance"},[e("view",{staticClass:"img"},[e("image",{attrs:{src:"../../../static/personalBg.png",mode:""}})]),e("view",{staticClass:"money"},[e("text",[this._v("0.00\\n")]),e("text",[this._v("余额(元)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"detail"},[e("view",[e("text",[this._v("余额明细")])]),e("view",[e("text",[this._v("查看全部")]),e("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])])}]};e.a=s}},[49]);
});
require('pages/tabBar/myCenter/balance.js');
__wxRoute = 'pages/tabBar/myCenter/loginPwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/loginPwd.js';

define('pages/tabBar/myCenter/loginPwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([12],{57:function(e,t,a){"use strict";var o=s(a(1)),n=s(a(58));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(n.default))},58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(60),n=a.n(o),s=a(61);var i=function(e){a(59)},c=a(0)(n.a,s.a,i,null,null);t.default=c.exports},59:function(e,t){},60:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{show:!0,timer:null,count:"",havePwd:!0,havePwd1:!0,pwd:"",pwd1:"",code:"",checkCode:"",picLyanzhengma:""}},mounted:function(){},onLoad:function(){this.createCode()},methods:{getCode:function(){var t=this;this.show=!1;this.timer||(this.count=60,this.show=!1,e.showToast({title:"验证码已发送至您的手机，请注意查收。!",duration:1e3,icon:"none"}),this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))},showPwd:function(){""!=this.pwd.trim()?this.havePwd=!this.havePwd:e.showToast({title:"请填写密码!",duration:2e3,icon:"none"})},showPwd1:function(){""!=this.pwd1.trim()?this.havePwd1=!this.havePwd1:e.showToast({title:"请填写密码!",duration:2e3,icon:"none"})},createCode:function(){for(var e="",t=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),a=0;a<4;a++){e+=t[Math.floor(36*Math.random())]}this.checkCode=e,console.log(this.checkCode)},checkLpicma:function(){return this.picLyanzhengma.toUpperCase(),""==this.picLyanzhengma?void e.showToast({title:"请输入验证码!",duration:2e3,icon:"none"}):this.picLyanzhengma.toUpperCase()==this.checkCode||(console.log(this.picLyanzhengma.toUpperCase()),void e.showToast({title:"验证码不正确!",duration:2e3,icon:"none"}))},sub:function(){""!=this.code.trim()&&""!=this.pwd.trim()&&""!=this.pwd1.trim()?this.pwd.trim()==this.pwd1.trim()?""!=this.code.trim()?""!=this.pwd.trim()?""!=this.pwd1.trim()?e.redirectTo({url:"../../myCenter/setting"}):e.showToast({title:"请再次填写密码!",duration:2e3,icon:"none"}):e.showToast({title:"请填写密码!",duration:2e3,icon:"none"}):e.showToast({title:"请填写验证码!",duration:2e3,icon:"none"}):e.showToast({title:"两次密码不一致!",duration:2e3,icon:"none"}):e.showToast({title:"请将信息填写完整!",duration:2e3,icon:"none"})}}}}).call(t,a(2).default)},61:function(e,t,a){"use strict";var o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"top"},[e._v("\n\t\t验证码已发送至\n\t")]),a("view",{staticClass:"chart"},[a("view",{staticClass:"getPhone"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.picLyanzhengma,expression:"picLyanzhengma"}],staticClass:"yanzhengma_input",attrs:{type:"text","placeholder-class":"place-holder",placeholder:"请输入图片验证码",maxlength:"4",eventid:"ytp-0"},domProps:{value:e.picLyanzhengma},on:{blur:e.checkLpicma,input:function(t){t.target.composing||(e.picLyanzhengma=t.target.value)}}}),a("button",{staticClass:"yzm",attrs:{type:"default",eventid:"Z3n-1"},on:{click:e.createCode}},[e._v(e._s(e.checkCode))])],1),a("view",{staticClass:"getPhone phone"},[a("text",[e._v("1589699999")]),e.show?a("view",{staticClass:"getcode",attrs:{eventid:"GEc-2"},on:{tap:e.getCode}},[e._v("获取验证码")]):a("view",{staticClass:"getcode1"},[e._v(e._s(e.count)+"s")])]),a("view",{staticClass:"getPhone"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"6",placeholder:"请输入短信验证码",eventid:"Wo9-3"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),a("view",{staticClass:"getPhone"},[e.havePwd?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],attrs:{"placeholder-class":"place-holder",type:"password",placeholder:"请设置登录密码",eventid:"SKM-4"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}}):e._e(),e.havePwd?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],attrs:{"placeholder-class":"place-holder",type:"text",placeholder:"请设置登录密码",eventid:"5j4-5"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}}),a("view",{staticClass:"pwdEye"},[e.havePwd?a("image",{staticClass:"eyeImg",attrs:{src:"../../../static/eyeLook1.png",eventid:"994-6"},on:{tap:e.showPwd}}):e._e(),e.havePwd?e._e():a("image",{staticClass:"eyeImg",attrs:{src:"../../../static/eyeUnlook.png",eventid:"gIH-7"},on:{tap:e.showPwd}})])]),a("view",{staticClass:"getPhone"},[e.havePwd1?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd1,expression:"pwd1"}],attrs:{"placeholder-class":"place-holder",type:"password",placeholder:"确认密码",eventid:"arL-8"},domProps:{value:e.pwd1},on:{input:function(t){t.target.composing||(e.pwd1=t.target.value)}}}):e._e(),e.havePwd1?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd1,expression:"pwd1"}],attrs:{"placeholder-class":"place-holder",type:"text",placeholder:"确认密码",eventid:"ZsZ-9"},domProps:{value:e.pwd1},on:{input:function(t){t.target.composing||(e.pwd1=t.target.value)}}}),a("view",{staticClass:"pwdEye"},[e.havePwd1?a("image",{staticClass:"eyeImg",attrs:{src:"../../../static/eyeLook1.png",eventid:"bp4-10"},on:{tap:e.showPwd1}}):e._e(),e.havePwd1?e._e():a("image",{staticClass:"eyeImg",attrs:{src:"../../../static/eyeUnlook.png",eventid:"eY1-11"},on:{tap:e.showPwd1}})])])]),a("view",{staticClass:"submits"},[a("button",{attrs:{type:"default",eventid:"xE4-12"},on:{tap:e.sub}},[e._v("提交")])],1)])},staticRenderFns:[]};t.a=o}},[57]);
});
require('pages/tabBar/myCenter/loginPwd.js');
__wxRoute = 'pages/healthySpace/invite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthySpace/invite.js';

define('pages/healthySpace/invite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([39],{62:function(t,e,a){"use strict";var s=i(a(1)),o=i(a(63));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(o.default))},63:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(65),o=a.n(s),i=a(69);var n=function(t){a(64)},r=a(0)(o.a,i.a,n,null,null);e.default=r.exports},64:function(t,e){},65:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,o=a(4),i=(s=o)&&s.__esModule?s:{default:s};e.default={data:function(){return{shareCode:"1P5HA",promptShow:!1,shareData:{title:"邀请好友",shareText:"邀请好友shareText",path:"baidu.com",href:"baidu.com",image:"https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png",imageUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2671670863,3877857355&fm=58&w=258&h=258&img.JPEG"},maskShow:!1,popupShow:!1,shareType:0}},components:{shareModel:i.default},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验健康联盟",path:"/pages/healthySpace/invite",imageUrl:"../../static/inviteBg.png"}},methods:{copyCode:function(){console.log("点击复制"),t.setClipboardData({data:this.shareCode,success:function(){console.log("复制成功")}})},share:function(){this.maskShow=!0,this.popupShow=!0}}}}).call(e,a(2).default)},69:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"invite"},[a("image",{staticClass:"inviteBg",attrs:{src:"../../static/inviteBg.png",mode:""}}),a("text",{staticClass:"code posi"},[t._v(t._s(t.shareCode))]),a("text",{staticClass:"copy posi",attrs:{eventid:"Xo2-0"},on:{tap:t.copyCode}},[t._v("点击复制我的邀请码")]),a("text",{staticClass:"shareText posi",attrs:{eventid:"wQg-1"},on:{tap:function(e){t.share()}}},[t._v("立即分享邀请码给好友")]),a("share-model",{attrs:{maskShow:t.maskShow,popupShow:t.popupShow,shareData:t.shareData,shareType:t.shareType,mpcomid:"MVh-0"}}),a("text",{directives:[{name:"show",rawName:"v-show",value:t.promptShow,expression:"promptShow"}],staticClass:"prompt"},[t._v("内容已复制")])],1)},staticRenderFns:[]};e.a=s}},[62]);
});
require('pages/healthySpace/invite.js');
__wxRoute = 'pages/healthyMall/brokerage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/brokerage.js';

define('pages/healthyMall/brokerage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([48],{70:function(e,t,a){"use strict";var s=o(a(1)),r=o(a(71));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(r.default))},71:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(73),r=a.n(s),o=a(74);var n=function(e){a(72)},i=a(0)(r.a,o.a,n,null,null);t.default=i.exports},72:function(e,t){},73:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,r=a(4),o=(s=r)&&s.__esModule?s:{default:s};t.default={data:function(){return{brokerageData:{money:"123",num:""},shareType:0,maskShow:!1,popupShow:!1,shareData:{title:"佣金好礼",path:"baidu.com",href:"baidu.com",image:"https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png",shareText:"佣金好礼shareText",imageUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2671670863,3877857355&fm=58&w=258&h=258&img.JPEG"}}},components:{shareModel:o.default},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验健康联盟",path:"/pages/healthyMall/brokerage",imageUrl:"../../static/brokerage.png"}},methods:{share:function(){this.maskShow=!0,this.popupShow=!0}}}},74:function(e,t,a){"use strict";var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"brokerage"},[a("image",{staticClass:"brokerageBg",attrs:{src:"../../static/brokerage.png",mode:""}}),a("view",{staticClass:"brokerageData"},[a("text",{staticClass:"money posi"},[e._v(e._s(e.brokerageData.money)+"元")]),a("text",{staticClass:"num posi"},[e._v(e._s(e.brokerageData.num)+"件")])]),a("text",{staticClass:"shareText posi",attrs:{eventid:"6Hs-0"},on:{tap:e.share}},[e._v("立即分享赚佣金")]),a("share-model",{attrs:{maskShow:e.maskShow,popupShow:e.popupShow,shareData:e.shareData,shareType:e.shareType,mpcomid:"RzX-0"}})],1)},staticRenderFns:[]};t.a=s}},[70]);
});
require('pages/healthyMall/brokerage.js');
__wxRoute = 'pages/tabBar/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/login/login.js';

define('pages/tabBar/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([20],{75:function(t,e,s){"use strict";var i=n(s(1)),a=n(s(76));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},76:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(78),a=s.n(i),n=s(79);var o=function(t){s(77)},r=s(0)(a.a,n.a,o,null,null);e.default=r.exports},77:function(t,e){},78:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{show:!0,timer:null,show1:!0,timer1:null,count1:"",count:"",type:1,user:"",pwd:"",phone:"",code:"",havePwd:!0}},methods:{getCode:function(){var t=this;this.show=!1;this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))},getCode1:function(){var t=this;this.show1=!1;this.timer1||(this.count1=60,this.show1=!1,this.timer1=setInterval(function(){t.count1>0&&t.count1<=60?t.count1--:(t.show1=!0,clearInterval(t.timer1),t.timer1=null)},1e3))},tabChange:function(){1==this.type?this.type=2:this.type=1},showPwd:function(){""!=this.pwd.trim()?this.havePwd=!this.havePwd:t.showToast({title:"请输入密码!",duration:2e3,icon:"none"})},showUser:function(){this.user=""},delPhone:function(){this.phone=""},loginCode:function(){if(1==this.type){if(""==this.phone.trim()&&""==this.code.trim())return void t.showToast({title:"请将内容填写完整!",duration:2e3,icon:"none"});if(!/^1[345789]\d{9}$/.test(this.phone))return void t.showToast({title:"您输入的的手机号码有误!",duration:2e3,icon:"none"});if(""==this.phone.trim())return void t.showToast({title:"手机号码不能为空!",duration:2e3,icon:"none"});if(""==this.code.trim())return void t.showToast({title:"验证码不能为空!",duration:2e3,icon:"none"});if(this.code.trim().length<6)return void t.showToast({title:"您输入的的验证码有误!",duration:2e3,icon:"none"});t.redirectTo({url:"../../myCenter/myOrder"})}else{if(""==this.user.trim()&&""==this.pwd.trim())return void t.showToast({title:"请将内容填写完整!",duration:2e3,icon:"none"});if(""==this.user.trim())return void t.showToast({title:"您输入的的账号不能为空!",duration:2e3,icon:"none"});if(""==this.pwd.trim())return void t.showToast({title:"您输入的的密码不能为空!",duration:2e3,icon:"none"});t.redirectTo({url:"../../myCenter/myOrder"})}}}}}).call(e,s(2).default)},79:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._m(0),s("image",{staticClass:"img",attrs:{src:"../../../static/loginBg.jpg",mode:""}}),s("view",{staticClass:"lTop"},[s("navigator",{attrs:{url:"../register/register"}},[t._v("注册")])],1),s("view",{staticClass:"login"},[1==t.type?s("view",{staticClass:"lMiddle"},[s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/user.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"11",placeholder:"请输入手机号",eventid:"dfB-0"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),""!=t.phone?s("image",{attrs:{src:"../../../static/del.png",mode:"",eventid:"S8V-1"},on:{tap:t.delPhone}}):t._e()]),s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/pwd.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"6",placeholder:"请输入验证码",eventid:"AHi-2"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t.show?s("view",{staticClass:"getcode",attrs:{eventid:"6IB-3"},on:{tap:t.getCode}},[t._v("获取验证码")]):s("view",{staticClass:"getcode"},[t._v(t._s(t.count)+"s后重新发送")])]),s("view",{staticClass:"btn"},[s("button",{staticClass:"btn1",attrs:{type:"primary",eventid:"Wzt-4"},on:{tap:t.loginCode}},[t._v("登录")])],1),s("view",{staticClass:"deal"},[s("image",{attrs:{src:"../../../static/select.png",mode:""}}),s("view",{},[t._v("\n\t\t\t\t\t阅读并同意\n\t\t\t\t\t"),s("navigator",{attrs:{url:"../../myCenter/serviceTitle"}},[t._v("《用户服务协议》")]),t._v("\n\t\t\t\t\t和\n\t\t\t\t\t"),s("navigator",{attrs:{url:"../../myCenter/privacyUser"}},[t._v("《用户隐私政策》")])],1)])]):t._e(),1!=t.type?s("view",{staticClass:"lMiddle"},[s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/user.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"11",placeholder:"手机号/账号",eventid:"ylm-5"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),""!=t.user?s("image",{attrs:{src:"../../../static/del.png",mode:"",eventid:"0U5-6"},on:{tap:t.showUser}}):t._e()]),s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/code.png",mode:""}}),t.havePwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{"placeholder-class":"place-holder",type:"password",placeholder:"请输入密码",eventid:"0FY-7"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}}):t._e(),t.havePwd?t._e():s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{"placeholder-class":"place-holder",type:"text",placeholder:"请输入密码",eventid:"7BK-8"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}}),t.havePwd?s("image",{staticClass:"eyeImg",attrs:{src:"../../../static/eyeLook.png",eventid:"Olg-9"},on:{tap:t.showPwd}}):t._e(),t.havePwd?t._e():s("image",{staticClass:"eyeImg",attrs:{src:"../../../static/eyeUnlook.png",eventid:"XyP-10"},on:{tap:t.showPwd}})]),s("view",{staticClass:"btn"},[s("button",{staticClass:"btn1",attrs:{type:"primary",eventid:"w27-11"},on:{tap:t.loginCode}},[t._v("登录")])],1),s("view",{staticClass:"deal"},[s("image",{attrs:{src:"../../../static/select.png",mode:""}}),s("view",{},[t._v("\n\t\t\t\t\t阅读并同意\n\t\t\t\t\t"),s("navigator",{attrs:{url:""}},[t._v("《用户服务协议》")]),t._v("\n\t\t\t\t\t和\n\t\t\t\t\t"),s("navigator",{attrs:{url:"#"}},[t._v("《用户隐私政策》")])],1)])]):t._e(),s("view",{staticClass:"threeLogin"},[s("image",{attrs:{src:"../../../static/wx.png",mode:""}}),s("image",{attrs:{src:"../../../static/phone.png",mode:"",eventid:"ikl-12"},on:{tap:t.tabChange}}),s("image",{attrs:{src:"../../../static/ali.png",mode:""}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"wrapper"},[e("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}}),e("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}}),e("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}})])}]};e.a=i}},[75]);
});
require('pages/tabBar/login/login.js');
__wxRoute = 'pages/tabBar/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/register/register.js';

define('pages/tabBar/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([3],{80:function(e,t,s){"use strict";var o=i(s(1)),a=i(s(81));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(a.default))},81:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(83),a=s.n(o),i=s(84);var n=function(e){s(82)},r=s(0)(a.a,i.a,n,null,null);t.default=r.exports},82:function(e,t){},83:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{userPhone:"",userpwd:"",usercode:"",show:!0,timer:null,count:"",type:1}},methods:{delUserPhone:function(){this.userPhone=""},delUserpwd:function(){this.userpwd=""},getCode:function(){var e=this;this.show=!1;this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){e.count>0&&e.count<=60?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null)},1e3))},loginCode:function(){""!=this.userPhone.trim()||""!=this.usercode.trim()||""!=this.userpwd.trim()?/^1[345789]\d{9}$/.test(this.userPhone)?""!=this.userPhone.trim()?""!=this.usercode.trim()?this.usercode.trim().length<6?e.showToast({title:"您输入的验证码有误!",duration:2e3,icon:"none"}):""!=this.userpwd?e.redirectTo({url:"../../myCenter/myOrder"}):e.showToast({title:"您输入的密码不能为空!",duration:2e3,icon:"none"}):e.showToast({title:"验证码不能为空!",duration:2e3,icon:"none"}):e.showToast({title:"手机号码不能为空!",duration:2e3,icon:"none"}):e.showToast({title:"您输入的的手机号码有误!",duration:2e3,icon:"none"}):e.showToast({title:"请将内容填写完整!",duration:2e3,icon:"none"})}}}}).call(t,s(2).default)},84:function(e,t,s){"use strict";var o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"content"},[e._m(0),s("image",{staticClass:"img",attrs:{src:"../../../static/loginBg.jpg",mode:""}}),s("view",{staticClass:"lTop"},[s("navigator",{attrs:{url:"../login/login"}},[e._v("登录")])],1),e.haveLogin?e._e():s("view",{staticClass:"login"},[s("view",{staticClass:"lMiddle"},[s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/user.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPhone,expression:"userPhone"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"11",placeholder:"请输入手机号",eventid:"2c4-0"},domProps:{value:e.userPhone},on:{input:function(t){t.target.composing||(e.userPhone=t.target.value)}}}),""!=e.userPhone?s("image",{attrs:{src:"../../../static/del.png",mode:"",eventid:"lVM-1"},on:{tap:e.delUserPhone}}):e._e()]),s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/code.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userpwd,expression:"userpwd"}],attrs:{"placeholder-class":"place-holder",type:"text",placeholder:"请输入密码",eventid:"fO6-2"},domProps:{value:e.userpwd},on:{input:function(t){t.target.composing||(e.userpwd=t.target.value)}}}),""!=e.userpwd?s("image",{attrs:{src:"../../../static/del.png",mode:"",eventid:"XsR-3"},on:{tap:e.delUserpwd}}):e._e()]),s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/pwd.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.usercode,expression:"usercode"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"6",placeholder:"请输入验证码",eventid:"hpo-4"},domProps:{value:e.usercode},on:{input:function(t){t.target.composing||(e.usercode=t.target.value)}}}),e.show?s("view",{staticClass:"getcode",attrs:{eventid:"DZv-5"},on:{tap:e.getCode}},[e._v("获取验证码")]):s("view",{staticClass:"getcode"},[e._v(e._s(e.count)+"s后重新发送")])]),s("view",{staticClass:"btn"},[s("button",{staticClass:"btn1",attrs:{type:"primary",eventid:"3m4-6"},on:{tap:e.loginCode}},[e._v("注册")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"wrapper"},[t("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}}),t("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}}),t("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}})])}]};t.a=o}},[80]);
});
require('pages/tabBar/register/register.js');
__wxRoute = 'pages/myCenter/myOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/myOrder.js';

define('pages/myCenter/myOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([32],{85:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(86));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},86:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(88),i=s.n(a),n=s(89);var o=function(t){s(87)},l=s(0)(i.a,n.a,o,null,null);e.default=l.exports},87:function(t,e){},88:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(3),n=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{type:0,statusTitle:"",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},methods:{selectTab:function(e){this.type=e.currentTarget.dataset.type,console.log(this.type),t.showNavigationBarLoading(),setTimeout(function(){t.hideNavigationBarLoading()},1e3),this.getData()},goPay:function(){1==this.type?t.navigateTo({url:"orderDetail?type="+this.type}):2==this.type?t.showToast({title:"已提醒商家发货。!",duration:1e3,icon:"none"}):3==this.type?t.navigateTo({url:"orderDetail?type="+this.type}):4==this.type&&t.navigateTo({url:"orderDetail?type="+this.type})},getData:function(){1==this.type?this.statusTitle="等待交易完成":2==this.type?this.statusTitle="付款已完成":3==this.type?this.statusTitle="商家已发货":4==this.type&&(this.statusTitle="订单已完成")}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],s=this.list[this.list.length-1],a=s+6,i=s+1;i<a;i++)e.push(i);setTimeout(function(){a>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},1500)}},components:{loadMore:n.default}}}).call(e,s(2).default)},89:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"tab"},[s("view",{class:"0"==t.type?"active":"",attrs:{"data-type":"0",eventid:"8d5-0"},on:{tap:t.selectTab}},[t._v("全部")]),s("view",{class:"1"==t.type?"active":"",attrs:{"data-type":"1",eventid:"CXB-1"},on:{tap:t.selectTab}},[t._v("待付款")]),s("view",{class:"2"==t.type?"active":"",attrs:{"data-type":"2",eventid:"Z3J-2"},on:{tap:t.selectTab}},[t._v("待发货")]),s("view",{class:"3"==t.type?"active":"",attrs:{"data-type":"3",eventid:"1hv-3"},on:{tap:t.selectTab}},[t._v("待收货")]),s("view",{class:"4"==t.type?"active":"",attrs:{"data-type":"4",eventid:"ovz-4"},on:{tap:t.selectTab}},[t._v("待评价")])]),t.list.length>0?s("view",{staticClass:"scroll-view"},[t._l(t.list,function(e,a){return s("view",{key:a,staticClass:"list"},[s("navigator",{staticClass:"store",attrs:{url:""}},[s("view",{staticClass:"icons"},[s("image",{attrs:{src:"../../static/store.png",mode:""}}),s("text",[t._v("一叶子官方旗舰店")])]),s("view",{staticClass:"state"},[t._v("\n\t\t\t\t\t"+t._s(t.statusTitle)+"\n\t\t\t\t")])]),s("navigator",{staticClass:"goodsInfo"},[s("view",{staticClass:"goodsImg"},[s("image",{attrs:{src:"../../static/photo.png",mode:""}})]),s("view",{staticClass:"rightGoods"},[s("view",{staticClass:"goodsDetail"},[s("view",{staticClass:"referral"},[s("text",{staticClass:"refDetail"},[t._v("Swisse奶蓟草护肝片澳洲进口保健品护 肝解毒片保健品护保健品护保健品护保健品护保健品护保健品护保健品护")])]),s("view",{staticClass:"referrals"},[s("text",[t._v("￥263\\n")]),s("text",[t._v("x 1")])])]),s("view",{staticClass:"mold"},[t._v("\n\t\t\t\t\t\t类型：180粒/瓶\n\t\t\t\t\t")])])]),s("view",{staticClass:"goodsNum"},[t._m(0,!0),s("view",{staticClass:"numLeft"},["0"==t.type?s("button",{staticClass:"btn",attrs:{type:"default",eventid:"Goe-5-"+a},on:{tap:t.goPay}},[t._v("查看详情")]):t._e(),"1"==t.type?s("button",{staticClass:"btn",attrs:{type:"default",eventid:"YKg-6-"+a},on:{tap:t.goPay}},[t._v("立即付款")]):t._e(),"2"==t.type?s("button",{staticClass:"btn",attrs:{type:"default",eventid:"7PT-7-"+a},on:{tap:t.goPay}},[t._v("提醒发货")]):t._e(),"3"==t.type?s("button",{staticClass:"btn",attrs:{type:"default",eventid:"vVF-8-"+a},on:{tap:t.goPay}},[t._v("确认收货")]):t._e(),"4"==t.type?s("button",{staticClass:"btn",attrs:{type:"default",eventid:"oJu-9-"+a},on:{tap:t.goPay}},[t._v("去评价")]):t._e()],1)])],1)}),s("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"MVS-0"}})],2):s("view",{staticClass:"empty"},[s("image",{attrs:{src:"../../../static/empty.png",mode:""}}),s("text",[t._v("您还没有可用卡券哦")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"numLeft"},[e("text",[this._v("共1件商品")]),e("text",[this._v("合计: ￥263")])])}]};e.a=a}},[85]);
});
require('pages/myCenter/myOrder.js');
__wxRoute = 'pages/tabBar/myCenter/myCoupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/myCoupon.js';

define('pages/tabBar/myCenter/myCoupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([11],{90:function(t,e,a){"use strict";var n=i(a(1)),s=i(a(91));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},91:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(93),s=a.n(n),i=a(94);var o=function(t){a(92)},c=a(0)(s.a,i.a,o,null,null);e.default=c.exports},92:function(t,e){},93:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,s=a(3),i=(n=s)&&n.__esModule?n:{default:n};e.default={data:function(){return{type:"0",coupon:"1",discount:"1",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},methods:{selectTab:function(e){this.type=e.currentTarget.dataset.type,console.log(this.type),t.showNavigationBarLoading(),setTimeout(function(){t.hideNavigationBarLoading()},1e3)}},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],a=this.list[this.list.length-1],n=a+5,s=a+1;s<n;s++)e.push(s);setTimeout(function(){n>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},800)}},components:{loadMore:i.default}}}).call(e,a(2).default)},94:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"tab"},[a("view",{class:"0"==t.type?"active":"",attrs:{"data-type":"0",eventid:"otM-0"},on:{tap:t.selectTab}},[t._v("未使用")]),a("view",{class:"1"==t.type?"active":"",attrs:{"data-type":"1",eventid:"erV-1"},on:{tap:t.selectTab}},[t._v("已使用")]),a("view",{class:"2"==t.type?"active":"",attrs:{"data-type":"2",eventid:"zrf-2"},on:{tap:t.selectTab}},[t._v("已过期")])]),t.list.length>0?a("view",{staticClass:"list"},[t._l(t.list,function(e,n){return a("view",{key:n,staticClass:"coupon"},[a("view",{class:"0"==t.type&&"1"==t.coupon?"top1 top":"0"==t.type&&"2"==t.coupon?"top2 top":"top3 top"},[a("view",{staticClass:"left"},["1"==t.coupon?a("text",[t._v("66.")]):t._e(),"1"==t.coupon?a("text",[t._v("00元\\n")]):a("text",[t._v("折扣券")]),a("text",[t._v("单适用于健康商城购物优惠\\n单笔商城账单满500元可用")])]),a("view",{staticClass:"right"},["1"==t.type?a("image",{attrs:{src:"../../../static/haveUse.png",mode:""}}):t._e(),"2"==t.type?a("image",{attrs:{src:"../../../static/stale.png",mode:""}}):t._e(),"0"==t.type?a("image",{attrs:{src:"../../../static/unused.png",mode:""}}):t._e(),a("text",[t._v("2019-02-20至\\n2019-02-23")])])]),t._m(0,!0)])}),a("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"RHg-0"}})],2):a("view",{staticClass:"empty"},[a("image",{attrs:{src:"../../../static/empty.png",mode:""}}),a("text",[t._v("您还没有可用卡券哦")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"bottom"},[e("text",[this._v("红包优惠券")]),e("text",[this._v("新人红包")])])}]};e.a=n}},[90]);
});
require('pages/tabBar/myCenter/myCoupon.js');
__wxRoute = 'pages/tabBar/myCenter/goodsDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/goodsDetail.js';

define('pages/tabBar/myCenter/goodsDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([14],{95:function(t,e,i){"use strict";var s=a(i(1)),n=a(i(96));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},96:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(98),n=i.n(s),a=i(99);var o=function(t){i(97)},c=i(0)(n.a,a.a,o,null,null);e.default=c.exports},97:function(t,e){},98:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toast:!1,count:0,lifeFruit:"2666",needFruit:"2300",title:"确定兑换商品",allFruit:"",allfruit:""}},methods:{addNum:function(){this.count++},reduce:function(){this.count<=0?(t.showToast({title:"购买数量不能小于0!",duration:2e3,icon:"none"}),this.count=0):this.count-=1},convert:function(){0!=this.count?(this.toast=!0,this.allFruit=this.count*this.needFruit,this.allFruit>this.lifeFruit?this.title="对不起，生命果不足":this.title="确定兑换商品"):t.showToast({title:"购买数量不能小于0",duration:2e3,icon:"none"})},confrim:function(){this.toast=!1},cancel:function(){this.toast=!1}}}}).call(e,i(2).default)},99:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"goodsDetail"},[t._m(0),i("view",{staticClass:"goodsBuy"},[i("view",{staticClass:"left"},[i("text",[t._v("精品双肩包 商务包\\n")]),i("text",[t._v("市场价:  ￥666\\n")]),i("text",[t._v(t._s(t.needFruit))]),i("text",[t._v("生命果")])]),i("view",{staticClass:"left right"},[i("text",[t._v("剩余生命果")]),i("text",[t._v(t._s(t.lifeFruit)+"个")]),i("view",{staticClass:"addNum"},[i("text",[t._v("兑换")]),i("view",{staticClass:"titlte"},[i("text",{attrs:{eventid:"fOH-0"},on:{tap:t.reduce}},[t._v("-")]),i("text",[t._v(t._s(t.count))]),i("text",{attrs:{eventid:"ZSr-1"},on:{tap:t.addNum}},[t._v("+")])]),i("text",[t._v("份")])])])]),t._m(1)]),i("view",{staticClass:"btn"},[i("button",{attrs:{type:"default",eventid:"IBN-2"},on:{tap:t.convert}},[t._v("立即兑换")])],1),t.toast?i("view",{staticClass:"toast"},[i("view",{staticClass:"main"},[i("view",{staticClass:"top"},[t.allFruit>t.lifeFruit?i("image",{attrs:{src:"../../../static/unconvert.png",mode:""}}):i("image",{attrs:{src:"../../../static/convert.png",mode:""}}),i("text",[t._v(t._s(t.title))])]),i("view",{staticClass:"bottom"},[i("text",{attrs:{eventid:"nsh-3"},on:{tap:t.confrim}},[t._v("确定")]),i("text",{attrs:{eventid:"L32-4"},on:{tap:t.cancel}},[t._v("取消")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"goodsImg"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"goodsInfo"},[e("text",[this._v("商品详情")]),e("view",{staticClass:"info"},[e("text",[this._v("名称:精品双肩包\\n")]),e("text",[this._v("材质:纯棉精仿\\n")]),e("text",[this._v("重量:105g\\n")]),e("text",[this._v("颜色:黑色")])])])}]};e.a=s}},[95]);
});
require('pages/tabBar/myCenter/goodsDetail.js');
__wxRoute = 'pages/tabBar/myCenter/dataWallet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/dataWallet.js';

define('pages/tabBar/myCenter/dataWallet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([16],{100:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(101));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},101:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(103),i=s.n(a),n=s(104);var r=function(t){s(102)},c=s(0)(i.a,n.a,r,null,null);e.default=c.exports},102:function(t,e){},103:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(3),n=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],s=this.list[this.list.length-1],a=s+6,i=s+1;i<a;i++)e.push(i);setTimeout(function(){a>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},1500)}},components:{loadMore:n.default}}},104:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"wallet"},[t._m(0),s("view",{staticClass:"bgc"}),t._m(1),t._m(2),s("view",{staticClass:"turn"},[s("navigator",{staticClass:"tLeft",attrs:{url:"walletAddress"}},[s("image",{attrs:{src:"../../../static/turn.png",mode:""}}),s("text",[t._v("转让生命果")])]),s("navigator",{staticClass:"tRight",attrs:{url:"discounts"}},[s("image",{attrs:{src:"../../../static/log.png",mode:""}}),s("text",[t._v("钱包记录")])])],1)]),s("view",{staticClass:"wList"},[s("view",{staticClass:"title"},[t._v("\n\t\t\t钱包记录\n\t\t")]),t._l(t.list,function(e,a){return s("view",{key:a,staticClass:"active",attrs:{id:"list"}},[t._m(3,!0),t._m(4,!0)])}),s("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"yxh-0"}})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"photo"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"main"},[s("text",[t._v("myName")]),s("text",[t._v("6666")]),s("text",[t._v("可交易的生命果")]),s("text",[t._v("昨日市场成交价")]),s("image",{attrs:{src:"../../../static/broken.png",mode:""}}),s("view",{staticClass:"bMian"},[s("view",{},[s("text",[t._v("最高价")]),s("text",[t._v("￥15.67元/个")])]),s("view",{},[s("text",[t._v("最低价")]),s("text",[t._v("￥5.67元/个")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"qrcode"},[e("image",{attrs:{src:"../../../static/qrcode.png",mode:""}}),e("text",[this._v("钱包地址")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("text",[this._v("转让")]),e("text",[this._v("11月13日 11:17")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("text",[this._v("+888生命果")]),e("text",[this._v("aaaaaaaaa")])])}]};e.a=a}},[100]);
});
require('pages/tabBar/myCenter/dataWallet.js');
__wxRoute = 'pages/tabBar/myCenter/walletAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/walletAddress.js';

define('pages/tabBar/myCenter/walletAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([5],{105:function(t,e,s){"use strict";var a=c(s(1)),n=c(s(106));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},106:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(108),n=s.n(a),c=s(109);var r=function(t){s(107)},l=s(0)(n.a,c.a,r,null,null);e.default=l.exports},107:function(t,e){},108:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{address:!0}},methods:{scanCode:function(){t.scanCode({success:function(t){console.log("条码内容："+t.result)}})},turn:function(){t.navigateTo({url:"turnSuccess"})}}}}).call(e,s(2).default)},109:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._m(0),s("view",{staticClass:"title"},[s("view",{staticClass:"address"},[s("text",[t._v("钱包地址")]),t.address?s("text",[t._v("地址错误")]):t._e(),s("input",{attrs:{type:"text",value:"",placeholder:"输入对方数据钱包地址","placeholder-class":"place-holder"}}),s("image",{attrs:{src:"../../../static/scanqr.png",mode:"",eventid:"yJK-0"},on:{tap:t.scanCode}})]),t._m(1),s("button",{attrs:{type:"default",eventid:"ek3-1"},on:{tap:t.turn}},[t._v("确认转出")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"warn"},[e("image",{attrs:{src:"../../../static/warn.png",mode:""}}),e("text",[this._v("注意，本次生命果转出后无法取消，请核对好钱包地址。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"address"},[e("text",[this._v("生命果数量")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入转让果实个数","placeholder-class":"place-holder"}})])}]};e.a=a}},[105]);
});
require('pages/tabBar/myCenter/walletAddress.js');
__wxRoute = 'pages/tabBar/myCenter/discounts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/discounts.js';

define('pages/tabBar/myCenter/discounts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([15],{110:function(t,e,n){"use strict";var s=a(n(1)),i=a(n(111));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(113),i=n.n(s),a=n(114);var o=function(t){n(112)},l=n(0)(i.a,a.a,o,null,null);e.default=l.exports},112:function(t,e){},113:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=n(3),a=(s=i)&&s.__esModule?s:{default:s};e.default={data:function(){return{type:"1",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],n=this.list[this.list.length-1],s=n+6,i=n+1;i<s;i++)e.push(i);setTimeout(function(){s>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},1500)}},components:{loadMore:a.default}}},114:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"discount"},[t._l(t.list,function(e,s){return n("view",{key:s,staticClass:"list"},[n("view",{class:1!=t.type?"active":"left"},[n("text",[t._v("￥")]),n("text",[t._v("50")]),n("text",[t._v("满100可用")])]),n("view",{staticClass:"right"},[t._m(0,!0),n("view",{staticClass:"img"},[1!=t.type?n("navigator",{staticClass:"has",attrs:{url:"#"}},[t._v("立即领取")]):n("navigator",{staticClass:"use",attrs:{url:"#"}},[t._v("立即使用")]),1==t.type?n("image",{attrs:{src:"../../../static/hasBrought.png",mode:""}}):t._e()],1)])])}),n("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"17j-0"}})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("text",[this._v("养生佳品宁夏枸杞购物券")]),e("text",[this._v("有效期至2019-10-10")])])}]};e.a=s}},[110]);
});
require('pages/tabBar/myCenter/discounts.js');
__wxRoute = 'pages/tabBar/myCenter/turnSuccess';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/turnSuccess.js';

define('pages/tabBar/myCenter/turnSuccess.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([7],{115:function(t,e,n){"use strict";var s=u(n(1)),a=u(n(116));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(118),a=n.n(s),u=n(119);var c=function(t){n(117)},r=n(0)(a.a,u.a,c,null,null);e.default=r.exports},117:function(t,e){},118:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{back:function(){t.redirectTo({url:"walletAddress"})}}}}).call(e,n(2).default)},119:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("view",{staticClass:"success"},[e("text",[this._v("恭喜转出成功")]),e("image",{attrs:{src:"../../../static/turnSuccess.png",mode:""}}),e("button",{attrs:{type:"default",eventid:"GmP-0"},on:{tap:this.back}},[this._v("确认")])],1)])},staticRenderFns:[]};e.a=s}},[115]);
});
require('pages/tabBar/myCenter/turnSuccess.js');
__wxRoute = 'pages/myCenter/healthBank';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/healthBank.js';

define('pages/myCenter/healthBank.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([34],{120:function(t,e,a){"use strict";var s=n(a(1)),i=n(a(121));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},121:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(123),i=a.n(s),n=a(124);var o=function(t){a(122)},l=a(0)(i.a,n.a,o,null,null);e.default=l.exports},122:function(t,e){},123:function(t,e,a){"use strict";var s;Object.defineProperty(e,"__esModule",{value:!0});var i,n=a(3),o=(i=n)&&i.__esModule?i:{default:i};function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.default=(l(s={data:function(){return{toast:!1,sallNum:"",haveNum:6666,unitPrice:"",type:"1",wx:!0,ali:!0,list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(t){},methods:{buyNow:function(t){this.toast=!0},toastHide:function(){this.toast=!1},pay:function(t){this.type=t.currentTarget.dataset.type}}},"onLoad",function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t}),l(s,"onReachBottom",function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],a=this.list[this.list.length-1],s=a+10,i=a+1;i<s;i++)e.push(i);setTimeout(function(){s>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},1500)}}),l(s,"components",{loadMore:o.default}),s)},124:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("scroll-view",{attrs:{"scroll-y":"yrue"}},[a("view",{staticClass:"topImg"},[a("view",{staticClass:"bgimg"},[a("image",{attrs:{src:"../../../static/healthbg.png",mode:""}})]),a("view",{staticClass:"money"},[a("view",{staticClass:"moneyTop"},[a("text",[t._v("总金额(元)\\n")]),a("text",[t._v("￥66666,66")])]),a("view",{staticClass:"moneyBottom"},[a("view",[a("text",[t._v("6666.66\\n")]),a("text",[t._v("可用金额")])]),a("view",[a("text",[t._v("667666.66\\n")]),a("text",[t._v("理财本金")])]),a("view",[a("text",[t._v("66656.66\\n")]),a("text",[t._v("预期利息")])])])])]),a("view",{staticClass:"matters"},[a("navigator",[a("image",{attrs:{src:"../../../static/idCard.png",mode:""}}),a("text",[t._v("资金转账")])]),a("navigator",[a("image",{attrs:{src:"../../../static/bankHealth.png",mode:""}}),a("text",[t._v("充值记录")])]),a("navigator",{attrs:{url:"myMatters"}},[a("image",{attrs:{src:"../../../static/common.png",mode:""}}),a("text",[t._v("充值介绍")])])],1),a("view",{staticClass:"earings"},[a("view",{staticClass:"title"},[t._v("\n\t\t\t\t收益明细\n\t\t\t")]),a("view",{staticClass:"earing"},[a("navigator",[a("text",[t._v("+666\\n")]),a("text",[t._v("本金金额")])]),a("navigator",[a("text",[t._v("+88.00\\n")]),a("text",[t._v("昨日收益")])]),a("navigator",[a("text",[t._v("+66.66\\n")]),a("text",[t._v("总收益")])])],1)]),a("view",{staticClass:"recommend"},[a("view",{staticClass:"title"},[t._v("\n\t\t\t\t充值方案\n\t\t\t")]),a("view",{staticClass:"list"},[t._l(t.list,function(e,s){return a("view",{key:s,staticClass:"context"},[a("view",{staticClass:"cTop"},[a("text",[t._v("1000元充值卡")]),a("text",{attrs:{eventid:"7ym-0-"+s},on:{tap:t.buyNow}},[t._v("充值")])]),a("view",{staticClass:"cBottom"},[a("view",[a("text",[t._v("1000\\n")]),a("text",[t._v("商品成本价额度")])]),a("view",[a("text",[t._v("1/1\\n")]),a("text",[t._v("充值次数")])]),a("view",[a("text",[t._v("150\\n")]),a("text",[t._v("体力")])])])])}),a("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"9yS-0"}})],2)])]),t.toast?a("view",{staticClass:"toast"},[a("view",{staticClass:"main"},[a("view",{staticClass:"sallBuy"},[t._m(0),a("view",{staticClass:"tTitle"},[t._v("\n\t\t\t\t\t充值中心\n\t\t\t\t")]),a("view",{staticClass:"sMiddle"},[a("view",{staticClass:"inputTitle"},[a("view",[a("text",[t._v("买入金额\\n")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.sallNum,expression:"sallNum"}],attrs:{"placeholder-class":"place-holder",type:"number",placeholder:"输入买入金额",eventid:"LCg-1"},domProps:{value:t.sallNum},on:{input:function(e){e.target.composing||(t.sallNum=e.target.value)}}})]),t._m(1)]),a("view",{staticClass:"showTitle"},[a("view",{staticClass:"mode"},[t._v("\n\t\t\t\t\t\t\t充值方式\n\t\t\t\t\t\t")]),a("view",{staticClass:"ali",attrs:{"data-type":"1",eventid:"XAy-2"},on:{tap:t.pay}},[t.ali&&1==t.type?a("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):a("image",{attrs:{src:"../../../static/unSelect.png",mode:""}}),a("text",[t._v("支付宝支付")])]),a("view",{staticClass:"ali",attrs:{"data-type":"2",eventid:"AjB-3"},on:{tap:t.pay}},[t.wx&&2==t.type?a("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):a("image",{attrs:{src:"../../../static/unSelect.png",mode:""}}),a("text",[t._v("微信支付")])])])]),a("view",{staticClass:"sBottom"},[a("button",{staticClass:"btnSall2",attrs:{type:"default"}},[t._v("买入")]),a("button",{staticClass:"cancel1",attrs:{type:"default",eventid:"hLF-4"},on:{tap:t.toastHide}},[t._v("取消")])],1)])])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"sTop"},[e("view",{staticClass:"sImg"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})]),e("view",{staticClass:"sTitle"},[e("text",[this._v("MyName")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("text",[this._v("充值次数\\n")]),e("text",[this._v("无限制")])])}]};e.a=s}},[120]);
});
require('pages/myCenter/healthBank.js');
__wxRoute = 'pages/myCenter/myMatters';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/myMatters.js';

define('pages/myCenter/myMatters.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([33],{125:function(t,e,s){"use strict";var i=n(s(1)),a=n(s(126));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},126:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(128),a=s.n(i),n=s(129);var c=function(t){s(127)},o=s(0)(a.a,n.a,c,null,null);e.default=o.exports},127:function(t,e){},128:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s(3),n=(i=a)&&i.__esModule?i:{default:i};e.default={data:function(){return{type:1,toast:!1,list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},methods:{selectTab:function(t){this.type=t.currentTarget.dataset.type,console.log(this.type)},cancelOrder:function(){this.toast=!0},confrim:function(){this.toast=!1},cancel:function(){this.toast=!1}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],s=this.list[this.list.length-1],i=s+6,a=s+1;a<i;a++)e.push(a);setTimeout(function(){i>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},1500)}},components:{loadMore:n.default}}},129:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"scsj"},[t._m(0),s("view",{staticClass:"choiceFour"},[s("text",{class:0==t.type?"active":"",attrs:{"data-type":"0",eventid:"qya-0"},on:{tap:t.selectTab}},[t._v("全部")]),s("text",{class:1==t.type?"active":"",attrs:{"data-type":"1",eventid:"NDz-1"},on:{tap:t.selectTab}},[t._v("充值")]),s("text",{class:2==t.type?"active":"",attrs:{"data-type":"2",eventid:"0SQ-2"},on:{tap:t.selectTab}},[t._v("提现")]),s("text",{class:3==t.type?"active":"",attrs:{"data-type":"3",eventid:"lVW-3"},on:{tap:t.selectTab}},[t._v("失效")])])]),s("view",{staticClass:"list"},[s("view",{staticClass:"scroll-view"},[t._l(t.list,function(e,i){return s("view",{key:i,staticClass:"health"},[s("view",{staticClass:"top"},[t._m(1,!0),s("view",{},[1==t.type?s("text",[t._v("充值成功")]):t._e(),2==t.type?s("text",[t._v("提现成功")]):t._e(),3==t.type?s("text",{staticClass:"cancel"},[t._v("失效订单")]):t._e()])]),t._m(2,!0),s("view",{staticClass:"bottom"},[s("progress",{attrs:{percent:"50",color:"#6984FF",active:"",width:"611upx",height:"7upx","border-radius":"4upx"}})],1),t._m(3,!0)])}),s("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"eOV-0"}})],2)]),t.toast?s("view",{staticClass:"toast"},[s("view",{staticClass:"main"},[s("view",{staticClass:"top1"},[s("image",{attrs:{src:"../../../static/delOrder.png",mode:""}}),1==t.type?s("text",[t._v("(取消定期订单会失去所有利息！)")]):t._e(),2==t.type?s("text",[t._v("(取消活期订单只收益部分利息！)")]):t._e()]),s("view",{staticClass:"bottom1"},[s("text",{attrs:{eventid:"BfT-4"},on:{tap:t.confrim}},[t._v("确定")]),s("text",{attrs:{eventid:"XbT-5"},on:{tap:t.cancel}},[t._v("取消")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"title"},[e("view",{},[e("text",[this._v("充值中心\\n")]),e("text",[this._v("查看我的充值记录")])]),e("view",{},[e("image",{attrs:{src:"../../../static/moneyBg.jpg",mode:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("text",[this._v("健康金最新优质理财")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"middle"},[e("view",[e("text",[this._v("3000元\\n")]),e("text",[this._v("商品成本价额度")])]),e("view",[e("text",[this._v("微信\\n")]),e("text",[this._v("充值方式")])]),e("view",[e("text",[this._v("2018.9.15\\n")]),e("text",[this._v("时间")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"foot"},[e("text",[this._v("剩余金额1500元\\n")]),e("text",[this._v("50%")])])}]};e.a=i}},[125]);
});
require('pages/myCenter/myMatters.js');
__wxRoute = 'pages/tabBar/dealMarket/dealMarket';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/dealMarket/dealMarket.js';

define('pages/tabBar/dealMarket/dealMarket.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([23],{130:function(t,e,s){"use strict";var a=c(s(1)),i=c(s(131));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},131:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(133),i=s.n(a),c=s(134);var n=function(t){s(132)},r=s(0)(i.a,c.a,n,null,null);e.default=r.exports},132:function(t,e){},133:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(3),c=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{type:1,toast:!1,indexs:"-1",orderState:"1",orderState1:"1",selected:1,isActive:!0,selecteds:2,selecteds1:3,selecteds2:4,list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},methods:{changOrder:function(t){var e=t.currentTarget;this.orderState=e.dataset.state,console.log(this.orderState),1!=this.orderState?2==this.orderState&&(this.orderState1=1,this.orderState=1,console.log(this.orderState+"-----2")):this.orderState1=2},changOrder1:function(t){var e=t.currentTarget;return this.orderState1=e.dataset.states,console.log(this.orderState1),1==this.orderState1?(this.orderState=2,void(this.orderState1=2)):2==this.orderState1?(this.orderState=2,void console.log(this.orderState+"----1")):void 0},change:function(t){var e=t.currentTarget;this.type=e.dataset.type,this.indexs="-1"},selectDel:function(t){var e=t.currentTarget;this.indexs=e.dataset.indexs,console.log(t)},change1:function(t){var e=t.currentTarget;this.selected=e.dataset.selected,1==this.selected&&(2===this.selecteds?this.selecteds=5:this.selecteds=2),2==this.selected&&(3===this.selecteds1?this.selecteds1=6:this.selecteds1=3),3==this.selected&&(4===this.selecteds2?this.selecteds2=7:this.selecteds2=4)},lower:function(e){console.log(e);this.page++,this.page>this.totalPage?t.showToast({title:"暂无更多!",duration:2e3,icon:"none"}):(t.showLoading({title:"加载中"}),this.list.push(this.list),setTimeout(function(){t.hideLoading()},2e3))},confrim:function(){this.toast=!1},cancel:function(){this.toast=!1},delOrde:function(){this.toast=!0}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],s=this.list[this.list.length-1],a=s+6,i=s+1;i<a;i++)e.push(i);setTimeout(function(){a>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},1500)}},components:{loadMore:c.default}}}).call(e,s(2).default)},134:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"scsj"},[s("view",{staticClass:"contentTop"},[s("view",{staticClass:"ctLeft"},[1!=t.orderState?s("image",{attrs:{src:"../../../static/manageUn.png",mode:"","data-state":"2",eventid:"yzu-0"},on:{tap:t.changOrder}}):t._e(),1==t.orderState?s("image",{attrs:{src:"../../../static/manageSelect.png",mode:"","data-state":"1",eventid:"Nss-1"},on:{tap:t.changOrder}}):t._e()]),s("view",{staticClass:"ctLeft"},[1!=t.orderState1?s("image",{attrs:{src:"../../../static/myOrderSelect.png",mode:"","data-states":"1",eventid:"Kfl-2"},on:{tap:t.changOrder1}}):t._e(),1==t.orderState1?s("image",{attrs:{src:"../../../static/myOrderUn.png",mode:"","data-states":"2",eventid:"TQf-3"},on:{tap:t.changOrder1}}):t._e()])]),s("view",{staticClass:"classify"},[s("view",{staticClass:"threeClass"},[s("view",{class:{select:1==t.type&&t.isActive},attrs:{"data-type":"1",eventid:"c0e-4"},on:{tap:t.change}},[s("text",[t._v("所有")])]),s("view",{class:{select:2==t.type&&t.isActive},attrs:{"data-type":"2",eventid:"bnx-5"},on:{tap:t.change}},[s("image",{attrs:{src:"../../../static/circle1.png",mode:""}}),s("text",[t._v("售卖")])]),s("view",{class:{select:3==t.type&&t.isActive},attrs:{"data-type":"3",eventid:"VZc-6"},on:{tap:t.change}},[s("image",{attrs:{src:"../../../static/circle.png",mode:""}}),s("text",[t._v("完成")])])]),s("view",{staticClass:"screen"},[s("view",{class:{select:1==t.selected&&t.isActive},attrs:{id:"time","data-selected":"1",eventid:"Nkm-7"},on:{tap:t.change1}},[s("text",[t._v("时间")]),2==t.selecteds?s("image",{attrs:{src:"../../../static/botArrow.png",mode:""}}):t._e(),5==t.selecteds?s("image",{attrs:{src:"../../../static/topArrow.png",mode:""}}):t._e()]),s("view",{class:{select:2==t.selected&&t.isActive},attrs:{id:"time","data-selected":"2",eventid:"kh9-8"},on:{tap:t.change1}},[s("text",[t._v("数量")]),3==t.selecteds1?s("image",{attrs:{src:"../../../static/botArrow.png",mode:""}}):t._e(),6==t.selecteds1?s("image",{attrs:{src:"../../../static/topArrow.png",mode:""}}):t._e()]),s("view",{class:{select:3==t.selected&&t.isActive},attrs:{id:"time","data-selected":"3",eventid:"oqw-9"},on:{tap:t.change1}},[s("text",[t._v("单价")]),4==t.selecteds2?s("image",{attrs:{src:"../../../static/botArrow.png",mode:""}}):t._e(),7==t.selecteds2?s("image",{attrs:{src:"../../../static/topArrow.png",mode:""}}):t._e()]),s("view",{class:{select:4==t.selected&&t.isActive},attrs:{id:"time","data-selected":"4",eventid:"zaU-10"},on:{tap:t.change1}},[s("text",[t._v("类型")])])])])]),s("view",{staticClass:"contentar"},[s("view",{staticClass:"scroll-view"},[t._l(t.list,function(e,a){return s("view",{key:a,class:t.indexs==a?"active":"",attrs:{id:"list","data-indexs":a,eventid:"rLz-12-"+a},on:{tap:t.selectDel}},[t._m(0,!0),t._m(1,!0),t._m(2,!0),s("view",{staticClass:"goBuy"},[s("text",[t._v("立即购买")]),2==t.type&&t.indexs==a?s("image",{attrs:{src:"../../../static/delete.png",mode:"",eventid:"a1O-11-"+a},on:{tap:t.delOrde}}):t._e()])])}),s("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"kCC-0"}})],2)]),t.toast?s("view",{staticClass:"toast"},[s("view",{staticClass:"delOrder"},[t._m(3),s("view",{staticClass:"bottom"},[s("text",{attrs:{eventid:"fCE-13"},on:{tap:t.confrim}},[t._v("确定")]),s("text",{attrs:{eventid:"KFo-14"},on:{tap:t.cancel}},[t._v("取消")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"nyr"},[e("image",{attrs:{src:"../../../static/circle.png",mode:""}}),e("text",{attrs:{n:""}},[this._v("10-23 9:09\\n")]),e("text",[this._v("正在出售")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"num"},[e("text",[this._v("60个")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"money"},[e("text",[this._v("21.00元/个\\n")]),e("text",[this._v("1,260.00元")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top"},[e("image",{attrs:{src:"../../../static/delOrder.png",mode:""}}),e("text",[this._v("确定取消订单")])])}]};e.a=a}},[130]);
});
require('pages/tabBar/dealMarket/dealMarket.js');
__wxRoute = 'pages/healthySpace/powerRecord';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthySpace/powerRecord.js';

define('pages/healthySpace/powerRecord.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([37],{135:function(t,e,s){"use strict";var i=a(s(1)),n=a(s(136));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},136:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(138),n=s.n(i),a=s(139);var c=function(t){s(137)},o=s(0)(n.a,a.a,c,null,null);e.default=o.exports},137:function(t,e){},138:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=s(3),a=(i=n)&&i.__esModule?i:{default:i};e.default={data:function(){return{list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},methods:{},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],s=this.list[this.list.length-1],i=s+6,n=s+1;n<i;n++)e.push(n);setTimeout(function(){i>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},2e3)}},components:{loadMore:a.default}}},139:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._m(0),s("view",{staticClass:"recordList"},[t._m(1),s("view",{staticClass:"listPower"},[t._m(2),s("view",{staticClass:"scroll-view"},[t._l(t.list,function(e,i){return s("view",{key:i,staticClass:"listP"},[t._m(3,!0),t._m(4,!0),t._m(5,!0)])}),s("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"tHN-0"}})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top"},[e("view",{staticClass:"tTop"},[e("view",{staticClass:"left"},[e("text",[this._v("6666")]),e("text",[this._v("(体力)\\n")]),e("text",[this._v("+20%产出增益")])]),e("view",{staticClass:"right"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}}),e("text",[this._v("MyName")])])]),e("view",{staticClass:"tTitle"},[e("view",{staticClass:"left"},[e("image",{attrs:{src:"../../../static/temp.png",mode:""}}),e("text",[this._v("增加体力")])]),e("view",{staticClass:"right"},[e("image",{attrs:{src:"../../../static/hoof.png",mode:""}}),e("text",[this._v("生命果")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"clear"},[e("text",[this._v("体力记录")]),e("text",[this._v("清除记录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"options"},[e("text",[this._v("类型")]),e("text",[this._v("时间")]),e("text",[this._v("数量")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("image",{attrs:{src:"../../../static/up.png",mode:""}}),e("text",[this._v("每日签到")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("text",[this._v("9/12")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("text",[this._v("+24")]),e("text",[this._v("限时体力")])])}]};e.a=i}},[135]);
});
require('pages/healthySpace/powerRecord.js');
__wxRoute = 'pages/healthySpace/powerCheer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthySpace/powerCheer.js';

define('pages/healthySpace/powerCheer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([38],{140:function(t,s,e){"use strict";var i=c(e(1)),a=c(e(141));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},141:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(143),a=e.n(i),c=e(144);var r=function(t){e(142)},l=e(0)(a.a,c.a,r,null,null);s.default=l.exports},142:function(t,s){},143:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{status:"1"}},methods:{}}},144:function(t,s,e){"use strict";var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"content"},[t._m(0),e("view",{staticClass:"title"},[t._m(1),e("view",{staticClass:"list active"},[t._m(2),t._m(3),e("view",{staticClass:"state"},[1==t.status?e("image",{attrs:{src:"../../../static/doIt.png",mode:""}}):e("navigator",{attrs:{src:"#"}},[t._v("去完成")])],1)]),e("view",{staticClass:"list"},[t._m(4),t._m(5),e("view",{staticClass:"state"},[e("navigator",{attrs:{src:"#"}},[t._v("去完成")])],1)]),e("view",{staticClass:"list active"},[t._m(6),t._m(7),e("view",{staticClass:"state"},[e("navigator",{attrs:{src:"#"}},[t._v("去完成")])],1)])]),e("view",{staticClass:"title"},[t._m(8),e("view",{staticClass:"list active"},[t._m(9),t._m(10),e("view",{staticClass:"state"},[e("navigator",{attrs:{src:"#"}},[t._v("去完成")])],1)]),e("view",{staticClass:"list"},[t._m(11),t._m(12),e("view",{staticClass:"state"},[e("navigator",{attrs:{src:"#"}},[t._v("去完成")])],1)]),e("view",{staticClass:"list active"},[t._m(13),t._m(14),e("view",{staticClass:"state"},[e("navigator",{attrs:{src:"#"}},[t._v("去完成")])],1)]),e("view",{staticClass:"list"},[t._m(15),t._m(16),e("view",{staticClass:"state"},[e("navigator",{attrs:{src:"#"}},[t._v("去完成")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"mainImg"},[s("image",{attrs:{src:"../../../static/powe.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"time"},[s("image",{attrs:{src:"../../../static/time.png",mode:""}}),s("text",[this._v("日常任务")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"listImg"},[s("image",{staticStyle:{width:"63upx",height:"56upx"},attrs:{src:"../../../static/timeLogin.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"goDo"},[s("view",{staticClass:"left"},[s("text",[this._v("每日签到")]),s("view",{staticClass:"goal"},[s("image",{attrs:{src:"../../../static/goal.png",mode:""}}),s("text",[this._v("+5体力")])]),s("text",[this._v("\\n每日登陆签到送体力")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"listImg"},[s("image",{staticStyle:{width:"53upx",height:"51upx"},attrs:{src:"../../../static/healthGoods.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"goDo"},[s("view",{staticClass:"left"},[s("text",[this._v("健康商城")]),s("view",{staticClass:"goal"},[s("image",{attrs:{src:"../../../static/goal.png",mode:""}}),s("text",[this._v("+5体力")])]),s("text",[this._v("\\n根据商城购物金额数量赠送不定量体力")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"listImg"},[s("image",{staticStyle:{width:"54upx",height:"47upx"},attrs:{src:"../../../static/invinit.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"goDo"},[s("view",{staticClass:"left"},[s("text",[this._v("邀请好友")]),s("view",{staticClass:"goal"},[s("image",{attrs:{src:"../../../static/goal.png",mode:""}}),s("text",[this._v("+5体力")])]),s("text",[this._v("\\n邀请好友注册，购物赠送一定体力")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"time"},[s("image",{staticStyle:{width:"43upx",height:"55upx"},attrs:{src:"../../../static/recommend.png",mode:""}}),s("text",[this._v("推荐任务")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"listImg"},[s("image",{staticStyle:{width:"49upx",height:"51upx"},attrs:{src:"../../../static/common.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"goDo"},[s("view",{staticClass:"left"},[s("text",[this._v("关注公众号")]),s("view",{staticClass:"goal"},[s("image",{attrs:{src:"../../../static/goal.png",mode:""}}),s("text",[this._v("+5体力")])]),s("text",[this._v("\\n关注“健康联盟”微信公众号获取体力")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"listImg"},[s("image",{staticStyle:{width:"56upx",height:"51upx"},attrs:{src:"../../../static/idCard.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"goDo"},[s("view",{staticClass:"left"},[s("text",[this._v("实名认证")]),s("view",{staticClass:"goal"},[s("image",{attrs:{src:"../../../static/goal.png",mode:""}}),s("text",[this._v("+5体力")])]),s("text",[this._v("\\n完善个人信息，绑定钱包信息")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"listImg"},[s("image",{staticStyle:{width:"56upx",height:"48upx"},attrs:{src:"../../../static/quality.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"goDo"},[s("view",{staticClass:"left"},[s("text",[this._v("正品溯源")]),s("view",{staticClass:"goal"},[s("image",{attrs:{src:"../../../static/goal.png",mode:""}}),s("text",[this._v("+5体力")])]),s("text",[this._v("\\n为好友分享正品商品，赠送一定体力")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"listImg"},[s("image",{staticStyle:{width:"51upx",height:"51upx"},attrs:{src:"../../../static/bindMap.png",mode:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"goDo"},[s("view",{staticClass:"left"},[s("text",[this._v("地址绑定")]),s("view",{staticClass:"goal"},[s("image",{attrs:{src:"../../../static/goal.png",mode:""}}),s("text",[this._v("+5体力")])]),s("text",[this._v("\\n绑定我的收货地址，获取体力值")])])])}]};s.a=i}},[140]);
});
require('pages/healthySpace/powerCheer.js');
__wxRoute = 'pages/myCenter/privacyUser';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/privacyUser.js';

define('pages/myCenter/privacyUser.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([30],{145:function(t,n,e){"use strict";var s=_(e(1)),a=_(e(146));function _(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},146:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(148),a=e.n(s),_=e(149);var v=function(t){e(147)},x=e(0)(a.a,_.a,v,null,null);n.default=x.exports},147:function(t,n){},148:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}}}},149:function(t,n,e){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[e("view",{staticClass:"title"},[e("text",{staticClass:"text"},[t._v("\n\t\t\t隐私政策\\n\n\t\t")]),e("text",[t._v("\n\t\t\t本应用尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本应用会按照本隐私权政策的规定使用和披露您的个人信息。但本应用将以高度的法律义务对待这些信息。除本隐私权政策另有规定之外，在未征得您事先允许的情况下，本应用不会将这些信息对外披露或向第三方提供。本应用会不时更新本隐私权政策。您在同意本应用服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本应用服务使用协议不可分割的一部分。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("1. 适用范围\\n\n\t\t")]),e("text",[t._v("\n\t\t\ta)在您使用本应用网络服务，或访问本应用平台网络时，本应用自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tb)在您使用本应用时，需先进行注册，需要您提供您的个人信息，包括但不限于姓名、身份证号码、性别、职业、爱好、个人收入、手机号码、IP地址、手机型号、身份证照片、个人照片等；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tc)在您进入本应用首页，可查看到关于生命果数量或体力排行榜，该排行榜将会展示您的个人信息，比如姓名、（姓均用*代替）、健康联盟编号、生命果数量、体力值等；\\n\n\t\t")]),e("text",[t._v("\n\t\t\td)在您使用本应用参与“幸运兑”活动时，将在参与列表中展示您的健康联盟编号、参与时间，当您中奖后，将在中奖公告中展示您的真实姓名、健康联盟编号；\\n\n\t\t")]),e("text",[t._v("\n\t\t\te)在您使用本应用，在在健康商城中购买商品时，需要您提供您的个人收获信息姓名、联系电话、详细收货地址；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tf)在您推荐好友使用本应用时，您邀请的链接或二维码将展示您的姓名或者健康达人编号。\\n\n\t\t")]),e("text",[t._v("\n\t\t\tg)在您使用本应用，辅导自己邀请的好友，会展示您直接推荐的好友姓名、电话、所有推荐的人数；\\n\n\t\t")]),e("text",[t._v("\n\t\t\th)在您使用本应用，在完善个人信息中，添加地址时，需要您填写自己真实准确的个人信息姓名、联系电话、详细地址；\\n\n\t\t")]),e("text",[t._v("\n\t\t\ti)在您使用本应用，个人中心将会展示您自己的头像、姓名、昵称、健康联盟编号；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tj)在您使用本应用查看自己已经购买或者已经兑换的商品订单时，将展示您设定的订单收货信息，包括姓名、联系电话、地址；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tk)在您使用本应用查看设置中，将展示您的注册账号、姓名（姓均用*代替）、身份证号码（仅显示身份证号码前两位和最后一位，其余用*代替）；\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t您了解并同意，以下信息不适用本隐私权政策：\\n\n\t\t")]),e("text",[t._v("\n\t\t\ta)您在使用本应用平台提供的搜索服务时输入的关键字信息；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tb)本应用收集到的您在本应用发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tc)违反法律规定或违反本应用规则行为及本应用已对您采取的措施。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t2. 信息使用\\n\n\t\t")]),e("text",[t._v("\n\t\t\ta)本应用不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息（包括但不限于姓名、身份证号码、性别、职业、爱好、个人收入、手机号码、IP地址、手机型号、健康联盟昵称等），除非事先得到您的许可，或该第三方和本应用（含本应用关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。\\n\n\t\t")]),e("text",[t._v("\n\t\t\tb)本应用亦不允许任何第三方以以任何手段收集、编辑、出售或者无偿传播您的个人信息（包括但不限于姓名、身份证号码、性别、职业、爱好、个人收入、手机号码、IP地址、手机型号、健康联盟昵称等）。任何本应用平台用户如从事上述活动，一经发现，本应用有权立即终止与该用户的服务协议。\\n\n\t\t")]),e("text",[t._v("\n\t\t\tc)为服务用户的目的，本应用可能通过使用您的个人信息（包括但不限于姓名、身份证号码、性别、职业、爱好、个人收入、手机号码、IP地址、手机型号、健康联盟昵称等），向您提供您可能感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本应用合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t3. 信息披露\\n\n\t\t")]),e("text",[t._v("\n\t\t\t在如下情况下，本应用将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息，（包括但不限于姓名、身份证号码、性别、职业、爱好、个人收入、手机号码、IP地址、手机型号、健康联盟昵称等：\\n\n\t\t")]),e("text",[t._v("\n\t\t\ta)\t经您事先同意，向第三方披露；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tb)\t为提供您所要求的产品和服务，而必须和第三方分享您的个人信息（包括但不限于您的昵称、姓名、头像、健康联盟编号等信息）；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tc)\t根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；\\n\n\t\t")]),e("text",[t._v("\n\t\t\td)\t如您出现违反中国有关法律、法规或者本应用服务协议或相关规则的情况，需要向第三方披露；\\n\n\t\t")]),e("text",[t._v("\n\t\t\te)\t如您是实际的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；\\n\n\t\t")]),e("text",[t._v("\n\t\t\tf)\t在本应用平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，本应用有权决定向该用户提供其交易对方的联络方式等必要信息（比如：姓名、手机号、相信地址相信等），以促成交易的完成或纠纷的解决。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t4. 信息存储和交换\\n\n\t\t")]),e("text",[t._v("\n\t\t\t本应用收集的有关您的信息（包括但不限于姓名、身份证号码、性别、职业、爱好、个人收入、手机号码、IP地址、手机型号、健康联盟昵称等）和资料（包括但不限于身份证照片、个人头像、脸部照片等）将保存在本应用及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本应用收集信息和资料所在地的境外并在境外被访问、存储和展示。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t5. 信息安全\\n\n\t\t")]),e("text",[t._v("\n\t\t\ta)本应用账号均有安全保护功能，请妥善保管您的用户名及密码信息。本应用将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意，在信息网络上，不存在“绝对完善的安全措施”。\\n\n\t\t")]),e("text",[t._v("\n\t\t\tb)在使用本应用网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者地址。请您妥善保护自己的个人信息，仅在必要的情况下向他人提供。如您发现自己的个人信息泄密，尤其是本应用用户名及密码发生泄漏，请您立即联络本应用客服，以便本应用采取相应措施。感谢您的阅读和使用！\\n\n\t\t")])])])}]};n.a=s}},[145]);
});
require('pages/myCenter/privacyUser.js');
__wxRoute = 'pages/myCenter/serviceTitle';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/serviceTitle.js';

define('pages/myCenter/serviceTitle.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([29],{150:function(t,n,e){"use strict";var _=x(e(1)),v=x(e(151));function x(t){return t&&t.__esModule?t:{default:t}}Page((0,_.default)(v.default))},151:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var _=e(153),v=e.n(_),x=e(154);var s=function(t){e(152)},a=e(0)(v.a,x.a,s,null,null);n.default=a.exports},152:function(t,n){},153:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}}}},154:function(t,n,e){"use strict";var _={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[e("view",{staticClass:"title"},[e("text",[t._v("\n\t\t\t “健康联盟”服务（以下简称本服务），是河南金钱草网络科技有限公司（以下简称“健康联盟公司”）基于区块链技术为用户提供的创建“健康联盟”私钥、使用“健康联盟”平台等相关服务。\\n\n\t\t")]),e("text",[t._v(" \n\t\t\t 本公司在此特别提醒用户认真阅读，充分理解本协议各项条款，特别是其中所涉及的免除限制本公司责任的条款，对用户权力限制条款，争议解决和法律适用等。请用户审慎阅读并选择接受或不接\t\t\t\t\t受本协议（未成年人应在监护人陪同下阅读）。除非用户接受本协议所有条款，否则用户无权使用本公司于本协议下所提供的服务。用户在本平台注册，登录或使用本平台服务，即表示用户完全接受本协议的全部条款，并同意接受其约束。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t本协议构成您与健康联盟达成的协议，您的使用行为将被视为对本协议全部内容的知晓，认可并同意遵守，具有法律效力。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t1、健康联盟服务：指由健康联盟基于数字加密技术为您提供的创建私钥、加密存储数字资产和信息数据等服务\\n\n\t\t")]),e("text",[t._v("\n\t\t\t2、生命果：指健康联盟数字信息生态下的原生数字资产。它的产生与健康联盟数字信息数量、用户浏览与社交行为有强关联性，健康生命果的产生总数是恒定的，每日产出数量恒定，每4年减半。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t3、体力值：是指用户获取健康生命果的影响因子，体力值越高，获得的健康生命果越多。每日确定产出健康生命果总数K，用户每日收获的健康生命果数=K*该用户当前体力值/所有用户体力值之和。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第一条 服务规则\n\t\t")]),e("text",[t._v("\n\t\t\t1、您明确知悉，本服务涉及健康联盟相关软件包括但不限于所有权、知识产权等一切权利归健康联盟所有。用户在享受本服务时，应当受本协议以及软件及服务相关的具体服务条款、操作规则的约束。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t2、用户资格：\\n\n\t\t\t仅当您符合下列条件之一时，才能申请成为健康联盟用户并使用本服务：\\n\n\t\t")]),e("text",[t._v("\n\t\t\t(1）年满十八周岁，并具有完全民事权利能力和完全民事行为能力的自然人；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t(2）未满十八周岁，但其法定予以书面同意的自然人；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t(3）根据中华人民共和国或设立地法律、法规和/规章成立并合法存在的公司、社团组织和其它组织。\\n\n\t\t\t无民事行为能力人、限制民事行为能力人以及无经营或特定经营资格的组织不当注册为本服务用户或超过其民事权利或民事行为能力范围使用本服务的，其与本服务之间的协议自始无效，健康联盟一\t\t\t\t\t经发现，有权立即注销该用户使用健康联盟及相关服务的资格且无需承担任何责任，并有权追究其（或其法定监护人）使用本服务所产生的相关法律责任。\\n\n\t\t")]),e("text",[t._v("3、注册\\n\n\t\t")]),e("text",[t._v("\n\t\t\t(1）您在使用“健康联盟”之前，必须先行注册，并填写注册资料，取得健康联盟账号、密码。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t(2）健康联盟账号注册资料包括但不限于您的账号名称、头像、密码、注册或更新健康联盟账号时输入的所有信息。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t您在注册健康联盟账号时承诺遵守法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实等七条底线，不得在健康联盟账号注册资料中出现违法和不良信息，且您保证\t\t\t\t\t在注册和使用账号时，不得有以下情形：\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （1）违法宪法或法律法规规定的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （2）危害国家安全，泄漏国家秘密，颠覆国家政权，破坏国家统一的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （3）损害国家荣誉和利益的，损害公共利益的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （4）煽动民族仇恨、民族歧视，破坏民族团结的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （5）破坏国家宗教政策，宣扬邪教和封建迷信的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （6）散布谣言，扰乱社会秩序，破坏社会稳定的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （8）侮辱或者诽谤他人，侵害他人合法权益的；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t （9）含有法律、行政法规禁止的其它内容的。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t(3）您成功注册健康联盟账号以后，根据根据相关法律、法规规定以及考虑到健康联盟产品服务的重要性，您同意：\\n\n\t\t")]),e("text",[t._v("\n\t\t\t 1.在注册健康联盟账号时提交有效身份信息进行实名认证；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t 2.提供及时、详尽及准确的账户注册资料；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t 3.不断更新注册资料，符合及时、详尽准确的要求，除法律法规规定外，对注册健康联盟账号时填写的身份证件信息不能随意修改。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t(4）如果您提供任何不真实、不准确、不完整或不能反映当前情况的资料的，或健康联盟公司有合理理由怀疑该资料不真实、不准确、不完整或不能反映当前情况而给健康联盟公司或其关联公司造成损失的，您应负责赔偿。若您以虚假信息骗取账号注册或账号头像、个人简介等注册资料存在违法和不良信息的，健康联盟公司有权采取通知限期改正、暂停使用、注销登记等措施。对于冒用关联机构或社会名人注册账号名称的，健康联盟公司有权注册该账号，并向政府主管部门进行报告。健康联盟公司有权对您的健康联盟账户进行安全性管理，包括但不限于采取限制、冻结、注销用户账户措施。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t4. 您在健康联盟平台中创建健康联盟账户，健康联盟公司会帮助您生成对应的区块链账户地址及私钥，地址和私钥具有唯一性，私钥可以用于特定情形下的收付生命果等用途。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t5. 您知悉，您基于健康联盟平台所获得的账户地址及相关私钥为您本人所有，您应妥善保管您的账户地址及相关私钥，您的账户信息、私钥均通过数字加密，不会被获取、储存、备份于健康联盟服务器中，账户地址与相关私钥不得更改，如您不慎丢失账户地址或私钥，将无法通过健康联盟公司或平台找回，您将自行承担相关损失。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第二条 免责声明\\n\n\t\t")]),e("text",[t._v("\n\t\t\t1．用户明确同意其使用健康联盟服务所存在的风险将完全由其自己承担；因其使用健康联盟服务而产生的一切后果也由其自己承担，健康联盟公司对用户不承担任何责任。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t2．健康联盟公司不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第三条 服务变更、中断或终止\\n\n\t\t")]),e("text",[t._v("\n\t\t\t1．如因系统维护或升级的需要而需暂停网络服务，健康联盟公司将尽可能事先进行通告。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t2．如发生下列任何一种情形，健康联盟公司有权随时中断或终止向用户提供本协议项下的网络服务而无需通知用户：\\n\n\t\t")]),e("text",[t._v("\n\t\t\t   （a）用户提供的个人资料不真实；\\n\n\t\t")]),e("text",[t._v("\n\t\t\t   （b）用户违反本协议中规定的使用规则。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t3．除前款所述情形外，健康联盟公司同时保留在不事先通知用户的情况下随时中断或终止部分或全部网络服务的权利，对于所有服务的中断或终止而造成的任何损失，健康联盟公司无需对用户或任何第三方承担任何责任。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第四条 违约赔偿\\n\n\t\t")]),e("text",[t._v("\n\t\t\t 用户同意保障和维护健康联盟公司及其他用户的利益如因用户违反有关法律、法规或本协议项下的任何条款而给健康联盟公司或任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第五条 修改协议\\n\n\t\t")]),e("text",[t._v("\n\t\t\t1．健康联盟公司将可能不时的修改本协议的有关条款，一旦条款内容发生变动，健康联盟公司将会在相关的页面提示修改内容。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t2．如果不同意健康联盟公司对服务条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受服务条款的变动。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第六条 法律管辖\\n\n\t\t")]),e("text",[t._v("\n\t\t\t1．本协议的订立、执行和解释及争议的解决均应适用中国法律。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t2．如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向健康联盟公司所在地的人民法院提起诉讼。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第七条 通知和送达\\n\n\t\t")]),e("text",[t._v("\n\t\t\t\t本协议项下所有的通知均可通过重要页面公告、电子邮件或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。\\n\n\t\t")]),e("text",{staticClass:"text"},[t._v("\n\t\t\t第八条 其他规定\\n\n\t\t")]),e("text",[t._v("\n\t\t\t1．本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t2．如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t3．本协议中的标题仅为方便而设，在解释本协议时应被忽略。\\n\n\t\t")]),e("text",{staticClass:"top"},[t._v("\n\t\t\t 本协议适用中华人民共和国法律，因任何一方出现违反法律的行为而造成协议条款的不能执行，都应由责任方自行负责并补偿由此而给对方造成的损失。\\n\n\t\t")]),e("text",[t._v("\n\t\t\t 本协议最终解释权属于健康联盟平台及河南金钱草网络科技有限公司所有。\n\t\t")])])])}]};n.a=_}},[150]);
});
require('pages/myCenter/serviceTitle.js');
__wxRoute = 'pages/myCenter/walletCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/walletCode.js';

define('pages/myCenter/walletCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([26],{155:function(t,e,n){"use strict";var a=u(n(1)),s=u(n(156));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(158),s=n.n(a),u=n(159);var i=function(t){n(157)},r=n(0)(s.a,u.a,i,null,null);e.default=r.exports},157:function(t,e){},158:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},159:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("view",{staticClass:"title"},[e("text",[this._v("我的数据钱包地址")]),e("image",{attrs:{src:"../../static/walletCode.png",mode:""}}),e("text",[this._v("识别二维码获得钱包地址")]),e("button",{attrs:{type:"default"}},[this._v("复制我的钱包地址")])],1)])},staticRenderFns:[]};e.a=a}},[155]);
});
require('pages/myCenter/walletCode.js');
__wxRoute = 'pages/myCenter/system';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/system.js';

define('pages/myCenter/system.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([27],{160:function(t,e,n){"use strict";var s=u(n(1)),i=u(n(161));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},161:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(163),i=n.n(s),u=n(164);var a=function(t){n(162)},r=n(0)(i.a,u.a,a,null,null);e.default=r.exports},162:function(t,e){},163:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{}}},164:function(t,e,n){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("view",{staticClass:"wx"},[e("view",{staticClass:"login"},[e("text",[this._v("您已更新到最新版本")])])])])}]};e.a=s}},[160]);
});
require('pages/myCenter/system.js');
__wxRoute = 'pages/myCenter/bindWx';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/bindWx.js';

define('pages/myCenter/bindWx.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([35],{165:function(t,e,n){"use strict";var s=a(n(1)),i=a(n(166));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(168),i=n.n(s),a=n(169);var c=function(t){n(167)},o=n(0)(i.a,a.a,c,null,null);e.default=o.exports},167:function(t,e){},168:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toast:!1}},methods:{toBind:function(){this.toast=!0},cancel:function(){this.toast=!1},confirm:function(){t.login({provider:"weixin",success:function(t){console.log(t.authResult),this.toast=!1}})}}}}).call(e,n(2).default)},169:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"wx"},[n("view",{staticClass:"login",attrs:{eventid:"Xpq-0"},on:{tap:t.toBind}},[t._m(0),t._m(1)])]),t.toast?n("view",{staticClass:"toast"},[n("view",{staticClass:"main"},[n("view",{staticClass:"top"},[t._v("\n\t\t\t\t确定要解绑微信吗？\n\t\t\t")]),n("view",{staticClass:"btn"},[n("text",{attrs:{eventid:"MQA-1"},on:{tap:t.cancel}},[t._v("取消")]),n("text",{attrs:{eventid:"kTw-2"},on:{tap:t.confirm}},[t._v("确定")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("image",{attrs:{src:"../../static/wxPay.png",mode:""}}),e("text",[this._v("微信")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])}]};e.a=s}},[165]);
});
require('pages/myCenter/bindWx.js');
__wxRoute = 'pages/myCenter/withDrawUser';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/withDrawUser.js';

define('pages/myCenter/withDrawUser.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([25],{170:function(t,e,s){"use strict";var a=i(s(1)),n=i(s(171));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},171:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(173),n=s.n(a),i=s(174);var l=function(t){s(172)},r=s(0)(n.a,i.a,l,null,null);e.default=r.exports},172:function(t,e){},173:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[]}}}},174:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t.list.length>0?s("scroll-view",{attrs:{"scroll-y":"true"}},[s("block",[s("view",{staticClass:"bank"},[s("view",{staticClass:"top"},[s("view",{staticClass:"img"},[s("image",{attrs:{src:"../../static/aliPay.png",mode:""}}),s("text",[t._v("支付宝")])]),s("view",{},[s("text",[t._v("删除")])])]),s("view",{staticClass:"name"},[s("text",[t._v("用户名:")]),s("text",[t._v("张三\\n")]),s("text",[t._v("支付宝账号:")]),s("text",[t._v("12345678")])])])])],1):s("view",{staticClass:"bgImg"},[s("image",{attrs:{src:"../../static/userBg.png",mode:""}}),s("text",[t._v("您还没有添加账户哦")]),s("button",{attrs:{type:"default"}},[t._v("添加")])],1)],1)},staticRenderFns:[]};e.a=a}},[170]);
});
require('pages/myCenter/withDrawUser.js');
__wxRoute = 'pages/tabBar/myCenter/rank';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/rank.js';

define('pages/tabBar/myCenter/rank.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([9],{175:function(e,t,n){"use strict";var a=i(n(1)),o=i(n(176));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(o.default))},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(178),o=n.n(a),i=n(179);var s=function(e){n(177)},c=n(0)(o.a,i.a,s,null,null);t.default=c.exports},177:function(e,t){},178:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{show:!0,timer:null,count:"",code:"",checkCode:"",picLyanzhengma:""}},mounted:function(){},onLoad:function(){this.createCode()},methods:{getCode:function(){var t=this;this.show=!1;this.timer||(this.count=60,this.show=!1,e.showToast({title:"验证码已发送至您的手机，请注意查收。!",duration:1e3,icon:"none"}),this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))},createCode:function(){for(var e="",t=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),n=0;n<4;n++){e+=t[Math.floor(36*Math.random())]}this.checkCode=e,console.log(this.checkCode)},checkLpicma:function(){return this.picLyanzhengma.toUpperCase(),""==this.picLyanzhengma?void e.showToast({title:"请输入验证码!",duration:2e3,icon:"none"}):this.picLyanzhengma.toUpperCase()==this.checkCode||(console.log(this.picLyanzhengma.toUpperCase()),void e.showToast({title:"验证码不正确!",duration:2e3,icon:"none"}))},sub:function(){""!=this.code.trim()?e.redirectTo({url:"../../myCenter/setting"}):e.showToast({title:"短信验证码不能为空!",duration:2e3,icon:"none"})}}}}).call(t,n(2).default)},179:function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[e._m(0),n("view",{staticClass:"chart"},[n("view",{staticClass:"getPhone"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.picLyanzhengma,expression:"picLyanzhengma"}],staticClass:"yanzhengma_input",attrs:{type:"text","placeholder-class":"place-holder",maxlength:"4",placeholder:"请输入图片验证码",eventid:"TJL-0"},domProps:{value:e.picLyanzhengma},on:{blur:e.checkLpicma,input:function(t){t.target.composing||(e.picLyanzhengma=t.target.value)}}}),n("button",{staticClass:"yzm",attrs:{type:"default",eventid:"w2l-1"},on:{click:e.createCode}},[e._v(e._s(e.checkCode))])],1),n("view",{staticClass:"getPhone"},[n("text",[e._v("1589699999")]),e.show?n("view",{staticClass:"getcode",attrs:{eventid:"r8Z-2"},on:{tap:e.getCode}},[e._v("获取验证码")]):n("view",{staticClass:"getcode1"},[e._v(e._s(e.count)+"s")])]),n("view",{staticClass:"getPhone"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"6",placeholder:"请输入短信验证码:",eventid:"B7p-3"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})])]),n("view",{staticClass:"submits"},[n("button",{attrs:{type:"default",eventid:"8g7-4"},on:{tap:e.sub}},[e._v("提交")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"top"},[this._v("\n\t\t身份验证\n\t\t"),t("text",[this._v("本次操作需要短信验证")])])}]};t.a=a}},[175]);
});
require('pages/tabBar/myCenter/rank.js');
__wxRoute = 'pages/tabBar/myCenter/userWithdraw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/userWithdraw.js';

define('pages/tabBar/myCenter/userWithdraw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([6],{180:function(t,e,s){"use strict";var a=r(s(1)),i=r(s(181));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},181:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(183),i=s.n(a),r=s(184);var c=function(t){s(182)},l=s(0)(i.a,r.a,c,null,null);e.default=l.exports},182:function(t,e){},183:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{type:"0",toast:!1,list:[{id:1},{id:2},{id:3},{id:5},{id:6},{id:7},{id:8}]}},methods:{select:function(t){var e=t.currentTarget;this.type=e.dataset.type,console.log(this.type)},selectBank:function(){this.toast=!0},cancel:function(){this.toast=!1}}}},184:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},["0"==t.type?s("view",{staticClass:"aliPay"},[s("view",{staticClass:"user"},[s("text",[t._v("账户类型:")]),t._m(0),s("view",{staticClass:"right",attrs:{eventid:"fqr-0"},on:{tap:t.selectBank}},[s("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),t._m(1),t._m(2)]):t._e(),"0"!=t.type?s("view",{staticClass:"aliPay"},[s("view",{staticClass:"user"},[s("text",[t._v("账户类型:")]),t._m(3),s("view",{staticClass:"right",attrs:{eventid:"a49-1"},on:{tap:t.selectBank}},[s("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),t._m(4),t._m(5),t._m(6)]):t._e(),s("view",{staticClass:"bottom"},[t._m(7),s("view",{staticClass:"btn"},[s("button",{attrs:{type:"default"}},[t._v("确认添加")])],1)]),t.toast?s("view",{staticClass:"toast"},[s("view",{staticClass:"bank"},[s("view",{staticClass:"bTop"},[s("text",[t._v("选择账户类型")]),s("image",{attrs:{src:"../../../static/mark.png",mode:"",eventid:"tkX-2"},on:{tap:t.cancel}})]),s("scroll-view",{attrs:{"scroll-y":"true"}},[s("view",{staticClass:"first",attrs:{"data-type":"0",eventid:"9ZU-3"},on:{tap:t.select}},[s("view",[s("image",{attrs:{src:"../../../static/aliPay.png",mode:""}}),s("text",[t._v("支付宝")]),s("image",{staticClass:"icon",attrs:{src:"../../../static/king.png",mode:""}})]),s("view",{},["0"==t.type?s("image",{attrs:{src:"../../../static/mark1.png",mode:""}}):t._e()])]),t._l(t.list,function(e,a){return s("block",{key:e},[s("view",{staticClass:"first",attrs:{"data-type":e.id,eventid:"HWw-4-"+a},on:{tap:t.select}},[s("view",[s("image",{attrs:{src:"../../../static/aliPay.png",mode:""}}),s("text",[t._v("华夏银行")])]),s("view",{},[t.type==e.id?s("image",{attrs:{src:"../../../static/mark1.png",mode:""}}):t._e()])])])})],2)],1)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img"},[e("text",[this._v("支付包")]),e("image",{attrs:{src:"../../../static/king.png",mode:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"user"},[e("text",[this._v("用户姓名:")]),e("input",{attrs:{type:"text","placeholder-class":"place-holder",value:"",placeholder:"输入支付宝认证姓名"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"user"},[e("text",[this._v("支付宝账号:")]),e("input",{attrs:{type:"text",value:"","placeholder-class":"place-holder",placeholder:"输入支付宝认证账户"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img"},[e("text",[this._v("华夏银行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"user"},[e("text",[this._v("支行名称:")]),e("input",{attrs:{type:"text","placeholder-class":"place-holder",value:"",placeholder:"输入开户行支行名称"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"user"},[e("text",[this._v("持卡人:")]),e("input",{attrs:{type:"text",value:"","placeholder-class":"place-holder",placeholder:"输入持卡人姓名"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"user user1"},[e("text",[this._v("银行卡卡号:")]),e("input",{attrs:{type:"text",value:"","placeholder-class":"place-holder",placeholder:"输入银行卡卡号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"texts"},[e("text",[this._v("温馨提示:\\n")]),e("text",[this._v("1.请确保所填体现账户信息的真实性、正确性，以便快速准确的转入到您的账户里。\\n")]),e("text",[this._v("2.若因账户信息填写有误，导致转账失败、转入他人账户，本公司概不负责。")])])}]};e.a=a}},[180]);
});
require('pages/tabBar/myCenter/userWithdraw.js');
__wxRoute = 'pages/myCenter/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/setting.js';

define('pages/myCenter/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([28],{185:function(t,e,a){"use strict";var s=i(a(1)),r=i(a(186));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(r.default))},186:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(188),r=a.n(s),i=a(189);var n=function(t){a(187)},o=a(0)(r.a,i.a,n,null,null);e.default=o.exports},187:function(t,e){},188:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},189:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"list"},[a("view",{staticClass:"phone"},[a("text",[t._v("当前账号")]),a("navigator",[a("text",[t._v("15899999999")]),a("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])],1),a("view",{staticClass:"phone"},[a("text",[t._v("微信绑定")]),a("navigator",{attrs:{url:"bindWx"}},[a("text",[t._v("已绑定")]),a("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])],1)]),a("view",{staticClass:"list"},[a("view",{staticClass:"phone"},[a("text",[t._v("提现账户")]),a("navigator",{attrs:{url:"withDrawUser"}},[a("text",[t._v("未设置")]),a("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])],1),a("view",{staticClass:"phone"},[a("text",[t._v("登录密码")]),a("navigator",{attrs:{url:"../tabBar/myCenter/loginPwd"}},[a("text",[t._v("未设置")]),a("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])],1),a("view",{staticClass:"phone"},[a("text",[t._v("支付密码")]),a("navigator",{attrs:{url:"../tabBar/myCenter/rank"}},[a("text",[t._v("未设置")]),a("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])],1)]),a("view",{staticClass:"list"},[a("view",{staticClass:"phone"},[a("text",[t._v("版本更新")]),a("navigator",{attrs:{url:"system"}},[a("text",[t._v("1.0")]),a("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])],1),a("view",{staticClass:"btn"},[a("button",{attrs:{type:"default"}},[t._v("退出登录")])],1)])])},staticRenderFns:[]};e.a=s}},[185]);
});
require('pages/myCenter/setting.js');
__wxRoute = 'pages/tabBar/myCenter/convertDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/convertDetail.js';

define('pages/tabBar/myCenter/convertDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([18],{190:function(t,s,e){"use strict";var a=o(e(1)),i=o(e(191));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},191:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(193),i=e.n(a),o=e(194);var n=function(t){e(192)},c=e(0)(i.a,o.a,n,null,null);s.default=c.exports},192:function(t,s){},193:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},194:function(t,s,e){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"content"},[e("view",{staticClass:"topImg"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})]),e("view",{staticClass:"detail"},[e("view",{staticClass:"goods"},[e("view",{staticClass:"left"},[t._v("\n\t\t\t\t精品双肩包\n\t\t\t")]),e("view",{staticClass:"right"},[e("text",[t._v("x1份")]),e("image",{attrs:{src:"../../../static/rightArrow.png",mode:""}})])]),e("view",{staticClass:"goods"},[e("view",{staticClass:"goodsNum"},[t._v("\n\t\t\t\t兑换价格\n\t\t\t")]),e("view",{staticClass:"goodsNum"},[e("text",[t._v("2300")]),e("text",[t._v("生命果")])])]),e("view",{staticClass:"goods"},[e("view",{staticClass:"goodsNum"},[t._v("\n\t\t\t\t兑换时间\n\t\t\t")]),e("view",{staticClass:"goodsNum1"},[e("text",[t._v("2018-11-2 09:08")])])])]),e("view",{staticClass:"detail"},[e("view",{staticClass:"goods"},[e("view",{staticClass:"goodsNum"},[t._v("\n\t\t\t\t快递公司\n\t\t\t")]),e("view",{staticClass:"goodsNum1"},[e("text",[t._v("圆通速递")])])]),e("view",{staticClass:"goods"},[e("view",{staticClass:"goodsNum"},[t._v("\n\t\t\t\t快递单号\n\t\t\t")]),e("view",{staticClass:"goodsNum"},[e("text",[t._v("JADFADJA-DADA")])])])])])}]};s.a=a}},[190]);
});
require('pages/tabBar/myCenter/convertDetail.js');
__wxRoute = 'pages/tabBar/myCenter/convertList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/convertList.js';

define('pages/tabBar/myCenter/convertList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([17],{195:function(t,e,n){"use strict";var i=a(n(1)),s=a(n(196));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},196:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(198),s=n.n(i),a=n(199);var o=function(t){n(197)},r=n(0)(s.a,a.a,o,null,null);e.default=r.exports},197:function(t,e){},198:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=n(3),a=(i=s)&&i.__esModule?i:{default:i};e.default={data:function(){return{list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],n=this.list[this.list.length-1],i=n+6,s=n+1;s<i;s++)e.push(s);setTimeout(function(){i>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},800)}},components:{loadMore:a.default}}},199:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t.list.length?n("view",[t._l(t.list,function(e,i){return n("view",{key:i,staticClass:"list"},[t._m(0,!0),n("navigator",{staticClass:"right",attrs:{url:"goodsDetail"}},[n("view",[n("text",[t._v("精选黑色双肩背包\\n")]),n("text",[t._v("6666")]),n("text",[t._v("生命果")])]),n("view",[n("image",{attrs:{src:"../../../static/blackArrow.png",mode:""}})])])],1)}),n("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"v74-0"}})],2):n("view",{staticClass:"empty"},[n("image",{attrs:{src:"../../../static/empty.png",mode:""}}),n("text",[t._v("您还没有兑换记录哦")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})])}]};e.a=i}},[195]);
});
require('pages/tabBar/myCenter/convertList.js');
__wxRoute = 'pages/tabBar/myCenter/lifeMall';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/lifeMall.js';

define('pages/tabBar/myCenter/lifeMall.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([13],{200:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(201));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},201:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(203),i=s.n(a),n=s(204);var o=function(t){s(202)},r=s(0)(i.a,n.a,o,null,null);e.default=r.exports},202:function(t,e){},203:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(3),n=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{dots:!1,type:"1",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},methods:{selectTab:function(t){this.type=t.currentTarget.dataset.type}},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],s=this.list[this.list.length-1],a=s+6,i=s+1;i<a;i++)e.push(i);setTimeout(function(){a>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},800)}},components:{loadMore:n.default}}},204:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"top"},[s("view",{staticClass:"money"},[s("text",[t._v("6666")]),s("view",[s("navigator",{attrs:{url:""}},[t._v("生命果明细")]),s("navigator",{attrs:{url:"convertList"}},[t._v("兑换记录")])],1)]),s("view",{staticClass:"middle"},[s("text",{class:0==t.type?"active":"",attrs:{"data-type":"0",eventid:"CUn-0"},on:{tap:t.selectTab}},[t._v("热门")]),s("text",{class:1==t.type?"active":"",attrs:{"data-type":"1",eventid:"AcH-1"},on:{tap:t.selectTab}},[t._v("推荐")])]),s("view",{staticClass:"bottom"},[s("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.dots,autoplay:"false",current:"0",interval:"2000",duration:"500",circular:"true",vertical:"true"}},[s("block",[s("swiper-item",{attrs:{mpcomid:"fva-0"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])]),s("swiper-item",{attrs:{mpcomid:"IXM-1"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])]),s("swiper-item",{attrs:{mpcomid:"S0T-2"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])]),s("swiper-item",{attrs:{mpcomid:"H1y-3"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])])],1)],1)],1)]),s("view",{staticClass:"goodsList"},[s("view",{staticClass:"goodsTop"},[s("text",[t._v("热门兑换")]),s("navigator",{attrs:{url:""}},[t._v("\n\t\t\t\t更多\n\t\t\t\t"),s("image",{attrs:{src:"../../../static/blackArrow.png",mode:""}})])],1),s("view",{staticClass:"list"},[t._l(t.list,function(e,a){return s("view",{key:a,staticClass:"main"},[t._m(0,!0),s("view",{staticClass:"title"},[s("text",[t._v("精选黑色双肩背包\\n")]),s("text",[t._v("666")]),s("text",[t._v("生命果\\n")]),s("button",{attrs:{type:"default"}},[t._v("立即兑换")])],1)])}),s("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"O0i-4"}})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})])}]};e.a=a}},[200]);
});
require('pages/tabBar/myCenter/lifeMall.js');
__wxRoute = 'pages/tabBar/myCenter/withdraw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/withdraw.js';

define('pages/tabBar/myCenter/withdraw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([4],{205:function(t,e,s){"use strict";var a=c(s(1)),i=c(s(206));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},206:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(208),i=s.n(a),c=s(209);var n=function(t){s(207)},l=s(0)(i.a,c.a,n,null,null);e.default=l.exports},207:function(t,e){},208:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{select:!0,type:""}},methods:{toSelect:function(t){this.type=t.currentTarget.dataset.type,console.log(this.type)}}}},209:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"title"},[s("view",{staticClass:"top"},[t._v("\n\t\t\t选择渠道\n\t\t")]),s("view",{staticClass:"list"},[t._m(0),s("view",[s("text",[t._v("建设银行:15151515151")]),t.select&&1!=t.type?s("image",{attrs:{"data-type":"1",src:"../../../static/unSelect.png",mode:"",eventid:"AYW-0"},on:{tap:t.toSelect}}):t._e(),t.select&&1==t.type?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])]),s("view",{staticClass:"list"},[t._m(1),s("view",[s("text",[t._v("支付包:15899999999")]),t.select&&2!=t.type?s("image",{attrs:{"data-type":"2",src:"../../../static/unSelect.png",mode:"",eventid:"lUr-1"},on:{tap:t.toSelect}}):t._e(),t.select&&2==t.type?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])]),s("view",{staticClass:"list"},[t._m(2),s("view",[s("text",[t._v("微信:15151515151")]),t.select&&3!=t.type?s("image",{attrs:{"data-type":"3",src:"../../../static/unSelect.png",mode:"",eventid:"WN5-2"},on:{tap:t.toSelect}}):t._e(),t.select&&3==t.type?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])])]),t._m(3),s("view",{staticClass:"pay"},[s("button",{attrs:{type:"default"}},[t._v("提现")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img1"},[e("image",{attrs:{src:"../../../static/bankPay.png",mode:""}}),e("text",[this._v("提取到银行卡")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img2"},[e("image",{attrs:{src:"../../../static/aliPay.png",mode:""}}),e("text",[this._v("提取到支付宝")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img3"},[e("image",{attrs:{src:"../../../static/wxPay.png",mode:""}}),e("text",[this._v("提取到微信")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"title"},[e("view",{staticClass:"top"},[this._v("\n\t\t\t选择提取额度\n\t\t")]),e("view",{staticClass:"edu"},[e("view",{staticClass:"wMoney"},[this._v("\n\t\t\t\t提取金额\n\t\t\t")]),e("view",{staticClass:"import"},[e("text",[this._v("￥")]),e("input",{attrs:{type:"number",placeholder:"输入需要提取的金额","placeholder-class":"place-holder",value:""}})]),e("view",{staticClass:"canUse"},[e("text",[this._v("可用余额:0元")])])])])}]};e.a=a}},[205]);
});
require('pages/tabBar/myCenter/withdraw.js');
__wxRoute = 'pages/tabBar/myCenter/recharge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/myCenter/recharge.js';

define('pages/tabBar/myCenter/recharge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([8],{210:function(t,e,s){"use strict";var a=c(s(1)),i=c(s(211));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},211:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(213),i=s.n(a),c=s(214);var n=function(t){s(212)},l=s(0)(i.a,c.a,n,null,null);e.default=l.exports},212:function(t,e){},213:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{select:!0,type:"1",type1:"1"}},methods:{toSelect:function(t){this.type=t.currentTarget.dataset.type,console.log(this.type)},toSelect1:function(t){this.type1=t.currentTarget.dataset.type1,console.log(this.type1)}}}},214:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"title"},[s("view",{staticClass:"top"},[t._v("\n\t\t\t选择支付方式\n\t\t")]),s("view",{staticClass:"list"},[t._m(0),s("view",[t.select&&1!=t.type?s("image",{attrs:{"data-type":"1",src:"../../../static/unSelect.png",mode:"",eventid:"70j-0"},on:{tap:t.toSelect}}):t._e(),t.select&&1==t.type?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])]),s("view",{staticClass:"list"},[t._m(1),s("view",[t.select&&2!=t.type?s("image",{attrs:{"data-type":"2",src:"../../../static/unSelect.png",mode:"",eventid:"ZhK-1"},on:{tap:t.toSelect}}):t._e(),t.select&&2==t.type?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])]),s("view",{staticClass:"list"},[t._m(2),s("view",[t.select&&3!=t.type?s("image",{attrs:{"data-type":"3",src:"../../../static/unSelect.png",mode:"",eventid:"yDh-2"},on:{tap:t.toSelect}}):t._e(),t.select&&3==t.type?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])])]),s("view",{staticClass:"title"},[s("view",{staticClass:"top"},[t._v("\n\t\t\t选择支付方式\n\t\t")]),s("view",{staticClass:"edu"},[t._m(3),s("view",[s("text",[t._v("￥1000")]),t.select&&1!=t.type1?s("image",{attrs:{"data-type1":"1",src:"../../../static/unSelect.png",mode:"",eventid:"B7y-3"},on:{tap:t.toSelect1}}):t._e(),t.select&&1==t.type1?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])]),s("view",{staticClass:"edu"},[t._m(4),s("view",[s("text",[t._v("￥3000")]),t.select&&2!=t.type1?s("image",{attrs:{"data-type1":"2",src:"../../../static/unSelect.png",mode:"",eventid:"jbA-4"},on:{tap:t.toSelect1}}):t._e(),t.select&&2==t.type1?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])]),s("view",{staticClass:"edu"},[t._m(5),s("view",[s("text",[t._v("￥5000")]),t.select&&3!=t.type1?s("image",{attrs:{"data-type1":"3",src:"../../../static/unSelect.png",mode:"",eventid:"UUd-5"},on:{tap:t.toSelect1}}):t._e(),t.select&&3==t.type1?s("image",{attrs:{src:"../../../static/selectY.png",mode:""}}):t._e()])])]),s("view",{staticClass:"pay"},[s("button",{attrs:{type:"default"}},[t._v("充值")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img1"},[e("image",{attrs:{src:"../../../static/bankPay.png",mode:""}}),e("text",[this._v("银行卡支付")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img2"},[e("image",{attrs:{src:"../../../static/aliPay.png",mode:""}}),e("text",[this._v("支付包支付")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img3"},[e("image",{attrs:{src:"../../../static/wxPay.png",mode:""}}),e("text",[this._v("微信支付")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"leftMoney"},[e("text",[this._v("1000")]),e("text",[this._v("现金+")]),e("text",[this._v("1000")]),e("text",[this._v("成本金额度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"leftMoney"},[e("text",[this._v("3000")]),e("text",[this._v("现金+")]),e("text",[this._v("3000")]),e("text",[this._v("成本金额度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"leftMoney"},[e("text",[this._v("5000")]),e("text",[this._v("现金+")]),e("text",[this._v("5000")]),e("text",[this._v("成本金额度")])])}]};e.a=a}},[210]);
});
require('pages/tabBar/myCenter/recharge.js');
__wxRoute = 'pages/myCenter/orderDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myCenter/orderDetail.js';

define('pages/myCenter/orderDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([31],{215:function(t,e,s){"use strict";var a=r(s(1)),i=r(s(216));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},216:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(218),i=s.n(a),r=s(219);var n=function(t){s(217)},v=s(0)(i.a,r.a,n,null,null);e.default=v.exports},217:function(t,e){},218:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{type:""}},methods:{},onLoad:function(t){console.log(t.type),this.type=t.type}}},219:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._m(0),t._m(1),s("view",{staticClass:"goodsList"},[s("navigator",{staticClass:"store",attrs:{url:""}},[s("view",{staticClass:"icons"},[s("image",{attrs:{src:"../../static/store.png",mode:""}}),s("text",[t._v("一叶子官方旗舰店")])])]),s("navigator",{staticClass:"goodsInfo"},[s("view",{staticClass:"goodsImg"},[s("image",{attrs:{src:"../../static/photo.png",mode:""}})]),s("view",{staticClass:"rightGoods"},[s("view",{staticClass:"goodsDetail"},[s("view",{staticClass:"referral"},[t._v("\n\t\t\t\t\t\tSwisse奶蓟草护肝片澳洲进口保健品护 肝解毒片保健品护保健品护保健品护\n\t\t\t\t\t")]),s("view",{staticClass:"referrals"},[t._v("\n\t\t\t\t\t\t类型：180粒/瓶\n\t\t\t\t\t")])]),s("view",{staticClass:"mold"},[s("text",[t._v("￥263\\n")]),s("text",[t._v("x 1")])])])])],1),t._m(2),t._m(3),s("view",{staticClass:"btn"},[1==t.type?s("button",{staticClass:"sub",attrs:{type:"default"}},[t._v(" 再次购买 ")]):t._e(),2==t.type?s("button",{staticClass:"sub",attrs:{type:"default"}},[t._v(" 立即付款 ")]):t._e(),4==t.type?s("button",{staticClass:"sub",attrs:{type:"default"}},[t._v(" 立即评价 ")]):t._e(),3==t.type?s("button",{staticClass:"sub",attrs:{type:"default"}},[t._v(" 确认收货 ")]):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"status"},[e("view",{staticClass:"orderImg"},[e("image",{attrs:{src:"../../static/orderImg.png",mode:""}})]),e("view",{staticClass:"orderCar"},[e("image",{attrs:{src:"../../static/shopCar.png",mode:""}}),e("text",[this._v("快递已签收，感谢您在健康联盟购物，期待您的下次购买！")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"map"},[e("view",{staticClass:"mapImg"},[e("image",{attrs:{src:"../../static/map.png",mode:""}})]),e("view",{staticClass:"userInfo"},[e("text",[this._v("张三")]),e("text",[this._v("15888888888")]),e("view",[this._v("\n\t\t\t\t河南省郑州市郑东新区中州大道与商都路交汇处东500米路南\n\t\t\t")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"detail"},[s("view",[s("text",[t._v("订单编号")]),s("text",[t._v("1223541545")])]),s("view",[s("text",[t._v("下单时间")]),s("text",[t._v("2018.10.25 11:35:33")])]),s("view",[s("text",[t._v("配送方式")]),s("text",[t._v("圆通速递")])]),s("view",[s("text",[t._v("支付方式")]),s("text",[t._v("在线支付")])]),s("view",[s("text",[t._v("支付时间")]),s("text",[t._v("2018.10.25 11:35:33")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"orderMoney"},[s("view",[s("text",[t._v("商品金额")]),s("text",[t._v("￥263.00")])]),s("view",[s("text",[t._v("运费")]),s("text",[t._v("+￥0.00")])]),s("view",[s("text",[t._v("优惠券")]),s("text",[t._v("-￥50.00")])]),s("view",[s("text",[t._v("实付款")]),s("text",[t._v("￥263.00")])])])}]};e.a=a}},[215]);
});
require('pages/myCenter/orderDetail.js');
__wxRoute = 'pages/tabBar/dealMarket/dealIndex';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/dealMarket/dealIndex.js';

define('pages/tabBar/dealMarket/dealIndex.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([24],{220:function(t,e,a){"use strict";var s=n(a(1)),i=n(a(221));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},221:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(223),i=a.n(s),n=a(224);var l=function(t){a(222)},c=a(0)(i.a,n.a,l,null,null);e.default=c.exports},222:function(t,e){},223:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a(8)),n=a(9),l=(s=n)&&s.__esModule?s:{default:s};function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.default={data:function(){return{echarts:i,type:0,type1:0,sall:"",num:30,toast:!1,sallNum:"",haveNum:6666,earnings:"0.00",unitPrice:"",lineChart:{}}},onLoad:function(e){t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#2a99de",animation:{duration:400,timingFunc:"easeIn"}})},methods:{lineInit:function(t,e,a){var s=this.echarts.init(t,null,{width:e,height:a});t.setChart(s),s.setOption(this.getLineOption())},getLineOption:function(){var t;return c(t={animation:!1,color:["#ffffff"]},"animation",!0),c(t,"tooltip",{trigger:"axis"}),c(t,"legend",{data:["",""]}),c(t,"toolbox",{show:!0,feature:{mark:{show:!0},dataZoom:{show:!0},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}}),c(t,"calculable",!0),c(t,"xAxis",[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{width:"1",color:"#ffffff"}},splitLine:{show:!0,lineStyle:{width:"1",color:"#ffffff",type:"dashed"}},data:function(){for(var t=[],e=1;e<=30;e++)t.push("3-"+e);return t}()}]),c(t,"yAxis",[{type:"value",axisLine:{lineStyle:{width:"1",color:"#ffffff"}},position:"right",splitLine:{show:!0,lineStyle:{width:"1",color:"#ffffff",type:"dashed"}}}]),c(t,"series",[{name:"最高",type:"line",data:function(){for(var t=[],e=1;e<=30;e++)t.push(Math.round(30*Math.random()));return t}()}]),t},choice:function(t){this.type=t.currentTarget.dataset.type,console.log(this.type)},choice1:function(t){this.type1=t.currentTarget.dataset.type1,console.log(this.lineChart,this.type1)},toastShow:function(t){this.sall=t.currentTarget.dataset.sall,this.toast=!0,console.log(this.sall)},toastHide:function(){this.toast=!1},judge:function(){},count:function(){if(""==this.sallNum.trim())return t.showToast({title:"请输入要卖出的数量!",duration:2e3,icon:"none"}),void(this.earnings="0.00");this.earnings=this.sallNum*this.unitPrice}},components:{mpvueEcharts:l.default}}}).call(e,a(2).default)},224:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"top"},[a("view",{staticClass:"topBg"}),a("view",{staticClass:"title"},[t._m(0),t._m(1),a("view",{staticClass:"tBottom"},[a("view",{staticClass:"manage",attrs:{"data-sall":"1",eventid:"xbY-0"},on:{tap:t.toastShow}},[a("image",{attrs:{src:"../../../static/manage1.png",mode:""}}),a("text",[t._v("买入")])]),a("view",{staticClass:"manage",attrs:{"data-sall":"2",eventid:"IJu-1"},on:{tap:t.toastShow}},[a("image",{attrs:{src:"../../../static/hammer.png",mode:""}},[t._v("锤子")]),a("text",[t._v("卖出")])])])])]),a("view",{staticClass:"canvasView"},[a("view",{staticClass:"canvasing"},[a("view",{staticClass:"canvase"},[t._v("\n\t\t\t\t市场涨幅\n\t\t\t")]),a("view",{staticClass:"canvase"},[a("text",{class:"0"==t.type1?"active1":"",attrs:{"data-type1":"0",eventid:"AF4-2"},on:{tap:t.choice1}},[t._v("10MIN")]),a("text",{class:"1"==t.type1?"active1":"",attrs:{"data-type1":"1",eventid:"7am-3"},on:{tap:t.choice1}},[t._v("1H")]),a("text",{class:"2"==t.type1?"active1":"",attrs:{"data-type1":"2",eventid:"Qpl-4"},on:{tap:t.choice1}},[t._v("24H")]),a("text",{class:"3"==t.type1?"active1":"",attrs:{"data-type1":"3",eventid:"i26-5"},on:{tap:t.choice1}},[t._v("1Y")]),a("text",{class:"4"==t.type1?"active1":"",attrs:{"data-type1":"4",eventid:"nOd-6"},on:{tap:t.choice1}},[t._v("1M")])])]),a("mpvue-echarts",{staticStyle:{width:"100%",height:"400px"},attrs:{echarts:t.echarts,onInit:t.lineInit,canvasId:"line",mpcomid:"fhK-0"}})],1),a("view",{staticClass:"list"},[a("view",{staticClass:"listTop"},[a("view",{staticClass:"listLeft"},[t._v("\n\t\t\t\t交易明细(每日交易时间9：00~22：00)\n\t\t\t")]),a("view",{staticClass:"listLeft"},[a("text",{class:"0"==t.type?"active":"",attrs:{"data-type":"0",eventid:"lQq-7"},on:{tap:t.choice}},[t._v("所有")]),a("text",{class:"1"==t.type?"active":"",attrs:{"data-type":"1",eventid:"1nd-8"},on:{tap:t.choice}},[t._v("买入")]),a("text",{class:"2"==t.type?"active":"",attrs:{"data-type":"2",eventid:"ISx-9"},on:{tap:t.choice}},[t._v("卖出")])])]),a("view",{staticClass:"listDetail"},[a("view",{staticClass:"mde"},[t._m(2),a("scroll-view",{attrs:{"scroll-y":"true"}},[a("block",[a("view",[a("text",[t._v("09-01 09：00")]),a("text",[t._v("66个")]),a("text",[t._v("￥66.66")]),a("text",[t._v("￥666.66")]),a("text",[t._v("卖出(代售)")])])])],1)],1)])]),t.toast?a("view",{staticClass:"toast"},[a("view",{staticClass:"main"},[2==t.sall?a("view",{staticClass:"sallBuy"},[t._m(3),a("view",{staticClass:"tTitle"},[t._v("\n\t\t\t\t\t卖出交易\n\t\t\t\t")]),a("view",{staticClass:"sMiddle"},[a("view",{staticClass:"inputTitle"},[a("view",[a("text",[t._v("卖出果实(个)\\n")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.sallNum,expression:"sallNum"}],attrs:{"placeholder-class":"place-holder",type:"number",placeholder:"输入卖出数量",eventid:"KSP-10"},domProps:{value:t.sallNum},on:{blur:t.judge,input:function(e){e.target.composing||(t.sallNum=e.target.value)}}}),t.sallNum>t.haveNum?a("text",{staticClass:"hides"},[t._v("(数量不足)")]):t._e()]),a("view",[a("text",[t._v("果实单价(元)\\n")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.unitPrice,expression:"unitPrice"}],attrs:{"placeholder-class":"place-holder",type:"number",placeholder:"输入果实单价",eventid:"Z1R-11"},domProps:{value:t.unitPrice},on:{blur:t.count,input:function(e){e.target.composing||(t.unitPrice=e.target.value)}}})])]),a("view",{staticClass:"showTitle"},[a("view",[a("text",[t._v("获得收益(元)\\n")]),a("text",[t._v(t._s(t.earnings))])]),a("view",[a("text",[t._v("剩余果实(个)")]),a("image",{attrs:{src:"../../../static/break.png",mode:""}}),a("text",[t._v("\\n"+t._s(t.haveNum))])])])]),a("view",{staticClass:"sBottom"},[t.sallNum>t.haveNum?a("button",{staticClass:"btnSall",attrs:{type:"default",disabled:"true"}},[t._v("卖出")]):a("button",{staticClass:"btnSall1",attrs:{type:"default"}},[t._v("卖出")]),a("button",{staticClass:"cancel",attrs:{type:"default",eventid:"bCc-12"},on:{tap:t.toastHide}},[t._v("取消")])],1)]):t._e(),1==t.sall?a("view",{staticClass:"sallBuy"},[a("view",{staticClass:"sTop"},[t._m(4),a("view",{staticClass:"sTitle"},[a("text",[t._v("MyName")]),a("navigator",[t._v("立即充值")])],1)]),a("view",{staticClass:"tTitle"},[t._v("\n\t\t\t\t\t买入交易\n\t\t\t\t")]),t._m(5),a("view",{staticClass:"sBottom"},[a("button",{staticClass:"btnSall",attrs:{type:"default",disabled:"true"}},[t._v("买入")]),a("button",{staticClass:"cancel",attrs:{type:"default",eventid:"0dJ-13"},on:{tap:t.toastHide}},[t._v("取消")])],1)]):t._e()])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"tTop"},[e("view",{staticClass:"tLeft"},[e("view",{staticClass:"tImg"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})]),e("view",{staticClass:"tName"},[e("text",[this._v("MyName\\n")]),e("text",[this._v("15888888888")])])]),e("view",{staticClass:"tLeft"},[e("image",{attrs:{src:"../../../static/qrcode.png",mode:""}}),e("text",[this._v("数据钱包")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"tMiddle"},[e("view",{staticClass:"lifeNum"},[e("text",[this._v("生命果(个)\\n")]),e("text",[this._v("6,666")])]),e("view",{staticClass:"lifeNum"},[e("text",[this._v("余额(人民币)\\n")]),e("text",[this._v("6666,6666")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"five"},[e("text",[this._v("时间")]),e("text",[this._v("数量")]),e("text",[this._v("单价")]),e("text",[this._v("金额")]),e("text",[this._v("类型")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"sTop"},[e("view",{staticClass:"sImg"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})]),e("view",{staticClass:"sTitle"},[e("text",[this._v("MyName")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"sImg"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"sMiddle"},[a("view",{staticClass:"inputTitle"},[a("view",[a("text",[t._v("购买果实(个)\\n")]),a("text",{staticClass:"frits"},[t._v("66666")])]),a("view",[a("text",[t._v("果实单价(元)\\n")]),a("text",{staticClass:"frits"},[t._v("66666")])])]),a("view",{staticClass:"showTitle"},[a("view",[a("text",[t._v("支付金额(元)\\n")]),a("text",[t._v("77777")])]),a("view",[a("text",[t._v("钱包金额(元)")]),a("image",{attrs:{src:"../../../static/break.png",mode:""}}),a("text",[t._v("\\n6666")]),a("text",{staticClass:"warn"},[t._v("(金额不足)")])])])])}]};e.a=s}},[220]);
});
require('pages/tabBar/dealMarket/dealIndex.js');
__wxRoute = 'pages/healthyMall/discounts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/discounts.js';

define('pages/healthyMall/discounts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([47],{225:function(e,t,s){"use strict";var i=a(s(1)),n=a(s(226));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},226:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(228),n=s.n(i),a=s(229);var c=function(e){s(227)},o=s(0)(n.a,a.a,c,null,null);t.default=o.exports},227:function(e,t){},228:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{discountsData:[{sum:"50",fullUseOf:"100",shopName:"养生佳品宁夏枸杞购物券",endTime:"2019-10-10",receive:"N"},{sum:"50",fullUseOf:"500",shopName:"养生佳品宁夏枸杞购物券",endTime:"2019-10-10",receive:"Y"}]}},components:{},methods:{getDiscounts:function(t){console.log("立即领取",t),e.showToast({title:"领取成功",duration:1e3})},use:function(e){console.log("立即使用",e)}}}}).call(t,s(2).default)},229:function(e,t,s){"use strict";var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"discounts"},[s("view",{staticClass:"discountsList"},e._l(e.discountsData,function(t,i){return s("view",{key:i,staticClass:"discountsItem"},[s("view",{staticClass:"discountsBody"},[s("view",{staticClass:"discountsItemLeft"},[s("view",{staticClass:"discountsItemLeftTop"},[s("text",{class:"N"===t.receive?"blue moneyIcon":"orangeTime moneyIcon"},[e._v("￥")]),s("text",{class:"N"===t.receive?"blue sum":"orange sum"},[e._v(e._s(t.sum))])]),s("text",{class:"N"===t.receive?"blue fullUseOf":"orangeTime fullUseOf"},[e._v("满"+e._s(t.fullUseOf)+"可用")])]),s("view",{staticClass:"discountsItemRight"},[s("view",{staticClass:"discountsItemMsg"},[s("text",{staticClass:"msg"},[e._v(e._s(t.shopName))]),s("text",{staticClass:"endTime"},[e._v("有效期至"+e._s(t.endTime))])]),"N"===t.receive?s("text",{staticClass:"receiveBtn blueBtn",attrs:{eventid:"g5j-1-"+i},on:{tap:function(s){e.getDiscounts(t)}}},[e._v("立即领取")]):s("text",{staticClass:"receiveBtn orangeBtn",attrs:{eventid:"QsF-0-"+i},on:{tap:function(s){e.use(t)}}},[e._v("立即使用")])])]),s("view",{directives:[{name:"show",rawName:"v-show",value:"Y"===t.receive,expression:"item.receive==='Y'"}],staticClass:"sign"}),s("text",{directives:[{name:"show",rawName:"v-show",value:"Y"===t.receive,expression:"item.receive==='Y'"}],staticClass:"signText"},[e._v("已领")])])}))])},staticRenderFns:[]};t.a=i}},[225]);
});
require('pages/healthyMall/discounts.js');
__wxRoute = 'pages/healthyMall/shopEnter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/shopEnter.js';

define('pages/healthyMall/shopEnter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([41],{230:function(e,t,s){"use strict";var a=o(s(1)),r=o(s(231));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(r.default))},231:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(233),r=s.n(a),o=s(234);var i=function(e){s(232)},n=s(0)(r.a,o.a,i,null,null);t.default=n.exports},232:function(e,t){},233:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{ruleMaskShow:!1,rulePopupShow:!1}},components:{},methods:{getRule:function(){this.ruleMaskShow=!0,this.rulePopupShow=!0},hide:function(){this.ruleMaskShow=!1,this.rulePopupShow=!1}}}},234:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"shopEnter"},[s("image",{staticClass:"shopEnterBg",attrs:{src:"../../static/shopEnterBg.png",mode:""}}),s("text",{staticClass:"ruleText",attrs:{eventid:"2XL-0"},on:{tap:e.getRule}},[e._v("活动规则")]),s("navigator",{staticClass:"concatService",attrs:{url:"/pages/healthyMall/service"}},[e._v("立即联系客服")]),s("view",{directives:[{name:"show",rawName:"v-show",value:e.ruleMaskShow,expression:"ruleMaskShow"}],staticClass:"mask",attrs:{eventid:"Oxf-1"},on:{click:e.hide}}),s("view",{directives:[{name:"show",rawName:"v-show",value:e.rulePopupShow,expression:"rulePopupShow"}],staticClass:"popup popup-middle"},[s("image",{staticClass:"ruleBg",attrs:{src:"../../static/ruleBg.png",mode:""}}),s("text",{staticClass:"closeBtn",attrs:{eventid:"0rz-2"},on:{tap:e.hide}},[e._v("关闭")])])],1)},staticRenderFns:[]};t.a=a}},[230]);
});
require('pages/healthyMall/shopEnter.js');
__wxRoute = 'pages/healthyMall/goodsList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/goodsList.js';

define('pages/healthyMall/goodsList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([46],{235:function(t,s,e){"use strict";var i=n(e(1)),a=n(e(236));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},236:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(238),a=e.n(i),n=e(239);var o=function(t){e(237)},c=e(0)(a.a,n.a,o,null,null);s.default=c.exports},237:function(t,s){},238:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={components:{},data:function(){return{timeLimitData:[{id:1,goodsName:"澳洲进口保健钙片儿童老...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:"",startTime:"2018.10.5",percent:"30"},{id:2,goodsName:"澳洲进口保健钙片儿童老...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:"",startTime:"2018.10.6",percent:"40"}]}},onLoad:function(){},onUnload:function(){this.scrollLeft=0,this.isClickChange=!1,this.currentTab=0},methods:{getDetails:function(s){console.log(s),console.log("进入产品详情页"),t.navigateTo({url:"/pages/healthyMall/goodsDetails"})}}}}).call(s,e(2).default)},239:function(t,s,e){"use strict";var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"index"},[e("view",{staticClass:"goodslist"},[e("view",{staticClass:"goodsListItems"},[e("view",{staticClass:"recommendList"},t._l(t.timeLimitData,function(s,i){return e("view",{key:i,staticClass:"recommendListItem",attrs:{eventid:"7hj-0-"+i},on:{tap:t.getDetails}},[e("image",{staticClass:"recommendImg",attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"recommendListRight"},[e("view",{staticClass:"recommendListRightHeader"},[e("text",{staticClass:"discounts"},[t._v(t._s(s.discounts))]),e("text",{staticClass:"goodsName"},[t._v(t._s(s.goodsName))])]),e("view",{staticClass:"goodsIntro"},[e("text",{staticClass:"discountsIntro"},[t._v("佣金:"+t._s(s.discountsIntro))]),e("text",{staticClass:"sales"},[t._v("\n                    "+t._s(s.startTime)+"\n                  ")])]),e("view",{staticClass:"progressView"},[e("image",{staticClass:"planIcon",attrs:{src:"../../static/planIcon.png",mode:""}}),e("view",{staticClass:"planView"},[e("progress",{attrs:{active:"",backgroundColor:"transparent","stroke-width":"12",activeColor:"#F84722",percent:s.percent}})],1)]),e("view",{staticClass:"goodsPrice"},[e("text",{staticClass:"goodsPriceTitle"},[t._v("优惠:")]),e("text",{staticClass:"goodsPriceText"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"goodsOriginalPrice"},[t._v("￥"+t._s(s.originalPrice))]),e("button",{staticClass:"lookBtn"},[t._v("立即分享")])],1)])])}))])])])},staticRenderFns:[]};s.a=i}},[235]);
});
require('pages/healthyMall/goodsList.js');
__wxRoute = 'pages/healthyMall/service';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/service.js';

define('pages/healthyMall/service.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([44],{240:function(t,e,s){"use strict";var i=l(s(1)),a=l(s(241));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},241:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(243),a=s.n(i),l=s(244);var n=function(t){s(242)},c=s(0)(a.a,l.a,n,null,null);e.default=c.exports},242:function(t,e){},243:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{serviceTime:"9:00-18:00",lists:[{title:"充值是否收费？",type:"pay",show:!1},{title:"是否能提现？",type:"withdraw",show:!1},{title:"购物商城商家怎么入住？",type:"shopEnter",show:!1},{title:"我的佣金能花费？？",type:"brokerage",show:!1},{title:"健康银行利息率？？",type:"interest",show:!1}]}},components:{},methods:{trigerCollapse:function(t){for(var e=0,s=this.lists.length;e<s;++e)this.lists[e].show=t===e&&!this.lists[e].show}}}},244:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"service"},[s("view",{staticClass:"serviceHeaderView"},[s("image",{staticClass:"serviceBg",attrs:{src:"../../static/serviceBg.png",mode:""}}),s("view",{staticClass:"HeaderView"},[s("view",{staticClass:"serviceHeader"},[s("text",{staticClass:"title"},[t._v("在线客服")]),s("text",{staticClass:"serviceTime"},[t._v("人工服务时间: 工作日"+t._s(t.serviceTime))]),s("text",{staticClass:"serviceBtn"},[t._v("立即咨询")])])])]),s("view",{staticClass:"serviceList"},[t._m(0),s("view",{staticClass:"uni-card"},[s("view",{staticClass:"uni-list"},t._l(t.lists,function(e,i){return s("block",{key:i},[s("view",{staticClass:"uni-list-cell uni-collapse"},[s("view",{staticClass:"uni-list-cell-navigate uni-navigate-bottom",class:e.show?"uni-active":"",attrs:{eventid:"pPu-0-"+i},on:{click:function(e){t.trigerCollapse(i)}}},[t._v("\n      \t\t\t\t\t"+t._s(e.title)+"\n      \t\t\t\t")]),s("view",{staticClass:"uni-collapse-content",class:e.show?"uni-active":""},["pay"===e.type?s("view",[s("view",{staticClass:"uni-list"},[t._v("\n                      充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。\n                    ")])]):t._e(),"withdraw"===e.type?s("view",{staticClass:"page-pd"},[s("view",{staticClass:"uni-list"},[t._v("\n                    充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。\n      \t\t\t\t\t\t")])]):t._e(),"shopEnter"===e.type?s("view",[s("view",{staticClass:"uni-list"},[t._v("\n      \t\t\t\t\t\t\t充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。\n      \t\t\t\t\t\t")])]):t._e(),"brokerage"===e.type?s("view",[s("view",{staticClass:"uni-list"},[t._v("\n                \t\t充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。\n                \t")])]):t._e(),"interest"===e.type?s("view",[s("view",{staticClass:"uni-list"},[t._v("\n                \t\t充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。\n                \t")])]):t._e()])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"serviceListTitle"},[e("text",{staticClass:"line"}),e("text",{staticClass:"title"},[this._v("热门问题")]),e("text",{staticClass:"line"})])}]};e.a=i}},[240]);
});
require('pages/healthyMall/service.js');
__wxRoute = 'pages/healthySpace/recommend';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthySpace/recommend.js';

define('pages/healthySpace/recommend.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([36],{245:function(t,e,s){"use strict";var a=i(s(1)),o=i(s(246));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},246:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(248),o=s.n(a),i=s(249);var n=function(t){s(247)},r=s(0)(o.a,i.a,n,null,null);e.default=r.exports},247:function(t,e){},248:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=s(4),i=(a=o)&&a.__esModule?a:{default:a};e.default={data:function(){return{turnout:"44444",turnoutList:[],ruleShow:!1,ruleMaskShow:!1,rulePopupShow:!1,crowds:"friend",maskShow:!1,popupShow:!1,shareData:{title:"推荐好友",path:"baidu.com",href:"baidu.com",image:"https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png",shareText:"推荐好友shareText"},shareType:0}},onShareAppMessage:function(){return{title:this.shareData.shareText?this.shareData.shareText:"欢迎体验健康联盟",path:"/pages/healthySpace/recommend",imageUrl:"../../static/recommend.png"}},onLoad:function(){this.turnoutList=this.turnout.split(""),console.log(this.turnoutList)},methods:{recommend:function(t){this.maskShow=!0,this.popupShow=!0,"friend"===t?(console.log("推荐好友"),this.shareData={title:"推荐好友",path:"baidu.com",href:"baidu.com",image:"https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png",shareText:"推荐好友shareText"}):(console.log("推荐商家"),this.shareData={title:"推荐商家",path:"baidu.com",href:"baidu.com",image:"https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png",shareText:"推荐商家shareText"})},service:function(){console.log("联系客服")},rule:function(){console.log("点击活动规则"),this.ruleMaskShow=!0,this.rulePopupShow=!0},hide:function(){this.ruleMaskShow=!1,this.rulePopupShow=!1}},components:{shareModel:i.default}}},249:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"recommend"},[s("image",{staticClass:"recommendBg",attrs:{src:"../../static/recommendBg.png",mode:""}}),s("view",{staticClass:"turnout posi"},t._l(t.turnoutList,function(e,a){return s("text",{key:a,staticClass:"turnoutText"},[t._v(t._s(e))])})),s("view",{staticClass:"recommendTitle posi"},[s("text",{staticClass:"recommendText"},[t._v("推荐好友购物 最高得")]),s("text",{staticClass:"recommendTitleRule textStyle"},[t._v("88")]),s("text",{staticClass:"recommendText"},[t._v("元红包")]),s("text",{staticClass:"recommendTitleRule rule",attrs:{eventid:"tvS-0"},on:{tap:t.rule}},[t._v("活动规则")])]),s("text",{staticClass:"friend posi",attrs:{eventid:"I8X-1"},on:{tap:function(e){t.recommend("friend")}}},[t._v("推荐好友")]),s("text",{staticClass:"shops posi",attrs:{eventid:"8jX-2"},on:{tap:function(e){t.recommend("shops")}}},[t._v("推荐商家")]),s("share-model",{attrs:{maskShow:t.maskShow,popupShow:t.popupShow,shareData:t.shareData,shareType:t.shareType,mpcomid:"IaH-0"}}),s("text",{staticClass:"service posi",attrs:{eventid:"ies-3"},on:{tap:t.service}},[t._v("联系客服")]),s("view",{directives:[{name:"show",rawName:"v-show",value:t.ruleMaskShow,expression:"ruleMaskShow"}],staticClass:"mask",attrs:{eventid:"2Ey-4"},on:{click:t.hide}}),s("view",{directives:[{name:"show",rawName:"v-show",value:t.rulePopupShow,expression:"rulePopupShow"}],staticClass:"popup popup-middle"},[s("image",{staticClass:"ruleBg",attrs:{src:"../../static/ruleBg.png",mode:""}}),s("text",{staticClass:"closeBtn",attrs:{eventid:"Wfp-5"},on:{tap:t.hide}},[t._v("关闭")])])],1)},staticRenderFns:[]};e.a=a}},[245]);
});
require('pages/healthySpace/recommend.js');
__wxRoute = 'pages/healthyMall/shippingAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/shippingAddress.js';

define('pages/healthyMall/shippingAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([42],{250:function(e,t,i){"use strict";var a=c(i(1)),s=c(i(251));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(s.default))},251:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(253),s=i.n(a),c=i(254);var n=function(e){i(252)},d=i(0)(s.a,c.a,n,null,null);t.default=d.exports},252:function(e,t){},253:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{checkedId:0,siteData:[{tel:"15638521342",name:"张三",prov:"河南省",citiy:"郑州市",count:"郑东新区",definite:"中州大道与商都路交汇处东500米路南",checked:0,id:1},{tel:"15638521342",name:"张三",prov:"河南省",citiy:"郑州市",count:"郑东新区",definite:"中州大道与商都路交汇处东500米路南",checked:1,id:2},{tel:"15638521342",name:"张三",prov:"河南省",citiy:"郑州市",count:"郑东新区",definite:"中州大道与商都路交汇处东500米路南",checked:1,id:3}]}},onUnload:function(){for(var e=this.siteData.length,t=0;t<e;t++)0===this.siteData[t].checked&&(this.checkedId=this.siteData[t].id)},methods:{complie:function(t){console.log(t,"编辑");var i=JSON.stringify(t);console.log(i),e.navigateTo({url:"/pages/healthyMall/addShippingAddress?name=shippingAddress&siteData="+i})},detele:function(e){console.log(e,"删除");e.id},checkedSite:function(e){console.log(e);var t=e.id;this.checkedId=t;for(var i=this.siteData.length,a=0;a<i;a++)this.siteData[a].id===t?this.siteData[a].checked=0:this.siteData[a].checked=1},addSite:function(){e.navigateTo({url:"/pages/healthyMall/addShippingAddress"})}}}}).call(t,i(2).default)},254:function(e,t,i){"use strict";var a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"index"},[i("view",{staticClass:"siteView"},[e._l(e.siteData,function(t,a){return i("view",{key:a,staticClass:"siteViewItem"},[i("label",{staticClass:"radio"},[i("radio",{attrs:{color:"#87BBF8",value:t.id,checked:0===t.checked,eventid:"DuV-0-"+a},on:{tap:function(i){e.checkedSite(t)}}})],1),i("view",{staticClass:"siteDefalut"},[i("view",{staticClass:"siteInfoTop"},[i("text",{staticClass:"siteName"},[e._v(e._s(t.name))]),i("text",{staticClass:"siteTel"},[e._v(e._s(t.tel))]),i("text",{directives:[{name:"show",rawName:"v-show",value:0===t.checked,expression:"item.checked===0?true:false"}],staticClass:"defalutbtn"},[e._v("默认地址")])]),i("text",{staticClass:"siteDefinite"},[e._v("\n         \t\t\t"+e._s(t.prov+t.citiy+t.count+t.definite)+"\n         \t")])]),i("view",{staticClass:"imgView"},[i("image",{staticClass:"complieIcon",attrs:{src:"../../static/compile_icon.png",mode:"",eventid:"XHR-1-"+a},on:{tap:function(i){e.complie(t)}}}),i("text",{staticClass:"imgViewBorder"}),i("image",{staticClass:"deteleIocn",attrs:{src:"../../static/delete_icon.png",mode:"",eventid:"IJq-2-"+a},on:{tap:function(i){e.detele(t)}}})])],1)}),i("view",{staticClass:"addSiteView"},[i("text",{staticClass:"addSite",attrs:{eventid:"CEI-3"},on:{tap:e.addSite}},[e._v("新增收货地址")])])],2)])},staticRenderFns:[]};t.a=a}},[250]);
});
require('pages/healthyMall/shippingAddress.js');
__wxRoute = 'pages/healthyMall/settleAccount';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/settleAccount.js';

define('pages/healthyMall/settleAccount.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([43],{255:function(t,s,e){"use strict";var a=o(e(1)),i=o(e(256));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},256:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(258),i=e.n(a),o=e(259);var n=function(t){e(257)},l=e(0)(i.a,o.a,n,null,null);s.default=l.exports},257:function(t,s){},258:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{siteData:{tel:"15638521342",name:"张三",prov:"河南省",citiy:"郑州市",count:"郑东新区",definite:"中州大道与商都路交汇处东500米路南"},settleBtnDisabled:!0,discountsShow:!0,siteShow:!0,discountsMoney:"50.00",goodsTotal:{goodsNum:"2",totalAmount:526,carriage:0,total:526},orderInfoData:[{shopName:"阿里康达药房",shopImg:"../../static/shopImg.png",list:[{name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263",num:1,type:"180粒/瓶"},{name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263",num:1,type:"180粒/瓶"}]},{shopName:"啊康达药房",shopImg:"../../static/shopImg.png",list:[{name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263",num:1,type:"180粒/瓶"},{name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263",num:1,type:"180粒/瓶"}]}]}},onLoad:function(){},methods:{getDiscounts:function(){console.log("点击选择优惠券")},getLeaveWord:function(t){console.log("输入留言"),console.log(t.detail.value)},getInputLeaveWord:function(t){console.log("留言"),console.log(t.detail.value)},getSite:function(){console.log("点击地址"),!0===this.siteShow?(console.log("已经有默认地址"),t.navigateTo({url:"/pages/healthyMall/shippingAddress"})):(console.log("没有默认地址"),t.navigateTo({url:"/pages/healthyMall/addShippingAddress?name=settleAccount"}))}}}}).call(s,e(2).default)},259:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"index"},[e("view",{staticClass:"addSite"},[t.siteShow?e("view",{staticClass:"addSiteLeft",attrs:{eventid:"MLQ-0"},on:{tap:t.getSite}},[e("image",{staticClass:"siteIcon",attrs:{src:"../../static/siteIcon.png",mode:""}}),e("text",{staticClass:"addSiteText"},[t._v("请添加收货地址")])]):e("view",{staticClass:"addSiteLeft siteLeft"},[e("view",{staticClass:"siteInfoTop"},[e("text",{staticClass:"siteName"},[t._v(t._s(t.siteData.name))]),e("text",{staticClass:"siteTel"},[t._v(t._s(t.siteData.tel))]),e("button",{staticClass:"siteDefalutBtn"},[t._v("默认")])],1),e("text",{staticClass:"siteDefinite"},[t._v("\n            "+t._s(t.siteData.prov+t.siteData.citiy+t.siteData.count+t.siteData.definite)+"\n        ")])]),e("image",{staticClass:"moveIcon",attrs:{src:"../../static/move.png",mode:"",eventid:"gNk-1"},on:{tap:t.getSite}})]),e("view",{staticClass:"orderInfo"},t._l(t.orderInfoData,function(s,a){return e("view",{key:a,staticClass:"orderInfoList"},[e("view",{staticClass:"orderHeader"},[e("image",{attrs:{src:s.shopImg,mode:""}}),e("text",[t._v(t._s(s.shopName))])]),t._l(s.list,function(s,a){return e("view",{key:a,staticClass:"orderInfoItem"},[e("image",{attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"orderInfoItemRight"},[e("text",{staticClass:"orderGoodsName"},[t._v(t._s(s.name))]),e("text",{staticClass:"orderType"},[t._v("类型: "+t._s(s.type))]),e("view",{staticClass:"orderInfoBottom"},[e("text",{staticClass:"orderInfoBottomPrice"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"orderInfoBottomNum"},[t._v("x "+t._s(s.num))])])])])})],2)})),e("view",{staticClass:"discountCoupon"},[t._m(0),e("view",{staticClass:"discountCouponText",attrs:{eventid:"mHm-2"},on:{tap:t.getDiscounts}},[t.discountsShow?e("text",{staticClass:"discountsMoney"},[t._v("-￥"+t._s(t.discountsMoney))]):e("text",{staticClass:"discountsMoney"},[t._v(t._s(t.discountsMoney))]),e("image",{attrs:{src:"../../static/move.png",mode:""}})])]),e("view",{staticClass:"leaveWord"},[e("view",{staticClass:"orderHeader"},[e("image",{attrs:{src:"../../static/leaveWord.png",mode:""}}),e("text",[t._v("卖家留言: ")]),e("input",{attrs:{type:"text",value:"",placeholder:"对本次交易的说明",eventid:"X7d-3"},on:{input:t.getInputLeaveWord,confirm:t.getLeaveWord}})])]),e("view",{staticClass:"totalPrice"},[e("view",{staticClass:"orderHeader"},[e("image",{attrs:{src:"../../static/settle.png",mode:""}}),e("text",[t._v("共有"+t._s(t.goodsTotal.goodsNum)+"件商品 ")])]),e("view",{staticClass:"totalContent"},[e("view",{staticClass:"totalContentItem"},[e("text",{staticClass:"totalName"},[t._v("商品总额:")]),e("text",{staticClass:"totalText"},[t._v("￥"+t._s(t.goodsTotal.totalAmount))])]),e("view",{staticClass:"totalContentItem"},[e("text",{staticClass:"totalName"},[t._v("运费:")]),e("text",{staticClass:"totalText"},[t._v("￥"+t._s(t.goodsTotal.carriage))])]),e("view",{staticClass:"totalContentItem"},[e("text",{staticClass:"totalName"},[t._v("优惠券:")]),e("text",{staticClass:"totalText"},[t._v("-￥"+t._s(t.discountsMoney))])]),e("view",{staticClass:"totalContentItem"},[e("text",{staticClass:"totalName"},[t._v("总计:")]),e("text",{staticClass:"totalText colorBlue"},[t._v("￥"+t._s(t.goodsTotal.total))])])])]),e("view",{staticClass:"settle"},[e("view",{staticClass:"sum"},[e("text",{staticClass:"sumName"},[t._v("总金额：")]),e("text",{staticClass:"sumIcon"},[t._v("￥")]),e("text",{staticClass:"sumText"},[t._v(t._s(t.goodsTotal.total))])]),e("button",{attrs:{disabled:t.settleBtnDisabled}},[t._v("马上结算")])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"orderHeader"},[s("image",{attrs:{src:"../../static/discounts.png",mode:""}}),s("text",[this._v("选择优惠券：本优惠券为您节省")])])}]};s.a=a}},[255]);
});
require('pages/healthyMall/settleAccount.js');
__wxRoute = 'pages/healthyMall/addShippingAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/addShippingAddress.js';

define('pages/healthyMall/addShippingAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{260:function(l,e,a){"use strict";var u=b(a(1)),v=b(a(261));function b(l){return l&&l.__esModule?l:{default:l}}Page((0,u.default)(v.default))},261:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=a(263),v=a.n(u),b=a(272);var t=function(l){a(262)},i=a(0)(v.a,b.a,t,null,null);e.default=i.exports},262:function(l,e){},263:function(l,e,a){"use strict";(function(l){Object.defineProperty(e,"__esModule",{value:!0});var u=v(a(264));v(a(271));function v(l){return l&&l.__esModule?l:{default:l}}e.default={components:{mpvueCityPicker:u.default},data:function(){return{cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",siteData:{name:"",tel:"",details:"",regionCode:""},regionText:""}},onLoad:function(l){"shippingAddress"===l.name&&(this.siteData=JSON.parse(l.siteData),console.log(this.siteData))},onUnload:function(){this.$refs.mpvueCityPicker.pickerCancel()},methods:{save:function(){l.navigateBack({delta:1})},getTel:function(l){console.log("输入电话"),console.log(l.detail)},getName:function(){console.log("输入名称")},region:function(){console.log("选择地区"),this.$refs.mpvueCityPicker.show()},onConfirm:function(l){this.regionText=l,console.log(this.regionText),this.siteData.regionCode=this.regionText.cityCode},changeSiteDefalut:function(){console.log("是否设置为默认")}}}}).call(e,a(2).default)},264:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=a(266),v=a.n(u),b=a(270);var t=function(l){a(265)},i=a(0)(v.a,b.a,t,null,null);e.default=i.exports},265:function(l,e){},266:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=t(a(267)),v=t(a(268)),b=t(a(269));function t(l){return l&&l.__esModule?l:{default:l}}e.default={data:function(){return{pickerValue:[0,0,0],provinceDataList:[],cityDataList:[],areaDataList:[]}},created:function(){this.handPickValueDefault(),this.provinceDataList=u.default,this.cityDataList=v.default[this.pickerValueDefault[0]],this.areaDataList=b.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]],this.pickerValue=this.pickerValueDefault},props:{showPicker:{type:Boolean,default:!1},pickerValueDefault:{type:Array,default:[0,0,0]},themeColor:String},methods:{show:function(){var l=this;setTimeout(function(){l.showPicker=!0},0)},maskClick:function(){this.pickerCancel()},pickerCancel:function(){this.showPicker=!1,this._$emit("onCancel")},pickerConfirm:function(l){this.showPicker=!1,this._$emit("onConfirm")},showPickerView:function(){this.showPicker=!0},handPickValueDefault:function(){this.pickerValueDefault!==[0,0,0]&&(this.pickerValueDefault[0]>u.default.length-1&&(this.pickerValueDefault[0]=u.default.length-1),this.pickerValueDefault[1]>v.default[this.pickerValueDefault[0]].length-1&&(this.pickerValueDefault[1]=v.default[this.pickerValueDefault[0]].length-1),this.pickerValueDefault[2]>b.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length-1&&(this.pickerValueDefault[2]=b.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length-1))},pickerChange:function(l){var e=l.mp.detail.value;this.pickerValue[0]!==e[0]?(this.cityDataList=v.default[e[0]],this.areaDataList=b.default[e[0]][0],e[1]=0,e[2]=0):this.pickerValue[1]!==e[1]&&(this.areaDataList=b.default[e[0]][e[1]],e[2]=0),this.pickerValue=e,this._$emit("onChange")},_$emit:function(l){var e={label:this._getLabel(),value:this.pickerValue,cityCode:this._getCityCode()};this.$emit(l,e)},_getLabel:function(){return this.provinceDataList[this.pickerValue[0]].label+"-"+this.cityDataList[this.pickerValue[1]].label+"-"+this.areaDataList[this.pickerValue[2]].label},_getCityCode:function(){return this.areaDataList[this.pickerValue[2]].value}}}},267:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}]},268:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]]},269:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]]},270:function(l,e,a){"use strict";var u={render:function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("div",{staticClass:"mpvue-picker"},[a("div",{class:{pickerMask:l.showPicker},attrs:{catchtouchmove:"true",eventid:"pkx-0"},on:{click:l.maskClick}}),a("div",{staticClass:"mpvue-picker-content ",class:{"mpvue-picker-view-show":l.showPicker}},[a("div",{staticClass:"mpvue-picker__hd",attrs:{catchtouchmove:"true"}},[a("div",{staticClass:"mpvue-picker__action",attrs:{eventid:"gSZ-1"},on:{click:l.pickerCancel}},[l._v("取消")]),a("div",{staticClass:"mpvue-picker__action",style:{color:l.themeColor},attrs:{eventid:"Wdj-2"},on:{click:l.pickerConfirm}},[l._v("确定")])]),a("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:l.pickerValue,eventid:"q8b-3"},on:{change:l.pickerChange}},[a("block",[a("picker-view-column",{attrs:{mpcomid:"Npl-0"}},l._l(l.provinceDataList,function(e,u){return a("div",{key:u,staticClass:"picker-item"},[l._v(l._s(e.label))])})),a("picker-view-column",{attrs:{mpcomid:"DQJ-1"}},l._l(l.cityDataList,function(e,u){return a("div",{key:u,staticClass:"picker-item"},[l._v(l._s(e.label))])})),a("picker-view-column",{attrs:{mpcomid:"JKj-2"}},l._l(l.areaDataList,function(e,u){return a("div",{key:u,staticClass:"picker-item"},[l._v(l._s(e.label))])}))],1)],1)],1)])},staticRenderFns:[]};e.a=u},271:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{value:"110000",label:"北京市",children:[{value:"110101",label:"东城区"},{value:"110102",label:"西城区"},{value:"110103",label:"崇文区"},{value:"110104",label:"宣武区"},{value:"110105",label:"朝阳区"},{value:"110106",label:"丰台区"},{value:"110107",label:"石景山区"},{value:"110108",label:"海淀区"},{value:"110109",label:"门头沟区"},{value:"110111",label:"房山区"},{value:"110112",label:"通州区"},{value:"110113",label:"顺义区"},{value:"110114",label:"昌平区"},{value:"110115",label:"大兴区"},{value:"110116",label:"怀柔区"},{value:"110117",label:"平谷区"},{value:"110228",label:"密云县"},{value:"110229",label:"延庆县"},{value:"110230",label:"其它区"}]},{value:"120000",label:"天津市",children:[{value:"120101",label:"和平区"},{value:"120102",label:"河东区"},{value:"120103",label:"河西区"},{value:"120104",label:"南开区"},{value:"120105",label:"河北区"},{value:"120106",label:"红桥区"},{value:"120107",label:"塘沽区"},{value:"120108",label:"汉沽区"},{value:"120109",label:"大港区"},{value:"120110",label:"东丽区"},{value:"120111",label:"西青区"},{value:"120112",label:"津南区"},{value:"120113",label:"北辰区"},{value:"120114",label:"武清区"},{value:"120115",label:"宝坻区"},{value:"120116",label:"滨海新区"},{value:"120221",label:"宁河县"},{value:"120223",label:"静海县"},{value:"120225",label:"蓟县"},{value:"120226",label:"其它区"}]},{value:"130000",label:"河北省",children:[{value:"130100",label:"石家庄市"},{value:"130200",label:"唐山市"},{value:"130300",label:"秦皇岛市"},{value:"130400",label:"邯郸市"},{value:"130500",label:"邢台市"},{value:"130600",label:"保定市"},{value:"130700",label:"张家口市"},{value:"130800",label:"承德市"},{value:"130900",label:"沧州市"},{value:"131000",label:"廊坊市"},{value:"131100",label:"衡水市"}]},{value:"140000",label:"山西省",children:[{value:"140100",label:"太原市"},{value:"140200",label:"大同市"},{value:"140300",label:"阳泉市"},{value:"140400",label:"长治市"},{value:"140500",label:"晋城市"},{value:"140600",label:"朔州市"},{value:"140700",label:"晋中市"},{value:"140800",label:"运城市"},{value:"140900",label:"忻州市"},{value:"141000",label:"临汾市"},{value:"141100",label:"吕梁市"}]},{value:"150000",label:"内蒙古",children:[{value:"150100",label:"呼和浩特市"},{value:"150200",label:"包头市"},{value:"150300",label:"乌海市"},{value:"150400",label:"赤峰市"},{value:"150500",label:"通辽市"},{value:"150600",label:"鄂尔多斯市"},{value:"150700",label:"呼伦贝尔市"},{value:"150800",label:"巴彦淖尔市"},{value:"150900",label:"乌兰察布市"},{value:"152200",label:"兴安盟"},{value:"152500",label:"锡林郭勒盟"},{value:"152900",label:"阿拉善盟"}]},{value:"210000",label:"辽宁省",children:[{value:"210100",label:"沈阳市"},{value:"210200",label:"大连市"},{value:"210300",label:"鞍山市"},{value:"210400",label:"抚顺市"},{value:"210500",label:"本溪市"},{value:"210600",label:"丹东市"},{value:"210700",label:"锦州市"},{value:"210800",label:"营口市"},{value:"210900",label:"阜新市"},{value:"211000",label:"辽阳市"},{value:"211100",label:"盘锦市"},{value:"211200",label:"铁岭市"},{value:"211300",label:"朝阳市"},{value:"211400",label:"葫芦岛市"}]},{value:"220000",label:"吉林省",children:[{value:"220100",label:"长春市"},{value:"220200",label:"吉林市"},{value:"220300",label:"四平市"},{value:"220400",label:"辽源市"},{value:"220500",label:"通化市"},{value:"220600",label:"白山市"},{value:"220700",label:"松原市"},{value:"220800",label:"白城市"},{value:"222400",label:"延边朝鲜族自治州"}]},{value:"230000",label:"黑龙江省",children:[{value:"230100",label:"哈尔滨市"},{value:"230200",label:"齐齐哈尔市"},{value:"230300",label:"鸡西市"},{value:"230400",label:"鹤岗市"},{value:"230500",label:"双鸭山市"},{value:"230600",label:"大庆市"},{value:"230700",label:"伊春市"},{value:"230800",label:"佳木斯市"},{value:"230900",label:"七台河市"},{value:"231000",label:"牡丹江市"},{value:"231100",label:"黑河市"},{value:"231200",label:"绥化市"},{value:"232700",label:"大兴安岭地区"}]},{value:"310000",label:"上海市",children:[{value:"310101",label:"黄浦区"},{value:"310103",label:"卢湾区"},{value:"310104",label:"徐汇区"},{value:"310105",label:"长宁区"},{value:"310106",label:"静安区"},{value:"310107",label:"普陀区"},{value:"310108",label:"闸北区"},{value:"310109",label:"虹口区"},{value:"310110",label:"杨浦区"},{value:"310112",label:"闵行区"},{value:"310113",label:"宝山区"},{value:"310114",label:"嘉定区"},{value:"310115",label:"浦东新区"},{value:"310116",label:"金山区"},{value:"310117",label:"松江区"},{value:"310118",label:"青浦区"},{value:"310119",label:"南汇区"},{value:"310120",label:"奉贤区"},{value:"310152",label:"川沙区"},{value:"310230",label:"崇明县"},{value:"310231",label:"其它区"}]},{value:"320000",label:"江苏省",children:[{value:"320100",label:"南京市"},{value:"320200",label:"无锡市"},{value:"320300",label:"徐州市"},{value:"320400",label:"常州市"},{value:"320500",label:"苏州市"},{value:"320600",label:"南通市"},{value:"320700",label:"连云港市"},{value:"320800",label:"淮安市"},{value:"320900",label:"盐城市"},{value:"321000",label:"扬州市"},{value:"321100",label:"镇江市"},{value:"321200",label:"泰州市"},{value:"321300",label:"宿迁市"}]},{value:"330000",label:"浙江省",children:[{value:"330100",label:"杭州市"},{value:"330200",label:"宁波市"},{value:"330300",label:"温州市"},{value:"330400",label:"嘉兴市"},{value:"330500",label:"湖州市"},{value:"330600",label:"绍兴市"},{value:"330700",label:"金华市"},{value:"330800",label:"衢州市"},{value:"330900",label:"舟山市"},{value:"331000",label:"台州市"},{value:"331100",label:"丽水市"}]},{value:"340000",label:"安徽省",children:[{value:"340100",label:"合肥市"},{value:"340200",label:"芜湖市"},{value:"340300",label:"蚌埠市"},{value:"340400",label:"淮南市"},{value:"340500",label:"马鞍山市"},{value:"340600",label:"淮北市"},{value:"340700",label:"铜陵市"},{value:"340800",label:"安庆市"},{value:"341000",label:"黄山市"},{value:"341100",label:"滁州市"},{value:"341200",label:"阜阳市"},{value:"341300",label:"宿州市"},{value:"341500",label:"六安市"},{value:"341600",label:"亳州市"},{value:"341700",label:"池州市"},{value:"341800",label:"宣城市"}]},{value:"350000",label:"福建省",children:[{value:"350100",label:"福州市"},{value:"350200",label:"厦门市"},{value:"350300",label:"莆田市"},{value:"350400",label:"三明市"},{value:"350500",label:"泉州市"},{value:"350600",label:"漳州市"},{value:"350700",label:"南平市"},{value:"350800",label:"龙岩市"},{value:"350900",label:"宁德市"}]},{value:"360000",label:"江西省",children:[{value:"360100",label:"南昌市"},{value:"360200",label:"景德镇市"},{value:"360300",label:"萍乡市"},{value:"360400",label:"九江市"},{value:"360500",label:"新余市"},{value:"360600",label:"鹰潭市"},{value:"360700",label:"赣州市"},{value:"360800",label:"吉安市"},{value:"360900",label:"宜春市"},{value:"361000",label:"抚州市"},{value:"361100",label:"上饶市"}]},{value:"370000",label:"山东省",children:[{value:"370100",label:"济南市"},{value:"370200",label:"青岛市"},{value:"370300",label:"淄博市"},{value:"370400",label:"枣庄市"},{value:"370500",label:"东营市"},{value:"370600",label:"烟台市"},{value:"370700",label:"潍坊市"},{value:"370800",label:"济宁市"},{value:"370900",label:"泰安市"},{value:"371000",label:"威海市"},{value:"371100",label:"日照市"},{value:"371200",label:"莱芜市"},{value:"371300",label:"临沂市"},{value:"371400",label:"德州市"},{value:"371500",label:"聊城市"},{value:"371600",label:"滨州市"},{value:"371700",label:"菏泽市"}]},{value:"410000",label:"河南省",children:[{value:"410100",label:"郑州市"},{value:"410200",label:"开封市"},{value:"410300",label:"洛阳市"},{value:"410400",label:"平顶山市"},{value:"410500",label:"安阳市"},{value:"410600",label:"鹤壁市"},{value:"410700",label:"新乡市"},{value:"410800",label:"焦作市"},{value:"410881",label:"济源市"},{value:"410900",label:"濮阳市"},{value:"411000",label:"许昌市"},{value:"411100",label:"漯河市"},{value:"411200",label:"三门峡市"},{value:"411300",label:"南阳市"},{value:"411400",label:"商丘市"},{value:"411500",label:"信阳市"},{value:"411600",label:"周口市"},{value:"411700",label:"驻马店市"}]},{value:"420000",label:"湖北省",children:[{value:"420100",label:"武汉市"},{value:"420200",label:"黄石市"},{value:"420300",label:"十堰市"},{value:"420500",label:"宜昌市"},{value:"420600",label:"襄阳市"},{value:"420700",label:"鄂州市"},{value:"420800",label:"荆门市"},{value:"420900",label:"孝感市"},{value:"421000",label:"荆州市"},{value:"421100",label:"黄冈市"},{value:"421200",label:"咸宁市"},{value:"421300",label:"随州市"},{value:"422800",label:"恩施土家族苗族自治州"},{value:"429004",label:"仙桃市"},{value:"429005",label:"潜江市"},{value:"429006",label:"天门市"},{value:"429021",label:"神农架林区"}]},{value:"430000",label:"湖南省",children:[{value:"430100",label:"长沙市"},{value:"430200",label:"株洲市"},{value:"430300",label:"湘潭市"},{value:"430400",label:"衡阳市"},{value:"430500",label:"邵阳市"},{value:"430600",label:"岳阳市"},{value:"430700",label:"常德市"},{value:"430800",label:"张家界市"},{value:"430900",label:"益阳市"},{value:"431000",label:"郴州市"},{value:"431100",label:"永州市"},{value:"431200",label:"怀化市"},{value:"431300",label:"娄底市"},{value:"433100",label:"湘西土家族苗族自治州"}]},{value:"440000",label:"广东省",children:[{value:"440100",label:"广州市"},{value:"440200",label:"韶关市"},{value:"440300",label:"深圳市"},{value:"440400",label:"珠海市"},{value:"440500",label:"汕头市"},{value:"440600",label:"佛山市"},{value:"440700",label:"江门市"},{value:"440800",label:"湛江市"},{value:"440900",label:"茂名市"},{value:"441200",label:"肇庆市"},{value:"441300",label:"惠州市"},{value:"441400",label:"梅州市"},{value:"441500",label:"汕尾市"},{value:"441600",label:"河源市"},{value:"441700",label:"阳江市"},{value:"441800",label:"清远市"},{value:"441900",label:"东莞市"},{value:"442000",label:"中山市"},{value:"445100",label:"潮州市"},{value:"445200",label:"揭阳市"},{value:"445300",label:"云浮市"}]},{value:"450000",label:"广西壮族",children:[{value:"450100",label:"南宁市"},{value:"450200",label:"柳州市"},{value:"450300",label:"桂林市"},{value:"450400",label:"梧州市"},{value:"450500",label:"北海市"},{value:"450600",label:"防城港市"},{value:"450700",label:"钦州市"},{value:"450800",label:"贵港市"},{value:"450900",label:"玉林市"},{value:"451000",label:"百色市"},{value:"451100",label:"贺州市"},{value:"451200",label:"河池市"},{value:"451300",label:"来宾市"},{value:"451400",label:"崇左市"}]},{value:"460000",label:"海南省",children:[{value:"460100",label:"海口市"},{value:"460200",label:"三亚市"},{value:"469001",label:"五指山市"},{value:"469002",label:"琼海市"},{value:"469003",label:"儋州市"},{value:"469005",label:"文昌市"},{value:"469006",label:"万宁市"},{value:"469007",label:"东方市"},{value:"469025",label:"定安县"},{value:"469026",label:"屯昌县"},{value:"469027",label:"澄迈县"},{value:"469028",label:"临高县"},{value:"469030",label:"白沙黎族自治县"},{value:"469031",label:"昌江黎族自治县"},{value:"469033",label:"乐东黎族自治县"},{value:"469034",label:"陵水黎族自治县"},{value:"469035",label:"保亭黎族苗族自治县"},{value:"469036",label:"琼中黎族苗族自治县"},{value:"469037",label:"西沙群岛"},{value:"469038",label:"南沙群岛"},{value:"469039",label:"中沙群岛的岛礁及其海域"}]},{value:"500000",label:"重庆",children:[{value:"500101",label:"万州区"},{value:"500102",label:"涪陵区"},{value:"500103",label:"渝中区"},{value:"500104",label:"大渡口区"},{value:"500105",label:"江北区"},{value:"500106",label:"沙坪坝区"},{value:"500107",label:"九龙坡区"},{value:"500108",label:"南岸区"},{value:"500109",label:"北碚区"},{value:"500110",label:"万盛区"},{value:"500111",label:"双桥区"},{value:"500112",label:"渝北区"},{value:"500113",label:"巴南区"},{value:"500114",label:"黔江区"},{value:"500115",label:"长寿区"},{value:"500222",label:"綦江县"},{value:"500223",label:"潼南县"},{value:"500224",label:"铜梁县"},{value:"500225",label:"大足县"},{value:"500226",label:"荣昌县"},{value:"500227",label:"璧山县"},{value:"500228",label:"梁平县"},{value:"500229",label:"城口县"},{value:"500230",label:"丰都县"},{value:"500231",label:"垫江县"},{value:"500232",label:"武隆县"},{value:"500233",label:"忠县"},{value:"500234",label:"开县"},{value:"500235",label:"云阳县"},{value:"500236",label:"奉节县"},{value:"500237",label:"巫山县"},{value:"500238",label:"巫溪县"},{value:"500240",label:"石柱土家族自治县"},{value:"500241",label:"秀山土家族苗族自治县"},{value:"500242",label:"酉阳土家族苗族自治县"},{value:"500243",label:"彭水苗族土家族自治县"},{value:"500381",label:"江津区"},{value:"500382",label:"合川区"},{value:"500383",label:"永川区"},{value:"500384",label:"南川区"},{value:"500385",label:"其它区"}]},{value:"510000",label:"四川省",children:[{value:"510100",label:"成都市"},{value:"510300",label:"自贡市"},{value:"510400",label:"攀枝花市"},{value:"510500",label:"泸州市"},{value:"510600",label:"德阳市"},{value:"510700",label:"绵阳市"},{value:"510800",label:"广元市"},{value:"510900",label:"遂宁市"},{value:"511000",label:"内江市"},{value:"511100",label:"乐山市"},{value:"511300",label:"南充市"},{value:"511400",label:"眉山市"},{value:"511500",label:"宜宾市"},{value:"511600",label:"广安市"},{value:"511700",label:"达州市"},{value:"511800",label:"雅安市"},{value:"511900",label:"巴中市"},{value:"512000",label:"资阳市"},{value:"513200",label:"阿坝藏族羌族自治州"},{value:"513300",label:"甘孜藏族自治州"},{value:"513400",label:"凉山彝族自治州"}]},{value:"520000",label:"贵州省",children:[{value:"520100",label:"贵阳市"},{value:"520200",label:"六盘水市"},{value:"520300",label:"遵义市"},{value:"520400",label:"安顺市"},{value:"522200",label:"铜仁地区"},{value:"522300",label:"黔西南布依族苗族自治州"},{value:"522400",label:"毕节地区"},{value:"522600",label:"黔东南苗族侗族自治州"},{value:"522700",label:"黔南布依族苗族自治州"}]},{value:"530000",label:"云南省",children:[{value:"530100",label:"昆明市"},{value:"530300",label:"曲靖市"},{value:"530400",label:"玉溪市"},{value:"530500",label:"保山市"},{value:"530600",label:"昭通市"},{value:"530700",label:"丽江市"},{value:"530800",label:"普洱市"},{value:"530900",label:"临沧市"},{value:"532300",label:"楚雄彝族自治州"},{value:"532500",label:"红河哈尼族彝族自治州"},{value:"532600",label:"文山壮族苗族自治州"},{value:"532800",label:"西双版纳傣族自治州"},{value:"532900",label:"大理白族自治州"},{value:"533100",label:"德宏傣族景颇族自治州"},{value:"533300",label:"怒江傈僳族自治州"},{value:"533400",label:"迪庆藏族自治州"}]},{value:"540000",label:"西藏",children:[{value:"540100",label:"拉萨市"},{value:"542100",label:"昌都地区"},{value:"542200",label:"山南地区"},{value:"542300",label:"日喀则地区"},{value:"542400",label:"那曲地区"},{value:"542500",label:"阿里地区"},{value:"542600",label:"林芝地区"}]},{value:"610000",label:"陕西省",children:[{value:"610100",label:"西安市"},{value:"610200",label:"铜川市"},{value:"610300",label:"宝鸡市"},{value:"610400",label:"咸阳市"},{value:"610500",label:"渭南市"},{value:"610600",label:"延安市"},{value:"610700",label:"汉中市"},{value:"610800",label:"榆林市"},{value:"610900",label:"安康市"},{value:"611000",label:"商洛市"}]},{value:"620000",label:"甘肃省",children:[{value:"620100",label:"兰州市"},{value:"620200",label:"嘉峪关市"},{value:"620300",label:"金昌市"},{value:"620400",label:"白银市"},{value:"620500",label:"天水市"},{value:"620600",label:"武威市"},{value:"620700",label:"张掖市"},{value:"620800",label:"平凉市"},{value:"620900",label:"酒泉市"},{value:"621000",label:"庆阳市"},{value:"621100",label:"定西市"},{value:"621200",label:"陇南市"},{value:"622900",label:"临夏回族自治州"},{value:"623000",label:"甘南藏族自治州"}]},{value:"630000",label:"青海省",children:[{value:"630100",label:"西宁市"},{value:"632100",label:"海东地区"},{value:"632200",label:"海北藏族自治州"},{value:"632300",label:"黄南藏族自治州"},{value:"632500",label:"海南藏族自治州"},{value:"632600",label:"果洛藏族自治州"},{value:"632700",label:"玉树藏族自治州"},{value:"632800",label:"海西蒙古族藏族自治州"}]},{value:"640000",label:"宁夏",children:[{value:"640100",label:"银川市"},{value:"640200",label:"石嘴山市"},{value:"640300",label:"吴忠市"},{value:"640400",label:"固原市"},{value:"640500",label:"中卫市"}]},{value:"650000",label:"新疆",children:[{value:"650100",label:"乌鲁木齐市"},{value:"650200",label:"克拉玛依市"},{value:"652100",label:"吐鲁番地区"},{value:"652200",label:"哈密地区"},{value:"652300",label:"昌吉回族自治州"},{value:"652700",label:"博尔塔拉蒙古自治州"},{value:"652800",label:"巴音郭楞蒙古自治州"},{value:"652900",label:"阿克苏地区"},{value:"653000",label:"克孜勒苏柯尔克孜自治州"},{value:"653100",label:"喀什地区"},{value:"653200",label:"和田地区"},{value:"654000",label:"伊犁哈萨克自治州"},{value:"654200",label:"塔城地区"},{value:"654300",label:"阿勒泰地区"},{value:"659001",label:"石河子市"},{value:"659002",label:"阿拉尔市"},{value:"659003",label:"图木舒克市"},{value:"659004",label:"五家渠市"}]},{value:"710000",label:"台湾省",children:[{value:"710100",label:"台北市"},{value:"710200",label:"高雄市"},{value:"710300",label:"台南市"},{value:"710400",label:"台中市"},{value:"710500",label:"金门县"},{value:"710600",label:"南投县"},{value:"710700",label:"基隆市"},{value:"710800",label:"新竹市"},{value:"710900",label:"嘉义市"},{value:"711100",label:"新北市"},{value:"711200",label:"宜兰县"},{value:"711300",label:"新竹县"},{value:"711400",label:"桃园县"},{value:"711500",label:"苗栗县"},{value:"711700",label:"彰化县"},{value:"711900",label:"嘉义县"},{value:"712100",label:"云林县"},{value:"712400",label:"屏东县"},{value:"712500",label:"台东县"},{value:"712600",label:"花莲县"},{value:"712700",label:"澎湖县"}]},{value:"810000",label:"香港",children:[{value:"810100",label:"香港岛"},{value:"810200",label:"九龙"},{value:"810300",label:"新界"}]},{value:"820000",label:"澳门",children:[{value:"820100",label:"澳门半岛"},{value:"820200",label:"离岛"}]},{value:"990000",label:"海外",children:[{value:"990100",label:"海外"}]}]},272:function(l,e,a){"use strict";var u={render:function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("view",{staticClass:"index"},[a("view",{staticClass:"addSiteView"},[a("view",{staticClass:"siteName siteViewItem"},[a("text",[l._v("收货人: ")]),a("input",{attrs:{type:"text",eventid:"Inr-0"},on:{input:l.getName}})]),a("view",{staticClass:"siteName siteViewItem"},[a("text",[l._v("手机号: ")]),a("input",{attrs:{type:"text",eventid:"VGQ-1"},on:{input:l.getTel}})]),a("view",{staticClass:"setDefalut siteViewItem",attrs:{eventid:"N4V-2"},on:{tap:l.region}},[a("view",{staticClass:"regionTitle"},[a("text",{staticClass:"regionName"},[l._v("所在地区: ")]),a("text",[l._v(l._s(l.regionText.label))])]),a("image",{attrs:{src:"../../static/move.png",mode:""}})]),a("view",{staticClass:" siteViewItem"},[a("input",{attrs:{type:"text",color:"#519EF7",placeholder:"请填写详细地址：如街道，门牌号，小区，楼栋号，单元等...",eventid:"gnr-3"},on:{input:l.getSiteDetails}})]),a("view",{staticClass:"setDefalut"},[a("text",[l._v("设为默认地址:")]),a("switch",{attrs:{color:"#519EF7",eventid:"OTU-4"},on:{change:l.changeSiteDefalut}})]),a("text",{staticClass:"addSite",attrs:{eventid:"1SE-5"},on:{tap:l.save}},[l._v("保存")])]),a("mpvue-city-picker",{ref:"mpvueCityPicker",attrs:{themeColor:l.themeColor,pickerValueDefault:l.cityPickerValueDefault,eventid:"CBP-6",mpcomid:"WJc-0"},on:{onCancel:l.onCancel,onConfirm:l.onConfirm}})],1)},staticRenderFns:[]};e.a=u}},[260]);
});
require('pages/healthyMall/addShippingAddress.js');
__wxRoute = 'pages/healthyMall/goodsDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/goodsDetails.js';

define('pages/healthyMall/goodsDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{273:function(t,s,e){"use strict";var a=o(e(1)),i=o(e(274));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},274:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(276),i=e.n(a),o=e(281);var l=function(t){e(275)},c=e(0)(i.a,o.a,l,null,null);s.default=c.exports},275:function(t,s){},276:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var a=o(e(4)),i=o(e(277));function o(t){return t&&t.__esModule?t:{default:t}}s.default={components:{numberBox:i.default,shareModel:a.default},data:function(){return{maskShow:!1,popupShow:!1,shareData:{title:"商品详情",path:"baidu.com",href:"baidu.com",image:"https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png",shareText:"商品详情shareText",imageUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2671670863,3877857355&fm=58&w=258&h=258&img.JPEG"},shareType:0,buyNum:2,currentStock:9,popupData:{imgUrl:"../../static/detalisImg.png",price:"99",stock:"999",num:"1"},ifSelectType:!0,showMask:!1,showDetailsState:!1,imgUrls:["../../static/detalisImg.png","../../static/detalisImg.png","../../static/detalisImg.png"],selectType:[],unfoldDetailsShow:!0,goodsCollectText:"收藏",shopCollectText:"收藏",goodsData:{cartGoodsNum:"2",collectShopShow:!1,goodsCollectShow:!1,name:"进口葡萄籽精华胶囊时尚",price:"899.0",originalCost:"999",coupon:"100",commission:"36.12",express:"0.00",sales:"521",site:"河南郑州",stock:"9999",parameter:"",spec:[{size:"300mg/瓶",imgUrl:"../../static/goodsDetails.png",color:"",price:"999.0",stock:"99",checked:1,id:"1"},{size:"300mg/瓶",imgUrl:"../../static/goodsDetails.png",color:"",price:"999.0",stock:"99",checked:1,id:"2"}],describe:"4.7高",serve:"4.7高",expressServe:"4.7高",particulars:["../../static/goodsDetails.png","../../static/goodsDetails.png","../../static/goodsDetails.png"]},recommendListData:[{id:1,goodsName:"新西兰原装美容养颜葡萄...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""},{id:2,goodsName:"新西兰原装美容养颜葡萄...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""}],toastText:"请选择商品大小"}},onShareAppMessage:function(){return{title:this.shareData.shareText?this.shareData.shareText:"欢迎体验健康联盟",path:"/pages/healthyMall/goodsDetails"}},methods:{shareGoods:function(){console.log("点击分享"),this.maskShow=!0,this.popupShow=!0},collectGoods:function(t){1===t?(console.log("点击收藏"),this.goodsData.goodsCollectShow=!1,this.goodsCollectText="收藏"):(console.log("点击取消收藏"),this.goodsData.goodsCollectShow=!0,this.goodsCollectText="已收藏")},collectShop:function(t){1===t?(console.log("点击收藏"),this.goodsData.collectShopShow=!1,this.shopCollectText="收藏"):(console.log("点击取消收藏"),this.goodsData.collectShopShow=!0,this.shopCollectText="已收藏")},unfoldDetails:function(){console.log("展开宝贝详情"),this.unfoldDetailsShow?this.unfoldDetailsShow=!1:this.unfoldDetailsShow=!0},getCart:function(){t.navigateTo({url:"/pages/healthyMall/shoppingCart"})},getGoodsType:function(s){"type"===s?(console.log("选择商品规格"),this.showDetailsState=!0,this.showMask=!0):"cart"===s?(console.log("点击加入购物车"),0===this.selectType.length?(this.showDetailsState=!0,this.showMask=!0):console.log("提示加入购物车")):"buy"===s?(console.log("点击购买"),0===this.selectType.length?(this.showDetailsState=!0,this.showMask=!0):t.navigateTo({url:"/pages/healthyMall/settleAccount"})):"buyPopup"===s?(console.log("在弹框中点击购买"),0===this.selectType.length?this.toastTap():t.navigateTo({url:"/pages/healthyMall/settleAccount"})):(0===this.selectType.length?this.toastTap():(this.toastText="加入购物车成功！",this.toastTap()),console.log("在弹框中点击购物车"))},hideMask:function(){console.log("遮罩层显示隐藏"),this.showMask=!1,this.showDetailsState=!1},numberUpdate:function(t){console.log(t),this.buyNum=t},toastTap:function(){t.showToast({title:this.toastText})},inABatch:function(){console.log("点击换一批推荐商品")},getPopupType:function(t){if(console.log(t),0===t.checked)console.log("已经为选中");else{console.log("设置为选中");for(var s=this.goodsData.spec.length,e=t.id,a=0;a<s;a++)e===this.goodsData.spec[a].id?(this.goodsData.spec[a].checked=0,this.selectType=[],this.selectType.push(this.goodsData.spec[a].id)):this.goodsData.spec[a].checked=1}}}}}).call(s,e(2).default)},277:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(279),i=e.n(a),o=e(280);var l=function(t){e(278)},c=e(0)(i.a,o.a,l,null,null);s.default=c.exports},278:function(t,s){},279:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"number-box",props:{value:{type:Number,default:0},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},computed:{disableSubtract:function(){return this.value<=this.min},disableAdd:function(){return this.value>=this.max}},onUnload:function(){this.value=0,this.step=1,this.max=1/0,this.min=-1/0},methods:{subtract:function(t){this._handleStep("subtract")},add:function(t){this._handleStep("add")},_handleStep:function(t){var s=this.value;"subtract"===t?s-=this.step:"add"===t&&(s+=this.step),s<this.min||s>this.max||(this.value=s)},handleBlur:function(t){var s=t.detail.value;s?((s=+s)>this.max?s=this.max:s<this.min&&(s=this.min),this.value=s):this.value=0}},watch:{value:function(t){this.$emit("update",t)}}}},280:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"uni-numbox"},[e("view",{staticClass:"uni-numbox-minus",class:{"uni-numbox-disabled":t.disableSubtract},attrs:{eventid:"n50-0"},on:{click:t.subtract}},[t._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"uni-numbox-value",attrs:{type:"number",disabled:t.disabled,eventid:"jrf-1"},domProps:{value:t.value},on:{blur:t.handleBlur,input:function(s){s.target.composing||(t.value=s.target.value)}}}),e("view",{staticClass:"uni-numbox-plus",class:{"uni-numbox-disabled":t.disableAdd},attrs:{eventid:"PJB-2"},on:{click:t.add}},[t._v("+")])])},staticRenderFns:[]};s.a=a},281:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"index"},[e("swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true","indicator-color":"#fff","indicator-active-color":"#88CB25"}},t._l(t.imgUrls,function(t,s){return e("swiper-item",{key:s,staticClass:"swiperItem",attrs:{mpcomid:"GT8-0-"+s}},[e("image",{staticClass:"swiperItemImg",attrs:{src:t}})])})),e("image",{staticClass:"share",attrs:{src:"../../static/share.png",mode:"",eventid:"n5S-0"},on:{tap:t.shareGoods}}),e("view",{staticClass:"goodsIntroduce"},[e("view",{staticClass:"goodsName"},[e("text",{staticClass:"goodsNameText"},[t._v(t._s(t.goodsData.name))]),e("view",{staticClass:"collect"},[t.goodsData.goodsCollectShow?e("image",{attrs:{src:"../../static/collectChecked.png",mode:"",eventid:"npj-2"},on:{tap:function(s){t.collectGoods(1)}}}):e("image",{attrs:{src:"../../static/collect.png",mode:"",eventid:"CdU-1"},on:{tap:function(s){t.collectGoods(2)}}}),e("text",[t._v(t._s(t.goodsCollectText))])])]),e("view",{staticClass:"priceView"},[e("text",{staticClass:"moneyIcon"},[t._v("￥")]),e("text",{staticClass:"price"},[t._v(t._s(t.goodsData.price))]),e("text",{staticClass:"originalCost"},[t._v("￥"+t._s(t.goodsData.originalCost)+"元")])]),e("view",{staticClass:"infoView"},[e("text",{staticClass:"coupon"},[t._v("领劵:"+t._s(t.goodsData.coupon)+"元")]),e("view",{staticClass:"goodsInfo"},[e("text",{staticClass:"express goodsInfoStyle"},[t._v("快递: "+t._s(t.goodsData.express))]),e("text",{staticClass:"sales goodsInfoStyle"},[t._v("月销: "+t._s(t.goodsData.sales)+"笔")]),e("text",{staticClass:"site goodsInfoStyle"},[t._v(t._s(t.goodsData.site))])])]),e("view",{staticClass:"argumentView"},[e("view",{staticClass:"argumentViewList argumentViewListRight"},[e("image",{staticClass:"moneyIcon2",attrs:{src:"../../static/moneyIcon.png",mode:""}}),e("text",{staticClass:"commissionTitle"},[t._v("可得商品佣金: ")]),e("text",{staticClass:"commission"},[t._v("￥"+t._s(t.goodsData.commission)+"元")])]),e("view",{staticClass:"argumentViewList"},[e("text",{staticClass:"title"},[t._v("产品参数")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.parameter))]),e("image",{staticClass:"selectMove",attrs:{src:"../../static/detailsSelect.png",mode:""}})]),e("view",{staticClass:"argumentViewList",attrs:{eventid:"bfP-3"},on:{tap:function(s){t.getGoodsType("type")}}},[e("text",{staticClass:"title"},[t._v("商品规格")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.spec))]),e("image",{staticClass:"selectMove",attrs:{src:"../../static/detailsSelect.png",mode:""}})]),e("view",{staticClass:"argumentViewList"},[e("view",{staticClass:"describe"},[e("text",{staticClass:"title"},[t._v("宝贝描述:")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.describe))])]),e("view",{staticClass:"describe"},[e("text",{staticClass:"title"},[t._v("卖家服务:")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.serve))])]),e("view",{staticClass:"describe"},[e("text",{staticClass:"title"},[t._v("物流服务:")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.expressServe))])])])]),e("view",{staticClass:"babyDetails"},[e("view",{staticClass:"babyDetailsTitle",attrs:{eventid:"gQB-4"},on:{tap:t.unfoldDetails}},[e("text",[t._v("宝贝详情")]),e("image",{attrs:{src:"../../static/arrowsBottom.png",mode:""}})]),t._l(t.goodsData.particulars,function(s,a){return e("view",{directives:[{name:"show",rawName:"v-show",value:t.unfoldDetailsShow,expression:"unfoldDetailsShow"}],key:a,staticClass:"babyDetailsImgView"},[e("image",{staticClass:"babyDetailsImg",attrs:{src:s,mode:""}})])})],2),e("view",{staticClass:"HotGoods"},[e("view",{staticClass:"HotGoodsTitle"},[t._m(0),e("text",{staticClass:"inABatch",attrs:{eventid:"3Zi-5"},on:{tap:t.inABatch}},[t._v("换一批")])]),e("view",{staticClass:"hotGoodsList"},t._l(t.recommendListData,function(s,a){return e("view",{key:a,staticClass:"hotGoodsListItem"},[e("image",{staticClass:"recommendImg",attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"hotGoodsListItemName"},[e("text",{staticClass:"discounts"},[t._v(t._s(s.discounts))]),e("text",{staticClass:"hotName"},[t._v(t._s(s.goodsName))])]),e("view",{staticClass:"goodsIntro"},[e("text",{staticClass:"discountsIntro"},[t._v("佣金:"+t._s(s.discountsIntro))]),e("text",{staticClass:"hotsales"},[t._v("\n                    销量:"+t._s(s.sales)+"\n                  ")])]),e("view",{staticClass:"goodsPrice"},[e("text",{staticClass:"goodsPriceTitle"},[t._v("优惠:")]),e("text",{staticClass:"goodsPriceIcon"},[t._v("￥")]),e("text",{staticClass:"goodsPriceText"},[t._v(t._s(s.price))]),e("text",{staticClass:"goodsOriginalPrice"},[t._v("￥"+t._s(s.originalPrice))])])])}))])]),e("view",{directives:[{name:"show",rawName:"v-show",value:t.showMask,expression:"showMask"}],staticClass:"mask",attrs:{eventid:"ed6-6"},on:{tap:t.hideMask}}),e("view",{directives:[{name:"show",rawName:"v-show",value:t.showDetailsState,expression:"showDetailsState"}],staticClass:"popup popup-bottom"},[e("view",{staticClass:"goodsPopupTop"},[e("image",{staticClass:"goodsPopupTopImg",attrs:{src:t.popupData.imgUrl,mode:""}}),e("view",{staticClass:"goodsPopupTopText"},[e("text",{staticClass:"popupPrice"},[t._v("￥"+t._s(t.popupData.price))]),e("text",{staticClass:"popupStock"},[t._v("库存"+t._s(t.popupData.stock)+"件")]),e("text",{directives:[{name:"show",rawName:"v-show",value:t.ifSelectType,expression:"ifSelectType"}],staticClass:"popupStock"},[t._v("请选择大小")])])]),e("view",{staticClass:"sizeView"},[e("text",{staticClass:"sizeTitle"},[t._v("大小")]),e("view",{staticClass:"sizeItem"},t._l(t.goodsData.spec,function(s,a){return e("view",{key:a,class:0===s.checked?"sizeItemBtn active":"sizeItemBtn",attrs:{eventid:"hhY-7-"+a},on:{tap:function(e){t.getPopupType(s)}}},[t._v("\n              "+t._s(s.size)+"\n             ")])}))]),e("view",{staticClass:"buyNum"},[e("text",{staticClass:"buyNumTitle"},[t._v("购买数量")]),e("view",{staticClass:"buyNumInput"},[e("number-box",{attrs:{min:1,disabled:!0,max:t.currentStock,value:t.buyNum,eventid:"GzF-8",mpcomid:"zFT-1"},on:{update:t.numberUpdate}})],1)]),e("view",{staticClass:"popupBtn"},[e("view",{staticClass:"addCartBtn",attrs:{eventid:"4ee-9"},on:{tap:function(s){t.getGoodsType("cartPopup")}}},[t._v("\n              加入购物车\n            ")]),e("view",{staticClass:"buyBtn",attrs:{eventid:"tw1-10"},on:{tap:function(s){t.getGoodsType("buyPopup")}}},[t._v("\n              立即购买\n            ")])])]),e("view",{staticClass:"detailsBase"},[e("view",{staticClass:"detailsBaseCart",attrs:{eventid:"kJQ-11"},on:{tap:t.getCart}},[e("image",{attrs:{src:"../../static/cartRight.png",mode:""}}),e("text",{staticClass:"cartGoodsNum"},[t._v(t._s(t.goodsData.cartGoodsNum))]),e("text",[t._v("购物车")])]),e("view",{staticClass:"detailsBaseCollect"},[t.goodsData.collectShopShow?e("image",{attrs:{src:"../../static/collectChecked.png",mode:"",eventid:"6S3-13"},on:{tap:function(s){t.collectShop(1)}}}):e("image",{attrs:{src:"../../static/collect.png",mode:"",eventid:"s1I-12"},on:{tap:function(s){t.collectShop(2)}}}),e("text",[t._v(t._s(t.shopCollectText))])]),e("view",{staticClass:"addCartBtn",attrs:{eventid:"NKi-14"},on:{tap:function(s){t.getGoodsType("cart")}}},[t._v("\n        \t加入购物车\n        ")]),e("view",{staticClass:"buyBtn",attrs:{eventid:"0up-15"},on:{tap:function(s){t.getGoodsType("buy")}}},[t._v("\n        \t立即购买\n        ")])]),e("share-model",{attrs:{maskShow:t.maskShow,popupShow:t.popupShow,shareData:t.shareData,shareType:t.shareType,mpcomid:"pmB-2"}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"HotGoodsCenter"},[s("text",{staticClass:"line"},[this._v("-")]),s("text",{staticClass:"text"},[this._v("推荐商品")]),s("text",{staticClass:"line"},[this._v("-")])])}]};s.a=a}},[273]);
});
require('pages/healthyMall/goodsDetails.js');
__wxRoute = 'pages/healthyMall/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/search.js';

define('pages/healthyMall/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([45],{282:function(t,e,a){"use strict";var s=i(a(1)),n=i(a(283));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},283:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(285),n=a.n(s),i=a(286);var c=function(t){a(284)},r=a(0)(n.a,i.a,c,null,null);e.default=r.exports},284:function(t,e){},285:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(a(10)),n=i(a(7));function i(t){return t&&t.__esModule?t:{default:t}}e.default={components:{uniNavBar:s.default,uniIcon:n.default},data:function(){return{searchFindTextData:[{name:"进口 卸妆水",id:"1",href:""},{name:"鲜活好蟹 阳澄湖大闸蟹",id:"1",href:""},{name:"新米上市 有机大米",id:"1",href:""},{name:"进口婴幼儿奶粉",id:"1",href:""}],searchListData:[{id:"1",name:"维生素C钙片"},{id:"1",name:"茅台原浆"}]}},onLoad:function(){},onUnload:function(){},methods:{searchTap:function(){console.log("点击搜索")}}}},286:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"index"},[a("view",{staticClass:"header"},[a("view",{staticClass:"search",attrs:{eventid:"k4d-0"},on:{tap:t.searchTap}},[a("view",{staticClass:"uni-icon uni-icon-search"}),a("input",{staticClass:"searchInput",attrs:{type:"text",value:"",placeholder:"点击搜索商品或者店铺"}})]),a("image",{staticClass:"deteleImg",attrs:{src:"../../static/cancel_icon.png",mode:""}}),a("text",{staticClass:"cancelText"},[t._v("取消")])]),a("view",{staticClass:"searchContent"},[t._m(0),a("view",{staticClass:"searchFindText"},t._l(t.searchFindTextData,function(e,s){return a("view",{key:s,staticClass:"searchFindTextItem"},[t._v("\n                "+t._s(e.name)+"\n            ")])})),a("view",{staticClass:"searchList"},t._l(t.searchListData,function(e,s){return a("view",{key:s,staticClass:"searchListItem"},[a("view",{},[a("image",{staticClass:"searchListItemIcon1",attrs:{src:"../../static/s-search.png",mode:""}}),a("text",{staticClass:"searchName"},[t._v(t._s(e.name))])]),a("image",{staticClass:"searchListItemIcon2",attrs:{src:"../../static/suo_icon.png",mode:""}})])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"searchContentHeader"},[e("text",{staticClass:"find"},[this._v("搜索发现")]),e("text",{staticClass:"recordDelete"},[this._v("消除搜索记录")])])}]};e.a=s}},[282]);
});
require('pages/healthyMall/search.js');
__wxRoute = 'pages/healthyMall/shoppingCart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthyMall/shoppingCart.js';

define('pages/healthyMall/shoppingCart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([40],{287:function(t,s,o){"use strict";var e=i(o(1)),a=i(o(288));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},288:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=o(290),a=o.n(e),i=o(291);var n=function(t){o(289)},c=o(0)(a.a,i.a,n,null,null);s.default=c.exports},289:function(t,s){},290:function(t,s,o){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{currentShopName:"",showMaskCoupons:!1,showCoupons:!1,cartNull:!1,payShow:!1,checkedGoodsNum:5,checkedGoodsmoney:"986.5",moneyUnit:"",moneyAngle:"",checkedAll:!1,shopCouponsData:[{money:"50",meetMoney:"500",startTime:"2018.11.1",endTime:"2018.11.1",get:!1},{money:"50",meetMoney:"500",startTime:"2018.11.1",endTime:"2018.11.1",get:!1},{money:"50",meetMoney:"500",startTime:"2018.11.1",endTime:"2018.11.1",get:!1}],goodsInfoData:[{shopName:"阿里康达药房",shopImg:"../../static/shopImg.png",shopId:1,checked:0,list:[{goodsId:11,name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263.8",num:1,type:"180粒/瓶",checked:0},{goodsId:12,name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263.8",num:1,type:"180粒/瓶",checked:0}]},{shopName:"啊康达药房",shopImg:"../../static/shopImg.png",shopId:2,checked:0,list:[{goodsId:21,name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263.8",num:1,type:"180粒/瓶",checked:0},{goodsId:22,name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",price:"263.8",num:1,type:"180粒/瓶",checked:0}]}],loseEfficacyData:{loseEfficacyGoodsNum:1,list:[{name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",loseEfficacyTime:"2018.09.28"},{name:"Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....",imgUrl:"../../static/tuijian.png",loseEfficacyTime:"2018.09.28"}]},checkedData:[],showMaskCart:!1,showStateCart:!1}},onLoad:function(){this.getcheckedGoods(),console.log(this.moneyUnit,this.moneyAngle);var t=this.goodsInfoData.length;console.log(t),this.cartNull=0===t;for(var s=void 0,o=0;o<t;o++)1===this.goodsInfoData[o].checked&&(s=!1);this.checkedAll=!1!==s},onUnload:function(){},methods:{getcheckedGoods:function(){this.checkedGoodsmoney=0;for(var t=this.goodsInfoData.length,s=0;s<t;s++)if(0===this.goodsInfoData[s].checked)for(var o=0;o<this.goodsInfoData[s].list.length;o++)this.checkedGoodsmoney+=this.goodsInfoData[s].list[o].num*this.goodsInfoData[s].list[o].price;else for(var e=0;e<this.goodsInfoData[s].list.length;e++)0===this.goodsInfoData[s].list[e].checked&&(this.checkedGoodsmoney+=this.goodsInfoData[s].list[e].num*this.goodsInfoData[s].list[e].price);this.checkedGoodsmoney=this.checkedGoodsmoney.toFixed(2),this.checkedGoodsmoney=this.checkedGoodsmoney.toString();var a=this.checkedGoodsmoney.split(".");this.moneyUnit=a[0],this.moneyAngle=a[1],console.log(this.checkedGoodsmoney)},deteleModalTap:function(s){t.showModal({content:"确认清空失效商品吗？",confirmText:"删除",cancelText:"取消",confirmColor:"#4C94ED",cancelColor:"#4C94ED",success:function(t){t.confirm?console.log("点击删除"):t.cancel&&console.log("点击取消")}})},edit:function(){console.log("编辑"),this.payShow=!1},goodsNumAdd:function(t,s){console.log("数量的增加",t,s),s.num++,console.log("数量的增加",s.num),this.getcheckedGoods()},goodsNumReduce:function(t,s){console.log("数量的减少",t,s),s.num>1?s.num--:s.num,console.log("数量的减少",s.num),this.getcheckedGoods()},getCoupons:function(t){console.log("领取优惠卷");t.shopId;this.currentShopName=t.shopName,this.showMaskCoupons=!0,this.showCoupons=!0},getShopStatus:function(t){console.log("选中整个店铺的商品"),console.log(t);for(var s=t.shopId,o=this.goodsInfoData.length,e=0;e<o;e++)if(s===this.goodsInfoData[e].shopId)if(0===this.goodsInfoData[e].checked){this.goodsInfoData[e].checked=1;for(var a=0;a<this.goodsInfoData[e].list.length;a++)this.goodsInfoData[e].list[a].checked=1}else{this.goodsInfoData[e].checked=0;for(var i=0;i<this.goodsInfoData[e].list.length;i++)this.goodsInfoData[e].list[i].checked=0}for(var n=void 0,c=0;c<o;c++)1===this.goodsInfoData[c].checked&&(n=!1);this.checkedAll=!1!==n,this.getcheckedGoods()},getGoodsStatus:function(t,s){console.log("选中某个商品",t,s);for(var o=t.shopId,e=s.goodsId,a=this.goodsInfoData.length,i=void 0,n=0;n<a;n++)if(o===this.goodsInfoData[n].shopId){i=n;for(var c=0;c<this.goodsInfoData[n].list.length;c++)e===this.goodsInfoData[n].list[c].goodsId&&(0===this.goodsInfoData[n].list[c].checked?this.goodsInfoData[n].list[c].checked=1:this.goodsInfoData[n].list[c].checked=0)}for(var l=this.goodsInfoData[i].list.length,d=this.goodsInfoData[i].list,h=void 0,g=0;g<l;g++)1===d[g].checked&&(h=!1);if(!1===h)this.goodsInfoData[i].checked=1,this.checkedAll=!1;else{this.goodsInfoData[i].checked=0;for(var r=void 0,m=0;m<a;m++)1===this.goodsInfoData[m].checked&&(r=!1);this.checkedAll=!1!==r}this.getcheckedGoods()},getPay:function(){t.navigateTo({url:"/pages/healthyMall/settleAccount"})},deleteGoods:function(){console.log("立即删除"),this.showMaskCart=!0,this.showStateCart=!0},confirmDetele:function(){this.payShow=!0},getCheckedAll:function(){console.log("全选"),this.checkedGoodsmoney=0,!1===this.checkedAll?this.checkedAll=!0:this.checkedAll=!1;for(var t=this.goodsInfoData.length,s=0;s<t;s++){!1===this.checkedAll?this.goodsInfoData[s].checked=1:this.goodsInfoData[s].checked=0;for(var o=0;o<this.goodsInfoData[s].list.length;o++)!1===this.checkedAll?this.goodsInfoData[s].list[o].checked=1:(this.goodsInfoData[s].list[o].checked=0,this.checkedGoodsmoney+=this.goodsInfoData[s].list[o].num*this.goodsInfoData[s].list[o].price)}},hide:function(){this.showMaskCart=!1,this.showStateCart=!1},hideMaskCoupons:function(){this.showMaskCoupons=!1,this.showCoupons=!1},getShopCoupons:function(t){console.log("点击优惠券",t.get),!1===t.get&&(t.get=!0),console.log("点击优惠券",this.shopCouponsData)}}}}).call(s,o(2).default)},291:function(t,s,o){"use strict";var e={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return t.cartNull?o("view",{staticClass:"index cartNull"},[o("image",{attrs:{src:"../../static/cartNull.png",mode:""}}),o("text",[t._v("您还没有商品加入购物车哦!")])]):o("view",{staticClass:"index"},[o("view",{staticClass:"goodsList"},t._l(t.goodsInfoData,function(s,e){return o("view",{key:e,staticClass:"goodsListItem"},[o("view",{staticClass:"goodsListItemHeader"},[o("view",{staticClass:"goodsListItemHeaderLeft"},[o("label",{staticClass:"radio"},[o("radio",{attrs:{color:"#87BBF8",value:s.shopId,checked:0===s.checked,eventid:"2QM-0-"+e},on:{tap:function(o){t.getShopStatus(s)}}})],1),o("image",{attrs:{src:s.shopImg,mode:""}}),o("text",[t._v(t._s(s.shopName))])],1),o("text",{staticClass:"coupons",attrs:{eventid:"t8k-1-"+e},on:{tap:function(o){t.getCoupons(s)}}},[t._v("领劵")])]),t._l(s.list,function(a,i){return o("view",{key:i,staticClass:"goodsInfo"},[o("label",{staticClass:"radio"},[o("radio",{attrs:{color:"#87BBF8",value:a.goodsId,checked:0===a.checked,eventid:"HDu-2-"+e+"-"+i},on:{tap:function(o){t.getGoodsStatus(s,a)}}})],1),o("image",{attrs:{src:a.imgUrl,mode:""}}),o("view",{staticClass:"goodsInfoRight"},[o("text",{staticClass:"goodsName"},[t._v(t._s(a.name))]),o("text",{staticClass:"goodsType"},[t._v("类型: "+t._s(a.type))]),o("view",{staticClass:"goodsInfoBottom"},[o("text",{staticClass:"goodsInfoBottomPrice"},[t._v("￥"+t._s(a.price))])])]),o("view",{staticClass:"goodsNum"},[o("image",{staticClass:"goodsNumAdd",attrs:{src:"../../static/cartTop.png",mode:"",eventid:"2gf-3-"+e+"-"+i},on:{tap:function(o){t.goodsNumAdd(s,a)}}}),o("text",{staticClass:"goodsNumText"},[t._v(t._s(a.num))]),o("image",{staticClass:"goodsNumReduce",attrs:{src:"../../static/cartDown.png",mode:"",eventid:"mDb-4-"+e+"-"+i},on:{tap:function(o){t.goodsNumReduce(s,a)}}})])],1)})],2)})),o("view",{staticClass:"loseEfficacyGoods"},[o("view",{staticClass:"loseEfficacyTitle"},[o("text",{staticClass:"title"},[t._v("失效宝贝"+t._s(t.loseEfficacyData.loseEfficacyGoodsNum)+"件")]),o("text",{staticClass:"deteleBtn",attrs:{eventid:"GpA-5"},on:{tap:t.deteleModalTap}},[t._v("删除失效商品！")])]),t._l(t.loseEfficacyData.list,function(s,e){return o("view",{key:e,staticClass:"goodsInfo"},[o("image",{attrs:{src:s.imgUrl,mode:""}}),o("view",{staticClass:"goodsInfoRight"},[o("text",{staticClass:"goodsName"},[t._v(t._s(s.name))]),o("text",{staticClass:"loseEfficacyInfo"},[t._v("商品已不能购买，请重新添加 ")]),o("view",{staticClass:"goodsInfoBottom"},[o("text",{staticClass:"loseEfficacyTime"},[t._v("失效日期: "+t._s(s.loseEfficacyTime))])])])])})],2),o("view",{staticClass:"operation"},[t.payShow?o("view",{staticClass:"operationPay"},[o("view",{staticClass:"operationPayLeft"},[o("label",{staticClass:"radio"},[o("radio",{attrs:{color:"#87BBF8",value:"checkedAll",checked:t.checkedAll,eventid:"0D2-6"},on:{tap:t.getCheckedAll}}),t._v("全选\n            ")],1),o("view",{staticClass:"goodsDetails"},[o("text",{staticClass:"goodsDetailsTop"},[t._v("一共"+t._s(t.checkedGoodsNum)+"件商品")]),o("view",{staticClass:"goodsDetailsBottom"},[o("text",{staticClass:"moneyTitle"},[t._v("总金额")]),o("text",{staticClass:"moneySmall"},[t._v("￥")]),o("text",{staticClass:"moneyBig"},[t._v(t._s(t.moneyUnit)+".")]),o("text",{staticClass:"moneySmall"},[t._v(t._s(t.moneyAngle))])])])],1),o("view",{},[o("text",{staticClass:"editBtn",attrs:{eventid:"LW8-7"},on:{tap:t.edit}},[t._v("编辑")]),o("text",{staticClass:"payBtn",attrs:{eventid:"dH5-8"},on:{tap:t.getPay}},[t._v("马上支付")])])]):o("view",{staticClass:"operationDetele"},[o("view",{staticClass:"operationPayLeft"},[o("label",{staticClass:"radio"},[o("radio",{attrs:{color:"#87BBF8",value:"checkedAll",checked:t.checkedAll,eventid:"tTU-9"},on:{tap:t.getCheckedAll}}),t._v("全选 \n       \t  ")],1)],1),o("view",{staticClass:"operationDeteleRight"},[o("view",{staticClass:"goodsDetails"},[o("text",{staticClass:"goodsDetailsTop"},[t._v("一共"+t._s(t.checkedGoodsNum)+"件商品")]),o("view",{staticClass:"goodsDetailsBottom"},[o("text",{staticClass:"moneyTitle"},[t._v("总金额")]),o("text",{staticClass:"moneySmall"},[t._v("￥")]),o("text",{staticClass:"moneyBig"},[t._v(t._s(t.moneyUnit))]),o("text",{staticClass:"moneySmall"},[t._v("."+t._s(t.moneyAngle))])])]),o("text",{staticClass:"payBtn",attrs:{eventid:"Sml-10"},on:{tap:t.deleteGoods}},[t._v("立即删除")])])])]),o("view",{directives:[{name:"show",rawName:"v-show",value:t.showMaskCart,expression:"showMaskCart"}],staticClass:"mask",attrs:{eventid:"KoV-11"},on:{click:t.hide}}),o("view",{directives:[{name:"show",rawName:"v-show",value:t.showStateCart,expression:"showStateCart"}],staticClass:"popup popup-middle"},[o("view",{staticClass:"popupView"},[o("image",{attrs:{src:"../../static/deleteImg.png",mode:""}}),o("image",{attrs:{src:"../../static/detelepop.png",mode:"",eventid:"7MB-12"},on:{tap:t.confirmDetele}})])]),o("view",{directives:[{name:"show",rawName:"v-show",value:t.showMaskCoupons,expression:"showMaskCoupons"}],staticClass:"mask",attrs:{eventid:"S30-13"},on:{tap:t.hideMaskCoupons}}),o("view",{directives:[{name:"show",rawName:"v-show",value:t.showCoupons,expression:"showCoupons"}],staticClass:"popup popup-bottom"},[o("text",{staticClass:"popupShopName"},[t._v(t._s(t.currentShopName))]),o("view",{staticClass:"shopCouponsList"},t._l(t.shopCouponsData,function(s,e){return o("view",{key:e,staticClass:"shopCouponsListItem"},[o("view",{staticClass:"shopCouponsListItemLeft"},[o("view",{staticClass:"money"},[o("text",{staticClass:"couponsMoney"},[t._v(t._s(s.money))]),o("text",{staticClass:"couponsMoneyIcon"},[t._v("元")])]),o("text",{staticClass:"meetMoney"},[t._v("订单满"+t._s(s.meetMoney)+"元使用")]),o("text",{staticClass:"couponsTime"},[t._v("使用期限"+t._s(s.startTime)+"-"+t._s(s.endTime))])]),o("text",{class:!1===s.get?"active shopCouponsListItemRight":"shopCouponsListItemRight",attrs:{eventid:"ouy-14-"+e},on:{tap:function(o){t.getShopCoupons(s)}}},[t._v(t._s(!1===s.get?"领取":"已领取"))])])})),o("text",{directives:[{name:"show",rawName:"v-show",value:t.showMaskCoupons,expression:"showMaskCoupons"}],staticClass:"hideBtn",attrs:{eventid:"jSF-15"},on:{tap:t.hideMaskCoupons}},[t._v("关闭")])])])},staticRenderFns:[]};s.a=e}},[287]);
});
require('pages/healthyMall/shoppingCart.js');

