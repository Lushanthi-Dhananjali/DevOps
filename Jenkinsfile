pipeline {
    agent any
    
    stages {
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    // Replace bat with sh for Linux
                    sh 'npm install'
                    sh 'npm run build'
                    // Add your actual frontend build commands here
                }
            }
        }
        
        stage('Build Backend') {
            steps {
                dir('backend') {
                    // Replace bat with sh for Linux
                    sh 'mvn clean package'  // or whatever build tool you use
                    // Add your actual backend build commands here
                }
            }
        }
        
        stage('Build Admin') {
            steps {
                dir('admin') {
                    // Replace bat with sh for Linux
                    sh 'npm install'
                    sh 'npm run build'
                    // Add your actual admin build commands here
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Replace bat with sh for Linux
                sh 'docker-compose down'
                sh 'docker-compose up -d'
                // Add your actual deployment commands here
            }
        }
    }
    
    post {
        always {
            // Replace bat with sh for Linux
            sh 'echo "Pipeline completed"'
            // Add cleanup or notification commands here
        }
        success {
            sh 'echo "Pipeline succeeded!"'
        }
        failure {
            sh 'echo "Pipeline failed!"'
        }
    }
}