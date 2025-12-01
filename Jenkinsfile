pipeline {
    agent any

    stages {

        /* ------------ CHECKOUT CODE (SHALLOW CLONE) ------------ */
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],               // Your branch
                    userRemoteConfigs: [[
                        url: 'https://github.com/Lushanthi-Dhananjali/DevOps.git',
                        credentialsId: 'github-devops'           // Your Jenkins GitHub credential
                    ]],
                    extensions: [
                        [$class: 'CloneOption',                   // FIX GIT TIMEOUT
                         shallow: true,
                         noTags: false,
                         depth: 1]
                    ]
                ])
            }
        }

        /* ------------ BUILD FRONTEND ------------ */
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh '''
                        docker build -t fashion-frontend . || \
                        DOCKER_BUILDKIT=0 docker build -t fashion-frontend .
                    '''
                }
            }
        }

        /* ------------ BUILD BACKEND ------------ */
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

        /* ------------ BUILD ADMIN ------------ */
        stage('Build Admin') {
            steps {
                dir('admin') {
                    sh '''
                        docker build -t fashion-admin . || \
                        DOCKER_BUILDKIT=0 docker build -t fashion-admin .
                    '''
                }
            }
        }

        /* ------------ DEPLOY WITH DOCKER COMPOSE ------------ */
        stage('Deploy') {
            steps {
                sh '''
                    docker-compose down || true
                    docker-compose up -d
                '''
            }
        }
    }

    /* ------------ POST ACTIONS ------------ */
    post {
        always {
            echo "Showing running containers..."
            sh 'docker ps -a'
            sh 'docker-compose ps || true'
        }

        cleanup {
            echo "Cleaning Docker unused data..."
            sh 'docker system prune -f'
        }
    }
}
