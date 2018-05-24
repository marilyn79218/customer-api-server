This is a very basic sample of how to *create*, *update*, *delete* and *get data* form **mongoDB** with **Node.js**

## Routing
| Route  | HTTP Verb | Description |
| :------------ |:---------------:| -----:|
| /customer | `POST` | Create a customer. |
| /customer/:customer_name | `DELETE` | Delete a customer. |
| /customer/:customer_name | `PUT` | Update a customer. |

### POST API data format
```js
[
  {
    "name": "p1",
    "address": "Taipei"
  }
]
```

## Development
```sh
yarn start
```

Then checking your customers page at `http://localhost:3000/customer`

>Note  You need to install a mongo service either in your machine 
      or connect to the server elsewhere, be sure to change the 
      **connection string** before you go.

> For how to install mongoDB, please refer to [this article][df1] and [this][df2].

[df1]: <https://ithelp.ithome.com.tw/articles/10186483>
[df2]: <https://github.com/darkochen/nodejs>