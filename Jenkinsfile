pipeline {
    agent any
    
    stages {
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'docker build -t fashion .'
                }
            }
        }
        
        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat 'docker build -t fashion-backend .'
                }
            }
        }
        
        stage('Build Admin') {
            steps {
                dir('admin') {
                    bat 'docker build -t admin-dev .'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            bat 'docker-compose logs'
        }
    }
}