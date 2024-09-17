import { Client } from 'pg'
const DATABASE_URL="URL"
//postgresql://ak27styles:cWHLGr21sYFZ@ep-tight-cell-a51g131m.us-east-2.aws.neon.tech/neondb?sslmode=require
const client = new Client({
  connectionString: DATABASE_URL
})
async function getUser(email: string) {

    try {
        await client.connect(); // Ensure client connection is established
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);
        
        if (result.rows.length > 0) {
          console.log('User found:', result.rows[0]); // Output user data
          return result.rows[0]; // Return the user data
        } else {
          console.log('No user found with the given email.');
          return null; // Return null if no user was found
        }
      } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
      } finally {
        await client.end(); // Close the client connection
      }
    }
    
    // Example usage
    getUser('some2777@example.com').catch(console.error);
    
