function toggleHam()
{
    var x = document.getElementById("toggleMenu");
    var button = document.getElementById("hamButton");

    if (x.style.display === "block")
    {
      x.style.display = "none";
      button.innerHTML = "menu";
    }
    else
    {
      x.style.display = "block";
      button.innerHTML = "close";
    }
  }