pipeline {
    agent any

    environment {
        BROWSER = "${params.BROWSER}"
    }
    stages {
        stage('Initiating reports') {
            steps {
                bat 'npm install'
            }
        }
        stage('Running playwright') {
            steps {
                bat 'npm run playwright-test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*.*', fingerprint: true
            clearWs()
        }
    }
}