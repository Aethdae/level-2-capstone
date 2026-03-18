export async function getKey() {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}",
    };
    const res = await fetch(
      "https://proxy-key-47ga.onrender.com/get-key",
      options,
    );
    if (!res.ok) {
      return;
    }
    const { key } = await res.json();
    return key;
  } catch (error) {
    console.error(error);
  }
}
