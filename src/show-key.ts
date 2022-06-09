let { XXHash64 } = require('xxhash-addon');
let reverse = require("buffer-reverse");

let hash0 = new XXHash64(0);
let hash1 = new XXHash64(1);

function twox128(a: string, b: string): string {
  let aBuf = Buffer.from(a);
  let bBuf = Buffer.from(b);
  let hash: string = '0x';

  hash += reverse(hash0.hash(aBuf)).toString('hex');
  hash += reverse(hash1.hash(aBuf)).toString('hex');
  hash += reverse(hash0.hash(bBuf)).toString('hex');
  hash += reverse(hash1.hash(bBuf)).toString('hex');

  return hash;
}

console.log("code of System:");
console.log(twox128('System', 'System'));
console.log("code of RandomnessCollectiveFlip:")
console.log(twox128('RandomnessCollectiveFlip', 'RandomnessCollectiveFlip'));
console.log("code of Timestamp:");
console.log(twox128('Timestamp', 'Timestamp'));
console.log("code of Babe:");
console.log(twox128('Babe', 'Babe'));
console.log("code of Authorship:");
console.log(twox128('Authorship', 'Authorship'));
console.log("code of TransactionPayment:");
console.log(twox128('TransactionPayment', 'TransactionPayment'));
console.log("code of Session:");
console.log(twox128('Session', 'Session'));
console.log("code of Grandpa:");
console.log(twox128('Grandpa', 'Grandpa'));
console.log("code of ImOnline:");
console.log(twox128('ImOnline', 'ImOnline'));
console.log("code of Historical:");
console.log(twox128('Historical', 'Historical'));
console.log("code of Mmr:");
console.log(twox128('Mmr', 'Mmr'));
console.log("code of Beefy:");
console.log(twox128('Beefy', 'Beefy'));
console.log("code of MmrLeaf:");
console.log(twox128('MmrLeaf', 'MmrLeaf'));
console.log("code of Sudo:");
console.log(twox128('Sudo', 'Sudo'));
console.log("code of OctopusAppchain:")
console.log(twox128('OctopusAppchain', 'OctopusAppchain'));
console.log("code of Balances:")
console.log(twox128('Balances', 'Balances'));
console.log("code of OctopusLpos:")
console.log(twox128('OctopusLpos', 'OctopusLpos'));
console.log("code of OctopusUpwardMessages:")
console.log(twox128('OctopusUpwardMessages', 'OctopusUpwardMessages'));
console.log("code of OctopusAssets:")
console.log(twox128('OctopusAssets', 'OctopusAssets'));
console.log("code of OctopusUniques:")
console.log(twox128('OctopusUniques', 'OctopusUniques'));
