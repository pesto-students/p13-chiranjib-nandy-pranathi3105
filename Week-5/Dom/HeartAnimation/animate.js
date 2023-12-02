let imgX = 0; // Initial heart position
    let imgY = 0;
    const speed = 1; // Pixels to move per step
    let centerX = 0; // Target coordinates
    let centerY = 0;
    let timerId = null;

    function startAnimation() {
      if (timerId !== null) {
        clearInterval(timerId); // Stop the timer if it's running
      }

      // Determine where the user clicked
      document.addEventListener('click', (event) => {
        centerX = event.clientX;
        centerY = event.clientY;

        // Start the timer to move the image every 10 milliseconds
        timerId = setInterval(() => moveImage(centerX, centerY), 10);
      });
    }

    function moveImage(targetX, targetY) {
      if (imgX === targetX && imgY === targetY) {
        clearInterval(timerId); // Stop the timer if the heart has reached the target
        timerId = null;
        return;
      }

      // Calculate the direction to move the heart
      const deltaX = targetX - imgX;
      const deltaY = targetY - imgY;

      // Calculate the distance to the target
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Calculate the movement for this step
      const moveX = (deltaX / distance) * speed;
      const moveY = (deltaY / distance) * speed;

      // Update the heart's position
      imgX += moveX;
      imgY += moveY;

      // Move the heart to the new position
      const heart = document.getElementById('heart');
      heart.style.left = imgX + 'px';
      heart.style.top = imgY + 'px';
    }

    startAnimation();