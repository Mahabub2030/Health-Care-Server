export const extractJsonFromMessage = (message: any) => {
  try {
    const content =
      typeof message === "string" ? message : message?.content || "";
    let jsonText = content.trim();

    // 1️⃣ Extract from ```json ... ```
    const jsonBlockMatch = jsonText.match(/```json([\s\S]*?)```/);
    if (jsonBlockMatch) {
      jsonText = jsonBlockMatch[1].trim();
    }

    // 2️⃣ If not a block, find any JSON-like substring
    if (!jsonText.startsWith("{") && !jsonText.startsWith("[")) {
      const match = jsonText.match(/(\[[\s\S]*\]|\{[\s\S]*\})/);
      if (match) {
        jsonText = match[0];
      }
    }

    // 3️⃣ Clean common issues
    jsonText = jsonText
      .replace(/(\w+):/g, '"$1":') // add quotes around keys
      .replace(/'/g, '"') // convert single → double quotes
      .replace(/,\s*([\]}])/g, "$1"); // remove trailing commas

    // 4️⃣ Try parsing
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("❌ Error parsing AI response:", error);
    console.error("🔍 Raw content:", message?.content || message);
    return [];
  }
};
