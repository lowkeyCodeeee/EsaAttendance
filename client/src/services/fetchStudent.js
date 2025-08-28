
export async function fetchStudent() {
     const res = await fetch("http://localhost:1000/getstudents", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

    return res;
}

console.log(await fetchStudent().json())