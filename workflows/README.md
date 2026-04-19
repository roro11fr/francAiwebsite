# Workflows

Markdown SOPs that define how the agent completes specific tasks. Each file is a step-by-step briefing: what to do, which tools to run, what success looks like.

## When to create a workflow

Create a workflow when:
- A task has more than two steps
- A task is likely to recur
- A task involves external APIs or paid services where mistakes are costly

## Required sections

```markdown
# Workflow: <Task Name>

## Objective
One sentence: what this workflow accomplishes.

## Inputs
- `param_name` — description and where it comes from

## Steps
1. Do X using `tools/some_script.py --flag value`
2. Check output for Y
3. If Y is missing, do Z

## Tools Used
- `tools/some_script.py` — what it does in this context

## Outputs
- What is produced, where it ends up (`.tmp/`, Google Sheets, etc.)

## Edge Cases
- Rate limits: wait N seconds, retry up to 3 times
- Missing data: skip and log, don't abort
```

## Naming

Use lowercase with underscores: `scrape_website.md`, `export_leads.md`.
