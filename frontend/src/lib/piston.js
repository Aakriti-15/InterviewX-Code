const JUDGE0_API = "https://judge0-ce.p.rapidapi.com";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
};

export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_IDS[language];

    if (!languageId) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language_id: languageId,
          source_code: code,
        }),
      }
    );

    const data = await response.json();

    if (data.compile_output) {
      return {
        success: false,
        error: data.compile_output,
      };
    }

    if (data.stderr) {
      return {
        success: false,
        error: data.stderr,
      };
    }

    return {
      success: true,
      output: data.stdout || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}