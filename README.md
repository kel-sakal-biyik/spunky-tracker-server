# spunky-tracker-server

Where Queries are for reading from APIs, Mutations are for changing them. 

Let's say we have a small database that stores the play counts of our sound files. Our database in this case will
be a simple JavaScript object.

Create our database in `resolvers.js`

```
const playCount = {
    noBarking: 0,
    goToBed: 0
};
```

Now we need to create Mutation resolver to increase counts:

```
module.exports = {
    Query: {
        microphone: () => {
            return {
               decibel: casual.integer(from = 50, to = 100)
            }
        },
        location: () => {
            return {
                latitude: casual.latitude,
                longitude: casual.longitude
            }
        }
    },
    Mutation: {
        countPlay: (_, { playType }) => {
            playCount[playType]++;

            return {
                value: playCount[playType]
            };
        }
    }
};
```

If you noticed there is a `playType` argument available for this mutation. We need to pass the play type to
modify our database accordingly. Now, we will add Mutation type in our schema to use this resolver
  
```
# allowed mutation
type Mutation {
    countPlay (
      playType: String!
    ): Count
  }
```

Here, as you can see we declare the required variable and its type to execute this mutation. It 
requires(exclamation mark after the type states that) a playType variable which is a string, and returns Count
type which has a value attribute. Simple?