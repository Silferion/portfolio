document.querySelector(".php-email-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // stop normal form submission

  const form = e.target;
  const formData = {
    name: form.querySelector("[name='name']").value,
    email: form.querySelector("[name='email']").value,
    subject: form.querySelector("[name='subject']").value,
    message: form.querySelector("[name='message']").value
  };

  // Show loading message
  form.querySelector(".loading").style.display = "block";
  form.querySelector(".error-message").style.display = "none";
  form.querySelector(".sent-message").style.display = "none";

  try {
    const response = await fetch("YOUR_WEB_APP_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json(); // if your script returns JSON
    console.log("Response:", result);

    if (result.status === "success") {
      form.querySelector(".sent-message").style.display = "block";
      form.reset();
    } else {
      throw new Error(result.message || "Something went wrong");
    }
  } catch (error) {
    form.querySelector(".error-message").innerText = error;
    form.querySelector(".error-message").style.display = "block";
  } finally {
    form.querySelector(".loading").style.display = "none";
  }
});