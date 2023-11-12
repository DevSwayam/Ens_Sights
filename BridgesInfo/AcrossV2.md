# Bridge Views

## Safe Bridge GraphQL Queries for Calculating Time taken from one chain to another chain transactions.

### Across V2:

#### 1) From Origin Chain (Boba) to Destination Chain (Arbitrum)

**Sample Queries:**

1. **Subgraph Query from Across V2 Ethereum:**
   - Link: [across-v2-Ethereum](https://thegraph.com/hosted-service/subgraph/messari/across-v2-ethereum)

    ```graphql
    {
      bridgeTransfers(where: {toChainID: "42161"}, first: 1) {
        fromChainID
        toChainID
        timestamp
        transferFrom
        transferTo
      }
    }
    ```

    You will receive some addresses from the response fields (TransferFrom, TransferTo). Copy and paste those addresses into the following query input.

2. **Subgraph Query from Across V2 Arbitrum:**
   - Link: [across-v2-arbitrum](https://thegraph.com/hosted-service/subgraph/messari/across-v2-arbitrum)

    ```graphql
    query MyQuery {
      bridgeTransfers(
        where: {fromChainID: "1", transferTo: "0xfd7fef26529ad740a4b8193b2035fbb479b9ac5e"}
        first: 1
      ) {
        timestamp
        toChainID
        fromChainID
        transferTo
        transferFrom
      }
    }
    ```

    You will receive timestamps from both queries. Calculate the difference, and that will be the bridge time.


#### 2) From Origin Chain (Arbitrum) to Destination Chain (Boba)

**Sample Queries:**

1. **Subgraph Query from Across V2 Arbitrum:**
   - Link: [across-v2-arbitrum](https://thegraph.com/hosted-service/subgraph/messari/across-v2-arbitrum)

    ```graphql
    {
      bridgeTransfers(where: {toChainID: "1"}, first: 1) {
        fromChainID
        toChainID
        timestamp
        transferFrom
        transferTo
      }
    }
    ```

    You will receive some addresses from the response fields (TransferFrom, TransferTo). Copy and paste those addresses into the following query input.

2. **Subgraph Query from Across V2 Ethereum:**
    - Link: [across-v2-Ethereum](https://thegraph.com/hosted-service/subgraph/messari/across-v2-ethereum)

    ```graphql
    query MyQuery {
      bridgeTransfers(
        where: {fromChainID: "42161", transferTo: "0xfb104c4d1d1cfb1a13095c1765c8d4a0e0b8f35b"}
        first: 1
      ) {
        timestamp
        toChainID
        fromChainID
        transferTo
        transferFrom
      }
    }
    ```

    You will receive timestamps from both queries. Calculate the difference, and that will be the bridge time.
