// Automatically generated with Reach 0.1.4
/* eslint-disable */
export const _version = '0.1.4';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v41 = await ctc.creationTime();
  const v42 = await ctc.creationSecs();
  
  const v127 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v130 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:39:44:application',
    fs: ['at ./index.rsh:37:15:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v131 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:60:31:application',
    fs: ['at ./index.rsh:40:58:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:37:15:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v132 = stdlib.digest(ctc1, [v131, v130]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v127, v132],
    evt_cnt: 2,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [v127, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v135, v136] = txn1.data;
      const v137 = txn1.time;
      const v138 = txn1.secs;
      const v134 = txn1.from;
      
      sim_r.txns.push({
        amt: v135,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const [v135, v136] = txn1.data;
  const v137 = txn1.time;
  const v138 = txn1.secs;
  const v134 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v145] = txn2.data;
  const v146 = txn2.time;
  const v147 = txn2.secs;
  const v144 = txn2.from;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v134, v135, v136, v144, v145, v131, v130],
    evt_cnt: 2,
    funcNum: 3,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v153, v154] = txn3.data;
      const v155 = txn3.time;
      const v156 = txn3.secs;
      const v152 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v158 = stdlib.addressEq(v134, v152);
      stdlib.assert(v158, {
        at: './index.rsh:60:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v159 = stdlib.digest(ctc1, [v153, v154]);
      const v160 = stdlib.digestEq(v136, v159);
      stdlib.assert(v160, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:61:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v161 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, 4), v145);
      const v162 = stdlib.add(v154, v161);
      const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 3));
      const v164 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v165 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v166 = [stdlib.checkedBigNumberify('./index.rsh:66:38:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:66:46:decimal', stdlib.UInt_max, 2)];
      const v167 = [stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:67:46:decimal', stdlib.UInt_max, 1)];
      const v168 = v165 ? v166 : v167;
      const v169 = [stdlib.checkedBigNumberify('./index.rsh:65:38:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:46:decimal', stdlib.UInt_max, 0)];
      const v170 = v164 ? v169 : v168;
      const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 0)];
      const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 1)];
      const v173 = stdlib.mul(v171, v135);
      sim_r.txns.push({
        amt: v173,
        kind: 'from',
        to: v134,
        tok: undefined
        });
      const v178 = stdlib.mul(v172, v135);
      sim_r.txns.push({
        amt: v178,
        kind: 'from',
        to: v144,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [v153, v154] = txn3.data;
  const v155 = txn3.time;
  const v156 = txn3.secs;
  const v152 = txn3.from;
  ;
  const v158 = stdlib.addressEq(v134, v152);
  stdlib.assert(v158, {
    at: './index.rsh:60:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v159 = stdlib.digest(ctc1, [v153, v154]);
  const v160 = stdlib.digestEq(v136, v159);
  stdlib.assert(v160, {
    at: 'reach standard library:65:17:application',
    fs: ['at ./index.rsh:61:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v161 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, 4), v145);
  const v162 = stdlib.add(v154, v161);
  const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 3));
  const v164 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v165 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v166 = [stdlib.checkedBigNumberify('./index.rsh:66:38:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:66:46:decimal', stdlib.UInt_max, 2)];
  const v167 = [stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:67:46:decimal', stdlib.UInt_max, 1)];
  const v168 = v165 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('./index.rsh:65:38:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:46:decimal', stdlib.UInt_max, 0)];
  const v170 = v164 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 0)];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 1)];
  const v173 = stdlib.mul(v171, v135);
  ;
  const v178 = stdlib.mul(v172, v135);
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v163), {
    at: './index.rsh:73:28:application',
    fs: ['at ./index.rsh:72:9:application call to [unknown function] (defined at: ./index.rsh:72:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  };
export async function Bob(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const v41 = await ctc.creationTime();
  const v42 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v135, v136] = txn1.data;
  const v137 = txn1.time;
  const v138 = txn1.secs;
  const v134 = txn1.from;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v135), {
    at: './index.rsh:49:29:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v143 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:50:52:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v134, v135, v136, v143],
    evt_cnt: 1,
    funcNum: 2,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v135, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v145] = txn2.data;
      const v146 = txn2.time;
      const v147 = txn2.secs;
      const v144 = txn2.from;
      
      sim_r.txns.push({
        amt: v135,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const [v145] = txn2.data;
  const v146 = txn2.time;
  const v147 = txn2.secs;
  const v144 = txn2.from;
  ;
  const txn3 = await (ctc.recv({
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v153, v154] = txn3.data;
  const v155 = txn3.time;
  const v156 = txn3.secs;
  const v152 = txn3.from;
  ;
  const v158 = stdlib.addressEq(v134, v152);
  stdlib.assert(v158, {
    at: './index.rsh:60:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v159 = stdlib.digest(ctc3, [v153, v154]);
  const v160 = stdlib.digestEq(v136, v159);
  stdlib.assert(v160, {
    at: 'reach standard library:65:17:application',
    fs: ['at ./index.rsh:61:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v161 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, 4), v145);
  const v162 = stdlib.add(v154, v161);
  const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 3));
  const v164 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v165 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v166 = [stdlib.checkedBigNumberify('./index.rsh:66:38:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:66:46:decimal', stdlib.UInt_max, 2)];
  const v167 = [stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:67:46:decimal', stdlib.UInt_max, 1)];
  const v168 = v165 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('./index.rsh:65:38:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:46:decimal', stdlib.UInt_max, 0)];
  const v170 = v164 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 0)];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 1)];
  const v173 = stdlib.mul(v171, v135);
  ;
  const v178 = stdlib.mul(v172, v135);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v163), {
    at: './index.rsh:73:28:application',
    fs: ['at ./index.rsh:72:9:application call to [unknown function] (defined at: ./index.rsh:72:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 1
substring 32 64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 0
==
assert
pop
txna ApplicationArgs 2
dup
len
int 40
==
assert
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:43:11:dot"
// "[]"
load 255
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l1:
pop
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
load 255
itob
concat
load 254
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 2
dup
int 2
==
bz l2
pop
txna ApplicationArgs 1
dup
len
int 72
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:52:9:dot"
// "[]"
load 254
dup
bz l3
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l3:
pop
// compute state in HM_Set 2
byte base64(AAAAAAAAAAI=)
load 255
concat
load 254
itob
concat
load 253
concat
txn Sender
concat
load 252
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l2:
// Handler 3
dup
int 3
==
bz l4
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 250
dup
substring 8 16
btoi
store 249
pop
// compute state in HM_Check 2
byte base64(AAAAAAAAAAI=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:60:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:60:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:61:20:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 253
load 250
itob
load 249
itob
concat
sha256
==
assert
load 249
int 4
load 251
-
+
int 3
%
store 248
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 248
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 248
int 2
==
select
dup
store 247
substring 0 8
btoi
load 254
*
dup
bz l5
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l5:
pop
load 247
substring 8 16
btoi
load 254
*
dup
bz l6
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l6:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l7:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l4:
int 0
assert
updateState:
byte base64()
load 1
load 2
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 2
// compute state in HM_Set 0
int 8
bzero
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v134",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v134",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v144",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v134",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v134",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v144",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805180820182524381524260209182015281516000818301819052818401819052835180830385018152606090920190935280519101209055610874806100766000396000f3fe6080604052600436106100385760003560e01c80631ede23c9146100445780635f096a4f14610059578063aa8594ca1461006c57600080fd5b3661003f57005b600080fd5b610057610052366004610698565b61007f565b005b610057610067366004610686565b6102bd565b61005761007a36600461066e565b610429565b6040516100bb906100979060029084906020016107a4565b6040516020818303038152906040528051906020012060001c60005414600e610542565b600080556100c761056b565b7f40330e17c6319d80d0a91b19a8c955a9c6d82c9a8ad93fe49326a7c38d708da2826040516100f69190610768565b60405180910390a161010a3415600b610542565b61012c3361011b6020850185610631565b6001600160a01b031614600c610542565b6040805160a084013560208083019190915260c08501358284015282518083038401815260609092018352815191012061016b9184013514600d610542565b600361017c608084013560046107ef565b61018a9060c08501356107b8565b6101949190610806565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146101ee578051156101e45780604001516101f4565b80602001516101f4565b80606001515b60808201526102066020830183610631565b6001600160a01b03166108fc836000016020013583608001516000015161022d91906107d0565b6040518115909202916000818181858888f19350505050158015610255573d6000803e3d6000fd5b506102666080830160608401610631565b6001600160a01b03166108fc836000016020013583608001516020015161028d91906107d0565b6040518115909202916000818181858888f193505050501580156102b5573d6000803e3d6000fd5b506000805533ff5b6040516102f9906102d5906001908490602001610790565b6040516020818303038152906040528051906020012060001c60005414600a610542565b600080556040517f06e87bf9efe53efdd59a5fba40086be1937696c68df0dff13a09b0992abc7ad49061032d90839061074c565b60405180910390a1610346346020830135146009610542565b61038a6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6103976020830183610631565b6001600160a01b039081168252602083810135818401908152604080860135818601908152336060808801918252808901356080808a01918252855160029881019890985289518916958801959095529451908601529051918401919091525190921660a0820152905160c082015260e0015b60408051601f1981840301815291905280516020909101206000555050565b61047b600061043b6020840184610653565b6040516020016104579291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c600054146008610542565b600080556040517f3c669845d6bbc6fc367c9fa11ea5c8ec9bfd3d70eae7b34375b93f114f740365906104af90839061071b565b60405180910390a16104c8346020830135146007610542565b6104f5604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152604080850135818501908152815160019481019490945284516001600160a01b0316918401919091529051606083015251608082015260a00161040a565b816105675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a001604052806000815260200161059a604051806040016040528060008152602001600081525090565b81526020016105bc604051806040016040528060008152602001600081525090565b81526020016105de604051806040016040528060008152602001600081525090565b8152602001610600604051806040016040528060008152602001600081525090565b905290565b80356001600160a01b038116811461061c57600080fd5b919050565b8035801515811461061c57600080fd5b60006020828403121561064357600080fd5b61064c82610605565b9392505050565b60006020828403121561066557600080fd5b61064c82610621565b60006060828403121561068057600080fd5b50919050565b60006080828403121561068057600080fd5b600060e0828403121561068057600080fd5b6001600160a01b036106bb82610605565b16825260208181013590830152604090810135910152565b6001600160a01b03806106e583610605565b16835260208201356020840152604082013560408401528061070960608401610605565b16606084015250608090810135910152565b6060810161072883610621565b15158252610746602083016020850180358252602090810135910152565b92915050565b6080810161075a82846106aa565b606092830135919092015290565b60e0810161077682846106d3565b61074660a0830160a0850180358252602090810135910152565b8281526080810161064c60208301846106aa565b82815260c0810161064c60208301846106d3565b600082198211156107cb576107cb610828565b500190565b60008160001904831182151516156107ea576107ea610828565b500290565b60008282101561080157610801610828565b500390565b60008261082357634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d5836ed5664cbceba35e00596cdd691b297aa3fede1366f699876fab1c95dc9f64736f6c63430008070033`,
  BytecodeLen: 2282,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

