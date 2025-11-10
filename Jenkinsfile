pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'  // This matches the name in Jenkins Tools configuration
    }
    
    stages {
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Build Backend') {
            steps {
                dir('backend') {
                    // Add your backend build commands
                    sh 'echo "Building backend..."'
                }
            }
        }
        
        stage('Build Admin') {
            steps {
                dir('admin') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            sh 'echo "Pipeline completed"'
        }
        failure {
            sh 'echo "Pipeline failed!"'
        }
    }
}