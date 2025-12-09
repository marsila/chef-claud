
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

//function AIGenerator() {

  // 2. Define the function that makes the API call
  export async function generateContent(ingredientsArr){

    const ingredientsString = ingredientsArr.join(", ");
    if (!GEMINI_API_KEY) {
      console.error("API Key not found. Check your .env file and REACT_APP_ or VITE_ prefix.");
      return;
    }
    
    // setLoading(true);
    // setError(null);
    // setResult(''); // Clear previous result

    try {
      // 3. Make the Request
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${SYSTEM_PROMPT} the ingredients list : ${ingredientsString}`,
      });

      // 4. Extract and Display the Fetched Data
      return(response.text);

    } catch (err) {
      console.error('API Error:', err);
      console.log('Failed to generate content. Please check your network and API key.');
    } 
    // finally {
    //   setLoading(false);
    // }
  };

  //return (
//     <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <h2>⚛️ Gemini AI Generator</h2>
      
      
      
//       {/* Button */}
//       <button onClick={generateContent} disabled={loading} style={{ padding: '10px 20px', cursor: loading ? 'not-allowed' : 'pointer' }}>
//         {loading ? 'Generating...' : 'Generate Content'}
//       </button>

//       {/* Output Area */}
//       {error && <p style={{ color: 'red', marginTop: '15px' }}>Error: {error}</p>}
      
//       {result && (
//         <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
//           <h3>Result:</h3>
//           <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{result}</p>
//         </div>
//       )}
//     </div>
//   //);
// }

// export default AIGenerator;
