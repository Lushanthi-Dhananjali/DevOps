pipeline {
    agent any
    stages {
        stage('Checkout') { 
            steps { 
                checkout scm 
            } 
        }
        stage('Build Frontend') {
            steps { 
                dir('frontend') { 
                    sh '''
                        # Build with fallback to legacy builder
                        docker build -t fashion . || \
                        DOCKER_BUILDKIT=0 docker build -t fashion .
                    '''
                } 
            }
        }
        stage('Build Backend') {
            steps { 
                dir('backend') { 
                    sh '''
                        docker build -t fashion-backend . || \
                        DOCKER_BUILDKIT=0 docker build -t fashion-backend .
                    '''
                } 
            }
        }
        stage('Build Admin') {
            steps { 
                dir('admin') { 
                    sh '''
                        docker build -t admin-dev . || \
                        DOCKER_BUILDKIT=0 docker build -t admin-dev .
                    '''
                } 
            }
        }
        stage('Deploy with Docker Compose') {
            steps { 
                sh 'docker-compose up -d || true'
            }
        }
    }
    post {
        always { 
            sh 'docker ps -a'
            sh 'docker-compose ps || true'
        }
        cleanup {
            sh 'docker system prune -f'
        }
    }
}