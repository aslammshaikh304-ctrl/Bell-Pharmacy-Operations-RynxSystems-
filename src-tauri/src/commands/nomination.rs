use std::path::PathBuf;
use std::process::Command;
use tauri::command;

#[command]
pub async fn start_nomination_checker() -> Result<String, String> {
    let manifest = PathBuf::from(env!("CARGO_MANIFEST_DIR"));

println!("Manifest: {:?}", manifest);

let automation_dir = manifest.join("../../../assets/automation");

println!("Automation: {:?}", automation_dir);
println!("Exists: {}", automation_dir.exists());

let python = automation_dir
    .join(".venv")
    .join("Scripts")
    .join("python.exe");

println!("Python: {:?}", python);
println!("Python Exists: {}", python.exists());

let src = automation_dir.join("src");

println!("Src: {:?}", src);
println!("Src Exists: {}", src.exists());

    let python = automation_dir
        .join(".venv")
        .join("Scripts")
        .join("python.exe");

    let src = automation_dir.join("src");

    println!("Automation : {:?}", automation_dir);
    println!("Python     : {:?}", python);
    println!("Python OK  : {}", python.exists());
    println!("SRC        : {:?}", src);
    println!("SRC OK     : {}", src.exists());

    let output = Command::new(&python)
        .env("PYTHONPATH", &src)
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