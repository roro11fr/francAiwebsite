# Tools

Deterministic Python scripts that do the actual work: API calls, data transformations, file operations, database queries.

## Conventions

- One script per task. Name it descriptively: `scrape_single_site.py`, `export_to_sheets.py`.
- Accept all inputs via CLI args (use `argparse`).
- Print results to stdout. Write files to `.tmp/`.
- Exit with a non-zero code on failure so the agent knows something broke.
- Read credentials from `.env` via `python-dotenv`. Never hardcode secrets.

## Example skeleton

```python
import argparse
import os
from dotenv import load_dotenv

load_dotenv()

def main():
    parser = argparse.ArgumentParser(description="What this script does")
    parser.add_argument("--input", required=True, help="Input value")
    args = parser.parse_args()

    api_key = os.getenv("SOME_API_KEY")
    if not api_key:
        raise SystemExit("SOME_API_KEY not set in .env")

    # Do the work here
    result = {}
    print(result)

if __name__ == "__main__":
    main()
```

## Dependencies

Install per-script deps into the project venv. Keep a `requirements.txt` at the root if packages accumulate.
