document.querySelectorAll('.dropdown-heading').forEach(function (heading) {
    heading.addEventListener('click', function () {
        let content = heading.nextElementSibling;
        if (content.style.display === "table") {
            content.style.display = "none";
        } else {
            content.style.display = "table";
        }
    });
});

// Initially hide all tables
document.querySelectorAll('.dropdown-content').forEach(function (content) {
    content.style.display = "none";
});

document.querySelectorAll('.dropdown-heading').forEach(function (heading) {
    heading.addEventListener('click', function () {
        // Collapse all open dropdowns first
        document.querySelectorAll('.dropdown-content').forEach(function (content) {
            content.style.display = 'none';
        });

        // Expand the selected dropdown if it was not open
        let content = heading.nextElementSibling;
        if (content.style.display === "table") {
            content.style.display = "none";
        } else {
            content.style.display = "table";
        }
    });
});

document.querySelectorAll('.dropdown-heading').forEach(function (heading) {
    heading.addEventListener('click', function () {
        // Collapse all open dropdowns first
        document.querySelectorAll('.dropdown-content').forEach(function (content) {
            content.style.maxHeight = null; // Collapse content by removing maxHeight
        });

        // Expand the selected dropdown if it was not open
        let content = heading.nextElementSibling;
        if (content.style.maxHeight) {
            // If already open, collapse it
            content.style.maxHeight = null;
        } else {
            // Open the selected dropdown
            content.style.maxHeight = content.scrollHeight + "px";

            // Scroll to the heading of the selected dropdown
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});