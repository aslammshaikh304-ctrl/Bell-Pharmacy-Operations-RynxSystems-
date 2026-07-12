use std::path::PathBuf;
use std::process::Command;
use tauri::command;

#[command]
pub async fn start_nomination_checker() -> Result<String, String> {
    let automation_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()      // apps/desktop
        .parent()
        .unwrap()      // apps
        .parent()
        .unwrap()      // BellPharmacyOperations
        .join("automation");

    println!("Automation Dir: {:?}", automation_dir);

    let output = Command::new(automation_dir.join(".venv").join("Scripts").join("python.exe"))
    .env("PYTHONPATH", automation_dir.join("src"))
    .args([
        "-m",
        "rynx_pharmacy.workflows.check_nominations",
    ])
    .current_dir(&automation_dir)
        .output()
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(String::from_utf8_lossy(&output.stdout).to_string())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}