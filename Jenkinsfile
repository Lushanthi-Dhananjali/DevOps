pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
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
                    // Add actual backend build commands when ready
                    sh 'echo "Backend build would happen here"'
                    // Example for Java:
                    // sh 'mvn clean package'
                    // Example for Node.js backend:
                    // sh 'npm install'
                    // sh 'npm run build'
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
                script {
                    // Check if docker-compose exists
                    def dockerComposeExists = sh(
                        script: 'which docker-compose || echo "not-found"',
                        returnStdout: true
                    ).trim()
                    
                    if (dockerComposeExists != "not-found") {
                        sh 'docker-compose down || true'
                        sh 'docker-compose up -d'
                        echo "Deployment completed successfully"
                    } else {
                        echo "WARNING: docker-compose not installed. Skipping deployment."
                        echo "Please install Docker and Docker Compose on the Jenkins server."
                    }
                }
            }
        }
    }
    
    post {
        always {
            sh 'echo "Pipeline completed"'
        }
        success {
            sh 'echo "Pipeline succeeded!"'
        }
        failure {
            sh 'echo "Pipeline failed!"'
        }
    }
}