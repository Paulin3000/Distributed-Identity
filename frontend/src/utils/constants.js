import DID from './DID.json'
import AdminAccounts from './AdminAccounts.json'
import IssuerRegistry from './IssuerRegistry.json'
import Credentials from './Credentials.json'
import SubAccumulator from './SubAccumulator.json'
import Accumulator from './Accumulator.json'

/*
export const contractAbi = DID.abi;
export const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
*/


export const DIDAbi = DID.abi;
export const DIDAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export const AdminAbi = AdminAccounts.abi;
export const AdminAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

export const IssuerAbi = IssuerRegistry.abi;
export const IssuerAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

export const CredentialsAbi = Credentials.abi;
export const CredentialsAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export const SubAccumulatorAbi = SubAccumulator.abi;
export const SubAccumulatorAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';

export const AccumulatorAbi = Accumulator.abi;
export const AccumulatorAddress = '0x0165878A594ca255338adfa4d48449f69242Eb8F';