import threading
import time

# Define a function that will be executed in each thread
def print_numbers():
    for i in range(5):
        print(f"Thread {threading.current_thread().name}: {i}")
        time.sleep(1)  # Simulate some work

# Create multiple threads
thread1 = threading.Thread(target=print_numbers, name="Thread 1")
thread2 = threading.Thread(target=print_numbers, name="Thread 2")

# Start the threads
thread1.start()
thread2.start()
for i in range(5):
        print("Main")
# Wait for the threads to finish
thread1.join()
thread2.join()

print("All threads have finished.")
