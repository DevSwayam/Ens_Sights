# Bridge Views

## Safe Bridge GraphQL Queries for Calculating Time taken from one chain to another chain transactions

### Across V2:

#### 1) From Origin Chain (Boba) to Destination Chain (Arbitrum)

**Sample Queries:**

1. **Subgraph Query from Across V2 Boba:**
   - Link: [across-v2-boba](https://thegraph.com/hosted-service/subgraph/messari/across-v2-boba)

    ```graphql
    {
      bridgeTransfers(where: {toChainID: "42161"}) {
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
      bridgeTransfers(where: {fromChainID: "288", transferTo: "0xf6c0a0e00ea37610a044690cdf071d80d15678b1"}) {
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
      bridgeTransfers(where: {toChainID: "288"}) {
        fromChainID
        toChainID
        timestamp
        transferFrom
        transferTo
      }
    }
    ```

    You will receive some addresses from the response fields (TransferFrom, TransferTo). Copy and paste those addresses into the following query input.

2. **Subgraph Query from Across V2 Boba:**
    - Link: [across-v2-boba](https://thegraph.com/hosted-service/subgraph/messari/across-v2-boba)

    ```graphql
    query MyQuery {
      bridgeTransfers(where: {fromChainID: "42161", transferTo: "0x1a74d0285a569120aa2836cb2b0fa58038adb800"}) {
        timestamp
        toChainID
        fromChainID
        transferTo
        transferFrom
      }
    }
    ```

    You will receive timestamps from both queries. Calculate the difference, and that will be the bridge time.
