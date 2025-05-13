document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { code: "CSE 110", name: "Introduction to Programming", credits: 2, type: "CSE", completed: true },
        { code: "WDD 130", name: "Web Fundamentals", credits: 2, type: "WDD", completed: true },
        { code: "CSE 111", name: "Programming with Functions", credits: 2, type: "CSE", completed: true },
        { code: "CSE 210", name: "Programming with Classes", credits: 2, type: "CSE", completed: false },
        { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, type: "WDD", completed: true },
        { code: "WDD 231", name: "Front-End Web Development I", credits: 2, type: "WDD", completed: false }
    ];

    const courseList = document.getElementById("courseList");
    const allBtn = document.getElementById("allBtn");
    const cseBtn = document.getElementById("cseBtn");
    const wddBtn = document.getElementById("wddBtn");

    const renderCourses = (filter) => {
        courseList.innerHTML = "";
        let filtered = courses;

        if (filter) {
            filtered = courses.filter(course => course.type === filter);
        }

        filtered.forEach(course => {
            const button = document.createElement("button");
            button.textContent = `${course.code}`;
            button.className = course.type.toLowerCase();
            if (course.completed) button.classList.add("completed");
            courseList.appendChild(button);
        });

        // Show total credits
        const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
        if (!document.getElementById("creditTotal")) {
            const creditDisplay = document.createElement("p");
            creditDisplay.id = "creditTotal";
            courseList.parentElement.appendChild(creditDisplay);
        }
        document.getElementById("creditTotal").textContent = `Total Credits: ${totalCredits}`;
    };

    allBtn.addEventListener("click", () => renderCourses());
    cseBtn.addEventListener("click", () => renderCourses("CSE"));
    wddBtn.addEventListener("click", () => renderCourses("WDD"));

    renderCourses(); // default load
});
