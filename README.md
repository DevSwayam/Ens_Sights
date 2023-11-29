
# ENS Sights Project

Welcome to ENS Sights, a project dedicated to providing detailed insights into Ethereum Name Service (ENS) holdings using the ENS subgraph explorer. Our goal is to go beyond the basic functionalities offered by the main ENS website and deliver comprehensive information, including subdomains, expiration dates, and last prices.

## Features

- **Holder Information:** Discover who holds a particular ENS.
- **Subdomain Details:** Explore subdomains associated with the ENS.
- **Expiration Dates:** Find out when a specific ENS is set to expire.
- **Last Prices:** Obtain information about the last recorded prices.

## Query URL

To interact with the ENS Sights project, you can use the following query URL:

```
https://thegraph.com/hosted-service/subgraph/ensdomains/ens
```

## Sample Queries

Here are some sample queries you can use to retrieve data from the ENS Sights subgraph:

1. **Get the latest transfers for ENS domains:**
   ```graphql
   {
     transfers(first: 5) {
       domain {
         name
         resolver {
           address
         }
       }
     }
   }
   ```

Feel free to modify and expand these queries based on your specific requirements.

## Getting Started

Follow these steps to get started with ENS Sights:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ens-sights.git
   cd ens-sights
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Project:**
   ```bash
   npm start
   ```

Visit `http://localhost:3000` in your web browser to access ENS Sights.

## Contact

For any inquiries or feedback, feel free to reach out to us at [swayamkarle2@gmail.com].

Happy exploring with ENS Sights!
