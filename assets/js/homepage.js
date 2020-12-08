var getUserRepos = function() {
    fetch("https://api.github.com/users/frankenshtien/repos");
};

getUserRepos();