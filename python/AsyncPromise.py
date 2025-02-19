import asyncio
from typing import Callable, Any

class AsyncPromise:
    def __init__(self, coro):
        self._coro = coro
        self._future = asyncio.ensure_future(coro)
        self._future.add_done_callback(self._handle_result)
        self._on_fulfilled = None
        self._on_rejected = None

    def _handle_result(self, future: asyncio.Future):
        try:
            result = future.result()
            if self._on_fulfilled:
                self._on_fulfilled(result)
        except Exception as e:
            if self._on_rejected:
                self._on_rejected(e)

    def then(self, on_fulfilled: Callable[[Any], None]):
        self._on_fulfilled = on_fulfilled
        return self

    def catch(self, on_rejected: Callable[[Exception], None]):
        self._on_rejected = on_rejected
        return self


###########################################
###########################################
async def async_task():
    await asyncio.sleep(5)
    return "Task completed!"

async def failing_async_task():
    await asyncio.sleep(5)
    raise Exception("Sorry, no numbers below zero")
    return "Task completed!"

# Usage
AsyncPromise(async_task()).then(lambda result: print(f"✅ {result}")).catch(lambda error: print(f"❌ Error: {error}"))
AsyncPromise(failing_async_task()).then(lambda result: print(f"✅ {result}")).catch(lambda error: print(f"❌ Error: {error}"))

print("Main thread continues execution!")
asyncio.get_event_loop().run_forever()  # Keep event loop alive
